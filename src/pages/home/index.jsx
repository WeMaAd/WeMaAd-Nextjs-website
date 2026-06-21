import React from "react";
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

  return (
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
  );
};

export default Homepage2;
