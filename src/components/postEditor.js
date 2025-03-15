// import React from "react";
// import crypto from "../assets/images/crypto2.webp";
// import crypto1 from "../assets/images/crypto1.webp";
// import crypto2 from "../assets/images/event1.webp";
// import crypto3 from "../assets/images/walmart-img.webp";
// import crypto4 from "../assets/images/crypto-latest.png";
// import crypto5 from "../assets/images/editor-choice3.webp";
// import crypto6 from "../assets/images/walmart-img.webp";

// function postEditor() {
//   return (
//     <section className="section_latest">
//       <div className="container-fluid p-0">
//         <div className="container">
//           <div className="recents">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="sec_heading">
//                   <h2 className="pb-4">Crypto</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               {/* <div className="col-lg-12">
//               <div className="recent_post">
//                 <h3 className="mb-0">Editors' Choice</h3>
//               </div>
//             </div> */}
//             </div>

//             <div className="row pt-5" data-aos="fade-up">
//               <div className="col-lg-8">
//                 <div className="news-wrap">
//                   <a href="#">
//                     <img className="obj_fit" src={crypto} alt="Walmart News" />

//                     <h3>
//                        Bitcoin Surged Beyond $30,000. Is Another Crypto Boom On The Way?
//                     </h3>
//                   </a>
//                 </div>
//               </div>

//               <div className="col-lg-4">
//                 <div className="other-news_section">
//                   <div className="other-news-wrap">
//                     <div className="other-news-card">
//                       <a
//                         className="other-news-img"
//                         href=""
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <div className="side-news-img">
//                           <img
//                             className="obj_fit"
//                             src={crypto1}
//                             alt="Walmart News"
//                           />
//                         </div>
//                       </a>
//                       <div className="other-news-info">
//                         <h4 className="mb-0">
//                           Wednesday's Biggest Analyst Calls: Nvidia, Apple,
//                           Tesla, Walmart...
//                         </h4>

//                         <a
//                           href=""
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         ></a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="other-news-wrap">
//                     <div className="other-news-card">
//                       <a
//                         className="other-news-img"
//                         href=""
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <div className="side-news-img">
//                           <img
//                             className="obj_fit"
//                             src={crypto2}
//                             alt="Walmart News"
//                           />
//                         </div>
//                       </a>
//                       <div className="other-news-info">
//                         <h4 className="mb-0">
//                           Wednesday's Biggest Analyst Calls: Nvidia, Apple,
//                           Tesla, Walmart...
//                         </h4>

//                         <a
//                           href=""
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         ></a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="other-news-wrap">
//                     <div className="other-news-card">
//                       <a
//                         className="other-news-img"
//                         href=""
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <div className="side-news-img">
//                           <img
//                             className="obj_fit"
//                             src={crypto3}
//                             alt="Walmart News"
//                           />
//                         </div>
//                       </a>
//                       <div className="other-news-info">
//                         <h4 className="mb-0">
//                           Wednesday's Biggest Analyst Calls: Nvidia, Apple,
//                           Tesla, Walmart...
//                         </h4>

//                         <a
//                           href=""
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         ></a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="other-news-wrap">
//                     <div className="other-news-card">
//                       <a
//                         className="other-news-img"
//                         href=""
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <div className="side-news-img">
//                           <img
//                             className="obj_fit"
//                             src={crypto4}
//                             alt="Walmart News"
//                           />
//                         </div>
//                       </a>
//                       <div className="other-news-info">
//                         <h4 className="mb-0">
//                           Wednesday's Biggest Analyst Calls: Nvidia, Apple,
//                           Tesla, Walmart...
//                         </h4>

//                         <a
//                           href=""
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         ></a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="other-news-wrap">
//                     <div className="other-news-card">
//                       <a
//                         className="other-news-img"
//                         href=""
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <div className="side-news-img">
//                           <img
//                             className="obj_fit"
//                             src={crypto5}
//                             alt="Walmart News"
//                           />
//                         </div>
//                       </a>
//                       <div className="other-news-info">
//                         <h4 className="mb-0">
//                           Wednesday's Biggest Analyst Calls: Nvidia, Apple,
//                           Tesla, Walmart...
//                         </h4>

//                         <a
//                           href=""
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         ></a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="other-news-wrap">
//                     <div className="other-news-card">
//                       <a
//                         className="other-news-img"
//                         href=""
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <div className="side-news-img">
//                           <img
//                             className="obj_fit"
//                             src={crypto6}
//                             alt="Walmart News"
//                           />
//                         </div>
//                       </a>
//                       <div className="other-news-info">
//                         <h4 className="mb-0">
//                           Wednesday's Biggest Analyst Calls: Nvidia, Apple,
//                           Tesla, Walmart...
//                         </h4>

//                         <a
//                           href=""
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         ></a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default postEditor;



// import React, { useEffect, useState } from "react";

// function PostEditor() {
//   const [cryptoNews, setCryptoNews] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/crypto-news/") // ✅ Fetch from API
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.results) {
//           // ✅ Filter out news without images
//           const filteredNews = data.results.filter((item) => item.image_url);
//           setCryptoNews(filteredNews);
//         }
//       })
//       .catch((error) => console.error("Error fetching news:", error));
//   }, []);

//   return (
//     <section className="section_latest">
//       <div className="container-fluid p-0">
//         <div className="container">
//           <div className="recents">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="sec_heading">
//                   <h2 className="pb-4">Crypto</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row pt-5" data-aos="fade-up">
//               {/* First (Main) News */}
//               {cryptoNews.length > 0 && (
//                 <div className="col-lg-8">
//                   <div className="news-wrap">
//                     <a href={cryptoNews[0].url} target="_blank" rel="noopener noreferrer">
//                       <img className="obj_fit" src={cryptoNews[0].image_url} alt="Crypto News" />
//                       <h3>{cryptoNews[0].description}</h3>
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Other News */}
//               <div className="col-lg-4">
//                 <div className="other-news_section">
//                   {cryptoNews.slice(1).map((news, index) => (
//                     <div key={index} className="other-news-wrap">
//                       <div className="other-news-card">
//                         <a className="other-news-img" href={news.url} target="_blank" rel="noopener noreferrer">
//                           <div className="side-news-img">
//                             <img className="obj_fit" src={news.image_url} alt="Crypto News" />
//                           </div>
//                         </a>
//                         <div className="other-news-info">
//                           <h4 className="mb-0">{news.description}</h4>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PostEditor;



// This code is for production:

import React, { useEffect, useState } from "react";

function PostEditor() {
  const [cryptoNews, setCryptoNews] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/crypto-news/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          // Filter out news without images
          const filteredNews = data.results.filter((item) => item.image_url);
          setCryptoNews(filteredNews);
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [API_BASE_URL]);

  return (
    <section className="section_latest">
      <div className="container-fluid p-0">
        <div className="container">
          <div className="recents">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec_heading">
                  <h2 className="pb-4">Crypto</h2>
                </div>
              </div>
            </div>

            <div className="row pt-5" data-aos="fade-up">
              {/* First (Main) News */}
              {cryptoNews.length > 0 && (
                <div className="col-lg-8">
                  <div className="news-wrap">
                    <a href={cryptoNews[0].url} target="_blank" rel="noopener noreferrer">
                      <img className="obj_fit" src={cryptoNews[0].image_url} alt="Crypto News" />
                      <h3>{cryptoNews[0].description}</h3>
                    </a>
                  </div>
                </div>
              )}

              {/* Other News */}
              <div className="col-lg-4">
                <div className="other-news_section">
                  {cryptoNews.slice(1).map((news, index) => (
                    <div key={index} className="other-news-wrap">
                      <div className="other-news-card">
                        <a className="other-news-img" href={news.url} target="_blank" rel="noopener noreferrer">
                          <div className="side-news-img">
                            <img className="obj_fit" src={news.image_url} alt="Crypto News" />
                          </div>
                        </a>
                        <div className="other-news-info">
                          <h4 className="mb-0">{news.description}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostEditor;
