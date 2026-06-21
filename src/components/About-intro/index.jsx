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
                  WeMaAd is a Cairo-based software studio building modern web
                  products for startups, SMEs, and growing engineering teams
                  across the US and Europe. We work two ways: embedded
                  engineering, where senior developers join your team and ship
                  like dedicated staff without the hiring overhead; and
                  end-to-end builds, from MVP to a scalable, production-ready
                  product. Our stack is modern and proven: Ruby on Rails,
                  Next.js, and AI/LLM integration for teams that want
                  intelligent features without the R&amp;D detour.
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
