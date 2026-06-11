import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Viewport is emitted from _app.js: name="viewport" content="width=device-width, initial-scale=1".
  return (
    <Html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth">
          <Head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#03070c" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafaf9" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
