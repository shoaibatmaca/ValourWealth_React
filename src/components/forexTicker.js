"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

import "../styles/ticker.css";

const ForexTicker = () => {
  const [forexData, setForexData] = useState([]);

  useEffect(() => {
    const mockForexData = [
      { symbol: "EURUSD", value: 1.08289, change: 0.0, changePercent: 0.42, icon: "🇪🇺" },
      { symbol: "BTCUSD", value: 88540, change: -1378.0, changePercent: -1.53, icon: "₿" },
      { symbol: "ETHUSD", value: 2191.1, change: -11.4, changePercent: -0.52, icon: "Ξ" },
      { symbol: "GBPUSD", value: 1.28994, change: 0.0, changePercent: 0.19, icon: "🇬🇧" },
      { symbol: "USDJPY", value: 149.82, change: 0.25, changePercent: 0.17, icon: "🇯🇵" },
      { symbol: "AUDUSD", value: 0.6543, change: -0.0021, changePercent: -0.32, icon: "🇦🇺" },
      { symbol: "USDCAD", value: 1.3642, change: 0.0034, changePercent: 0.25, icon: "🇨🇦" },
      { symbol: "USDCHF", value: 0.9021, change: -0.0015, changePercent: -0.17, icon: "🇨🇭" },
    ];

    const fetchForexData = () => {
      const updatedData = mockForexData.map((item) => {
        const fluctuation = (Math.random() - 0.5) * 0.01;
        const newValue = Number(item.value) + fluctuation * item.value;
        const change = newValue - item.value;
        const changePercent = (change / item.value) * 100;

        return { ...item, value: newValue, change, changePercent };
      });
      setForexData(updatedData);
    };

    fetchForexData();
    const intervalId = setInterval(fetchForexData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const getChangeClass = (change) => {
    return change > 0 ? "text-success" : change < 0 ? "text-danger" : "text-secondary";
  };

  return (
    <div className="bg-dark text-white py-2 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="d-flex flex-nowrap ticker-container">
          {[...forexData, ...forexData].map((item, index) => (
            <React.Fragment key={index}>
              <span className="d-flex align-items-center mx-3">
                <span className="me-1">{item.icon}</span>
                <span className="fw-bold me-2">{item.symbol}</span>
                <span className="me-2">{item.value.toFixed(5)}</span>
                <span className={`d-flex align-items-center ${getChangeClass(item.change)}`}>
                  {item.change >= 0 ? (
                    <>
                      <ArrowUpRight size={14} className="me-1" /> +{item.change.toFixed(4)}
                    </>
                  ) : (
                    <>
                      <ArrowDownRight size={14} className="me-1" /> {item.change.toFixed(4)}
                    </>
                  )}
                  <span className="ms-1">({item.changePercent.toFixed(2)}%)</span>
                </span>
              </span>
              {index < forexData.length - 1 && <span className="text-muted mx-1">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ForexTickerDemo() {
  return (
    <div className="container-fluid p-0">
      <ForexTicker />
    </div>
  );
}
