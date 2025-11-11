import { Html, Head, Main, NextScript } from 'next/document'
import { inter, spaceGrotesk } from '../lib/fonts'

export default function Document() {
  return (
    <Html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
