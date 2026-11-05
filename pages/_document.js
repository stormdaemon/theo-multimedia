import { Html, Head, Main, NextScript } from 'next/document';

// Runs before first paint: enables the "heat" text states only when scripts run,
// and falls back to the plain rendering if the app never hydrates.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!window.__tmHydrated){d.classList.remove('js')}},5000)})();`;

export default function Document() {
  return (
    <Html lang="fr" dir="ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#03070c" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
