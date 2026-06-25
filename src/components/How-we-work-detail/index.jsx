import React from "react";
import pathData from "../../data/sections/how-we-work.json";
import PathSection from "../How-we-work-path";

const HowWeWorkDetail = () => (
  <section className="how-we-work-detail section-padding">
    <div className="container">
      <div id={pathData[0].anchor} className="mb-80">
        <PathSection path={pathData[0]} />
      </div>
      <div className="line-sep mb-80" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}></div>
      <div id={pathData[1].anchor}>
        <PathSection path={pathData[1]} />
      </div>
    </div>
  </section>
);

export default HowWeWorkDetail;
