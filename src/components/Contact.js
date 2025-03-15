import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row shadow-lg rounded">
        {/* Left Section */}
        <div className="col-lg-5 d-flex flex-column justify-content-center p-0">
          <div className="left-contact-sec">
            <h1 className="mb-3">Get in Touch</h1>
            <p className="mb-2">
              Have any questions? Feel free to reach out to us!
            </p>
            <p className="mb-2">
              <a className="text-white text-decoration-none" href="mailto:support@valourwealth.com">
              <strong>Email:</strong> support@valourwealth.com
              </a>
            </p>
            <p>
             <a className="text-white text-decoration-none" href="tel:877-639-1327"> <strong>Phone:</strong> 877-639-1327</a>
            </p>
          </div>
        </div>

        <div className="col-lg-7 bg-white p-5">
          <h2>Contact Us</h2>
          <p className="text-muted">We'd love to hear from you!</p>

          <form id="contactForm">
            <div className="mb-3">
              <input
                type="text"
                className="form-input"
                placeholder="First name"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-input"
                placeholder="Last name"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-input"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="justify-content-center w-100 rounded-pill text-white theme_btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
