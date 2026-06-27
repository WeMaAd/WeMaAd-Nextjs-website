import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="senior rails engineers, next.js developers, product engineering studio, embedded engineering team, ruby on rails development, react development, AI integration, SaaS development, Cairo software engineers"
          />
          <meta
            name="description"
            content="WeMaAd is a senior product engineering studio in Cairo. We embed Rails and Next.js engineers directly into your team or build end-to-end products for you."
          />
          <meta name="author" content="WeMaAd" />
          <meta name="robots" content="index, follow" />
          <meta
            name="copyright"
            content="WeMaAd is a registered trademark of WeMaAd"
          />
          <link rel="shortcut icon" href="/img/atom-logo-light.svg" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/atom-logo-light.svg"
          />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
