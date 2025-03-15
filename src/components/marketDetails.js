// import React from 'react'
// import market1 from "../assets/images/intel-mrket-img.webp";
// import editorChoice2 from "../assets/images/editor-choice2.webp";
// import editorChoice3 from "../assets/images/editor-choice3.webp";
// import editorChoice4 from "../assets/images/reddit-market-img.webp";
// import editorChoice5 from "../assets/images/walmart-img.webp";



// function marketDetails() {
//   return ( 
//     <section className='market_details_section'>
//     <div className="container">
//     <div className="market_cards d-flex gap-4">

//     <div className="col-lg-3">
//         <div className="editors-choice market_details">
//             <a href="">
//             <div className="market_detail_img">
//             <img
//                 className="obj_fit"
//                 src={editorChoice2}
//                 alt="editorChoiceimg"
//             />
//             </div>
//             <div className="editor_desc">
//                 <h3>Markets</h3>
//                 <p>
//                 The 10-year Yield Drops to Its Lowest Level in Three Weeks as the Fed's Preferred Inflation Measure Rises
//                 </p>
//             </div>
//             </a>
//         </div>

//         <div className="editors-choice market_details">
//               <a href="">
//                 <div className="market_detail_img">
//                 <img
//                   className="obj_fit"
//                   src={editorChoice3}
//                   alt="editorChoiceimg"
//                 />
//                 </div>
//                 <div className="editor_desc">
//                   <h3>Markets</h3>
//                   <p>
//                   The Stock of AMD Faces a New Risk And This One Has Nothing to Do With AI
//                   </p>
//                 </div>
//               </a>
//         </div>
//     </div>

//      <div className="col-lg-6">
//         <div className="editors-choice market_details">
//             <a href="">
//             <div className="market_detail_img img_height">
//             <img
//                 className="obj_fit"
//                 src={market1}
//                 alt="editorChoiceimg"
//             />
//             </div>
//             <div className="editor_desc max_height mb-0">
//                 <h3>Markets</h3>
//                 <h2 className='extra-heading'>
//                 Intel's Stock is Rising. Here's the Latest Rescue Hope
//                 </h2>
//                 <h4 className='name'>Editorial Board</h4>
//             </div>
//             </a>
//         </div>
//     </div>

//     <div className="col-lg-3">
//     <div className="editors-choice market_details">
//         <a href="">
//         <div className="market_detail_img">
//         <img
//             className="obj_fit"
//             src={editorChoice4}
//             alt="editorChoiceimg"
//         />
//         </div>
        
//         <div className="editor_desc">
//             <h3>Markets</h3>
//             <p>
//             Google's 'Curveball' of Reddit Traffic Offers Investors a Buying Opportunity
//             </p>
//         </div>
//         </a>
//     </div>
//     <div className="editors-choice market_details">
//         <a href="">
//         <div className="market_detail_img">
//         <img
//             className="obj_fit"
//             src={editorChoice5}
//             alt="editorChoiceimg"
//         />
//         </div>
        
//         <div className="editor_desc">
//             <h3>Markets</h3>
//             <p>
//             Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart, Netflix, Shopify, Super Micro & More
//             </p>
//         </div>
//         </a>
//     </div>
//     </div>
//     </div>
//     </div>
//     </section>
//   )
// }

// export default marketDetails


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import market1 from "../assets/images/intel-mrket-img.webp";
// import editorChoice2 from "../assets/images/editor-choice2.webp";
// import editorChoice3 from "../assets/images/editor-choice3.webp";
// import editorChoice4 from "../assets/images/reddit-market-img.webp";
// import editorChoice5 from "../assets/images/walmart-img.webp";

// function MarketDetails() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = () => {
//       axios
//         .get("http://127.0.0.1:8000/market-news/?query=US%20Stock%20Market&num_results=5")
//         .then((response) => {
//           setNews(response.data.results.slice(0, 5)); // Ensure only 5 items
//         })
//         .catch((error) => {
//           console.error("Error fetching news:", error);
//         });
//     };

//     fetchNews(); // Initial fetch
//     const interval = setInterval(fetchNews, 300000); // Fetch every 5 minutes

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <section className="market_details_section">
//       <div className="container">
//         <div className="market_cards d-flex gap-4">
//           {/* Left Side */}
//           <div className="col-lg-3">
//             {news[1] && (
//               <div className="editors-choice market_details">
//                 <a href={news[1].url} target="_blank" rel="noopener noreferrer">
//                   <div className="market_detail_img">
//                     <img className="obj_fit" src={news[1].image_url || editorChoice2} alt="Market News" />
//                   </div>
//                   <div className="editor_desc">
//                     <h3>Markets</h3>
//                     <p>{news[1].description || "No description available."}</p>
//                   </div>
//                 </a>
//               </div>
//             )}

//             {news[2] && (
//               <div className="editors-choice market_details">
//                 <a href={news[2].url} target="_blank" rel="noopener noreferrer">
//                   <div className="market_detail_img">
//                     <img className="obj_fit" src={news[2].image_url || editorChoice3} alt="Market News" />
//                   </div>
//                   <div className="editor_desc">
//                     <h3>Markets</h3>
//                     <p>{news[2].description || "No description available."}</p>
//                   </div>
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Center Big News */}
//           <div className="col-lg-6">
//             {news[0] && (
//               <div className="editors-choice market_details">
//                 <a href={news[0].url} target="_blank" rel="noopener noreferrer">
//                   <div className="market_detail_img img_height">
//                     <img className="obj_fit" src={news[0].image_url || market1} alt="Market News" />
//                   </div>
//                   <div className="editor_desc max_height mb-0">
//                     <h3>Markets</h3>
//                     <h2 className="extra-heading">{news[0].description || "No description available."}</h2>
//                   </div>
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Right Side */}
//           <div className="col-lg-3">
//             {news[3] && (
//               <div className="editors-choice market_details">
//                 <a href={news[3].url} target="_blank" rel="noopener noreferrer">
//                   <div className="market_detail_img">
//                     <img className="obj_fit" src={news[3].image_url || editorChoice4} alt="Market News" />
//                   </div>
//                   <div className="editor_desc">
//                     <h3>Markets</h3>
//                     <p>{news[3].description || "No description available."}</p>
//                   </div>
//                 </a>
//               </div>
//             )}

//             {news[4] && (
//               <div className="editors-choice market_details">
//                 <a href={news[4].url} target="_blank" rel="noopener noreferrer">
//                   <div className="market_detail_img">
//                     <img className="obj_fit" src={news[4].image_url || editorChoice5} alt="Market News" />
//                   </div>
//                   <div className="editor_desc">
//                     <h3>Markets</h3>
//                     <p>{news[4].description || "No description available."}</p>
//                   </div>
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MarketDetails;



// This code is for production:
import React, { useEffect, useState } from "react";
import axios from "axios";
import market1 from "../assets/images/intel-mrket-img.webp";
import editorChoice2 from "../assets/images/editor-choice2.webp";
import editorChoice3 from "../assets/images/editor-choice3.webp";
import editorChoice4 from "../assets/images/reddit-market-img.webp";
import editorChoice5 from "../assets/images/walmart-img.webp";

function MarketDetails() {
  const [news, setNews] = useState([]);
  // Remove any trailing slash from the base URL
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get(`${API_BASE_URL}/market-news/?query=US%20Stock%20Market&num_results=5`)
        .then((response) => {
          // Ensure only 5 items are stored
          setNews(response.data.results.slice(0, 5));
        })
        .catch((error) => {
          console.error("Error fetching news:", error);
        });
    };

    fetchNews(); // Initial fetch
    const interval = setInterval(fetchNews, 300000); // Fetch every 5 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, [API_BASE_URL]);

  return (
    <section className="market_details_section">
      <div className="container">
        <div className="market_cards d-flex gap-4">
          {/* Left Side */}
          <div className="col-lg-3">
            {news[1] && (
              <div className="editors-choice market_details">
                <a href={news[1].url} target="_blank" rel="noopener noreferrer">
                  <div className="market_detail_img">
                    <img className="obj_fit" src={news[1].image_url || editorChoice2} alt="Market News" />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{news[1].description || "No description available."}</p>
                  </div>
                </a>
              </div>
            )}

            {news[2] && (
              <div className="editors-choice market_details">
                <a href={news[2].url} target="_blank" rel="noopener noreferrer">
                  <div className="market_detail_img">
                    <img className="obj_fit" src={news[2].image_url || editorChoice3} alt="Market News" />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{news[2].description || "No description available."}</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Center Big News */}
          <div className="col-lg-6">
            {news[0] && (
              <div className="editors-choice market_details">
                <a href={news[0].url} target="_blank" rel="noopener noreferrer">
                  <div className="market_detail_img img_height">
                    <img className="obj_fit" src={news[0].image_url || market1} alt="Market News" />
                  </div>
                  <div className="editor_desc max_height mb-0">
                    <h3>Markets</h3>
                    <h2 className="extra-heading">{news[0].description || "No description available."}</h2>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="col-lg-3">
            {news[3] && (
              <div className="editors-choice market_details">
                <a href={news[3].url} target="_blank" rel="noopener noreferrer">
                  <div className="market_detail_img">
                    <img className="obj_fit" src={news[3].image_url || editorChoice4} alt="Market News" />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{news[3].description || "No description available."}</p>
                  </div>
                </a>
              </div>
            )}

            {news[4] && (
              <div className="editors-choice market_details">
                <a href={news[4].url} target="_blank" rel="noopener noreferrer">
                  <div className="market_detail_img">
                    <img className="obj_fit" src={news[4].image_url || editorChoice5} alt="Market News" />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{news[4].description || "No description available."}</p>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketDetails;

