/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  // sendEmail should be a function that sned the value of the email field to a fetch request
  const sendEmail = ({ email }) => {
    let data = {
      "Subscribe email": email,
      "Data Collection": "Accepted the data collection",
      "Form Origin": "From WeMaAd Website subscribe newsletter",
    };
    // fetch the values of the email field and send it to the server
    fetch("https://usebasin.com/f/f5aeb5b551e1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  // const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
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
              <h6 className="custom-font stit simple-btn">Newslatter</h6>
              <p>
                Sign up for subscribe out newsletter! subscribed clients to our
                newsletter will receive a 10% discount on their first purchase
              </p>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(values);
                  // alert(JSON.stringify(values, null, 2));
                  // send the email to a google sheet using the values.email using the google api sheet
                  document.querySelector(".alert-success").style.display =
                    "block";
                  setTimeout(() => {
                    document.querySelector(".alert-success").style.display =
                      "none";
                  }, 5000);

                  // Reset the values
                  values.email = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div
                class="alert alert-success"
                style={{ display: "none", marginTop: "10px" }}
                role="alert"
              >
                Thank you for subscribing to our newsletter
              </div>
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
