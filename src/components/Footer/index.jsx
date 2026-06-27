/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const Footer = () => {
  const [subscribed, setSubscribed] = React.useState(false);
  const [subError, setSubError] = React.useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch(appData.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        setSubscribed(true);
        e.target.reset();
      } else {
        setSubError(true);
      }
    } catch {
      setSubError(true);
    }
  };

  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0" className="d-flex">
                  <img src={`${appData.lightLogo}`} alt="WeMaAd logo" />
                  <h2>WeMaAd</h2>
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span>
                    <a href={`mailto:${appData.email}`}>{appData.emailDisplay}</a>
                  </li>
                  <li>
                    <span>Phone : </span>
                    <a href={`tel:${appData.phone}`}>{appData.phoneDisplay}</a>
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  {/* <a href="" className="icon"><i className="fab fa-facebook-f"></i></a> */}
                  <a href={appData.social.instagram} className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={appData.social.twitter} className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={appData.social.linkedin} className="icon">
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
              {subscribed ? (
                <div className="alert alert-success" role="alert">
                  Thanks! You&apos;re subscribed.
                </div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  {subError && (
                    <div className="alert alert-danger" role="alert">
                      Something went wrong. Please try again.
                    </div>
                  )}
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
              )}
            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="https://www.instagram.com/wemaad.llc/">
                  <img src="/img/insta/1-1.jpg" alt="WeMaAd Instagram post" />
                </a>
                <a href="https://www.instagram.com/wemaad.llc/">
                  <img src="/img/insta/2-1.jpg" alt="WeMaAd Instagram post" />
                </a>
                <a href="https://www.instagram.com/wemaad.llc/">
                  <img src="/img/insta/3-1.jpg" alt="WeMaAd Instagram post" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © WeMaAd with ♥ in World. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
