
// updated code :
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Stocks() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/stock-news/?num_results=100") // ✅ Zyada results fetch karo
//       .then((response) => {
//         setNews(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching stock news:", error);
//       });
//   }, []);

//   return (
//     <section className="section_stocks">
//       <div className="container-fluid p-0">
//         <div className="container">
//           <div className="recents">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="sec_heading">
//                   <h2 className="pb-4">Stocks</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row pt-5" data-aos="fade-up">
//               {news.length > 0 && (
//                 <>
//                   {/* ✅ Big Main Article */}
//                   {news[0]?.image_url && (
//                     <div className="col-lg-8">
//                       <div className="news-wrap">
//                         <a href={news[0].url} target="_blank" rel="noopener noreferrer">
//                           <img className="obj_fit" src={news[0].image_url} alt={news[0].description} />
//                           <h3>{news[0].description}</h3>
//                         </a>
//                       </div>
//                     </div>
//                   )}

//                   {/* ✅ Left Side: More Articles (6-7 Cards) */}
//                   <div className="col-lg-4">
//                     <div className="other-news_section">
//                       {news
//                         .slice(1) // ✅ Pehla article exclude karna hai
//                         .filter(article => article.image_url) // ✅ Sirf jin articles ki image hai unko rakho
//                         .slice(0, 7) // ✅ Pehle sirf 4 the, ab 7 dikhayenge
//                         .map((article, index) => (
//                           <div className="other-news-wrap" key={index}>
//                             <div className="other-news-card">
//                               <a className="other-news-img" href={article.url} target="_blank" rel="noopener noreferrer">
//                                 <div className="side-news-img">
//                                   <img className="obj_fit" src={article.image_url} alt={article.description} />
//                                 </div>
//                               </a>
//                               <div className="other-news-info">
//                                 <h4 className="mb-0">{article.description}</h4>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Stocks;



// This code is for production:
import React, { useEffect, useState } from "react";
import axios from "axios";

function Stocks() {
  const [news, setNews] = useState([]);
  // Remove trailing slash from API_BASE_URL
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/stock-news/?num_results=100`)
      .then((response) => {
        // Fallback to an empty array if results is undefined.
        setNews(response.data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching stock news:", error);
      });
  }, [API_BASE_URL]);

  return (
    <section className="section_stocks">
      <div className="container-fluid p-0">
        <div className="container">
          <div className="recents">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec_heading">
                  <h2 className="pb-4">Stocks</h2>
                </div>
              </div>
            </div>

            <div className="row pt-5" data-aos="fade-up">
              {news.length > 0 ? (
                <>
                  {/* Big Main Article */}
                  {news[0]?.image_url && (
                    <div className="col-lg-8">
                      <div className="news-wrap">
                        <a href={news[0].url} target="_blank" rel="noopener noreferrer">
                          <img className="obj_fit" src={news[0].image_url} alt={news[0].description} />
                          <h3>{news[0].description}</h3>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Left Side: More Articles (6-7 Cards) */}
                  <div className="col-lg-4">
                    <div className="other-news_section">
                      {news
                        .slice(1) // Exclude the first article
                        .filter((article) => article.image_url) // Only include articles with images
                        .slice(0, 7) // Limit to 7 articles
                        .map((article, index) => (
                          <div className="other-news-wrap" key={index}>
                            <div className="other-news-card">
                              <a
                                className="other-news-img"
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="side-news-img">
                                  <img className="obj_fit" src={article.image_url} alt={article.description} />
                                </div>
                              </a>
                              <div className="other-news-info">
                                <h4 className="mb-0">{article.description}</h4>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stocks;
