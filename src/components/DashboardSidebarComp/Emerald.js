import React from "react";
import "../DashboardSidebarComp/styles/emerald.css"; // Import the CSS file

const emeraldCards = [
  {
    title: "Credit Spread Introduction",
    time: "05 min 20s",
  },
  {
    title: "What is a Bull Put Spread?",
    time: "21 min 23s",
  },
  {
    title: "What is a Bear Call Spread?",
    time: "17 min 19s",
  },
  {
    title: "Good rules for bull put spreads",
    time: "18 min 58s",
  },
  {
    title: "Good rules for bear call spreads",
    time: "17 min 33s",
  },
  {
    title: "How do I read trade alerts?",
    time: "14 min 17s",
  },
  {
    title: "How do I enter a bull put spread?",
    time: "20 min 29s",
  },
  {
    title: "How do I enter a bear call spread?",
    time: "15 min 04s",
  },
];

const Emerald = ( {darkMode} ) => {
  return (
<div className={`container mt-4 ${darkMode ? "dark-mode" : ""}`}>      
  <h2 className="section-title">Emerald Income Alerts</h2>
      <p className="lesson-info">12 lessons • 3 hours 33 mins</p>
      <div className="row">
        {emeraldCards.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <a href="#" className="card-link">
              <div className="card emerald-card">
                <div className="card-body">
                  <h6 className="alert-title">Emerald Inc. Alerts</h6>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.time}</p>
                  <p className="view-video">View Video →</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emerald;
