import React from 'react'
import websiteLogowhite from "../assets/images/Valour_Wealth.png"



function newsletter() {
  return (
    <div>
    <section
      className="newsletter-section">
      <div className="container p-0">
        <div className="row align-items-center">
          {/* Left Side - Text and Form */}
          <div className="col-md-6">
            <div className="newsletter-content p-4">
              <img src={websiteLogowhite} alt="ValourWealth Logo" className="mb-3" height="50" />
              <h3 className="">Subscribe to our <span className="text-gray">newsletter!</span></h3>
              <p className="">
                As a leading independent research provider, ValourWealth keeps you connected from anywhere.
              </p>
           
            </div>
          </div>
          
          {/* Right Side - Background Image (Optional) */}
          <div className="col-md-6">
          <form className="newsletter-form  p-3">
                <input
                  type="text"
                  className="input-group mb-2"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="input-group mb-2"
                  placeholder="Your Email"
                  required
                />
                <button type="submit" className="theme_btn m-0 ">Join!</button>
              </form>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default newsletter
