import React, { useState } from "react";
import "../DashboardSidebarComp/styles/historicalDataFlow.css";

const HistoricalDataFlow = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("largeCaps");

  return (
    <div
      className="container mt-4"
      style={{
        backgroundColor: darkMode ? "#000000" : "#ffffff", // Full black background
        color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
        padding: "20px",
        borderRadius: "10px",
        border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
      }}
    >
      <h2>Historic ATS Gainers & Losers</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs gap-2 mt-4 historic-table">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "largeCaps" ? "active" : ""}`}
            onClick={() => setActiveTab("largeCaps")}
          >
            Large Caps
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "mediumCaps" ? "active" : ""}`}
            onClick={() => setActiveTab("mediumCaps")}
          >
            Medium Caps
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "smallCaps" ? "active" : ""}`}
            onClick={() => setActiveTab("smallCaps")}
          >
            Small Caps
          </button>
        </li>
      </ul>

      {/* Table */}
      <div className="table-responsive mt-3">
        <table className="table table-bordered table_history">
          <thead
            className="table-primary"
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff", // Pure black in dark mode
              color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
              border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
            }}
          >
            <tr>
              <th>TICKER</th>
              <th>FROM</th>
              <th>TO</th>
              <th>IRREGULAR VOL</th>
              <th>PERCENT CHANGE</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff", // Pure black in dark mode
              color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
              border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
            }}
          >
            {activeTab === "largeCaps" && (
              <>
                <tr>
                  <td>ICE</td>
                  <td>
                    $169.46
                    <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $169.52 <br /> <small>Mar 11th 11:46 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">58.55x</span>
                  </td>
                  <td>
                    +0.04% <br /> <small>2 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>VRTX</td>
                  <td>
                    $499.70
                    <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $499.94 <br /> <small>Mar 11th 8:10 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">35.22x</span>
                  </td>
                  <td>
                    +0.05% <br /> <small>6 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>MTN</td>
                  <td>
                    $164.90
                    <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $165.39 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">24.28x</span>
                  </td>
                  <td>
                    +0.30% <br /> <small>22 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>TEAM</td>
                  <td>
                    $217.00
                    <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $222.57 <br /> <small>Mar 11th 2:04 PM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">23.86x</span>
                  </td>
                  <td>
                    +2.57% <br /> <small>4 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>RL</td>
                  <td>
                    $220.32
                    <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $223.69 <br /> <small>Mar 11th 10:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.9x</span>
                  </td>
                  <td>
                    +1.53% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>MNDY</td>
                  <td>
                    $235.80
                    <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $240.20 <br /> <small>Mar 11th 3:41 PM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.16x</span>
                  </td>
                  <td>
                    +1.87% <br /> <small>6 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>WIX</td>
                  <td>
                    $171.79
                    <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $175.41 <br /> <small>Mar 11th 11:54 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">8.1x</span>
                  </td>
                  <td>
                    +2.10% <br /> <small>2 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>ELV</td>
                  <td>
                    $409.60
                    <br /> <small>Mar 11th 8:44 AM</small>
                  </td>
                  <td>
                    $422.44 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">7.64x</span>
                  </td>
                  <td>
                    +3.13% <br /> <small>23 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>TXRH</td>
                  <td>
                    $178.86
                    <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $179.40 <br /> <small>Mar 11th 9:54 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">6.02x</span>
                  </td>
                  <td>
                    +0.30% <br /> <small>23 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>ADSK</td>
                  <td>
                    $248.69
                    <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $252.38 <br /> <small>Mar 11th 11:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">4.19x</span>
                  </td>
                  <td>
                    +1.49% <br /> <small>2 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>DOV</td>
                  <td>
                    $178.59
                    <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $179.43 <br /> <small>Mar 11th 1:32 PM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">4.12x</span>
                  </td>
                  <td>
                    +0.47% <br /> <small>4 hours</small>
                  </td>
                </tr>
              </>
            )}

            {activeTab === "mediumCaps" && (
              <>
                <tr>
                  <td>COHR</td>
                  <td>
                    $62.84 <br /> <small>Mar 11th 8:06 AM</small>
                  </td>
                  <td>
                    $64.92 <br /> <small>Mar 11th 11:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">233.49x</span>
                  </td>
                  <td>
                    +3.32% <br /> <small>2 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>
                    $56.54 <br /> <small>Mar 11th 9:16 AM</small>
                  </td>
                  <td>
                    $56.72 <br /> <small>Mar 11th 9:54 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">184.11x</span>
                  </td>
                  <td>
                    +0.32% <br /> <small>38 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>RBLX</td>
                  <td>
                    $53.61 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $54.73 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">49.69x</span>
                  </td>
                  <td>
                    +2.10% <br /> <small>22 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>DG</td>
                  <td>
                    $82.83 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $82.87 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">17.52x</span>
                  </td>
                  <td>
                    +0.05% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>DEO</td>
                  <td>
                    $112.09 <br /> <small>Mar 11th 8:20 AM</small>
                  </td>
                  <td>
                    $112.16 <br /> <small>Mar 11th 8:54 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">16.57x</span>
                  </td>
                  <td>
                    +0.06% <br /> <small>33 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>DOCU</td>
                  <td>
                    $79.47 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $80.82 <br /> <small>Mar 11th 11:25 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">16.02x</span>
                  </td>
                  <td>
                    +1.70% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>CCK</td>
                  <td>
                    $91.24 <br /> <small>Mar 11th 8:34 AM</small>
                  </td>
                  <td>
                    $91.33 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.62x</span>
                  </td>
                  <td>
                    +0.10% <br /> <small>57 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>MMM</td>
                  <td>
                    $147.56 <br /> <small>Mar 11th 8:26 AM</small>
                  </td>
                  <td>
                    $147.58 <br /> <small>Mar 11th 8:34 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.07x</span>
                  </td>
                  <td>
                    +0.01% <br /> <small>8 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>IRM</td>
                  <td>
                    $84.00 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $84.18 <br /> <small>Mar 11th 10:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">7.91x</span>
                  </td>
                  <td>
                    +0.21% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>ALB</td>
                  <td>
                    $76.33 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $76.36 <br /> <small>Mar 11th 8:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">7.85x</span>
                  </td>
                  <td>
                    +0.04% <br /> <small>39 minutes</small>
                  </td>
                </tr>
              </>
            )}

            {activeTab === "smallCaps" && (
              <>
                <tr>
                  <td>HCC</td>
                  <td>
                    $47.05 <br /> <small>Mar 11th 8:19 AM</small>
                  </td>
                  <td>
                    $47.07 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">190.36x</span>
                  </td>
                  <td>
                    +0.04% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>CUTR</td>
                  <td>
                    $0.12 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $0.16 <br /> <small>Mar 11th 11:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">58.28x</span>
                  </td>
                  <td>
                    +34.24% <br /> <small>2 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>HAL</td>
                  <td>
                    $24.95 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $25.03 <br /> <small>Mar 11th 9:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">29.9x</span>
                  </td>
                  <td>
                    +0.32% <br /> <small>8 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>HLF</td>
                  <td>
                    $8.90 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $8.91 <br /> <small>Mar 11th 8:34 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">25.44x</span>
                  </td>
                  <td>
                    +0.06% <br /> <small>29 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>HSAI</td>
                  <td>
                    $19.88 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $24.12 <br /> <small>Mar 12th 8:15 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">15.71x</span>
                  </td>
                  <td>
                    +21.33% <br /> <small>22 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>EPD</td>
                  <td>
                    $33.62 <br /> <small>Mar 11th 8:06 AM</small>
                  </td>
                  <td>
                    $33.64 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">14.73x</span>
                  </td>
                  <td>
                    +0.06% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>COMP</td>
                  <td>
                    $8.57 <br /> <small>Mar 11th 9:10 AM</small>
                  </td>
                  <td>
                    $8.58 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">14.35x</span>
                  </td>
                  <td>
                    +0.12% <br /> <small>20 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>VNET</td>
                  <td>
                    $11.43 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $11.43 <br /> <small>Mar 11th 8:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">13.14x</span>
                  </td>
                  <td>
                    +0.04% <br /> <small>39 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>ASAN</td>
                  <td>
                    $12.18 <br /> <small>Mar 11th 10:56 AM</small>
                  </td>
                  <td>
                    $12.65 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.99x</span>
                  </td>
                  <td>
                    +3.86% <br /> <small>21 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>SFIX</td>
                  <td>
                    $4.15 <br /> <small>Mar 11th 8:44 AM</small>
                  </td>
                  <td>
                    $4.21 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">10.45x</span>
                  </td>
                  <td>
                    +1.45% <br /> <small>23 hours</small>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalDataFlow;
