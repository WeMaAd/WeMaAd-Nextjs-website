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
            content="embed senior developers, hire remote engineers Cairo, staff augmentation, Rails engineers, Next.js developers, end-to-end product development, offshore development Egypt, SaaS development, embedded engineering team"
          />
          <meta
            name="description"
            content="WeMaAd embeds senior Rails & Next.js engineers from Cairo directly into your team — or builds your entire product end-to-end. Two models, one team."
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
