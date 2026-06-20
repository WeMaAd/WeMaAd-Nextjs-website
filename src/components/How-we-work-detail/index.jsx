import React from "react";
import Link from "next/link";

const steps = {
  build: [
    { num: "01", title: "Discovery", body: "We learn your product, users, and goals. No fluff — just the decisions we need to start building right." },
    { num: "02", title: "Architecture", body: "We design the technical foundation: stack, data model, integrations. You review and approve before a line of code is written." },
    { num: "03", title: "Build & Iterate", body: "We ship in short cycles. You see real progress every week, not a big reveal at the end." },
    { num: "04", title: "Launch & Handoff", body: "We deploy to production and hand over full ownership — source code, docs, infrastructure access." },
  ],
  hire: [
    { num: "01", title: "Brief Us", body: "Tell us the role, the stack, and the team context. We'll confirm fit within 48 hours." },
    { num: "02", title: "We Match", body: "We propose one or two engineers from our senior pool. You interview them just like a direct hire." },
    { num: "03", title: "Engineer Joins Your Team", body: "They work in your tools, your timezone, with your clients — as if they're on your payroll." },
    { num: "04", title: "We Handle the Rest", body: "HR, contracts, payroll, and performance management stay with us. You get the output without the overhead." },
  ],
};

const HowWeWorkDetail = () => {
  return (
    <section className="how-we-work-detail section-padding">
      <div className="container">

        {/* Path 1 */}
        <div className="row mb-80">
          <div className="col-lg-4 md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div className="sticky-box">
              <span className="icon pe-7s-display2 color-font" style={{ fontSize: "50px" }}></span>
              <h3 className="custom-font mt-20">You need a product built.</h3>
              <p className="mt-20">
                For startups, SMEs, and non-technical founders who want to go
                from idea to production without building an in-house engineering
                team. We own the full build and deliver a product you can hand
                to users on day one.
              </p>
              <ul className="mt-30 rest" style={{ listStyle: "none", padding: 0 }}>
                <li className="mb-10">✓ &nbsp;Ruby on Rails · Next.js · AI/LLM</li>
                <li className="mb-10">✓ &nbsp;MVP to production-ready</li>
                <li className="mb-10">✓ &nbsp;Full code & infrastructure ownership</li>
                <li className="mb-10">✓ &nbsp;Fixed scope or ongoing retainer</li>
              </ul>
              <Link href="/contact">
                <a className="simple-btn mt-40">Start a project &rarr;</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 wow fadeInUp" data-wow-delay=".5s">
            <h6 className="custom-font mb-40" style={{ letterSpacing: "2px", textTransform: "uppercase", opacity: 0.5 }}>How it works</h6>
            {steps.build.map((step) => (
              <div key={step.num} className="step-row mb-40" style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
                <span className="color-font custom-font" style={{ fontSize: "36px", lineHeight: 1, minWidth: "50px" }}>{step.num}</span>
                <div>
                  <h6 className="mb-10">{step.title}</h6>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="line-sep mb-80" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}></div>

        {/* Path 2 */}
        <div className="row">
          <div className="col-lg-4 md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div className="sticky-box">
              <span className="icon pe-7s-users color-font" style={{ fontSize: "50px" }}></span>
              <h3 className="custom-font mt-20">You need senior engineers.</h3>
              <p className="mt-20">
                For US and EU companies that want senior talent without the
                hiring overhead. Our engineers work full-time with your team and
                your clients, in your timezone — while we handle all HR,
                contracts, and management.
              </p>
              <ul className="mt-30 rest" style={{ listStyle: "none", padding: 0 }}>
                <li className="mb-10">✓ &nbsp;Senior-only, pre-vetted engineers</li>
                <li className="mb-10">✓ &nbsp;Full-time, your timezone</li>
                <li className="mb-10">✓ &nbsp;Works directly with your clients</li>
                <li className="mb-10">✓ &nbsp;HR, contracts & management on us</li>
              </ul>
              <Link href="/contact">
                <a className="simple-btn mt-40">Hire an engineer &rarr;</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 wow fadeInUp" data-wow-delay=".5s">
            <h6 className="custom-font mb-40" style={{ letterSpacing: "2px", textTransform: "uppercase", opacity: 0.5 }}>How it works</h6>
            {steps.hire.map((step) => (
              <div key={step.num} className="step-row mb-40" style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
                <span className="color-font custom-font" style={{ fontSize: "36px", lineHeight: 1, minWidth: "50px" }}>{step.num}</span>
                <div>
                  <h6 className="mb-10">{step.title}</h6>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWorkDetail;
