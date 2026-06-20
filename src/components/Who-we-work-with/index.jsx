import React from "react";
import Split from "../Split";

const WhoWeWorkWith = () => {
  return (
    <section className="services who-we-work-with section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font text-center mb-80">
          <h6 className="wow fadeIn" data-wow-delay=".3s">
            Who We Work With
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Two Ways to Work With Us.
            </h3>
          </Split>
        </div>
        <div className="row">
          <div className="col-lg-6 md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div className="item">
              <span className="icon pe-7s-display2"></span>
              <h6>You need a product built.</h6>
              <p>
                Startups and SMEs who want to go from idea to production without
                building an in-house team. We own the full build — architecture,
                development, QA, and delivery — end to end. You focus on the
                business. We ship the product.
              </p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="item">
              <span className="icon pe-7s-users"></span>
              <h6>You need senior engineers.</h6>
              <p>
                US and EU companies who want senior talent without the hiring
                overhead. We place vetted engineers who work full-time in your
                timezone with your team and your clients — and we handle all HR,
                contracts, and management so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
