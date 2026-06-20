/* eslint-disable @next/next/no-img-element */
import React from "react";
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
              <h6>Clients</h6>
              <h3>
                Our <br /> Clients
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
                          <img src={item.lightImage} alt={item.name} />
                        ) : (
                          <img src={item.darkImage} alt={item.name} />
                        )
                      ) : (
                        <span style={{ fontSize: "18px", fontWeight: "700", color: "#fff", letterSpacing: "1px" }}>{item.name}</span>
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
