import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We develop creative solutions for small and big brands alike,
                  build authentic product identities, and much more. We are a
                  one-stop shop for all your marketing needs. our team has it
                  all under control and working in perfect harmony. As a
                  full-cycle marketing agency, we help you with everything you
                  need to advertise your business, get it on the map, and
                  increase sales.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
