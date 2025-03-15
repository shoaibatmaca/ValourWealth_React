// // import React from "react";
// // import "./styles/liveSessions.css";  
// // import stream_img from "./images/thubnail_stream.png"; // Your image
// // import { Link } from "react-router-dom";


// // const LiveSessions = () => {
// //   return (
// //     <div className="container mt-4">
// //       <h4 className="section-title mb-3">Courses</h4>
// //       <div className="row">

// //         {/* Single Card */}
// //         <div className="col-lg-4 col-md-6 mb-4">
// //           <div className="card stream_cards shadow-sm">
// //             <img src={stream_img} alt="Live Session" className="card-img-top" />
// //             <div className="course-card">
// //               <h4 className="course-title">
// //                 The Complete FOREX Scalping Trading Course
// //               </h4>
// //               <p className="course-desc">
// //                 What you'll learn Introduction to Forex Scalping Trading Which
// //                 timeframe's we use Scalping Trading in the forex market. You’re
// //                 going to learn my favorite...
// //               </p>
// //               <p className="session-date mb-1">3/9/2025</p>
// //               <Link to="/course-detail" className="theme_btn">View Details</Link>
// //               </div>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default LiveSessions;





// // updated ------------------------------------------------
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./styles/liveSessions.css";
// import stream_img from "./images/thubnail_stream.png"; // Your image
// import { Link, useNavigate } from "react-router-dom";

// const LiveSessions = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const accessToken = localStorage.getItem("accessToken");

//   useEffect(() => {
//     if (!accessToken) {
//       navigate("/login");
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/courses/", {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });

//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//         if (error.response && error.response.status === 401) {
//           setError("Session expired or invalid. Please log in again.");
//           localStorage.removeItem("accessToken");
//           navigate("/login");
//         } else {
//           setError("Failed to fetch courses. Please try again later.");
//         }
//       }
//     };

//     fetchCourses();
//   }, [accessToken, navigate]);

//     // Function to navigate to the course details page
//     const handleViewDetails = (courseId) => {
//       navigate(`/course-detail/${courseId}`); // Redirect to the course detail page with the course ID
//     };
  
//   return (
//     <div className="container mt-4">
//       <h4 className="section-title mb-3">Courses</h4>
//       {error && <p className="error-message">{error}</p>} 
//       <div className="row">
//         {courses.length === 0 ? (
//           <p>No courses available at the moment.</p>
//         ) : (
//           courses.map((course) => (
//             <div key={course.id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card stream_cards shadow-sm">
//                 <img src={stream_img} alt="Live Session" className="card-img-top" />
//                 <div className="course-card">
//                   <h4 className="course-title">{course.title}</h4>
//                   <p className="course-desc">
//                     {course.description.substring(0, 150)}...
//                   </p>
//                   <p className="session-date mb-1">
//                     {new Date(course.created_at).toLocaleDateString()}
//                   </p>
//                   <button
//                       className="btn btn-primary"
//                       onClick={() => handleViewDetails(course.id)} // On click, navigate to the course detail page
//                     >
//                       View Details
//                     </button>
                  
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveSessions;




// updation:::::::::

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./styles/liveSessions.css";
// import stream_img from "./images/thubnail_stream.png"; // Placeholder Image
// import { useNavigate } from "react-router-dom";

// const LiveSessions = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const accessToken = localStorage.getItem("accessToken");

//   useEffect(() => {
//     if (!accessToken) {
//       navigate("/login");
//       return;
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/courses/", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//         if (error.response?.status === 401) {
//           setError("Session expired. Please log in again.");
//           localStorage.removeItem("accessToken");
//           navigate("/login");
//         } else {
//           setError("Failed to fetch courses. Please try again later.");
//         }
//       }
//     };

//     fetchCourses();
//   }, [accessToken, navigate]);

//   const handleViewDetails = (courseId) => {
//     navigate(`/course-detail/${courseId}`);
//   };

//   return (
//     <div className="container mt-4">
//       <h4 className="section-title mb-3">Courses</h4>
//       {error && <p className="error-message">{error}</p>}
//       <div className="row">
//         {courses.length === 0 ? (
//           <p>No courses available at the moment.</p>
//         ) : (
//           courses.map((course) => (
//             <div key={course.id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card stream_cards shadow-sm">
//                 <img src={stream_img} alt="Course Thumbnail" className="card-img-top" />
//                 <div className="course-card">
//                   <h4 className="course-title">{course.title}</h4>
//                   <p className="course-desc">{course.description.substring(0, 150)}...</p>
//                   <p className="session-date mb-1">
//                     {new Date(course.created_at).toLocaleDateString()}
//                   </p>
//                   <button className="btn btn-primary" onClick={() => handleViewDetails(course.id)}>
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveSessions;



// This code is for the production 
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/liveSessions.css";
import stream_img from "./images/thubnail_stream.png"; // Placeholder Image
import { useNavigate } from "react-router-dom";

const LiveSessions = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  // Use the environment variable from your .env file for the API base URL.
  // Make sure your .env file (at the root of your project) has:
  // REACT_APP_API_URL=https://valourwealthdjango-production.up.railway.app/
  const API_BASE_URL = process.env.REACT_APP_API_URL; 

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
      return;
    }

    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}api/courses/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        if (error.response?.status === 401) {
          setError("Session expired. Please log in again.");
          localStorage.removeItem("accessToken");
          navigate("/login");
        } else {
          setError("Failed to fetch courses. Please try again later.");
        }
      }
    };

    fetchCourses();
  }, [accessToken, navigate, API_BASE_URL]);

  const handleViewDetails = (courseId) => {
    navigate(`/course-detail/${courseId}`);
  };

  return (
    <div className="container mt-4">
      <h4 className="section-title mb-3">Courses</h4>
      {error && <p className="error-message">{error}</p>}
      <div className="row">
        {courses.length === 0 ? (
          <p>No courses available at the moment.</p>
        ) : (
          courses.map((course) => (
            <div key={course.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card stream_cards shadow-sm">
                <img src={stream_img} alt="Course Thumbnail" className="card-img-top" />
                <div className="course-card">
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-desc">{course.description.substring(0, 150)}...</p>
                  <p className="session-date mb-1">
                    {new Date(course.created_at).toLocaleDateString()}
                  </p>
                  <button className="btn btn-primary" onClick={() => handleViewDetails(course.id)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LiveSessions;
