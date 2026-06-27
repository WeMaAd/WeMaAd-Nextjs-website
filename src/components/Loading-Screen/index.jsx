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

    let hideTimer = null;
    let isNavigating = false;

    // Close curtains: instant (no CSS transition defined for this direction)
    const show = () => {
      isNavigating = true;
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      preloader.classList.remove("isdone");
    };

    // Open curtains: after `delay` ms, adds isdone which triggers the CSS
    // curtain-slide animation (1s delay + 0.7s slide defined in the stylesheet).
    // The delay ensures the browser has painted the closed-curtain state before
    // we start the open transition — without it, remove+add in the same JS task
    // gets batched and the animation never fires.
    const hide = (delay = 0) => {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        isNavigating = false;
        preloader.classList.add("isdone");
      }, delay);
    };

    // Pace.js drives the initial page-load animation
    if (typeof Pace !== "undefined") {
      Pace.on("done", () => { if (!isNavigating) hide(0); });
      if (document.body.classList.contains("pace-done")) hide(0);
    } else {
      if (document.readyState === "complete") {
        hide(0);
      } else {
        window.addEventListener("load", () => hide(0), { once: true });
      }
    }

    // Router events handle SPA navigation reliably
    const onStart = show;
    const onDone = () => hide(100);

    Router.events.on("routeChangeStart", onStart);
    Router.events.on("routeChangeComplete", onDone);
    Router.events.on("routeChangeError", onDone);

    return () => {
      if (hideTimer) clearTimeout(hideTimer);
      Router.events.off("routeChangeStart", onStart);
      Router.events.off("routeChangeComplete", onDone);
      Router.events.off("routeChangeError", onDone);
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
