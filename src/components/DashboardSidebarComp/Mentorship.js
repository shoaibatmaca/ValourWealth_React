import React, { useState } from "react";
import "../DashboardSidebarComp/styles/mentorship.css";

const Mentorship = ( {darkMode} ) => {
  const [activeTab, setActiveTab] = useState("sessions");
  const [activeSubTab, setActiveSubTab] = useState("platinum");

  return (
    <div className="container mt-4">
      {/* Primary Navigation Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "sessions" ? "active" : ""}`}
            onClick={() => setActiveTab("sessions")}
          >
            Manage My Sessions
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "pricing" ? "active" : ""}`}
            onClick={() => setActiveTab("pricing")}
          >
            View All Price Plans
          </button>
        </li>
      </ul>

      <div className={`tab-content mt-3 ${darkMode ? "dark-mode-tab" : ""}`}>
      {/* Sessions Tab */}
        {activeTab === "sessions" && (
          <div className="tab-pane fade show active">
            <h5>Sessions available:</h5>
            <p>
              <strong>0</strong> Starter | <strong>0</strong> Intermediate |{" "}
              <strong>0</strong> Advanced | <strong>9</strong> Platinum |{" "}
              <strong>16</strong> Emerald
            </p>

            {/* Secondary Navigation Tabs */}
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeSubTab === "platinum" ? "active" : ""
                  }`}
                  onClick={() => setActiveSubTab("platinum")}
                >
                  Platinum
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeSubTab === "emerald" ? "active" : ""
                  }`}
                  onClick={() => setActiveSubTab("emerald")}
                >
                  Emerald
                </button>
              </li>
            </ul>

            <div className="tab-content mt-3">
              {/* Platinum Tab */}
              {activeSubTab === "platinum" && (
                <div className="tab-pane fade show active">
                <div className={`card level-card ${darkMode ? "dark-mode" : ""}`}>
                   <div className="card-body p-5">
                      <h4 className="text-primary">Platinum Level</h4>
                      <p>
                        Personalized coaching and equipping users with key
                        resources for options trading.
                      </p>
                      <p>
                        <strong>Includes:</strong> 12 one-on-one meetings, live
                        stream access, and exclusive alerts.
                      </p>
                      <button className="theme_btn">
                        Join Telegram Alerts
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Emerald Tab */}
              {activeSubTab === "emerald" && (
                <div className="tab-pane fade show active">
                <div className={`card level-card ${darkMode ? "dark-mode" : ""}`}>
                <div className="card-body p-5">
                      <h4 className="text-success">Emerald Level</h4>
                      <p>
                        Advanced mentorship with real-time trading analysis and
                        premium market insights.
                      </p>
                      <p>
                        <strong>Includes:</strong> 16 personalized sessions,
                        expert guidance, and trading strategies.
                      </p>
                      <button className="theme_btn">
                        Join Telegram Alerts
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === "pricing" && (
          <div className="tab-pane fade show active">
            <h5>Pricing Plans</h5>
            <p>Details </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentorship;
