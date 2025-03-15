// import React from 'react';
// import market1 from "../assets/images/reddit-market-img.webp"
// import market2 from "../assets/images/intel-mrket-img.webp"


// function MarketDetails() {
//   return (
//     <section className='details_main'>
//     <div className="container">
//     <div className="col-lg-12">
//         <h2 className='sec_heading mb-5'>
//           Markets
//         </h2>
//       </div>

//       <div className="row">
//       <div className="col-md-4">
//           <a className='text-decoration-none' href="">
//           <div className="details-card">
//             {/* Card Image */}
//            <div className="main-detail-img">
//            <img
//               src={market1} 
//               alt="Wells Fargo"
//               className="details-card-img obj_fit"
//             />
//            </div>

//             {/* Card Body */}
//             <div className="details-card-body">
//               <span className="badge bg-light text-dark fw-bold">MARKETS</span>
//               <h5 className="card-title mt-2">
//                 Thursday’s Biggest Analyst Calls: Nvidia, Apple, Boeing, Wells Fargo, Microsoft, Amazon & More
//               </h5>
//               <p className="card-text text-muted">Editorial Board</p>
//             </div>
//           </div>
//           </a>
//       </div>

//         <div className="col-md-4">
//           <a className='text-decoration-none' href="">
//           <div className="details-card">
//             {/* Card Image */}
//             <div className='main-detail-img'>
//              <img
//               src={market2} 
//               alt="Wells Fargo"
//               className="details-card-img obj_fit"
//             />
//             </div>

//             {/* Card Body */}
//             <div className="details-card-body">
//               <span className="badge bg-light text-dark fw-bold">MARKETS</span>
//               <h5 className="card-title mt-2">
//                 Thursday’s Biggest Analyst Calls: Nvidia, Apple, Boeing, Wells Fargo, Microsoft, Amazon & More
//               </h5>
//               <p className="card-text text-muted">Eric Ng</p>
//             </div>
//           </div>
//           </a>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// }

// export default MarketDetails;


import React, { useEffect, useState } from "react";
import axios from "axios";

function MarketDetails() {
  const [news, setNews] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get(`${API_BASE_URL}/market-news/?query=US%20Stock%20Market&num_results=10`)
        .then((response) => {
          // Filter out news without images
          const filteredNews = response.data.results.filter((item) => item.image_url);
          setNews(filteredNews);
        })
        .catch((error) => {
          console.error("Error fetching news:", error);
        });
    };

    fetchNews(); // Initial fetch
    const interval = setInterval(fetchNews, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, [API_BASE_URL]);

  return (
    <section className="details_main">
      <div className="container">
        <div className="col-lg-12">
          <h2 className="sec_heading mb-5">Markets</h2>
        </div>

        <div className="row">
          {news.map((item, index) => (
            <div className="col-md-4" key={index}>
              <a className="text-decoration-none" href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="details-card">
                  {/* Card Image */}
                  <div className="main-detail-img">
                    <img src={item.image_url} alt={item.title || "Market News"} className="details-card-img obj_fit" />
                  </div>

                  {/* Card Body */}
                  <div className="details-card-body">
                    <span className="badge bg-light text-dark fw-bold">MARKETS</span>
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

export default MarketDetails;
