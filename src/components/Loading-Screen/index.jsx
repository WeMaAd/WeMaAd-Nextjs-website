import React from "react";
import Router from "next/router";
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

    // Hide once the initial page has fully loaded
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    // Show/hide on Next.js client-side navigation
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
    <div className="showX">
      <div id="preloader"></div>
    </div>
  );
};

export default LoadingScreen;
