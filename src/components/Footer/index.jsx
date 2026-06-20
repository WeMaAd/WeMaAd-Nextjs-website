/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const Footer = () => {
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0" className="d-flex">
                  <img src={`${appData.lightLogo}`} alt="" />
                  <h2>WeMaAd</h2>
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span>
                    <a href="mailto:hello@wemaad.net">Hello@wemaad.net</a>
                  </li>
                  {/* <li>
                    <span>Address : </span> A32 , Ave 15th Street, Door 211, San
                    Franciso, USA 32490.
                  </li> */}
                  <li>
                    <span>Phone : </span>
                    <a href="tel:+201142549787">+20 114 254 9787</a>
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="https://www.facebook.com/" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/wemaad.llc/"
                    className="icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/WemaadL" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wemaad/"
                    className="icon"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>
                Subscribe to stay updated on what we&apos;re building and
                thinking about.
              </p>
              <form
                action="https://usebasin.com/f/f5aeb5b551e1"
                method="POST"
              >
                <div className="form-group custom-font">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <button className="cursor-pointer" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="https://www.instagram.com/wemaad.llc/">
                  <img src="/img/insta/1-1.jpg" alt="" />
                </a>
                <a href="https://www.instagram.com/wemaad.llc/">
                  <img src="/img/insta/2-1.jpg" alt="" />
                </a>
                <a href="https://www.instagram.com/wemaad.llc/">
                  <img src="/img/insta/3-1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © WeMaAd with ♥ in World. All Rights Reserved.
            {/* <a href="#0">ThemesCamp</a>. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
