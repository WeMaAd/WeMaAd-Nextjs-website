import React from "react";
import Link from "next/link";
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
                From MVP to production — we own the full build so you can focus
                on the business. Architecture, development, and delivery,
                end to end.
              </p>
              <Link href="/how-we-work#build">
                <a className="simple-btn mt-20">See how it works &rarr;</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="item">
              <span className="icon pe-7s-users"></span>
              <h6>You need senior engineers.</h6>
              <p>
                Senior talent, your timezone, zero hiring overhead. We place
                vetted engineers and handle all HR, contracts, and management.
              </p>
              <Link href="/how-we-work#hire">
                <a className="simple-btn mt-20">See how it works &rarr;</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
