import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon pe-7s-users"></span>
              <h6>
                Embedded <br /> Engineering
              </h6>
              <div className="text-right">
                <Link href="/about">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-display2"></span>
              <h6>
                End-to-End <br /> Product Builds
              </h6>
              <div className="text-right">
                <Link href="/about">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-gleam"></span>
              <h6>
                AI &amp; LLM <br /> Integration
              </h6>
              <div className="text-right">
                <Link href="/about">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
        <div className="row rtwo">
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-server"></span>
              <h6>
                API <br /> Development
              </h6>
              <div className="text-right">
                <Link href="/about">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-rocket"></span>
              <h6>
                SaaS <br /> Development
              </h6>
              <div className="text-right">
                <Link href="/about">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
