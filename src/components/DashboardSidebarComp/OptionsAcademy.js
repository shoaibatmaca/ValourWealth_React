import React from "react";
import "./styles/optionsAcademy.css"; // Import the CSS file
import ProgressBarsDisplay from "../DashboardSidebarComp/ProgressBar";

const optionsCourses = [
  {
    title: "Intro to Options",
    duration: "13 minutes 54 seconds",
  },
  {
    title: "Basic Strategies",
    duration: "18 minutes 9 seconds",
  },
  {
    title: "Options Pricing",
    duration: "15 minutes 50 seconds",
  },
  {
    title: "Options Trading Risks",
    duration: "16 minutes 55 seconds",
  },
  {
    title: "Basic Technical Analysis",
    duration: "18 minutes 43 seconds",
  },
  {
    title: "Fundamental Analysis",
    duration: "9 minutes 53 seconds",
  },
  {
    title: "Trading Tools and Platforms",
    duration: "10 minutes 48 seconds",
  },
  {
    title: "Trading Psychology",
    duration: "11 minutes 24 seconds",
  },
];

const OptionsAcademy = () => {
  return (
    <div className="container my-4">
      <h3 className="academy-title">
        <strong>Fundamentals</strong>{" "}
        <span className="lesson-info">10 lessons • 2 hours 19 minutes</span>
      </h3>
      <div className="row">
        {optionsCourses.map((course, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="academy-card">
              <div className="academy-card-content">
                <span className="academy-badge">Fundamentals</span>
                <h5 className="academy-title">{course.title}</h5>
                <p className="academy-duration">{course.duration}</p>
              </div>
              <div className="academy-footer">
                <a href="#" className="academy-link">
                  View Video →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProgressBarsDisplay />
    </div>
  );
};

export default OptionsAcademy;
