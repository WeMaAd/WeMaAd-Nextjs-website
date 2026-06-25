import React from "react";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
import HowWeWorkDetail from "../../components/How-we-work-detail";
import HowWeWorkHeader from "../../components/How-we-work-header";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";

const HowWeWork = () => {
  const navbarRef = React.useRef(null);
  useNavbarScroll(navbarRef);

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
