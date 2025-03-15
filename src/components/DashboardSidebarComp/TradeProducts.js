import React from "react";
import "./styles/products.css"; // Import CSS file

const products = [
  {
    title: "ValourWealth TERMINAL",
    description: "Experience the full potential of ValourWealth",
    buttonText: "Purchase",
    imageClass: "card1",
  },
  {
    title: "WS WEALTH SERIES",
    description: "Leverage on cutting-edge AI technology with diversification techniques.",
    buttonText: "Learn More",
    imageClass: "card2",
  },
  {
    title: "EMERALD INCOME ALERTS",
    description: "Take Your Trading to the Next Level",
    buttonText: "Learn More",
    imageClass: "card3",
  },
  {
    title: "PLATINUM PROGRAM",
    description: "Profitable Option Trading Made Easy",
    buttonText: "Learn More",
    imageClass: "card4",
  },
  {
    title: "TRADEGPT",
    description: "Empower Your Trading Decisions with AI-Driven Insights",
    buttonText: "Learn More",
    imageClass: "card5",
  },
  {
    title: "OPTIONS MENTORSHIP",
    description: "1 on 1 Mentorship with our analysts and launch your portfolio to new heights",
    buttonText: "Learn More",
    imageClass: "card6",
  },
  {
    title: "OPTIONS ACADEMY",
    description: "Demystify the complexities of trading options",
    buttonText: "Learn More",
    imageClass: "card7",
  },
];


const ProductCards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`product-card ${product.imageClass}`}>
              <h5 className="product-title">{product.title}</h5>
              <p className="product-description">{product.description}</p>
              <button className="btn product-btn">{product.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
