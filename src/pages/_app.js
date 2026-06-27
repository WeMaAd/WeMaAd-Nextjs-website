import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WeMaAd</title>
        <link rel="icon" href="/img/atom-logo-light.svg" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script id="wow" strategy="afterInteractive" src="/js/wow.min.js"></Script>
      <Script
        strategy="afterInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" strategy="lazyOnload" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="afterInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
