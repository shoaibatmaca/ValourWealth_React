import React from "react";
import "../DashboardSidebarComp/styles/resources.css";
import authorImg from "../DashboardSidebarComp/images/thubnail_stream.png"

const Resources = ({ darkMode }) => {
  return (
    <div className={`container mt-4 resources-section ${darkMode ? "dark-mode" : "light-mode"}`}>

      <div className="video-container">
        <h4 className="video-title">Platform Walkthrough</h4>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Platform Walkthrough"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Dark mode class added here */}
      <div className={`resources-details mt-4 ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div className="author-info d-flex align-items-center">
          <img src={authorImg} alt="Author" className="author-img me-2" />
          <div>
            <h6 className="author-name m-0">Dane Gilsek <span className="verified-badge">✔</span></h6>
            <p className="author-role m-0">ValourWealth Analyst</p>
          </div>
        </div>

        <h5 className="session-title mt-3">Platform Walkthrough Sessions</h5>
        <p className="session-description">
          Join us for a platform walkthrough livestream where we'll be taking you on a tour of our latest update.
          Dane will guide you through all the features, functionalities, and show you how to get the most out of
          the platform. Don't miss out on this exciting chance to learn and explore!
        </p>

        <div className={`live-schedule p-3 mt-3 ${darkMode ? "dark-mode" : "light-mode"}`}>
          <h6>LIVE Schedule</h6>
          <p>Every Monday to Friday</p>
          <p>Time: 7:00pm - 8:00pm EST</p>
          <p className="replay-text">Replays are available at any time.</p>
        </div>
      </div>
    </div>
  );
};


export default Resources;
