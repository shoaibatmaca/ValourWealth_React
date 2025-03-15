import React from "react";

function About() {
  return (
    <section className="about_us ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="about-sec p-lg-5 p-3">
            <h2 className="fw-bold mb-4">Who we are</h2>
            <p className="text-muted">
              At Valour Wealth, we are dedicated to streamlining your journey to
              financial freedom, providing a unique and comprehensive experience
              for individuals venturing into the markets. Our team pride
              themselves on building real relationships with our members, giving
              them confidence to take on the markets with zero fear and constant
              support. When striving to achieve, it takes a different level of
              thinking, and so at Valour Wealth, we look at short-term and
              long-term strategies for our members, ensuring longevity for
              themselves and their family.
            </p>
            <button className="theme_btn btn-outline-dark mt-4 px-4 py-2">
              <a className="chat" href="mailto:Contact@valourwealth.com">Chat Now</a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
