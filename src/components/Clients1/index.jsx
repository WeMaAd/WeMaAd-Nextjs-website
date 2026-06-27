/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Clients1Data from "../../data/sections/clients1.json";
import Split from "../Split";

const delays = [".3", ".6", ".8", ".3", ".5", ".7"];

const Clients1 = ({ theme, subBG }) => {
  return (
    <section className={`clients section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head custom-font mb-0">
              <h6>Recent Clients</h6>
              <h3>
                Who We&apos;ve <br /> Worked With
              </h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row bord">
              {Clients1Data.map((item, index) => (
                <div key={item.id} className="col-md-3 col-6 brands">
                  <div
                    className="item wow fadeIn"
                    data-wow-delay={`${delays[index] || ".3"}s`}
                  >
                    <div className="img">
                      {item.darkImage ? (
                        theme === "light" ? (
                          <Image src={item.lightImage} alt={item.name} width={150} height={50} style={{ objectFit: "contain" }} />
                        ) : (
                          <Image src={item.darkImage} alt={item.name} width={150} height={50} style={{ objectFit: "contain" }} />
                        )
                      ) : (
                        <img
                          src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' font-weight='700' fill='white'>${item.name}</text></svg>`}
                          alt={item.name}
                          loading="lazy"
                        />
                      )}
                      <Split>
                        <a
                          href={item.url}
                          className="link words chars splitting"
                          data-splitting
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.name}
                        </a>
                      </Split>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients1;
