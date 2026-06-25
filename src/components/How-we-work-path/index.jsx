import React from "react";
import Link from "next/link";

const PathSection = ({ path }) => (
  <div className="row">
    <div className="col-lg-4 md-mb50 wow fadeInUp" data-wow-delay=".3s">
      <div className="sticky-box">
        <span className={`icon ${path.icon} color-font`} style={{ fontSize: "50px" }}></span>
        <h3 className="custom-font mt-20">{path.title}</h3>
        <p className="mt-20">{path.description}</p>
        <ul className="mt-30 rest" style={{ listStyle: "none", padding: 0 }}>
          {path.features.map((feature, i) => (
            <li key={i} className="mb-10">&#10003;&nbsp;&nbsp;{feature}</li>
          ))}
        </ul>
        <Link href={path.cta.href}>
          <a className="simple-btn mt-40">{path.cta.label} &rarr;</a>
        </Link>
      </div>
    </div>
    <div className="col-lg-7 offset-lg-1 wow fadeInUp" data-wow-delay=".5s">
      <h6
        className="custom-font mb-40"
        style={{ letterSpacing: "2px", textTransform: "uppercase", opacity: 0.5 }}
      >
        How it works
      </h6>
      {path.steps.map((step) => (
        <div
          key={step.num}
          className="step-row mb-40"
          style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}
        >
          <span
            className="color-font custom-font"
            style={{ fontSize: "36px", lineHeight: 1, minWidth: "50px" }}
          >
            {step.num}
          </span>
          <div>
            <h6 className="mb-10">{step.title}</h6>
            <p>{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PathSection;
