// import React from "react";
// import editorChoice1 from "../assets/images/editor-choice1.webp";
// import editorChoice2 from "../assets/images/editor-choice2.webp";
// import editorChoice3 from "../assets/images/editor-choice3.webp";
// import editorChoice4 from "../assets/images/reddit.webp";


// function editorChoice() {
//   return (
//     <section className="section_edit_choice">
//       <div className="container">
//         <div class="sec_heading">
//           <h2 class="pb-4">Editors' Choice</h2>
//         </div>
//         <div className="row">
//           <div className="col-lg-3">
//             <div className="editors-choice">
//               <a href="">
//                 <div className="choice_img">
//                 <img
//                   className="obj_fit"
//                   src={editorChoice1}
//                   alt="editorChoiceimg"
//                 />
//                 </div>
//                 <div className="editor_desc">
//                   <h3>Markets</h3>
//                   <p>
//                     This is How a Cheap Balanced Portfolio Flattens Those Pricey
//                     Hedge Funds
//                   </p>
//                 </div>
//               </a>
//             </div>
//           </div>

//           <div className="col-lg-3">
//             <div className="editors-choice">
//               <a href="">
//                 <div className="choice_img">
//                 <img
//                   className="obj_fit"
//                   src={editorChoice2}
//                   alt="editorChoiceimg"
//                 />
//                 </div>
//                 <div className="editor_desc">
//                   <h3>Markets</h3>
//                   <p>
//                   The 10-year Yield Drops to Its Lowest Level in Three Weeks as the Fed's Preferred Inflation Measure Rises
//                   </p>
//                 </div>
//               </a>
//             </div>
//           </div>

//           <div className="col-lg-3">
//             <div className="editors-choice">
//               <a href="">
//                 <div className="choice_img">
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
//             </div>
//           </div>

//           <div className="col-lg-3">
//             <div className="editors-choice">
//               <a href="">
//                 <div className="choice_img">
//                 <img
//                   className="obj_fit"
//                   src={editorChoice4}
//                   alt="editorChoiceimg"
//                 />

//                 </div>
             
//                 <div className="editor_desc">
//                   <h3>Markets</h3>
//                   <p>
//                   Google's 'Curveball' of Reddit Traffic Offers Investors a Buying Opportunity
//                   </p>
//                 </div>
//               </a>
//             </div>
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// }

// export default editorChoice;





// import React, { useEffect, useState } from "react";

// function EditorChoice() {
//   const [trendingStocks, setTrendingStocks] = useState([]);
//   const [marketInsights, setMarketInsights] = useState([]);

//   useEffect(() => {
//     // Fetch Trending Stocks
//     fetch("http://127.0.0.1:8000/stocks/trending/")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredTrending = data.results.filter((item) => item.image_url);
//         setTrendingStocks(filteredTrending.slice(0, 2)); // Only first 2
//       })
//       .catch((error) => console.error("Error fetching trending stocks:", error));

//     // Fetch Market Insights
//     fetch("http://127.0.0.1:8000/stocks/insights/")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredInsights = data.results.filter((item) => item.image_url);
//         setMarketInsights(filteredInsights.slice(0, 2)); // Only first 2
//       })
//       .catch((error) => console.error("Error fetching market insights:", error));
//   }, []);

//   return (
//     <section className="section_edit_choice">
//       <div className="container">
//         <div className="sec_heading">
//           <h2 className="pb-4">Editors' Choice</h2>
//         </div>
//         <div className="row">
//           {trendingStocks.map((item, index) => (
//             <div className="col-lg-3" key={`trending-${index}`}>
//               <div className="editors-choice">
//                 <a href={item.url} target="_blank" rel="noopener noreferrer">
//                   <div className="choice_img">
//                     <img className="obj_fit" src={item.image_url} alt="Trending Stock" />
//                   </div>
//                   <div className="editor_desc">
//                     <h3>Markets</h3>
//                     <p>{item.description}</p>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           ))}

//           {marketInsights.map((item, index) => (
//             <div className="col-lg-3" key={`insights-${index}`}>
//               <div className="editors-choice">
//                 <a href={item.url} target="_blank" rel="noopener noreferrer">
//                   <div className="choice_img">
//                     <img className="obj_fit" src={item.image_url} alt="Market Insights" />
//                   </div>
//                   <div className="editor_desc">
//                     <h3>Markets</h3>
//                     <p>{item.description}</p>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default EditorChoice;


// This code is for production:

import React, { useEffect, useState } from "react";

function EditorChoice() {
  const [trendingStocks, setTrendingStocks] = useState([]);
  const [marketInsights, setMarketInsights] = useState([]);
  // Remove trailing slash from the base URL if it exists
  const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

  useEffect(() => {
    // Fetch Trending Stocks
    fetch(`${API_BASE_URL}/stocks/trending/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          const filteredTrending = data.results.filter((item) => item.image_url);
          setTrendingStocks(filteredTrending.slice(0, 2)); // Only first 2
        }
      })
      .catch((error) =>
        console.error("Error fetching trending stocks:", error)
      );

    // Fetch Market Insights
    fetch(`${API_BASE_URL}/stocks/insights/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          const filteredInsights = data.results.filter((item) => item.image_url);
          setMarketInsights(filteredInsights.slice(0, 2)); // Only first 2
        }
      })
      .catch((error) =>
        console.error("Error fetching market insights:", error)
      );
  }, [API_BASE_URL]);

  return (
    <section className="section_edit_choice">
      <div className="container">
        <div className="sec_heading">
          <h2 className="pb-4">Editors' Choice</h2>
        </div>
        <div className="row">
          {trendingStocks.map((item, index) => (
            <div className="col-lg-3" key={`trending-${index}`}>
              <div className="editors-choice">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="choice_img">
                    <img
                      className="obj_fit"
                      src={item.image_url}
                      alt="Trending Stock"
                    />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}

          {marketInsights.map((item, index) => (
            <div className="col-lg-3" key={`insights-${index}`}>
              <div className="editors-choice">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="choice_img">
                    <img
                      className="obj_fit"
                      src={item.image_url}
                      alt="Market Insights"
                    />
                  </div>
                  <div className="editor_desc">
                    <h3>Markets</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EditorChoice;
