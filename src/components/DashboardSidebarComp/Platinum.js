import React from "react";
import "../DashboardSidebarComp/styles/platinum.css";
import profileImg from "../DashboardSidebarComp/images/thubnail_stream.png";

const Platinum = ({ darkMode }) => {
  return (
    <div className={`container mt-4 platinum-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Profile Section */}
      <div className="d-flex align-items-center mb-3">
        <img src={profileImg} alt="Eric Armenteros" className="profile-img" />
        <div className="ms-3">
          <h5 className="mb-0">Eric Armenteros</h5>
          <p className="text-muted small">ValourWealth Professional Analyst</p>
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="fw-bold">The Platinum Daily Livestreams</h3>
      <p>
        Join us and get ready to buckle up and blast off with the one and only
        Eric Armenteros at the ValourWealth Platinum Daily livestream event!
      </p>

      {/* Live Schedule */}
      <h5 className="fw-bold">Live Schedule</h5>
      <div className="table-responsive">
        <table className="table schedule-table">
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30 - 10:30am EST</td>
              <td>9:30 - 10:30am EST</td>
              <td>9:30 - 10:30am EST</td>
              <td>9:30 - 10:30am EST</td>
              <td>9:30 - 10:30am EST</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Real-time Trading Alerts */}
      <div className="trading-alerts p-4 mt-4">
        <h4 className="fw-bold">Real-time Trading Alerts</h4>
        <p>
          Our team of experts delivers real-time, profitable trading
          opportunities straight to your phone via the Telegram app.
        </p>
        <button className="theme_btn">Join Real-time Trading Alerts</button>
      </div>
    </div>
  );
};

export default Platinum;
