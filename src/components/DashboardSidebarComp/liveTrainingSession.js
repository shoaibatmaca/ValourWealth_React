// import React from 'react';
// import "../DashboardSidebarComp/styles/live-training-session.css";
// import brianImg from "../DashboardSidebarComp/images/live_stream.png";
// import ericImg from "../DashboardSidebarComp/images/live_stream.png";

// function LiveTrainingSession() {
//   return (
//     <section>
//     <div className="container">
//       <div className="row">
//         <div className='sec_heading'>
//           <h2 className='text-black'>Live Trading Sessions</h2>
//         </div>

//         <div className="col-lg-6">
//           <div className="session-card">
//             <img src={brianImg} alt="Jack" className="session-img" />
//             <div className="session-content">
//               <h5 className="session-title">Live Trade Sessions</h5>
//               <p className="session-host">By Jack</p>
//               <p className="session-time">10:30am - 11:30am EST • Mon - Fri</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-6">
//           <div className="session-card">
//             <img src={ericImg} alt="Eric Armenteros" className="session-img" />
//             <div className="session-content">
//               <h5 className="session-title">Daily Livestreams</h5>
//               <p className="session-host">By Eric Armenteros</p>
//               <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//     </section>
//   );
// }

// export default LiveTrainingSession;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "../DashboardSidebarComp/styles/live-training-session.css";
// import defaultImg from "../DashboardSidebarComp/images/live_stream.png";

// function LiveTrainingSession() {
//   const [sessions, setSessions] = useState([]);
//   const [error, setError] = useState("");
//   const accessToken = localStorage.getItem("accessToken");

//   useEffect(() => {
//     const fetchSessions = async () => {
//       if (!accessToken) return;
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/courses/", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setSessions(response.data);
//       } catch (error) {
//         console.error("Error fetching sessions:", error);
//         setError("Failed to fetch sessions. Please try again later.");
//       }
//     };
//     fetchSessions();
//   }, [accessToken]);

//   return (
//     <section>
//       <div className="container">
//         <div className="row">
//           <div className='sec_heading'>
//             <h2 className='text-black'>Live Trading Sessions</h2>
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           {sessions.length === 0 ? (
//             <p>No live sessions available at the moment.</p>
//           ) : (
//             sessions.map((session) => (
//               <div key={session.id} className="col-lg-6">
//                 <div className="session-card">
//                   <img src={session.image || defaultImg} alt={session.title} className="session-img" />
//                   <div className="session-content">
//                     <h5 className="session-title">{session.title}</h5>
//                     <p className="session-host">By {session.instructor || "Lan"}</p>
                    
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LiveTrainingSession;



// This code is for production:

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../DashboardSidebarComp/styles/live-training-session.css";
import defaultImg from "../DashboardSidebarComp/images/live_stream.png";

function LiveTrainingSession() {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState("");
  const accessToken = localStorage.getItem("accessToken");

  // Use the environment variable for the API base URL.
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchSessions = async () => {
      if (!accessToken) return;
      try {
        const response = await axios.get(`${API_BASE_URL}api/courses/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setSessions(response.data);
      } catch (error) {
        console.error("Error fetching sessions:", error);
        setError("Failed to fetch sessions. Please try again later.");
      }
    };
    fetchSessions();
  }, [accessToken, API_BASE_URL]);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className='sec_heading'>
            <h2 className='text-black'>Live Trading Sessions</h2>
          </div>

          {error && <p className="error-message">{error}</p>}

          {sessions.length === 0 ? (
            <p>No live sessions available at the moment.</p>
          ) : (
            sessions.map((session) => (
              <div key={session.id} className="col-lg-6">
                <div className="session-card">
                  <img src={session.image || defaultImg} alt={session.title} className="session-img" />
                  <div className="session-content">
                    <h5 className="session-title">{session.title}</h5>
                    <p className="session-host">By {session.instructor || "Lan"}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default LiveTrainingSession;
