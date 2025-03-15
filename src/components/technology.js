// // import React from 'react';
// // import Technology1 from "../assets/images/technology1.webp"; 
// // import Technology2 from "../assets/images/technology_latest.png"; 



// // function Technology() {
// //   return (
// //     <section>
// //       <div className="container">
// //         <div className="technology">
// //           <div className="row" data-aos="fade-top">
// //             {/* Section Heading */}
// //             <div className="col-12">
// //               <div className="sec_heading">
// //                 <h2 className="pb-4">Technology</h2>
// //               </div>
// //             </div>

// //             {/* Technology Card 1 */}
// //             <div className="col-lg-6 mb-lg-0 mb-3">
         
// //               <div className="popular_card">
// //               <a href="">
// //                 <img src={Technology1} alt="Technology" className="img-fluid" />
// //                 <div className="card-desc">
// //                   <h3>Technology</h3>
// //                   <p>Meta Launches AI Coding Software in Competition With OpenAI</p>
// //                 </div>
// //                 </a>
// //               </div>
            
// //             </div>

// //             {/* Technology Card 2 (Duplicate for another column) */}
// //             <div className="col-lg-6 mb-3">        
// //               <div className="popular_card">
// //               <a href="">
// //                 <img src={Technology2} alt="Technology" className="img-fluid" />
// //                 <div className="card-desc">
// //                   <h3>Technology</h3>
// //                   <p>Google Unveils New AI-Powered Search Features</p>
// //                 </div>
// //                 </a>
// //               </div>  
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Technology;




// // // updated code 
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Technology1 from "../assets/images/technology1.webp"; 
// // import Technology2 from "../assets/images/technology2.webp"; 

// // function Technology() {
// //   const [techNews, setTechNews] = useState([]);

// //   useEffect(() => {
// //     // Fetch technology news from Django API
// //     axios
// //       .get("http://127.0.0.1:8000/technology-news/?num_results=2") // API URL
// //       .then((response) => {
// //         setTechNews(response.data.results); // Update state with API data
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching technology news:", error);
// //       });
// //   }, []);

// //   return (
// //     <section>
// //       <div className="container">
// //         <div className="technology">
// //           <div className="row" data-aos="fade-top">
// //             {/* Section Heading */}
// //             <div className="col-12">
// //               <div className="sec_heading">
// //                 <h2 className="pb-4">Technology</h2>
// //               </div>
// //             </div>

// //             {/* Check if news is available */}
// //             {techNews.length > 0 ? (
// //               <>
// //                 {/* Technology Card 1 */}
// //                 <div className="col-lg-6 mb-lg-0 mb-3">
// //                   <div className="popular_card">
// //                     <a href={techNews[0].url} target="_blank" rel="noopener noreferrer">
// //                       <img
// //                         src={techNews[0].image_url || Technology1} // API image with fallback
// //                         alt="Technology"
// //                         className="img-fluid"
// //                       />
// //                       <div className="card-desc">
// //                         <h3>Technology</h3>
// //                         <p>{techNews[0].description}</p>
// //                       </div>
// //                     </a>
// //                   </div>
// //                 </div>

// //                 {/* Technology Card 2 */}
// //                 <div className="col-lg-6 mb-3">
// //                   <div className="popular_card">
// //                     <a href={techNews[1].url} target="_blank" rel="noopener noreferrer">
// //                       <img
// //                         src={techNews[1].image_url || Technology2} // API image with fallback
// //                         alt="Technology"
// //                         className="img-fluid"
// //                       />
// //                       <div className="card-desc">
// //                         <h3>Technology</h3>
// //                         <p>{techNews[1].description}</p>
// //                       </div>
// //                     </a>
// //                   </div>
// //                 </div>
// //               </>
// //             ) : (
// //               <p>Loading...</p> // Loading state
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Technology;




// //  For production code:


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Technology1 from "../assets/images/technology1.webp"; 
// import Technology2 from "../assets/images/technology2.webp"; 

// function Technology() {
//   const [techNews, setTechNews] = useState([]);
//   // Remove any trailing slash from the base URL
//   const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

//   useEffect(() => {
//     // Fetch technology news from Django API using the environment variable
//     axios
//       .get(`${API_BASE_URL}/technology-news/?num_results=2`)
//       .then((response) => {
//         setTechNews(response.data.results); // Update state with API data
//       })
//       .catch((error) => {
//         console.error("Error fetching technology news:", error);
//       });
//   }, [API_BASE_URL]);

//   return (
//     <section>
//       <div className="container">
//         <div className="technology">
//           <div className="row" data-aos="fade-top">
//             {/* Section Heading */}
//             <div className="col-12">
//               <div className="sec_heading">
//                 <h2 className="pb-4">Technology</h2>
//               </div>
//             </div>

//             {/* Check if news is available */}
//             {techNews.length > 0 ? (
//               <>
//                 {/* Technology Card 1 */}
//                 <div className="col-lg-6 mb-lg-0 mb-3">
//                   <div className="popular_card">
//                     <a href={techNews[0].url} target="_blank" rel="noopener noreferrer">
//                       <img
//                         src={techNews[0].image_url || Technology1} // API image with fallback
//                         alt="Technology"
//                         className="img-fluid"
//                       />
//                       <div className="card-desc">
//                         <h3>Technology</h3>
//                         <p>{techNews[0].description}</p>
//                       </div>
//                     </a>
//                   </div>
//                 </div>

//                 {/* Technology Card 2 */}
//                 <div className="col-lg-6 mb-3">
//                   <div className="popular_card">
//                     <a href={techNews[1].url} target="_blank" rel="noopener noreferrer">
//                       <img
//                         src={techNews[1].image_url || Technology2} // API image with fallback
//                         alt="Technology"
//                         className="img-fluid"
//                       />
//                       <div className="card-desc">
//                         <h3>Technology</h3>
//                         <p>{techNews[1].description}</p>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <p>Loading...</p> // Loading state
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Technology;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Technology1 from "../assets/images/technology1.webp";

function Technology() {
  const [techNews, setTechNews] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchTechNews = () => {
      axios
        .get(`${API_BASE_URL}/technology-news/?num_results=5`)
        .then((response) => {
          const newsResults = response.data?.results || [];
          console.log("Tech API Response:", newsResults);
          setTechNews(newsResults.slice(0, 5));
        })
        .catch((error) => {
          console.error("Error fetching tech news:", error);
          setTechNews([]); // Fallback empty array
        });
    };

    fetchTechNews();
    const interval = setInterval(fetchTechNews, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, [API_BASE_URL]);

  return (
    <section className="technology_section">
      <div className="container">
        <h2>Latest Technology News</h2>
        <div className="tech_news d-flex">
          {Array.isArray(techNews) && techNews.length > 0 ? (
            techNews.map((item, index) => (
              <div key={index} className="tech_card">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.image_url || Technology1} alt="Technology" className="img-fluid" />
                  <div className="tech_desc">
                    <h3>Technology</h3>
                    <p>{item.description || "No description available"}</p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Technology;
