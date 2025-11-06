import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import { getSiteUrlFromHeaders } from '../lib/siteUrl'

// Client-only animated components - loaded after SSR
const MouseCursorEffect = dynamic(() => import('../components/MouseCursorEffect'), { ssr: false });
const AnimatedWrapper = dynamic(() => import('../components/AnimatedWrapper'), { ssr: false });
const FloatingDots = dynamic(() => import('../components/FloatingDots'), { ssr: false });

const Home = ({ baseUrl }) => {

  const features = [
    {
      title: "Sites ultra-rapides",
      description: "Je conçois des sites 3x plus rapides que la moyenne. Résultat ? Vos visiteurs restent, Google vous adore, et votre empreinte carbone diminue. Performance et écologie, main dans la main.",
      icon: "⚡"
    },
    {
      title: "Design qui convertit",
      description: "Chaque bouton, chaque couleur est pensé pour transformer vos visiteurs en clients. J'utilise les dernières techniques de design persuasif pour maximiser vos résultats.",
      icon: "🎯"
    },
    {
      title: "Visible sur Google",
      description: "J'optimise votre site pour qu'il apparaisse en première page de Google. Pas de jargon technique : je rends votre entreprise facile à trouver par vos clients.",
      icon: "🔍"
    },
    {
      title: "Éco-responsable",
      description: "Sites légers et performants = moins d'énergie consommée. J'optimise chaque ligne de code pour réduire l'impact environnemental de votre présence en ligne.",
      icon: "🌱"
    }
  ];

  const projects = [
    {
      name: "Fesch 2025",
      category: "Site promotionnel",
      imageUrl: "/fesch.png",
      url: "https://fesch2025.fr/"
    },
    {
      name: "Heaven Radio",
      category: "Web radio",
      imageUrl: "/heavenradio.png",
      url: "https://heavenradio.fr/"
    },
    {
      name: "TRACKWARS",
      category: "Application web",
      imageUrl: "/trackwars.png",
      url: "https://trackwars.fr/"
    },
    {
      name: "Le Baptême Catholique",
      category: "Landing page",
      imageUrl: "/baptemecatholique.png",
      url: "https://lebaptemecatholique.fr/"
    }
  ];

  return (
    <>
      <Head>
        <title>Théo Multimédia - Votre site web en 24h | Création de sites internet à Angoulême</title>
        <meta name="description" content="Je crée votre site internet professionnel en 24h. Agence web à Angoulême spécialisée en création de sites, design et référencement SEO." />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${baseUrl}/`} />
        <meta property="og:title" content="Théo Multimédia - Votre site web en 24h" />
        <meta property="og:description" content="Je crée votre site internet professionnel en 24h. Agence web à Angoulême." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      </Head>

      <div className="overflow-hidden bg-background">
        <MouseCursorEffect />

        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <span className="text-sm font-medium text-accent">Livraison en 24 heures</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none">
                Votre site web.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  En 24 heures.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-light">
                Sites ultra-rapides, design qui convertit, et démarche éco-responsable.
                Je transforme votre idée en business qui cartonne en ligne.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
                  Démarrer mon projet
                </Link>
                <Link href="/portfolio" className="btn btn-secondary text-base px-8 py-4">
                  Voir mes créations
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 pt-12 text-sm text-foreground/50">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>3x plus rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  <span>Éco-conçu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <span>Convertit mieux</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-foreground/40 rounded-full" />
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-gradient-to-br from-accent via-blue-500 to-accent relative overflow-hidden">
          <FloatingDots count={20} />
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center text-white space-y-8">
              <div className="text-7xl md:text-9xl font-bold mb-4">24h</div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Votre site en ligne demain
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                Lancement de produit ? Événement urgent ? Opportunité business ?
                Je livre votre site professionnel en 24h. Ultra-rapide, optimisé pour Google,
                et prêt à convertir vos visiteurs en clients.
              </p>
              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-accent rounded-full text-lg font-medium hover:scale-105 transition-transform">
                  Je veux mon site en 24h
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-sm font-medium text-accent">Expertise unique en France</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
                Visible sur <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">ChatGPT</span> et Google
              </h2>
              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Vos clients vous cherchent sur Google... mais aussi sur ChatGPT.
                <br />Je maîtrise les deux pour que vous soyez trouvé partout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-3xl bg-card border border-border">
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="text-2xl font-semibold mb-4">Google SEO</h3>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  Première page Google sur vos mots-clés. Vos clients tapent votre service, ils vous trouvent.
                </p>
                <div className="flex items-center gap-3 text-foreground/70">
                  <span className="text-accent">✓</span>
                  <span>Trafic qualifié et gratuit</span>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-blue-500/10 border-2 border-accent/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                <div className="text-5xl mb-6 relative">🤖</div>
                <h3 className="text-2xl font-semibold mb-4 relative">
                  Référencement IA
                  <span className="ml-2 text-xs font-normal px-2 py-1 rounded-full bg-accent/20 text-accent">NOUVEAU</span>
                </h3>
                <p className="text-foreground/60 leading-relaxed mb-6 relative">
                  ChatGPT recommande votre entreprise. 800M d'utilisateurs par semaine vous découvrent.
                </p>
                <div className="space-y-3 relative">
                  <div className="flex items-center gap-3 text-foreground/70">
                    <span className="text-accent">✓</span>
                    <span>ChatGPT cite votre site</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <span className="text-accent">✓</span>
                    <span>+527% de visibilité IA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="text-center px-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                  Concrètement, ça change quoi pour vous ?
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  Vos clients cherchent déjà sur ChatGPT. Voici ce qu'ils voient...
                </p>
              </div>
              <div className="max-w-4xl mx-auto px-4">
                <div className="rounded-2xl md:rounded-3xl border-2 border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-xl">
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-muted/30 border-b border-border flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                      AI
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-xs md:text-sm lg:text-base truncate">ChatGPT</div>
                      <div className="text-[10px] md:text-xs text-foreground/50 truncate">Intelligence Artificielle</div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[75%]">
                        <div className="bg-accent text-white rounded-2xl rounded-tr-sm px-3 md:px-4 lg:px-6 py-2.5 md:py-3 lg:py-4">
                          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
                            Urgent ! J'ai une grosse fuite d'eau chez moi.
                            Il me faut un plombier à Angoulême rapidement !
                          </p>
                        </div>
                        <div className="text-[10px] md:text-xs text-foreground/50 mt-1.5 md:mt-2 text-right">Maintenant</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
                        <div className="bg-muted rounded-2xl rounded-tl-sm px-3 md:px-4 lg:px-6 py-2.5 md:py-3 lg:py-4">
                          <p className="text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4">
                            Pour une intervention urgente à Angoulême, je vous recommande <span className="font-semibold text-accent">Plomberie Durand</span>.
                          </p>
                          <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base">
                            <div className="flex items-start gap-1.5 md:gap-2">
                              <span className="text-accent mt-0.5 md:mt-1 flex-shrink-0 text-sm md:text-base">✓</span>
                              <span><span className="font-semibold">Disponible 24h/24</span> pour les urgences</span>
                            </div>
                            <div className="flex items-start gap-1.5 md:gap-2">
                              <span className="text-accent mt-0.5 md:mt-1 flex-shrink-0 text-sm md:text-base">✓</span>
                              <span><span className="font-semibold">Intervention rapide</span> : en moyenne 30 minutes</span>
                            </div>
                            <div className="flex items-start gap-1.5 md:gap-2">
                              <span className="text-accent mt-0.5 md:mt-1 flex-shrink-0 text-sm md:text-base">✓</span>
                              <span><span className="font-semibold">Zone Angoulême</span> : intervient dans toute l'agglomération</span>
                            </div>
                            <div className="flex items-start gap-1.5 md:gap-2">
                              <span className="text-accent mt-0.5 md:mt-1 flex-shrink-0 text-sm md:text-base">✓</span>
                              <span><span className="font-semibold">Tarifs transparents</span> affichés sur leur site</span>
                            </div>
                          </div>
                          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border/50">
                            <p className="text-[10px] md:text-xs lg:text-sm text-foreground/60 leading-relaxed">
                              📞 <span className="font-medium">Contact rapide :</span> Leur site permet de les joindre instantanément
                              par téléphone, WhatsApp ou formulaire urgent.
                            </p>
                          </div>
                        </div>
                        <div className="text-[10px] md:text-xs text-foreground/50 mt-1.5 md:mt-2">À l'instant</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-2xl bg-accent/5 border border-accent/20">
                  <p className="text-xs md:text-sm lg:text-base text-foreground/80 text-center leading-relaxed">
                    <span className="font-semibold text-accent">Voici comment vos clients vont vous trouver.</span> Grâce à l'optimisation IA,
                    <span className="font-semibold"> votre site devient LA réponse</span> que ChatGPT donne à 800 millions d'utilisateurs qui cherchent vos services.
                  </p>
                </div>
              </div>
              <div className="text-center px-4">
                <p className="text-base md:text-xl lg:text-2xl font-bold text-accent mb-4 md:mb-6">
                  👉 C'est VOUS que ChatGPT recommande à vos futurs clients
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6 max-w-4xl mx-auto">
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/50 border border-border">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-1">800M</div>
                    <div className="text-[10px] md:text-xs lg:text-sm text-foreground/60 leading-tight">utilisateurs ChatGPT/semaine</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/50 border border-border">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-1">+527%</div>
                    <div className="text-[10px] md:text-xs lg:text-sm text-foreground/60 leading-tight">de trafic IA en 2025</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/50 border border-border">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-1">10%</div>
                    <div className="text-[10px] md:text-xs lg:text-sm text-foreground/60 leading-tight">du web vient des IA</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/50 border border-border">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-1">1er</div>
                    <div className="text-[10px] md:text-xs lg:text-sm text-foreground/60 leading-tight">en France sur ce créneau</div>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Link href="/about" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all text-sm md:text-base lg:text-lg">
                    En savoir plus sur mon expertise IA
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Pourquoi mes sites performent mieux
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Performance, conversion et écologie : les trois piliers de ma méthode
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { value: "3x", label: "Plus rapides que la moyenne" },
                { value: "24h", label: "Pour être en ligne" },
                { value: "-60%", label: "D'empreinte carbone" },
                { value: "+40%", label: "De conversions en moyenne" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent to-blue-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
                  Mes derniers projets
                </h2>
                <p className="text-xl text-foreground/60 font-light">
                  Des réalisations qui parlent d'elles-mêmes
                </p>
              </div>
              <Link href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-accent hover:gap-4 transition-all">
                Voir tous les projets
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => project.url && window.open(project.url, '_blank')}
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted mb-4">
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.url && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="px-8 py-4 bg-white text-accent rounded-full font-medium hover:scale-110 transition-transform">
                            Voir le projet
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-foreground/60">{project.category}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 md:hidden">
              <Link href="/portfolio" className="btn btn-secondary">
                Voir tous les projets
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-10 p-16 rounded-[3rem] bg-gradient-to-br from-muted/50 to-muted/30 border border-border">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Prêt à booster<br />votre business ?
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Un site qui charge en 1 seconde, qui convertit 40% mieux, et qui respecte la planète.
                Parlons de votre projet maintenant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="btn btn-primary text-lg px-10 py-5">
                  Me contacter
                </Link>
                <Link href="/about" className="btn btn-secondary text-lg px-10 py-5">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }) {
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  return {
    props: { baseUrl },
  };
}

export default Home;
