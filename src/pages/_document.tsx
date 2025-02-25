import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Rubik:wght@700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#002F4C" />
          <meta name="msapplication-TileColor" content="#002F4C" />
          <meta name="msapplication-TileImage" content="/favicon.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Case" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
