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
          {/* <meta
            name="keywords"
            content="web design, web development, web application, web design company, website portfolio, business website, web developer full stack, developer website, web application development, web software design, web app development, create your website, web software development, stack dev, website and app developer, full stack dev, branding, Marketing, Social Media Marketing, SEO Optimization, Ecommerce, Digital Marketing"
          /> */}
          <meta
            name="keywords"
            content="best software development companies, app development services, ecommerce solutions, seo services, branding agency, web design company, web development company, designer, best designer, web design agency, app development company, development company, e-commerce website design, e-commerce website developers, e-commerce business solutions, best web designers in the world, web design firm, web design agency, web design company, website design, app development, mobile app development, digital marketing agency, digital marketing company, seo services, search engine optimization (SEO), search engine marketing (SEM), social media marketing, ecommerce solutions, ecommerce site builder"
          />
          {/* <meta
            name="description"
            content="We are a leading Web solution agency that specializes in creating and maintaining high quality websites, web applications, branding, marketing, and other services. 
      We have a team of experienced web developers and designers who are well versed in the latest web technologies."
          /> */}
          <meta
            name="description"
            content="WeMaAd is a leading digital agency that delivers top-notch web design and development, app development, digital marketing, SEO/SEM, and E-Commerce solutions to brand their clients' business across the internet."
          />
          <meta name="author" content="Abdullah Sadaqa" />
          <meta name="robots" content="index, follow" />
          <meta
            name="copyright"
            content="WeMaAd is a registered trademark of WeMaAd"
          />
          {/* <meta name="revisit-after" content="7 days" /> */}
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
