import React from "react";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
import HowWeWorkDetail from "../../components/How-we-work-detail";
import HowWeWorkHeader from "../../components/How-we-work-header";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";

const HowWeWork = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <HowWeWorkHeader />
      <HowWeWorkDetail />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default HowWeWork;
