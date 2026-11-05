/**
 * "L'impact" — the opening scene of the home page.
 * The T of the Théo Multimédia mark falls as cold steel and slams into the M:
 * sparks and a flash, then a heat wave turns both letters brand orange.
 *
 * Geometry is extruded from the polygons traced on the original logo
 * (image pixels, y down). Nothing is redrawn by hand.
 */
import {
  AdditiveBlending,
  DoubleSide,
  BufferAttribute,
  BufferGeometry,
  Color,
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshPhysicalMaterial,
  NeutralToneMapping,
  Path,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  PointLight,
  Scene,
  ShaderMaterial,
  Shape,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// --- Traced logo (image px, origin top-left) --------------------------------
const S = 2.2 / 771; // logo height -> 2.2 world units
const CX = 627;
const CY = 580.5;
const toV = ([x, y]) => new Vector2((x - CX) * S, -(y - CY) * S);

const T_PTS = [[298, 195], [956, 195], [1016, 291], [1006, 305], [693, 305], [693, 607], [627.5, 662], [561, 606], [561, 305], [248, 305], [238, 291]];
const M_PTS = [[236, 339], [627.5, 662], [1018, 341], [1018, 463], [906, 578], [626, 816], [341, 580], [341, 966], [236, 850]];
const LEG_PTS = [[910, 585], [1018, 492], [1018, 850], [912, 966]];
const RING = { c: [290, 728], ro: 21, ri: 11 };
const TRACE = [[290, 749], [290, 832], [325, 860], [325, 930]];
const TRACE_W = 9;
const SEAMS = [
  [[561, 606], [627.5, 662]],
  [[693, 607], [627.5, 662]],
];
const CONTACT = toV([627.5, 646]);
const FLOOR_Y = -(966 - CY) * S;

const DEPTH = 0.3;
const BEVEL = { bevelEnabled: true, bevelThickness: 0.045, bevelSize: 0.028, bevelOffset: -0.028, bevelSegments: 4 };

function polyShape(points) {
  const shape = new Shape();
  points.map(toV).forEach((p, i) => (i ? shape.lineTo(p.x, p.y) : shape.moveTo(p.x, p.y)));
  shape.closePath();
  return shape;
}

/** Outline of a polyline stroked with miter joins, as a closed polygon. */
function strokeShape(points, widthPx) {
  const pts = points.map(toV);
  const hw = (widthPx * S) / 2;
  const normals = [];
  for (let i = 0; i < pts.length - 1; i += 1) {
    const d = pts[i + 1].clone().sub(pts[i]).normalize();
    normals.push(new Vector2(-d.y, d.x));
  }
  const offset = (side) =>
    pts.map((p, i) => {
      let n;
      if (i === 0) n = normals[0].clone();
      else if (i === pts.length - 1) n = normals[normals.length - 1].clone();
      else {
        const m = normals[i - 1].clone().add(normals[i]).normalize();
        n = m.multiplyScalar(1 / Math.max(m.dot(normals[i]), 0.35));
      }
      return p.clone().add(n.multiplyScalar(hw * side));
    });
  const left = offset(1);
  const right = offset(-1).reverse();
  const shape = new Shape();
  [...left, ...right].forEach((p, i) => (i ? shape.lineTo(p.x, p.y) : shape.moveTo(p.x, p.y)));
  shape.closePath();
  return shape;
}

function ringShape() {
  const c = toV(RING.c);
  const shape = new Shape();
  shape.absarc(c.x, c.y, RING.ro * S, 0, Math.PI * 2, false);
  const hole = new Path();
  hole.absarc(c.x, c.y, RING.ri * S, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return shape;
}

function extrude(shapes, depth, bevel) {
  const geo = new ExtrudeGeometry(shapes, { depth, steps: 1, curveSegments: 40, ...bevel });
  geo.translate(0, 0, -depth / 2);
  geo.computeVertexNormals();
  return geo;
}

// --- Heat-wave material ------------------------------------------------------
function heatMaterial(base, uniforms) {
  const mat = new MeshPhysicalMaterial(base);
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vWPos;
uniform vec3 uImpactPos;
uniform float uHeatR;
uniform float uSpeed;
uniform float uCold;
uniform float uHeat;`,
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
float hDist = distance(vWPos, uImpactPos);
float hSince = (uHeatR - hDist) / max(uSpeed, 0.0001);
float hPassed = smoothstep(-0.05, 0.05, hSince);
vec3 hSteel = vec3(0.13, 0.145, 0.16);
diffuseColor.rgb = mix(diffuseColor.rgb, hSteel, uCold * (1.0 - hPassed));`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
totalEmissiveRadiance *= mix(1.0, hPassed, uCold);
float hTemp = hPassed * exp(-max(hSince, 0.0) * 3.2) * uHeat;
float hBand = exp(-pow(hSince * 10.0, 2.0)) * uHeat * step(0.0, uHeatR);
vec3 hCol = mix(vec3(0.7, 0.05, 0.0), vec3(1.0, 0.32, 0.02), smoothstep(0.1, 0.5, hTemp));
hCol = mix(hCol, vec3(1.0, 0.6, 0.2), smoothstep(0.6, 0.95, hTemp));
totalEmissiveRadiance += hCol * (hTemp * 0.9) + vec3(1.0, 0.5, 0.15) * hBand * 1.1;`,
      );
  };
  return mat;
}

// --- Sparks: CPU physics, streak quads drawn in view space --------------------
const SPARK_VS = `
attribute vec3 aPos;
attribute vec3 aVel;
attribute vec2 aCorner;
attribute float aLife;
attribute float aW;
uniform float uStreak;
varying float vLife;
varying vec2 vUv;
void main() {
  vec4 head = modelViewMatrix * vec4(aPos, 1.0);
  vec4 tail = modelViewMatrix * vec4(aPos - aVel * uStreak, 1.0);
  vec2 dir = head.xy - tail.xy;
  float len = length(dir);
  dir = len > 0.00001 ? dir / len : vec2(0.0, 1.0);
  vec2 perp = vec2(-dir.y, dir.x);
  vec4 p = mix(tail, head, aCorner.y);
  p.xy += perp * aCorner.x * aW * (0.35 + 0.65 * aLife);
  gl_Position = projectionMatrix * p;
  vLife = aLife;
  vUv = aCorner;
}`;

const SPARK_FS = `
varying float vLife;
varying vec2 vUv;
void main() {
  float across = 1.0 - abs(vUv.x);
  float a = across * across * (0.2 + 0.8 * vUv.y) * smoothstep(0.0, 0.12, vLife);
  vec3 hot = vec3(1.0, 0.93, 0.78);
  vec3 mid = vec3(1.0, 0.42, 0.04);
  vec3 cool = vec3(0.7, 0.1, 0.02);
  vec3 col = vLife > 0.5 ? mix(mid, hot, (vLife - 0.5) * 2.0) : mix(cool, mid, vLife * 2.0);
  gl_FragColor = vec4(col * 3.2 * a, a);
}`;

class Sparks {
  constructor(max) {
    this.max = max;
    this.count = 0;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.span = new Float32Array(max);
    this.g = new Float32Array(max);
    this.w = new Float32Array(max);
    this.drag = new Float32Array(max);

    const g = new BufferGeometry();
    this.aPos = new BufferAttribute(new Float32Array(max * 12), 3);
    this.aVel = new BufferAttribute(new Float32Array(max * 12), 3);
    this.aLife = new BufferAttribute(new Float32Array(max * 4), 1);
    this.aW = new BufferAttribute(new Float32Array(max * 4), 1);
    const corner = new Float32Array(max * 8);
    const index = new Uint32Array(max * 6);
    for (let i = 0; i < max; i += 1) {
      corner.set([-1, 0, 1, 0, -1, 1, 1, 1], i * 8);
      const o = i * 4;
      index.set([o, o + 1, o + 2, o + 2, o + 1, o + 3], i * 6);
    }
    g.setAttribute('position', this.aPos);
    g.setAttribute('aPos', this.aPos);
    g.setAttribute('aVel', this.aVel);
    g.setAttribute('aLife', this.aLife);
    g.setAttribute('aW', this.aW);
    g.setAttribute('aCorner', new BufferAttribute(corner, 2));
    g.setIndex(new BufferAttribute(index, 1));
    g.setDrawRange(0, 0);
    this.geometry = g;
    this.material = new ShaderMaterial({
      vertexShader: SPARK_VS,
      fragmentShader: SPARK_FS,
      uniforms: { uStreak: { value: 0.032 } },
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      // The streak quads are wound clockwise in view space: draw both faces.
      side: DoubleSide,
    });
    this.mesh = new Mesh(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 5;
  }

  spawn(x, y, z, vx, vy, vz, span, gravity, width, drag) {
    if (this.count >= this.max) return;
    const i = this.count;
    this.count += 1;
    this.p.set([x, y, z], i * 3);
    this.v.set([vx, vy, vz], i * 3);
    this.life[i] = 1;
    this.span[i] = span;
    this.g[i] = gravity;
    this.w[i] = width;
    this.drag[i] = drag;
  }

  clear() {
    this.count = 0;
    this.geometry.setDrawRange(0, 0);
  }

  update(dt) {
    const { p, v } = this;
    for (let i = this.count - 1; i >= 0; i -= 1) {
      this.life[i] -= dt / this.span[i];
      if (this.life[i] <= 0) {
        const last = this.count - 1;
        if (i !== last) {
          p.copyWithin(i * 3, last * 3, last * 3 + 3);
          v.copyWithin(i * 3, last * 3, last * 3 + 3);
          this.life[i] = this.life[last];
          this.span[i] = this.span[last];
          this.g[i] = this.g[last];
          this.w[i] = this.w[last];
          this.drag[i] = this.drag[last];
        }
        this.count -= 1;
        continue;
      }
      const k = 1 - this.drag[i] * dt;
      v[i * 3] *= k;
      v[i * 3 + 1] = v[i * 3 + 1] * k - 11 * this.g[i] * dt;
      v[i * 3 + 2] *= k;
      p[i * 3] += v[i * 3] * dt;
      p[i * 3 + 1] += v[i * 3 + 1] * dt;
      p[i * 3 + 2] += v[i * 3 + 2] * dt;
      if (p[i * 3 + 1] < FLOOR_Y && v[i * 3 + 1] < 0 && this.g[i] > 0) {
        p[i * 3 + 1] = FLOOR_Y;
        v[i * 3 + 1] *= -0.32;
        v[i * 3] *= 0.65;
        v[i * 3 + 2] *= 0.65;
      }
    }
    const P = this.aPos.array;
    const V = this.aVel.array;
    const L = this.aLife.array;
    const W = this.aW.array;
    for (let i = 0; i < this.count; i += 1) {
      for (let c = 0; c < 4; c += 1) {
        const o = (i * 4 + c) * 3;
        P[o] = p[i * 3];
        P[o + 1] = p[i * 3 + 1];
        P[o + 2] = p[i * 3 + 2];
        V[o] = v[i * 3];
        V[o + 1] = v[i * 3 + 1];
        V[o + 2] = v[i * 3 + 2];
        L[i * 4 + c] = this.life[i];
        W[i * 4 + c] = this.w[i];
      }
    }
    this.aPos.needsUpdate = true;
    this.aVel.needsUpdate = true;
    this.aLife.needsUpdate = true;
    this.aW.needsUpdate = true;
    this.geometry.setDrawRange(0, this.count * 6);
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}

// --- Impact flash billboard ---------------------------------------------------
function flashMesh() {
  const mat = new ShaderMaterial({
    uniforms: { uI: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader:
      'uniform float uI; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; float a = exp(-d * d * 9.0) * uI; gl_FragColor = vec4(vec3(1.0, 0.62, 0.28) * a, a); }',
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: AdditiveBlending,
  });
  const mesh = new Mesh(new PlaneGeometry(1.5, 1.5), mat);
  mesh.renderOrder = 6;
  return mesh;
}

// -----------------------------------------------------------------------------
export function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
  } catch {
    return false;
  }
}

export async function createStrikeScene(container, { markEl, onImpact = () => {} } = {}) {
  const renderer = new WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance', stencil: false });
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 1.75));
  renderer.setClearColor(0x03070c, 1);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 0.92;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.opacity = '0';
  canvas.style.transition = 'opacity .35s ease-out';
  container.appendChild(canvas);

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;
  scene.environmentIntensity = 0.42;

  const camera = new PerspectiveCamera(30, 1, 0.1, 60);
  camera.position.set(0, 0, 8);
  const camBase = new Vector3(0, 0, 8);

  const key = new DirectionalLight(0xfff0e0, 1.25);
  key.position.set(3, 4.5, 5);
  const rim = new DirectionalLight(0xffffff, 0.7);
  rim.position.set(-4, 2.5, -3);
  const flashLight = new PointLight(0xffa868, 0, 7, 1.6);
  scene.add(key, rim, flashLight);

  const uniforms = {
    uImpactPos: { value: new Vector3() },
    uHeatR: { value: -10 },
    uSpeed: { value: 2.4 },
    uCold: { value: 1 },
    uHeat: { value: 1 },
  };
  const orange = new Color('#ff5a00');
  const metal = heatMaterial(
    { color: orange, emissive: new Color('#ff3a00'), emissiveIntensity: 0.16, metalness: 0.3, roughness: 0.4, clearcoat: 0.35, clearcoatRoughness: 0.3 },
    uniforms,
  );
  const trim = heatMaterial({ color: new Color('#ff8a2e'), metalness: 0.5, roughness: 0.3, clearcoat: 0.3 }, uniforms);

  const logo = new Group();
  const tGroup = new Group();
  const mGroup = new Group();
  const tMesh = new Mesh(extrude([polyShape(T_PTS)], DEPTH, BEVEL), metal);
  const mMesh = new Mesh(extrude([polyShape(M_PTS), polyShape(LEG_PTS)], DEPTH, BEVEL), metal);
  const circuitGeo = extrude([ringShape(), strokeShape(TRACE, TRACE_W)], 0.012, {
    bevelEnabled: true,
    bevelThickness: 0.006,
    bevelSize: 0.005,
    bevelOffset: -0.002,
    bevelSegments: 2,
  });
  circuitGeo.translate(0, 0, DEPTH / 2 + BEVEL.bevelThickness + 0.004);
  const circuit = new Mesh(circuitGeo, trim);
  tGroup.add(tMesh);
  mGroup.add(mMesh, circuit);
  logo.add(mGroup, tGroup);
  scene.add(logo);

  const sparks = new Sparks(760);
  logo.add(sparks.mesh);

  const flash = flashMesh();
  flash.position.set(CONTACT.x, CONTACT.y, 0.4);
  logo.add(flash);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(256, 256), 0.6, 0.4, 0.95);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // --- framing: the 3D mark lands exactly where the CSS places .hero-mark ---
  let scale = 1;
  let startY = 3;
  const frame = () => {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const visH = 2 * Math.tan(MathUtils.degToRad(camera.fov / 2)) * camBase.z;
    const visW = visH * camera.aspect;
    if (markEl) {
      // Layout boxes rather than screen rects: the stage is transformed while the
      // page scrolls, and both boxes share the hero as offset parent.
      const fx = (markEl.offsetLeft + markEl.offsetWidth / 2) / w;
      const fy = (markEl.offsetTop + markEl.offsetHeight / 2) / h;
      scale = ((markEl.offsetHeight / h) * visH * (771 / 780)) / 2.2;
      logo.position.set((fx - 0.5) * visW, (0.5 - fy) * visH, 0);
    } else {
      scale = (visH * 0.6) / 2.2;
      logo.position.set(0, 0, 0);
    }
    logo.scale.setScalar(scale);
    startY = (visH / 2 - logo.position.y) / scale + 1.4;
    uniforms.uSpeed.value = 2.4 * scale;
  };
  frame();

  // --- state -----------------------------------------------------------------
  const FALL_AT = 0.22;
  const FALL = 0.5;
  const IMPACT = FALL_AT + FALL;
  let t = 0;
  let playing = false;
  let impacted = false;
  let active = true;
  let raf = 0;
  let last = 0;
  const rot = { x: 0, y: 0, tx: 0, ty: 0 };
  const contactWorld = new Vector3();
  const tmp = new Vector3();

  const reset = () => {
    t = 0;
    impacted = false;
    sparks.clear();
    uniforms.uHeatR.value = -10;
    uniforms.uCold.value = 1;
    tGroup.position.set(0, startY, 0.05);
    tGroup.rotation.set(0.5, 0, -0.16);
    mGroup.scale.set(1, 1, 1);
    mGroup.position.set(0, 0, 0);
    flash.material.uniforms.uI.value = 0;
    flashLight.intensity = 0;
  };

  const settle = () => {
    playing = false;
    tGroup.position.set(0, 0, 0);
    tGroup.rotation.set(0, 0, 0);
    mGroup.scale.set(1, 1, 1);
    mGroup.position.set(0, 0, 0);
    uniforms.uHeatR.value = 1000;
    flash.material.uniforms.uI.value = 0;
    flashLight.intensity = 0;
    camera.position.copy(camBase);
  };

  const burst = () => {
    for (let s = 0; s < 2; s += 1) {
      const [a, b] = SEAMS[s].map(toV);
      const side = s === 0 ? -1 : 1;
      for (let i = 0; i < 300; i += 1) {
        const k = Math.random();
        const x = MathUtils.lerp(a.x, b.x, k);
        const y = MathUtils.lerp(a.y, b.y, k);
        const z = (Math.random() - 0.5) * DEPTH * 1.4;
        const speed = 2.2 + Math.random() ** 1.6 * 6.5;
        const ang = MathUtils.degToRad(side > 0 ? 8 + Math.random() * 74 : 98 + Math.random() * 74);
        sparks.spawn(
          x, y, z,
          Math.cos(ang) * speed,
          Math.sin(ang) * speed * 0.85 + 0.6,
          (Math.random() - 0.25) * speed * 0.9,
          0.55 + Math.random() * 1.05,
          1,
          0.011 + Math.random() * 0.008,
          0.9,
        );
      }
    }
    for (let i = 0; i < 90; i += 1) {
      const ang = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 6;
      sparks.spawn(CONTACT.x, CONTACT.y, 0.2, Math.cos(ang) * speed, Math.abs(Math.sin(ang)) * speed * 0.7, 1 + Math.random() * 4, 0.25 + Math.random() * 0.35, 0.6, 0.016, 2.4);
    }
  };

  const ember = () => {
    const [a, b] = SEAMS[Math.random() < 0.5 ? 0 : 1].map(toV);
    const k = Math.random();
    sparks.spawn(
      MathUtils.lerp(a.x, b.x, k) + (Math.random() - 0.5) * 0.3,
      MathUtils.lerp(a.y, b.y, k),
      (Math.random() - 0.5) * 0.4,
      (Math.random() - 0.5) * 0.35,
      0.35 + Math.random() * 0.55,
      (Math.random() - 0.5) * 0.3,
      1.6 + Math.random() * 1.8,
      -0.012,
      0.0075,
      0.35,
    );
  };

  const update = (dt) => {
    contactWorld.set(CONTACT.x, CONTACT.y, 0);
    logo.localToWorld(contactWorld);
    uniforms.uImpactPos.value.copy(contactWorld);

    if (playing) {
      t += dt;
      if (t < FALL_AT) {
        tGroup.position.y = startY;
      } else if (t < IMPACT) {
        const k = (t - FALL_AT) / FALL;
        const e = k * k;
        tGroup.position.set(0, MathUtils.lerp(startY, 0, e), 0.05 * (1 - e));
        tGroup.rotation.set(0.5 * (1 - e), 0, -0.16 * (1 - e) * (1 - e));
      } else {
        const k = t - IMPACT;
        if (!impacted) {
          impacted = true;
          burst();
          onImpact();
        }
        tGroup.position.set(0, 0.045 * Math.exp(-k * 13) * Math.abs(Math.sin(k * 28)), 0);
        tGroup.rotation.set(0, 0, 0);
        const sq = 0.04 * Math.exp(-k * 9) * Math.cos(k * 30);
        mGroup.scale.set(1 + sq * 0.35, 1 - sq, 1);
        mGroup.position.y = -sq * 0.4;
        uniforms.uHeatR.value = uniforms.uSpeed.value * k;
        uniforms.uCold.value = 1;
        flash.material.uniforms.uI.value = 3.0 * Math.exp(-k * 18);
        flashLight.intensity = 26 * Math.exp(-k * 12);
        tmp.set(CONTACT.x, CONTACT.y, 0.9);
        logo.localToWorld(tmp);
        flashLight.position.copy(tmp);
        if (k < 0.5) {
          const amp = 0.055 * (1 - k / 0.5) ** 2;
          camera.position.set(camBase.x + (Math.random() - 0.5) * 2 * amp, camBase.y + (Math.random() - 0.5) * 2 * amp, camBase.z);
        } else {
          camera.position.copy(camBase);
        }
        if (k < 2 && Math.random() < dt * 28) ember();
        if (k > 5.2 && sparks.count === 0) settle();
      }
    }

    const ease = 1 - Math.exp(-dt * 5);
    rot.x += (rot.tx - rot.x) * ease;
    rot.y += (rot.ty - rot.y) * ease;
    logo.rotation.set(rot.x, rot.y, 0);
    sparks.update(dt);
  };

  const moving = () => Math.abs(rot.tx - rot.x) > 0.0005 || Math.abs(rot.ty - rot.y) > 0.0005;

  const loop = (now) => {
    raf = 0;
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    update(dt);
    composer.render(dt);
    if (active && (playing || sparks.count > 0 || moving())) raf = requestAnimationFrame(loop);
  };
  let frozen = false;
  const kick = () => {
    if (!raf && active && !frozen) {
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }
  };

  // --- interaction -----------------------------------------------------------
  const fine = window.matchMedia('(pointer: fine)').matches;
  const onMove = (e) => {
    const r = container.getBoundingClientRect();
    if (e.clientY > r.bottom) return;
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
    rot.ty = MathUtils.clamp(nx, -1, 1) * 0.26;
    rot.tx = MathUtils.clamp(ny, -1, 1) * 0.14;
    kick();
  };
  if (fine) window.addEventListener('pointermove', onMove, { passive: true });

  const ro = new ResizeObserver(() => {
    frame();
    if (!playing) tGroup.position.y = impacted ? 0 : startY;
    if (active) composer.render(0);
  });
  ro.observe(container);

  const io = new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting && !document.hidden;
    if (active) kick();
  });
  io.observe(container);
  const onVis = () => {
    active = !document.hidden;
    if (active) kick();
  };
  document.addEventListener('visibilitychange', onVis);

  // Compile shaders before the first visible frame to avoid a hitch at impact.
  reset();
  try {
    await renderer.compileAsync(scene, camera);
  } catch {
    /* compileAsync is an optimisation only */
  }
  composer.render(0);

  return {
    canvas,
    play() {
      reset();
      playing = true;
      canvas.style.opacity = '1';
      kick();
    },
    replay() {
      reset();
      playing = true;
      kick();
    },
    isPlaying: () => playing,
    /** Development helper: render the timeline frozen at `seconds`. */
    debugSeek(seconds) {
      cancelAnimationFrame(raf);
      raf = 0;
      frozen = true;
      reset();
      playing = true;
      canvas.style.transition = 'none';
      canvas.style.opacity = '1';
      const step = 1 / 120;
      for (let s = 0; s < seconds; s += step) update(step);
      composer.render(0);
      return { t, sparks: sparks.count, impacted };
    },
    unfreeze() {
      frozen = false;
      kick();
    },
    setActive(value) {
      active = value && !document.hidden;
      if (active) kick();
    },
    hitTest(x, y) {
      if (!markEl) return false;
      const r = markEl.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    },
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pointermove', onMove);
      sparks.dispose();
      [tMesh, mMesh, circuit, flash].forEach((m) => m.geometry.dispose());
      [metal, trim, flash.material].forEach((m) => m.dispose());
      envTex.dispose();
      pmrem.dispose();
      composer.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}
