/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">web App</span>
              <span data-filter=".graphic">Web Design</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items graphic brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/247Company2.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>247 Company</h6>
                <span>
                  {/* <a href="#0">Design</a>, <a href="#0">WordPress</a> */}
                  Web Design, Branding
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img
                      src="/img/portfolio/mas/BirthGuardiansEgypt2.png"
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Birth Guardians Egypt</h6>
                <span>
                  {/* <a href="#0">Design</a>, <a href="#0">WordPress</a> */}
                  Web Design
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/CairoCodes2.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Cairo Codes</h6>
                <span>
                  {/* <a href="#0">Design</a>, <a href="#0">WordPress</a> */}
                  Web Design
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img
                      src="/img/portfolio/mas/CleaningCompany2.png"
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>The Cleaning Company</h6>
                <span>
                  {/* <a href="#0">Design</a>, <a href="#0">WordPress</a> */}
                  Web Design, Branding
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web brand graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/LasLab2.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>LasLab labratories</h6>
                <span>
                  {/* <a href="#0">Design</a>, <a href="#0">WordPress</a> */}
                  Web Design, Branding
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/Primo2.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Primo.so</h6>
                <span>
                  {/* <a href="#0">Design</a>, <a href="#0">WordPress</a> */}
                  Web Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
