import React from "react";
import appData from "../../data/app.json";

const ContactWithMap = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch(appData.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                {submitted ? (
                  <div className="alert alert-success" role="alert">
                    Your message has been sent. We will get back to you soon.
                  </div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit}>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        Something went wrong. Please try again or email us
                        directly at hello@wemaad.net
                      </div>
                    )}
                    <div className="controls">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          id="form_phone"
                          type="tel"
                          name="phone"
                          placeholder="Phone with country code"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <span>
                          By submitting the form, I agree that my submitted data
                          is being collected and stored.
                        </span>
                      </div>

                      <button type="submit" className="btn-curve btn-lit">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
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
                    <a href={`mailto:${appData.email}`}>{appData.emailDisplay}</a>
                  </h5>
                  <h5>
                    <a href={`tel:${appData.phone}`}>{appData.phoneDisplay}</a>
                  </h5>
                </div>
                <div className="social mt-50">
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
            <p>© WeMaAd with ♥ in World. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
