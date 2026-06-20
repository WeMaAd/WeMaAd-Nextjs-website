import React from "react";
import Link from "next/link";

const HowWeWorkHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/aboutUs.png)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>How We Work</h1>
              <div className="path">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <span>/</span>
                <Link href="/how-we-work">
                  <a className="active">How We Work</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HowWeWorkHeader;
