import React, { useEffect } from "react";
import "../styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Posts from "../components/posts";
import Technology from "../components/technology";
import PostEditor from "../components/postEditor";
import Newsletter from "../components/newsletter";

import appStoreImg from "../assets/images/app-store-img.png";
import googleImg from "../assets/images/google-img.png";
import Stocks from "../components/Stocks";
import Products from "../components/Products";
import EditorChoice from "../components/editorChoice";
import MarketDetails from "../components/marketDetails";
import backgroundVideo from "../assets/images/bannergreen.mp4";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="home-banner">
          <video
          className="banner-video w-100 obj_fit"
          autoPlay
          loop
          muted
          playsInline // Stops fullscreen issue on iPhones
          preload="auto" // Ensures quick loading
          disablePictureInPicture // Disables PiP
          controlsList="nodownload nofullscreen" // Removes additional options
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

            <div className="banner-text" data-aos="fade-up">
              <h5>Introducing</h5>
              <h1>ValourGPT</h1>
              <p>
                The revolutionary A.I. powered trading assistant is here to help
                you elevate your trading to the next level
              </p>
              <button className="theme_btn">Try It For Free</button>

              <div className="text_down">
                <p>Available now on mobile</p>
                <div className="store-images">
                  {/* App Store Link */}
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img
                      className="store-img app-btn"
                      src={appStoreImg}
                      alt="Download on App Store"
                    />
                  </a>
                  {/* Google Play Link */}
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img
                      className="google-img app-btn"
                      src={googleImg}
                      alt="Get it on Google Play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* posts components */}
      <MarketDetails />
      <Posts />
      <EditorChoice />
      <Technology />
      <Stocks />
      {/* <Products /> */}
      <PostEditor />
      <Newsletter />
    </div>
  );
}

export default Home;
