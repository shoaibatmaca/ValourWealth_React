import React from "react";
import "../DashboardSidebarComp/styles/wealthseries.css"; 

const WealthSeries = ({ darkMode }) => {
  const cards = [
    {
      title: "Sentiment Sentry",
      description:
        "Tracks market sentiment via social media, news, and analyst ratings.",
    },
    {
      title: "Value and Growth",
      description:
        "Combines undervalued stocks with high growth potential.",
    },
    {
      title: "Trend Tracker",
      description:
        "Uses technical indicators to spot short-term momentum.",
    },
    {
      title: "Fundamentals First",
      description:
        "Focuses on strong financials, revenue growth, and profitability.",
    },
  ];

  return (
    <div className={`container mt-4 wealth-series ${darkMode ? "dark-mode" : ""}`}>
      <h4 className="wealth-header text-dark">Smart, Simple AI Stock Recommendations</h4>
      <p className="wealth-subtext">
        Powered by four distinct approaches, our AI highlights a range of stocks
        for every type of investor. Discover new opportunities at a glance and
        quickly find the strategy that matches your style.
      </p>

      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card wealth-card">
              <div className="card-body">
                <h5 className="card-title text-dark">{card.title}</h5>
                <p className="card-text text-dark">{card.description}</p>
                <button className="btn btn-outline-primary btn-sm">
                  View Picks
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WealthSeries;
