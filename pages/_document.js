import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0c0a09" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafaf9" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/theo_multimedia_logo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
