// import React from "react";
// import walmartImg from "../assets/images/walmart-img.webp"; 
// import recentPost from "../assets/images/reddit-market-img.webp"; 
// // recent post images
// import recentPost2 from "../assets/images/reddit-market-img.webp"; 
// import recentPost3 from "../assets/images/apple-img.webp"; 
// import recentPost4 from "../assets/images/crypto1.webp"; 
// import recentPost5 from "../assets/images/crypto2.webp"; 
// import recentPost6 from "../assets/images/reddit.webp"; 



// function Posts() {
//   return (
//     <section className="section_latest">
//       <div className="container-fluid p-0">
//         <div className="container">
//           <div className="recents" data-aos="fade-up">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="sec_heading pb-lg-3 pb-2 ">
//                   <h2 className="pb-4">Explore Recent Post</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="recent_post">
//                   <h3 className="mb-0">Editors' Choice</h3>
//                 </div>
//               </div>
//             </div>

//             <div className="row pt-5">
//               <div className="col-lg-8">
//                 <div className="news-wrap">
//                   <a href="">
//                     <img
//                       className="obj_fit"
//                       src={recentPost}
//                       alt="Walmart News"
//                     />

//                     <h3>
//                       Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla,
//                       Walmart, Netflix, Shopify, Super Micro & More
//                     </h3>
//                   </a>
//                 </div>
//               </div>
   
//               <div className="col-lg-4">
//               <div className="other-news_section">
//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={walmartImg}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart...</h4>
                   
//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost2}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart...</h4>
                   
//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost3}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">This is How a Cheap Balanced Portfolio Flattens Those Pricey Hedge Funds</h4>
                   
//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost4}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart...</h4>
                   
//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost5}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">The Stock of AMD Faces a New Risk And This One Has Nothing to Do With AI</h4>
                   
//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="other-news-wrap">
//                   <div className="other-news-card">
//                     <a
//                       className="other-news-img"
//                       href=""
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="side-news-img">
//                         <img
//                           className="obj_fit"
//                           src={recentPost6}
//                           alt="Walmart News"
//                         />
//                       </div>
//                     </a>
//                     <div className="other-news-info">
//                       <h4 className="mb-0">Google's 'Curveball' of Reddit Traffic Offers Investors a Buying Opportunity</h4>
                   
//                       <a href="" target="_blank" rel="noopener noreferrer"></a>
//                     </div>
//                   </div>
//                 </div>
//                 </div>

//               </div>   
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Posts;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Posts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchRecentNews = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/recent-news/");
//         const filteredPosts = response.data.results || [];
//         setPosts(filteredPosts);
//       } catch (error) {
//         console.error("Error fetching recent news:", error);
//       }
//     };

//     fetchRecentNews();
//   }, []);

//   return (
//     <section className="section_latest">
//       <div className="container-fluid p-0">
//         <div className="container">
//           <div className="recents" data-aos="fade-up">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="sec_heading pb-lg-3 pb-2 ">
//                   <h2 className="pb-4">Explore Recent Posts</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="recent_post">
//                   <h3 className="mb-0">Editors' Choice</h3>
//                 </div>
//               </div>
//             </div>

//             <div className="row pt-5">
//               {/* Left Side (First Post) */}
//               {posts.length > 0 && (
//                 <div className="col-lg-8">
//                   <div className="news-wrap">
//                     <a href={posts[0].url} target="_blank" rel="noopener noreferrer">
//                       <img className="obj_fit" src={posts[0].image_url} alt={posts[0].title} />
//                       <h3>{posts[0].description}</h3>
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Right Side (Remaining Posts) */}
//               <div className="col-lg-4">
//                 <div className="other-news_section">
//                   {posts.slice(1, 7).map((post, index) => (
//                     <div key={index} className="other-news-wrap">
//                       <div className="other-news-card">
//                         <a className="other-news-img" href={post.url} target="_blank" rel="noopener noreferrer">
//                           <div className="side-news-img">
//                             <img className="obj_fit" src={post.image_url} alt={post.title} />
//                           </div>
//                         </a>
//                         <div className="other-news-info">
//                           <h4 className="mb-0">{post.description}</h4>
//                           <a href={post.url} target="_blank" rel="noopener noreferrer"></a>
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

// export default Posts;



// This code is for production:

import React, { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  // Remove trailing slash from API_BASE_URL if it exists
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/recent-news/`);
        const filteredPosts = response.data.results || [];
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching recent news:", error);
      }
    };

    fetchRecentNews();
  }, [API_BASE_URL]);

  return (
    <section className="section_latest">
      <div className="container-fluid p-0">
        <div className="container">
          <div className="recents" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec_heading pb-lg-3 pb-2 ">
                  <h2 className="pb-4">Explore Recent Posts</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="recent_post">
                  <h3 className="mb-0">Editors' Choice</h3>
                </div>
              </div>
            </div>

            <div className="row pt-5">
              {/* Left Side (First Post) */}
              {posts.length > 0 && (
                <div className="col-lg-8">
                  <div className="news-wrap">
                    <a href={posts[0].url} target="_blank" rel="noopener noreferrer">
                      <img className="obj_fit" src={posts[0].image_url} alt={posts[0].title} />
                      <h3>{posts[0].description}</h3>
                    </a>
                  </div>
                </div>
              )}

              {/* Right Side (Remaining Posts) */}
              <div className="col-lg-4">
                <div className="other-news_section">
                  {posts.slice(1, 7).map((post, index) => (
                    <div key={index} className="other-news-wrap">
                      <div className="other-news-card">
                        <a className="other-news-img" href={post.url} target="_blank" rel="noopener noreferrer">
                          <div className="side-news-img">
                            <img className="obj_fit" src={post.image_url} alt={post.title} />
                          </div>
                        </a>
                        <div className="other-news-info">
                          <h4 className="mb-0">{post.description}</h4>
                          <a href={post.url} target="_blank" rel="noopener noreferrer"></a>
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

export default Posts;
