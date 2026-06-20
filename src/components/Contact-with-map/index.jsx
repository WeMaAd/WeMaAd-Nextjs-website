import React from "react";
import { Formik, Form, Field } from "formik";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[0-9]{9,}$/i.test(value)) {
      error = "Invalid phone number";
    }
    return error;
  };

  const sendMessage = ({ name, email, phone, message }) => {
    let data = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
      "Data Collection": "Accepted the data collection",
      "Form Origin": "From WeMaAd Website the Contact Us Page",
    };
    // fetch the values of the email field and send it to the server
    fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, {
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

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(values);
                    // alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. We will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.phone = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validatePhone}
                            id="form_phone"
                            type="tel"
                            name="phone"
                            placeholder="Phone with country code"
                            required="required"
                          />
                          {errors.phone && touched.phone && (
                            <div>{errors.phone}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <span>
                            By submiting the form, I agree that my submitted
                            data is being collected and stored.
                          </span>
                        </div>

                        <button type="submit" className="btn-curve btn-lit">
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <h3 className="custom-font wow" data-splitting>
                  Let&apos;s Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="mailto:hello@wemaad.net">Hello@wemaad.net</a>
                  </h5>
                  <h5>
                    <a href="tel:+201142549787">+20 114 254 9787</a>
                  </h5>
                </div>
                {/* <h3 className="custom-font wow" data-splitting>
                  Visit Us.
                </h3>
                <div className="item">
                  <h6>
                    295 Witting Streets Suite 666,
                    <br />
                    Melbourne, Australia
                  </h6>
                </div> */}
                <div className="social mt-50">
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
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.633706773957!2d31.191688358100585!3d30.057868395469413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841477414d38f%3A0x9968602e746c396!2sMit%20Akaba%2C%20Agouza%2C%20Giza%20Governorate%203752402!5e0!3m2!1sen!2seg!4v1656036647392!5m2!1sen!2seg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              © WeMaAd with ♥ in World. All Rights Reserved.
              {/* <a href="#0">ThemesCamp</a>. */}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
