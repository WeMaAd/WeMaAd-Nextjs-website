import React from "react";
import Router from "next/router";
import Script from "next/script";
import appData from "../../data/app.json";

const LoadingScreen = () => {
  React.useEffect(() => {
    if (!appData.showLoading) {
      document.body.classList.add("hideX");
      return;
    }

    const preloader = document.querySelector("#preloader");
    if (!preloader) return;

    const show = () => preloader.classList.remove("isdone");
    const hide = () => preloader.classList.add("isdone");

    // Pace.js drives the nice initial-load animation
    if (typeof Pace !== "undefined") {
      Pace.on("done", hide);
      // In case Pace already finished before this effect ran
      if (document.body.classList.contains("pace-done")) hide();
    } else {
      // Fallback if pace.min.js hasn't loaded yet
      if (document.readyState === "complete") {
        hide();
      } else {
        window.addEventListener("load", hide, { once: true });
      }
    }

    // Next.js Router events handle client-side navigation reliably
    // (Pace can't detect SPA route changes on its own)
    Router.events.on("routeChangeStart", show);
    Router.events.on("routeChangeComplete", hide);
    Router.events.on("routeChangeError", hide);

    return () => {
      window.removeEventListener("load", hide);
      Router.events.off("routeChangeStart", show);
      Router.events.off("routeChangeComplete", hide);
      Router.events.off("routeChangeError", hide);
    };
  }, []);

  if (!appData.showLoading) return null;

  return (
    <>
      <Script id="pace" strategy="beforeInteractive" src="/js/pace.min.js" />
      <div className="showX">
        <div id="preloader"></div>
      </div>
    </>
  );
};

export default LoadingScreen;
