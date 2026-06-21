import React from "react";
import ContactHeader from "../../components/Contact-header";
import ContactWithMap from "../../components/Contact-with-map";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";

const Contact = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);

  useNavbarScroll(navbarRef);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ContactHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <ContactWithMap />
      </div>
    </DarkTheme>
  );
};

export default Contact;
