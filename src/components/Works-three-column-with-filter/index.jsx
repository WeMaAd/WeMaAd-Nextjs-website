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
            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://birthguardians-eg.org/">
                  <a target="_blank">
                    <img
                      src="/img/portfolio/mas/BirthGuardiansEgypt2.png"
                      alt="Birth Guardians Egypt website"
                      loading="lazy"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Birth Guardians Egypt</h6>
                <span>Web Design</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://sitrstore.com">
                  <a target="_blank">
                    <img src="/img/portfolio/mas/sitrstore.jpg" alt="Sitr Garments Store website" loading="lazy" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Sitr Garments Store</h6>
                <span>e-commerce, Branding</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://primo.build/">
                  <a target="_blank">
                    <img src="/img/portfolio/mas/Primo2.png" alt="Primo website" loading="lazy" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Primo</h6>
                <span>Web Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
