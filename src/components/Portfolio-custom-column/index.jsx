import React from "react";
import Image from "next/image";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolio1Data from "../../data/sections/portfolio1.json";

const PortfolioCustomColumn = ({
  column,
  filterPosition,
  hideFilter,
  hideSectionTitle,
}) => {
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
      {!hideSectionTitle && (
        <div className="container">
          <div className="sec-head custom-font">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              End-to-End Projects
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Products We Built.
              </h3>
            </Split>
            <span className="tbg text-right">Works</span>
          </div>
        </div>
      )}

      <div className={`${column === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          <div className="gallery full-width">
            {portfolio1Data.map((item) => (
              <div
                key={item.id}
                className={`${
                  column === 3
                    ? "col-lg-4 col-md-6"
                    : column === 2
                    ? "col-md-6"
                    : "col-12"
                } items ${item.filterCategory} wow fadeInUp ${
                  item.id === 2 && column == 3
                    ? "lg-mr"
                    : item.id === 1 && column == 2
                    ? "lg-mr"
                    : ""
                }`}
                data-wow-delay=".4s"
              >
                <div className="item-img">
                  <Link href={item.url}>
                    <a className="imago wow" target="_blank">
                      {item.image ? (
                        <Image src={item.image} alt={item.title} layout="responsive" width={600} height={400} />
                      ) : (
                        <div
                          style={{
                            background: "#151921",
                            height: "300px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13px",
                              letterSpacing: "6px",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.08)",
                            }}
                          >
                            {item.title}
                          </span>
                        </div>
                      )}
                      {/* .cont inside item-img: CSS handles opacity 0→1 on hover */}
                      {!item.image && (
                        <div className="cont">
                          <h6>{item.title}</h6>
                          <span>
                            {(item.tags || []).map((tag, i) => (
                              <React.Fragment key={i}>
                                <span>{tag}</span>
                                {i < item.tags.length - 1 ? "," : ""}
                              </React.Fragment>
                            ))}
                          </span>
                        </div>
                      )}
                      <div className="item-img-overlay"></div>
                    </a>
                  </Link>
                </div>
                {item.image && (
                  <div className="cont">
                    <h6>{item.title}</h6>
                    <span>
                      {item.tags.map((tag, index) => (
                        <React.Fragment key={index * 3}>
                          <span>{tag}</span>
                          {index === item.tags.length - 1 ? "" : ","}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
