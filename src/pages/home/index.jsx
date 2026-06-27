import React from "react";
import Head from "next/head";
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider2 from "../../components/Intro-with-slider2";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services2 from "../../components/Services2";
import SkillsCircle from "../../components/Skills-circle";
import WhoWeWorkWith from "../../components/Who-we-work-with";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  useNavbarScroll(navbarRef);

  const siteUrl = "https://wemaad.net";
  const description =
    "WeMaAd embeds senior engineers from Cairo directly into your team — or builds your entire product end-to-end. Two models, one team.";
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WeMaAd",
    url: siteUrl,
    logo: `${siteUrl}/img/atom-logo-light.svg`,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@wemaad.net",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.instagram.com/wemaad.llc/",
      "https://twitter.com/WemaadL",
      "https://www.linkedin.com/company/wemaad/",
    ],
  };

  return (
    <>
      <Head>
        <title>WeMaAd — Embed Senior Developers or Build End-to-End</title>
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:title" content="WeMaAd — Embed Senior Developers or Build End-to-End" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/img/atom-logo-light.svg`} />
        <meta property="og:site_name" content="WeMaAd" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WemaadL" />
        <meta name="twitter:title" content="WeMaAd — Embed Senior Developers or Build End-to-End" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/img/atom-logo-light.svg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </Head>
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <BlcSec />
      <WhoWeWorkWith />
      <Services2 />
      <VideoWithTestimonials />
      <SkillsCircle theme="dark" subBG />
      <PortfolioCustomColumn column={3} filterPosition="center" />
      <Clients1 theme="dark" subBG />
      <CallToAction />
      <Footer />
    </DarkTheme>
    </>
  );
};

export default Homepage2;
