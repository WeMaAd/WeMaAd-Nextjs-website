import React from "react";
import appData from "../../data/app.json";

const contactMethods = [
  {
    icon: "fas fa-envelope",
    label: "EMAIL",
    value: "hello@wemaad.net",
    href: "mailto:hello@wemaad.net",
    external: false,
  },
  {
    icon: "fab fa-whatsapp",
    label: "WHATSAPP",
    value: "+20 114 254 9787",
    href: "https://wa.me/201142549787",
    external: true,
  },
  {
    icon: "fab fa-linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/company/wemaad",
    href: "https://www.linkedin.com/company/wemaad/",
    external: true,
  },
];

const cardStyle = {
  display: "block",
  padding: "40px 32px",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "3px",
  transition: "border-color 0.3s ease",
  height: "100%",
  textDecoration: "none",
  color: "inherit",
};

const ContactWithMap = () => (
  <>
    <section className="contact section-padding">
      <div className="container">

        {/* Headline */}
        <div className="row mb-80">
          <div className="col-lg-7">
            <h3 className="custom-font wow" data-splitting>
              Let&apos;s Talk.
            </h3>
            <p style={{ marginTop: "20px", maxWidth: "480px" }}>
              Reach us directly on any of the channels below. We get back to every message within one business day.
            </p>
          </div>
        </div>

        {/* Contact cards */}
        <div className="row">
          {contactMethods.map((m) => (
            <div key={m.label} className="col-lg-4 col-md-6 mb-30">
              <a
                href={m.href}
                style={cardStyle}
                {...(m.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <i
                  className={m.icon}
                  style={{ fontSize: "28px", color: "#1bd8eb", display: "block", marginBottom: "22px" }}
                />
                <h6
                  className="custom-font"
                  style={{ fontSize: "11px", letterSpacing: "4px", opacity: 0.45, marginBottom: "12px" }}
                >
                  {m.label}
                </h6>
                <span style={{ fontSize: "15px" }}>{m.value}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Social row */}
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-12">
            <p
              className="custom-font"
              style={{ fontSize: "11px", letterSpacing: "4px", opacity: 0.4, marginBottom: "24px", textTransform: "uppercase" }}
            >
              Also find us on
            </p>
            <div className="social" style={{ display: "flex", gap: "20px" }}>
              <a href={appData.social.instagram} className="icon" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href={appData.social.twitter} className="icon" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter" />
              </a>
              <a href={appData.social.linkedin} className="icon" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div className="map" id="ieatmaps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.633706773957!2d31.191688358100585!3d30.057868395469413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841477414d38f%3A0x9968602e746c396!2sMit%20Akaba%2C%20Agouza%2C%20Giza%20Governorate%203752402!5e0!3m2!1sen!2seg!4v1656036647392!5m2!1sen!2seg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>

    <footer className="footer-half sub-bg">
      <div className="container">
        <div className="copyrights text-center mt-0">
          <p>© WeMaAd with ♥ in World. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </>
);

export default ContactWithMap;
