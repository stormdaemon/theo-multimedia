import { Html, Head, Main, NextScript } from 'next/document'
import { inter, spaceGrotesk } from '../lib/fonts'

export default function Document() {
  return (
    <Html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
