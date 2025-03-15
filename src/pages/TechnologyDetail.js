import React, { useEffect, useState } from "react";
import axios from "axios";

function TechnologyDetail() {
  const [techNews, setTechNews] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchTechNews = () => {
      axios
        .get(`${API_BASE_URL}/technology-news/?num_results=10`)
        .then((response) => {
          // Filter out articles without images
          const filteredNews = response.data.results.filter((item) => item.image_url);
          setTechNews(filteredNews);
        })
        .catch((error) => {
          console.error("Error fetching technology news:", error);
        });
    };

    fetchTechNews(); // Initial fetch
    const interval = setInterval(fetchTechNews, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, [API_BASE_URL]);

  return (
    <section className="details_main">
      <div className="container">
        <div className="col-lg-12">
          <h2 className="sec_heading mb-5">Technology</h2>
        </div>

        <div className="row">
          {techNews.map((item, index) => (
            <div className="col-md-4" key={index}>
              <a className="text-decoration-none" href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="details-card">
                  {/* Card Image */}
                  <div className="main-detail-img">
                    <img src={item.image_url} alt={item.title || "Technology News"} className="details-card-img obj_fit" />
                  </div>

                  {/* Card Body */}
                  <div className="details-card-body">
                    <span className="badge bg-light text-dark fw-bold">TECHNOLOGY</span>
                    <h5 className="card-title mt-2">{item.title || "No title available"}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyDetail;
