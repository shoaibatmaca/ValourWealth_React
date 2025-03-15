// // // import "../styles/coursedetails.css";
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import "../styles/coursedetail.css";
// // // import ReactPlayer from "react-player";
// // // import { toast } from "react-toastify";


// // // function CoursesDetail() {
// // //   const [activeTab, setActiveTab] = useState('beginner');
// // //   const [showModal, setShowModal] = useState(false);
// // //   const { courseId } = useParams();
// // //   const [course, setCourse] = useState(null);
// // //   const [levels, setLevels] = useState([]);
// // //   const [currentLevel, setCurrentLevel] = useState(null);
// // //   const [videos, setVideos] = useState([]);
// // //   const [currentVideo, setCurrentVideo] = useState(null);
// // //   const [levelProgress, setLevelProgress] = useState(0);
// // //   const [error, setError] = useState("");
// // //   const [isQuizModalOpen, setIsQuizModalOpen] = useState(false); // To track if quiz modal is open
// // //   const navigate = useNavigate();
// // //   const accessToken = localStorage.getItem("accessToken");

// // //   // Function to handle tab switching
// // //   const handleTabChange = (tabId) => {
// // //     setActiveTab(tabId);
// // //   };

// // //   useEffect(() => {
// // //     if (!accessToken) {
// // //       navigate("/login");
// // //       return;
// // //     }

// // //     const fetchCourseDetails = async () => {
// // //       try {
// // //         const courseResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setCourse(courseResponse.data);

// // //         const levelsResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/levels/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setLevels(levelsResponse.data);

// // //         if (levelsResponse.data.length > 0) {
// // //           const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
// // //           const levelToSet = savedLevelId
// // //             ? levelsResponse.data.find(level => level.id === parseInt(savedLevelId))
// // //             : levelsResponse.data[0];

// // //           setCurrentLevel(levelToSet);
// // //           fetchVideos(levelToSet.id);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error fetching course details:", err);
// // //         setError("Error fetching course details. Please try again.");
// // //       }
// // //     };

// // //     fetchCourseDetails();
// // //   }, [courseId, accessToken, navigate]);

  
// // //     const fetchVideos = async (levelId) => {
// // //       try {
// // //         const videosResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/levels/${levelId}/videos/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setVideos(videosResponse.data);
  
// // //         await fetchProgress(levelId);
  
// // //         const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
// // //         const lastWatchedVideo = videosResponse.data.find(video => video.id === parseInt(savedVideoId));
  
// // //         if (lastWatchedVideo) {
// // //           setCurrentVideo(lastWatchedVideo);
// // //         } else {
// // //           const unlockedVideos = videosResponse.data.filter(video => !video.is_locked);
// // //           setCurrentVideo(unlockedVideos[0] || videosResponse.data[0]);
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching videos:", error);
// // //         setError("Error fetching videos.");
// // //       }
// // //     };
  
// // //     const fetchProgress = async (levelId) => {
// // //       try {
// // //         const progressResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/levels/${levelId}/progress/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setLevelProgress(progressResponse.data.progress);
// // //       } catch (error) {
// // //         console.error("Error fetching progress:", error);
// // //         setLevelProgress(0);
// // //       }
// // //     };
  
// // //     const handleCompleteVideo = async (videoId) => {
// // //       try {
// // //         await axios.post(
// // //           `http://127.0.0.1:8000/api/videos/${videoId}/complete/`,
// // //           {},
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         toast.success("Video marked as completed!");
  
// // //         // Fetch updated progress immediately after marking video as complete
// // //         await fetchProgress(currentLevel.id);
  
// // //         const updatedVideos = videos.map((video, index) => {
// // //           if (video.id === videoId) {
// // //             return { ...video, is_completed: true };
// // //           }
// // //           if (videos[index - 1]?.id === videoId) {
// // //             return { ...video, is_locked: false };
// // //           }
// // //           return video;
// // //         });
  
// // //         setVideos(updatedVideos);
  
// // //         // Move to next unlocked video
// // //         const nextVideo = videos.find(video => !video.is_locked && video.id !== videoId);
// // //         if (nextVideo) {
// // //           setCurrentVideo(nextVideo);
// // //           localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
// // //         }
// // //       } catch (error) {
// // //         console.error("Error completing video:", error);
// // //         toast.error("Failed to mark video as completed.");
// // //       }
// // //     };
  

// // //   return (
// // //     <div className="course-details-container">
// // //       <div className="course-header">
// // //       <h2 className="course-title">{course?.title || "Course Details"}</h2>
// // //       {error && <p className="error-message">{error}</p>}
// // //       </div>

// // //       <div className="course-tabs">
// // //         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
// // //           <li className="nav-item  flex-grow-1" role="presentation">
// // //             <button 
// // //               className={`nav-link ${activeTab === 'beginner' ? 'active' : ''}`}
// // //               onClick={() => handleTabChange('beginner')}
// // //               id="beginner-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="beginner"
// // //               aria-selected={activeTab === 'beginner'}
// // //             >
// // //               Beginner
// // //             </button>
// // //           </li>
// // //           <li className="nav-item  flex-grow-1" role="presentation">
// // //             <button 
// // //               className={`nav-link ${activeTab === 'intermediate' ? 'active' : ''}`}
// // //               onClick={() => handleTabChange('intermediate')}
// // //               id="intermediate-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="intermediate"
// // //               aria-selected={activeTab === 'intermediate'}
// // //             >
// // //               Intermediate
// // //             </button>
// // //           </li>
// // //           <li className="nav-item  flex-grow-1" role="presentation">
// // //             <button 
// // //               className={`nav-link ${activeTab === 'professional' ? 'active' : ''}`}
// // //               onClick={() => handleTabChange('professional')}
// // //               id="professional-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="professional"
// // //               aria-selected={activeTab === 'professional'}
// // //             >
// // //               Professional
// // //             </button>
// // //           </li>
// // //         </ul>

// // //         {/* Tab Content */}
// // //         <div className="tab-content" id="courseTabsContent">
// // //           {/* Beginner Tab Content */}
// // //           <div 
// // //             className={`tab-pane fade ${activeTab === 'beginner' ? 'show active' : ''}`}
// // //             id="beginner"
// // //             role="tabpanel"
// // //             aria-labelledby="beginner-tab"
// // //           >
// // //             <div className="level-header">
// // //               <h2>Beginner Level</h2>
// // //               <button className="btn btn-danger">View Level</button>
// // //             </div>
// // //             <div className="progress mb-4">
// // //               <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
// // //             </div>
            
// // //             {/* Video Section */}
// // //             <div className="video-container">
// // //               <div className="ratio">
// // //                 <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="FOREX Scalping for Beginners" allowFullScreen></iframe>
// // //               </div>
// // //               <div className="video-controls mt-3">
// // //                 {/* <button className="btn btn-success play-btn">Play Video</button> */}
// // //               </div>
// // //             </div>

// // //             {/* Course Modules */}
// // //             <div className="course-modules mt-4">
// // //               <div className="module-item">
// // //                 <h3>Introduction to FOREX Scalping</h3>
// // //                 <p>Learn the basics of scalping in the FOREX market</p>
// // //               </div>
              
// // //               <div className="module-item locked">
// // //                 <div className="locked-overlay">
// // //                   <i className="bi bi-lock-fill"></i>
// // //                   <span>Locked</span>
// // //                 </div>
// // //                 <h3>Best Forex Currency pairs to Scalp</h3>
// // //                 <p>Discover which currency pairs are best for scalping strategies</p>
// // //               </div>
              
// // //               <div className="module-item locked">
// // //                 <div className="locked-overlay">
// // //                   <i className="bi bi-lock-fill"></i>
// // //                   <span>Locked</span>
// // //                 </div>
// // //                 <h3>How to Choose Your Broker</h3>
// // //                 <p>Learn how to select the right broker for scalping</p>
// // //               </div>

// // //               <div className="quiz_btn">
// // //               <button className="theme_btn" onClick={() => setShowModal(true)}>
// // //                 Take Quiz
// // //               </button>
// // //             </div>
// // //             </div>
// // //           </div>

// // //           {/* Intermediate Tab Content */}
// // //           <div 
// // //             className={`tab-pane fade ${activeTab === 'intermediate' ? 'show active' : ''}`}
// // //             id="intermediate"
// // //             role="tabpanel"
// // //             aria-labelledby="intermediate-tab"
// // //           >
// // //             <div className="level-header">
// // //               <h2>Intermediate Level</h2>
// // //               <button className="btn btn-danger">View Level</button>
// // //             </div>
// // //             <div className="progress mb-4">
// // //               <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
// // //             </div>
            
// // //             {/* Video Section */}
// // //             <div className="video-container locked-video">
// // //               <div className="ratio">
// // //                 <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Intermediate FOREX Scalping Techniques" allowFullScreen></iframe>
// // //                 <div className="video-lock-overlay">
// // //                   <div className="lock-content">
// // //                     <i className="bi bi-lock-fill"></i>
// // //                     <h4>Unlock Intermediate Content</h4>
// // //                     <p>Complete beginner level to unlock</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Course Modules */}
// // //             <div className="course-modules mt-4">
// // //               <div className="module-item locked">
// // //                 <div className="locked-overlay">
// // //                   <i className="bi bi-lock-fill"></i>
// // //                   <span>Locked</span>
// // //                 </div>
// // //                 <h3>Advanced Scalping Patterns</h3>
// // //                 <p>Master advanced patterns for more profitable trades</p>
// // //               </div>
              
// // //               <div className="module-item locked">
// // //                 <div className="locked-overlay">
// // //                   <i className="bi bi-lock-fill"></i>
// // //                   <span>Locked</span>
// // //                 </div>
// // //                 <h3>Risk Management for Scalpers</h3>
// // //                 <p>Learn essential risk management techniques</p>
// // //               </div>

// // //               <div className="quiz_btn">
// // //               <button className="theme_btn" onClick={() => setShowModal(true)}>
// // //                 Take Quiz
// // //               </button>
// // //             </div>
// // //             </div>
// // //           </div>

// // //           {/* Professional Tab Content */}
// // //           <div 
// // //             className={`tab-pane fade ${activeTab === 'professional' ? 'show active' : ''}`}
// // //             id="professional"
// // //             role="tabpanel"
// // //             aria-labelledby="professional-tab"
// // //           >
// // //             <div className="level-header">
// // //               <h2>Professional Level</h2>
// // //               <button className="btn btn-danger">View Level</button>
// // //             </div>
// // //             <div className="progress mb-4">
// // //               <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
// // //             </div>
            
// // //             {/* Video Section */}
// // //             <div className="video-container locked-video">
// // //               <div className="ratio">
// // //                 <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Professional FOREX Scalping Strategies" allowFullScreen></iframe>
// // //                 <div className="video-lock-overlay">
// // //                   <div className="lock-content">
// // //                     <i className="bi bi-lock-fill"></i>
// // //                     <h4>Unlock Professional Content</h4>
// // //                     <p>Complete intermediate level to unlock</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Course Modules */}
// // //             <div className="course-modules mt-4">
// // //               <div className="module-item locked">
// // //                 <div className="locked-overlay">
// // //                   <i className="bi bi-lock-fill"></i>
// // //                   <span>Locked</span>
// // //                 </div>
// // //                 <h3>Expert Scalping Strategies</h3>
// // //                 <p>Advanced techniques used by professional traders</p>
// // //               </div>
              
// // //               <div className="module-item locked">
// // //                 <div className="locked-overlay">
// // //                   <i className="bi bi-lock-fill"></i>
// // //                   <span>Locked</span>
// // //                 </div>
// // //                 <h3>Automating Your Scalping Strategy</h3>
// // //                 <p>Learn how to automate your scalping strategies</p>
// // //               </div>
// // //               <div className="quiz_btn">
// // //               <button className="theme_btn" onClick={() => setShowModal(true)}>
// // //                 Take Quiz
// // //               </button>
// // //             </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
    

// // //       {/* Modal (Added) */}
// // //       <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
// // //         <div className="modal-dialog modal-dialog-centered" role="document">
// // //           <div className="modal-content">
// // //             <div className="modal-header">
// // //               <h5 className="modal-title">Starting Quiz</h5>
// // //               <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
// // //             </div>
// // //             <div className="modal-body">
// // //               <p>Are you ready to start the quiz?</p>
// // //             </div>
// // //             <div className="modal-footer">
// // //               <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
// // //               <button className="btn btn-success">Start Quiz</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Modal Backdrop */}
// // //       {showModal && <div className="modal-backdrop fade show"></div>}
// // //     </div>
// // //   );
// // // }

// // // export default CoursesDetail;


// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import "../styles/coursedetails.css";
// // // import ReactPlayer from "react-player";
// // // import { toast } from "react-toastify";

// // // const CourseDetailPage = () => {
// // //   const { courseId } = useParams();
// // //   const [activeTab, setActiveTab] = useState("beginner");
// // //   const [course, setCourse] = useState(null);
// // //   const [levels, setLevels] = useState([]);
// // //   const [currentLevel, setCurrentLevel] = useState(null);
// // //   const [videos, setVideos] = useState([]);
// // //   const [currentVideo, setCurrentVideo] = useState(null);
// // //   const [levelProgress, setLevelProgress] = useState(0);
// // //   const [error, setError] = useState("");
// // //   const [showModal, setShowModal] = useState(false);
// // //   const navigate = useNavigate();
// // //   const accessToken = localStorage.getItem("accessToken");

// // //   // Handle tab switching (Beginner, Intermediate, Professional)
// // //   const handleTabChange = (tabId) => {
// // //     setActiveTab(tabId);
// // //   };

// // //   useEffect(() => {
// // //     if (!accessToken) {
// // //       navigate("/login");
// // //       return;
// // //     }

// // //     const fetchCourseDetails = async () => {
// // //       try {
// // //         const courseResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setCourse(courseResponse.data);

// // //         const levelsResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/levels/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setLevels(levelsResponse.data);

// // //         // For initial load, choose level based on activeTab.
// // //         // (Assumes levels are ordered: index 0 => beginner, 1 => intermediate, 2 => professional)
// // //         let initialIndex = 0;
// // //         if (activeTab === "intermediate") initialIndex = 1;
// // //         else if (activeTab === "professional") initialIndex = 2;
// // //         const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
// // //         let levelToSet = savedLevelId
// // //           ? levelsResponse.data.find(
// // //               (level) => level.id === parseInt(savedLevelId)
// // //             )
// // //           : levelsResponse.data[initialIndex];
// // //         if (!levelToSet) levelToSet = levelsResponse.data[0];
// // //         setCurrentLevel(levelToSet);
// // //         fetchVideos(levelToSet.id);
// // //       } catch (err) {
// // //         console.error("Error fetching course details:", err);
// // //         setError("Error fetching course details. Please try again.");
// // //       }
// // //     };

// // //     fetchCourseDetails();
// // //   }, [courseId, accessToken, navigate]);

// // //   // When the active tab changes, update the current level (using array order here)
// // //   useEffect(() => {
// // //     if (levels.length > 0) {
// // //       let index = 0;
// // //       if (activeTab === "intermediate") index = 1;
// // //       else if (activeTab === "professional") index = 2;
// // //       const selectedLevel = levels[index];
// // //       if (selectedLevel && (!currentLevel || currentLevel.id !== selectedLevel.id)) {
// // //         setCurrentLevel(selectedLevel);
// // //         localStorage.setItem(`lastLevel_${courseId}`, selectedLevel.id);
// // //         fetchVideos(selectedLevel.id);
// // //       }
// // //     }
// // //   }, [activeTab, levels]);

// // //   const fetchVideos = async (levelId) => {
// // //     try {
// // //       const videosResponse = await axios.get(
// // //         `http://127.0.0.1:8000/api/levels/${levelId}/videos/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       setVideos(videosResponse.data);

// // //       await fetchProgress(levelId);

// // //       const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
// // //       const lastWatchedVideo = videosResponse.data.find(
// // //         (video) => video.id === parseInt(savedVideoId)
// // //       );

// // //       if (lastWatchedVideo) {
// // //         setCurrentVideo(lastWatchedVideo);
// // //       } else {
// // //         const unlockedVideos = videosResponse.data.filter(
// // //           (video) => !video.is_locked
// // //         );
// // //         setCurrentVideo(unlockedVideos[0] || videosResponse.data[0]);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching videos:", error);
// // //       setError("Error fetching videos.");
// // //     }
// // //   };

// // //   const fetchProgress = async (levelId) => {
// // //     try {
// // //       const progressResponse = await axios.get(
// // //         `http://127.0.0.1:8000/api/levels/${levelId}/progress/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       setLevelProgress(progressResponse.data.progress);
// // //     } catch (error) {
// // //       console.error("Error fetching progress:", error);
// // //       setLevelProgress(0);
// // //     }
// // //   };

// // //   const handleCompleteVideo = async (videoId) => {
// // //     try {
// // //       await axios.post(
// // //         `http://127.0.0.1:8000/api/videos/${videoId}/complete/`,
// // //         {},
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       toast.success("Video marked as completed!");

// // //       // Update progress after completion
// // //       await fetchProgress(currentLevel.id);

// // //       const updatedVideos = videos.map((video, index) => {
// // //         if (video.id === videoId) {
// // //           return { ...video, is_completed: true };
// // //         }
// // //         if (videos[index - 1]?.id === videoId) {
// // //           return { ...video, is_locked: false };
// // //         }
// // //         return video;
// // //       });

// // //       setVideos(updatedVideos);

// // //       // Move to next unlocked video
// // //       const nextVideo = videos.find(
// // //         (video) => !video.is_locked && video.id !== videoId
// // //       );
// // //       if (nextVideo) {
// // //         setCurrentVideo(nextVideo);
// // //         localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error completing video:", error);
// // //       toast.error("Failed to mark video as completed.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="course-details-container">
// // //       <div className="course-header">
// // //         <h2 className="course-title">
// // //           {course?.title || "Course Details"}
// // //         </h2>
// // //         {error && <p className="error-message">{error}</p>}
// // //       </div>

// // //       <div className="course-tabs">
// // //         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${
// // //                 activeTab === "beginner" ? "active" : ""
// // //               }`}
// // //               onClick={() => handleTabChange("beginner")}
// // //               id="beginner-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="beginner"
// // //               aria-selected={activeTab === "beginner"}
// // //             >
// // //               Beginner
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${
// // //                 activeTab === "intermediate" ? "active" : ""
// // //               }`}
// // //               onClick={() => handleTabChange("intermediate")}
// // //               id="intermediate-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="intermediate"
// // //               aria-selected={activeTab === "intermediate"}
// // //             >
// // //               Intermediate
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${
// // //                 activeTab === "professional" ? "active" : ""
// // //               }`}
// // //               onClick={() => handleTabChange("professional")}
// // //               id="professional-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="professional"
// // //               aria-selected={activeTab === "professional"}
// // //             >
// // //               Professional
// // //             </button>
// // //           </li>
// // //         </ul>

// // //         {/* Tab Content */}
// // //         <div className="tab-content" id="courseTabsContent">
// // //           {/* Beginner Tab */}
// // //           <div
// // //             className={`tab-pane fade ${
// // //               activeTab === "beginner" ? "show active" : ""
// // //             }`}
// // //             id="beginner"
// // //             role="tabpanel"
// // //             aria-labelledby="beginner-tab"
// // //           >
// // //             <div className="level-header">
// // //               <h2>{currentLevel?.name || "Beginner Level"}</h2>
// // //               <button
// // //                 className="btn btn-danger"
// // //                 onClick={() =>
// // //                   currentLevel && fetchVideos(currentLevel.id)
// // //                 }
// // //               >
// // //                 View Level
// // //               </button>
// // //             </div>
// // //             <div className="progress mb-4">
// // //               <div
// // //                 className="progress-bar bg-success"
// // //                 role="progressbar"
// // //                 style={{ width: `${levelProgress}%` }}
// // //                 aria-valuenow={levelProgress}
// // //                 aria-valuemin="0"
// // //                 aria-valuemax="100"
// // //               ></div>
// // //             </div>

// // //             <div className="video-section">
// // //               <div className="video-player">
// // //                 {currentVideo && (
// // //                   <ReactPlayer
// // //                     url={`http://127.0.0.1:8000${currentVideo.video_file}`}
// // //                     controls
// // //                     playing
// // //                     onEnded={() =>
// // //                       handleCompleteVideo(currentVideo.id)
// // //                     }
// // //                   />
// // //                 )}
// // //               </div>

// // //               <div className="video-list">
// // //                 {videos?.map((video) => (
// // //                   <div
// // //                     key={video.id}
// // //                     className={`video-card ${
// // //                       video.is_locked ? "locked" : ""
// // //                     }`}
// // //                   >
// // //                     <h4>{video.title}</h4>
// // //                     <p>{video.description}</p>
// // //                     {video.is_locked ? (
// // //                       <button className="locked-btn" disabled>
// // //                         Locked
// // //                       </button>
// // //                     ) : (
// // //                       <button
// // //                         className="play-btn"
// // //                         onClick={() => {
// // //                           setCurrentVideo(video);
// // //                           localStorage.setItem(
// // //                             `lastVideo_${currentLevel.id}`,
// // //                             video.id
// // //                           );
// // //                         }}
// // //                       >
// // //                         Play Video
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               {videos.every((video) => !video.is_locked) && (
// // //                 <div className="quiz-button-container">
// // //                   <button
// // //                     onClick={() => setShowModal(true)}
// // //                     className="open-quiz-btn"
// // //                   >
// // //                     Open Quiz
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Intermediate Tab */}
// // //           <div
// // //             className={`tab-pane fade ${
// // //               activeTab === "intermediate" ? "show active" : ""
// // //             }`}
// // //             id="intermediate"
// // //             role="tabpanel"
// // //             aria-labelledby="intermediate-tab"
// // //           >
// // //             <div className="level-header">
// // //               <h2>{currentLevel?.name || "Intermediate Level"}</h2>
// // //               <button
// // //                 className="btn btn-danger"
// // //                 onClick={() =>
// // //                   currentLevel && fetchVideos(currentLevel.id)
// // //                 }
// // //               >
// // //                 View Level
// // //               </button>
// // //             </div>
// // //             <div className="progress mb-4">
// // //               <div
// // //                 className="progress-bar bg-success"
// // //                 role="progressbar"
// // //                 style={{ width: `${levelProgress}%` }}
// // //                 aria-valuenow={levelProgress}
// // //                 aria-valuemin="0"
// // //                 aria-valuemax="100"
// // //               ></div>
// // //             </div>

// // //             <div className="video-section">
// // //               {currentVideo ? (
// // //                 <div className="video-player">
// // //                   <ReactPlayer
// // //                     url={`http://127.0.0.1:8000${currentVideo.video_file}`}
// // //                     controls
// // //                     playing
// // //                     onEnded={() =>
// // //                       handleCompleteVideo(currentVideo.id)
// // //                     }
// // //                   />
// // //                 </div>
// // //               ) : (
// // //                 <div className="video-container locked-video">
// // //                   <div className="ratio">
// // //                     <iframe
// // //                       src="https://www.youtube.com/embed/dQw4w9WgXcQ"
// // //                       title="Intermediate Content"
// // //                       allowFullScreen
// // //                     ></iframe>
// // //                     <div className="video-lock-overlay">
// // //                       <div className="lock-content">
// // //                         <i className="bi bi-lock-fill"></i>
// // //                         <h4>Unlock Intermediate Content</h4>
// // //                         <p>Complete beginner level to unlock</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               <div className="video-list">
// // //                 {videos?.map((video) => (
// // //                   <div
// // //                     key={video.id}
// // //                     className={`video-card ${
// // //                       video.is_locked ? "locked" : ""
// // //                     }`}
// // //                   >
// // //                     <h4>{video.title}</h4>
// // //                     <p>{video.description}</p>
// // //                     {video.is_locked ? (
// // //                       <button className="locked-btn" disabled>
// // //                         Locked
// // //                       </button>
// // //                     ) : (
// // //                       <button
// // //                         className="play-btn"
// // //                         onClick={() => {
// // //                           setCurrentVideo(video);
// // //                           localStorage.setItem(
// // //                             `lastVideo_${currentLevel.id}`,
// // //                             video.id
// // //                           );
// // //                         }}
// // //                       >
// // //                         Play Video
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               {videos.every((video) => !video.is_locked) && (
// // //                 <div className="quiz-button-container">
// // //                   <button
// // //                     onClick={() => setShowModal(true)}
// // //                     className="open-quiz-btn"
// // //                   >
// // //                     Open Quiz
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Professional Tab */}
// // //           <div
// // //             className={`tab-pane fade ${
// // //               activeTab === "professional" ? "show active" : ""
// // //             }`}
// // //             id="professional"
// // //             role="tabpanel"
// // //             aria-labelledby="professional-tab"
// // //           >
// // //             <div className="level-header">
// // //               <h2>{currentLevel?.name || "Professional Level"}</h2>
// // //               <button
// // //                 className="btn btn-danger"
// // //                 onClick={() =>
// // //                   currentLevel && fetchVideos(currentLevel.id)
// // //                 }
// // //               >
// // //                 View Level
// // //               </button>
// // //             </div>
// // //             <div className="progress mb-4">
// // //               <div
// // //                 className="progress-bar bg-success"
// // //                 role="progressbar"
// // //                 style={{ width: `${levelProgress}%` }}
// // //                 aria-valuenow={levelProgress}
// // //                 aria-valuemin="0"
// // //                 aria-valuemax="100"
// // //               ></div>
// // //             </div>

// // //             <div className="video-section">
// // //               {currentVideo ? (
// // //                 <div className="video-player">
// // //                   <ReactPlayer
// // //                     url={`http://127.0.0.1:8000${currentVideo.video_file}`}
// // //                     controls
// // //                     playing
// // //                     onEnded={() =>
// // //                       handleCompleteVideo(currentVideo.id)
// // //                     }
// // //                   />
// // //                 </div>
// // //               ) : (
// // //                 <div className="video-container locked-video">
// // //                   <div className="ratio">
// // //                     <iframe
// // //                       src="https://www.youtube.com/embed/dQw4w9WgXcQ"
// // //                       title="Professional Content"
// // //                       allowFullScreen
// // //                     ></iframe>
// // //                     <div className="video-lock-overlay">
// // //                       <div className="lock-content">
// // //                         <i className="bi bi-lock-fill"></i>
// // //                         <h4>Unlock Professional Content</h4>
// // //                         <p>Complete intermediate level to unlock</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               <div className="video-list">
// // //                 {videos?.map((video) => (
// // //                   <div
// // //                     key={video.id}
// // //                     className={`video-card ${
// // //                       video.is_locked ? "locked" : ""
// // //                     }`}
// // //                   >
// // //                     <h4>{video.title}</h4>
// // //                     <p>{video.description}</p>
// // //                     {video.is_locked ? (
// // //                       <button className="locked-btn" disabled>
// // //                         Locked
// // //                       </button>
// // //                     ) : (
// // //                       <button
// // //                         className="play-btn"
// // //                         onClick={() => {
// // //                           setCurrentVideo(video);
// // //                           localStorage.setItem(
// // //                             `lastVideo_${currentLevel.id}`,
// // //                             video.id
// // //                           );
// // //                         }}
// // //                       >
// // //                         Play Video
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               {videos.every((video) => !video.is_locked) && (
// // //                 <div className="quiz-button-container">
// // //                   <button
// // //                     onClick={() => setShowModal(true)}
// // //                     className="open-quiz-btn"
// // //                   >
// // //                     Open Quiz
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Inline Quiz Modal */}
// // //       <div
// // //         className={`modal fade ${showModal ? "show d-block" : ""}`}
// // //         tabIndex="-1"
// // //         role="dialog"
// // //       >
// // //         <div
// // //           className="modal-dialog modal-dialog-centered"
// // //           role="document"
// // //         >
// // //           <div className="modal-content">
// // //             <div className="modal-header">
// // //               <h5 className="modal-title">Starting Quiz</h5>
// // //               <button
// // //                 type="button"
// // //                 className="btn-close"
// // //                 onClick={() => setShowModal(false)}
// // //               ></button>
// // //             </div>
// // //             <div className="modal-body">
// // //               <p>Are you ready to start the quiz?</p>
// // //             </div>
// // //             <div className="modal-footer">
// // //               <button
// // //                 className="btn btn-secondary"
// // //                 onClick={() => setShowModal(false)}
// // //               >
// // //                 Close
// // //               </button>
// // //               <button className="btn btn-success">Start Quiz</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {showModal && <div className="modal-backdrop fade show"></div>}
// // //     </div>
// // //   );
// // // };

// // // export default CourseDetailPage;






// // // ===========================================================================================================



// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import "../styles/coursedetails.css";
// // // import ReactPlayer from "react-player";
// // // import { toast } from "react-toastify";

// // // const CourseDetailPage = () => {
// // //   const { courseId } = useParams();
// // //   const [activeTab, setActiveTab] = useState("beginner");
// // //   const [course, setCourse] = useState(null);
// // //   const [levels, setLevels] = useState([]);
// // //   const [videos, setVideos] = useState([]);
// // //   const [currentVideo, setCurrentVideo] = useState(null);
// // //   const [levelProgress, setLevelProgress] = useState(0);
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();
// // //   const accessToken = localStorage.getItem("accessToken");

// // //   useEffect(() => {
// // //     if (!accessToken) {
// // //       navigate("/login");
// // //       return;
// // //     }

// // //     const fetchCourseDetails = async () => {
// // //       try {
// // //         const courseResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setCourse(courseResponse.data);

// // //         const levelsResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/levels/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setLevels(levelsResponse.data);
// // //       } catch (err) {
// // //         console.error("Error fetching course details:", err);
// // //         setError("Error fetching course details.");
// // //       }
// // //     };

// // //     fetchCourseDetails();
// // //   }, [courseId, accessToken, navigate]);

// // //   useEffect(() => {
// // //     if (levels.length > 0) {
// // //       const selectedLevel = levels.find(
// // //         (level) => level.name.toLowerCase() === activeTab
// // //       );
// // //       if (selectedLevel) {
// // //         fetchVideos(selectedLevel.id);
// // //       }
// // //     }
// // //   }, [activeTab, levels]);

// // //   const fetchVideos = async (levelId) => {
// // //     try {
// // //       const videosResponse = await axios.get(
// // //         `http://127.0.0.1:8000/api/levels/${levelId}/videos/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       setVideos(videosResponse.data);
// // //       setCurrentVideo(videosResponse.data[0]);
// // //     } catch (error) {
// // //       console.error("Error fetching videos:", error);
// // //       setError("Error fetching videos.");
// // //     }
// // //   };

// // //   const handleVideoCompletion = async (videoId) => {
// // //     try {
// // //       await axios.post(
// // //         `http://127.0.0.1:8000/api/videos/${videoId}/complete/`,
// // //         {},
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       toast.success("Video completed!");
// // //     } catch (error) {
// // //       console.error("Error marking video complete:", error);
// // //       toast.error("Failed to mark video as completed.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="course-details-container">
// // //       <h2>{course?.title || "Course Details"}</h2>
// // //       {error && <p className="error-message">{error}</p>}

// // //       <div className="tabs">
// // //         {["beginner", "intermediate", "professional"].map((tab) => (
// // //           <button
// // //             key={tab}
// // //             className={activeTab === tab ? "active" : ""}
// // //             onClick={() => setActiveTab(tab)}
// // //           >
// // //             {tab.charAt(0).toUpperCase() + tab.slice(1)}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       <div className="video-section">
// // //         {currentVideo ? (
// // //           <ReactPlayer
// // //             url={`http://127.0.0.1:8000${currentVideo.video_file}`}
// // //             controls
// // //             playing
// // //             onEnded={() => handleVideoCompletion(currentVideo.id)}
// // //           />
// // //         ) : (
// // //           <p>No videos available.</p>
// // //         )}
// // //       </div>

// // //       <div className="video-list">
// // //         {videos.map((video) => (
// // //           <button key={video.id} onClick={() => setCurrentVideo(video)}>
// // //             {video.title}
// // //           </button>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CourseDetailPage;
// // // =//////////////////////////////////////////////////////



// // // With tab working code 


// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import "../styles/coursedetails.css";
// // // import ReactPlayer from "react-player";
// // // import { toast } from "react-toastify";

// // // function CoursesDetail() {
// // //   const [activeTab, setActiveTab] = useState("beginner");
// // //   const [showModal, setShowModal] = useState(false);
// // //   const { courseId } = useParams();
// // //   const [course, setCourse] = useState(null);
// // //   const [levels, setLevels] = useState([]);
// // //   const [currentLevel, setCurrentLevel] = useState(null);
// // //   const [videos, setVideos] = useState([]);
// // //   const [currentVideo, setCurrentVideo] = useState(null);
// // //   const [levelProgress, setLevelProgress] = useState(0);
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();
// // //   const accessToken = localStorage.getItem("accessToken");

// // //   // Fetch course details and levels when component mounts or activeTab changes
// // //   useEffect(() => {
// // //     if (!accessToken) {
// // //       navigate("/login");
// // //       return;
// // //     }
// // //     const fetchCourseDetails = async () => {
// // //       try {
// // //         const courseResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setCourse(courseResponse.data);

// // //         const levelsResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/levels/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         const fetchedLevels = levelsResponse.data;
// // //         setLevels(fetchedLevels);
// // //         console.log("Fetched Levels:", fetchedLevels);

// // //         // Filter levels using level.name (converted to lowercase)
// // //         const filteredLevels = fetchedLevels.filter(
// // //           (level) => level.name.toLowerCase() === activeTab
// // //         );
// // //         console.log("Filtered Levels for activeTab", activeTab, ":", filteredLevels);

// // //         // Agar match na ho to fallback to all levels (ya error dikhayein)
// // //         const levelsToUse = filteredLevels.length > 0 ? filteredLevels : fetchedLevels;

// // //         if (levelsToUse.length > 0) {
// // //           const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
// // //           const levelToSet =
// // //             savedLevelId && levelsToUse.find((level) => level.id === parseInt(savedLevelId))
// // //               ? levelsToUse.find((level) => level.id === parseInt(savedLevelId))
// // //               : levelsToUse[0];
// // //           setCurrentLevel(levelToSet);
// // //           fetchVideos(levelToSet.id);
// // //         } else {
// // //           setCurrentLevel(null);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error fetching course details:", err);
// // //         setError("Error fetching course details. Please try again.");
// // //       }
// // //     };

// // //     fetchCourseDetails();
// // //   }, [courseId, accessToken, navigate, activeTab]);

// // //   const fetchVideos = async (levelId) => {
// // //     try {
// // //       const videosResponse = await axios.get(
// // //         `http://127.0.0.1:8000/api/levels/${levelId}/videos/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       const fetchedVideos = videosResponse.data;
// // //       setVideos(fetchedVideos);
// // //       console.log("Fetched Videos for level", levelId, ":", fetchedVideos);

// // //       await fetchProgress(levelId);

// // //       const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
// // //       const lastWatchedVideo = fetchedVideos.find(
// // //         (video) => video.id === parseInt(savedVideoId)
// // //       );
// // //       if (lastWatchedVideo) {
// // //         setCurrentVideo(lastWatchedVideo);
// // //       } else {
// // //         const unlockedVideos = fetchedVideos.filter((video) => !video.is_locked);
// // //         setCurrentVideo(unlockedVideos[0] || fetchedVideos[0]);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching videos:", error);
// // //       setError("Error fetching videos.");
// // //     }
// // //   };

// // //   const fetchProgress = async (levelId) => {
// // //     try {
// // //       const progressResponse = await axios.get(
// // //         `http://127.0.0.1:8000/api/levels/${levelId}/progress/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       setLevelProgress(progressResponse.data.progress);
// // //     } catch (error) {
// // //       console.error("Error fetching progress:", error);
// // //       setLevelProgress(0);
// // //     }
// // //   };

// // //   const handleCompleteVideo = async (videoId) => {
// // //     try {
// // //       await axios.post(
// // //         `http://127.0.0.1:8000/api/videos/${videoId}/complete/`,
// // //         {},
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       toast.success("Video marked as completed!");

// // //       await fetchProgress(currentLevel.id);

// // //       const updatedVideos = videos.map((video, index) => {
// // //         if (video.id === videoId) {
// // //           return { ...video, is_completed: true };
// // //         }
// // //         if (videos[index - 1]?.id === videoId) {
// // //           return { ...video, is_locked: false };
// // //         }
// // //         return video;
// // //       });
// // //       setVideos(updatedVideos);

// // //       const nextVideo = updatedVideos.find(
// // //         (video) => !video.is_locked && video.id !== videoId
// // //       );
// // //       if (nextVideo) {
// // //         setCurrentVideo(nextVideo);
// // //         localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error completing video:", error);
// // //       toast.error("Failed to mark video as completed.");
// // //     }
// // //   };

// // //   const handleTabChange = (tabId) => {
// // //     setActiveTab(tabId);
// // //     // current useEffect will refetch and update currentLevel based on activeTab
// // //   };

// // //   return (
// // //     <div className="course-details-container">
// // //       <div className="course-header">
// // //         <h2 className="course-title">{course?.title || "Course Details"}</h2>
// // //         {error && <p className="error-message">{error}</p>}
// // //       </div>

// // //       <div className="course-tabs">
// // //         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "beginner" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("beginner")}
// // //               id="beginner-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="beginner"
// // //               aria-selected={activeTab === "beginner"}
// // //             >
// // //               Beginner
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "intermediate" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("intermediate")}
// // //               id="intermediate-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="intermediate"
// // //               aria-selected={activeTab === "intermediate"}
// // //             >
// // //               Intermediate
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "professional" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("professional")}
// // //               id="professional-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="professional"
// // //               aria-selected={activeTab === "professional"}
// // //             >
// // //               Professional
// // //             </button>
// // //           </li>
// // //         </ul>

// // //         <div className="tab-content" id="courseTabsContent">
// // //           {currentLevel ? (
// // //             <div
// // //               className="tab-pane fade show active"
// // //               id={activeTab}
// // //               role="tabpanel"
// // //               aria-labelledby={`${activeTab}-tab`}
// // //             >
// // //               <div className="level-header d-flex justify-content-between align-items-center">
// // //                 <h2>{currentLevel.name}</h2>
// // //                 <button
// // //                   className="btn btn-danger"
// // //                   onClick={() => {
// // //                     localStorage.setItem(`lastLevel_${courseId}`, currentLevel.id);
// // //                     fetchVideos(currentLevel.id);
// // //                   }}
// // //                 >
// // //                   View Level
// // //                 </button>
// // //               </div>

// // //               <div className="progress mb-4">
// // //                 <div
// // //                   className="progress-bar bg-success"
// // //                   role="progressbar"
// // //                   style={{ width: `${levelProgress}%` }}
// // //                   aria-valuenow={levelProgress}
// // //                   aria-valuemin="0"
// // //                   aria-valuemax="100"
// // //                 ></div>
// // //               </div>

// // //               <div className="video-container">
// // //                 {currentVideo ? (
// // //                   !currentVideo.is_locked ? (
// // //                     <div className="video-player">
// // //                       <ReactPlayer
// // //                         url={`http://127.0.0.1:8000${currentVideo.video_file}`}
// // //                         controls
// // //                         playing
// // //                         width="100%"
// // //                         height="100%"
// // //                         onEnded={() => handleCompleteVideo(currentVideo.id)}
// // //                       />
// // //                     </div>
// // //                   ) : (
// // //                     <div className="video-lock-overlay">
// // //                       <div className="lock-content">
// // //                         <i className="bi bi-lock-fill"></i>
// // //                         <h4>Unlock Content</h4>
// // //                         <p>Complete previous videos to unlock</p>
// // //                       </div>
// // //                     </div>
// // //                   )
// // //                 ) : (
// // //                   <p>No video available</p>
// // //                 )}
// // //               </div>

// // //               <div className="video-list mt-4">
// // //                 {videos.length > 0 ? (
// // //                   videos.map((video) => (
// // //                     <div
// // //                       key={video.id}
// // //                       className={`video-card ${video.is_locked ? "locked" : ""}`}
// // //                     >
// // //                       <h4>{video.title}</h4>
// // //                       <p>{video.description}</p>
// // //                       {video.is_locked ? (
// // //                         <button className="btn btn-secondary" disabled>
// // //                           Locked
// // //                         </button>
// // //                       ) : (
// // //                         <button
// // //                           className="btn btn-primary"
// // //                           onClick={() => {
// // //                             setCurrentVideo(video);
// // //                             localStorage.setItem(`lastVideo_${currentLevel.id}`, video.id);
// // //                           }}
// // //                         >
// // //                           Play Video
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <p>No videos available for this level.</p>
// // //                 )}
// // //               </div>

// // //               <div className="quiz_btn mt-4">
// // //                 <button className="btn btn-theme" onClick={() => setShowModal(true)}>
// // //                   Take Quiz
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <p>No levels available for the selected tab.</p>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Quiz Modal */}
// // //       <div
// // //         className={`modal fade ${showModal ? "show d-block" : ""}`}
// // //         tabIndex="-1"
// // //         role="dialog"
// // //       >
// // //         <div className="modal-dialog modal-dialog-centered" role="document">
// // //           <div className="modal-content">
// // //             <div className="modal-header">
// // //               <h5 className="modal-title">Starting Quiz</h5>
// // //               <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
// // //             </div>
// // //             <div className="modal-body">
// // //               <p>Are you ready to start the quiz?</p>
// // //             </div>
// // //             <div className="modal-footer">
// // //               <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
// // //                 Close
// // //               </button>
// // //               <button className="btn btn-success">Start Quiz</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {showModal && <div className="modal-backdrop fade show"></div>}
// // //     </div>
// // //   );
// // // }

// // // export default CoursesDetail;




// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import "../styles/coursedetails.css";
// // // import ReactPlayer from "react-player";
// // // import { toast } from "react-toastify";

// // // function CoursesDetail() {
// // //   const [activeTab, setActiveTab] = useState("beginner");
// // //   const [showModal, setShowModal] = useState(false);
// // //   const { courseId } = useParams();
// // //   const [course, setCourse] = useState(null);
// // //   const [levels, setLevels] = useState([]);
// // //   const [currentLevel, setCurrentLevel] = useState(null);
// // //   const [videos, setVideos] = useState([]);
// // //   const [currentVideo, setCurrentVideo] = useState(null);
// // //   const [levelProgress, setLevelProgress] = useState(0);
// // //   const [videoProgress, setVideoProgress] = useState(0);
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();
// // //   const accessToken = localStorage.getItem("accessToken");

// // //   // Quiz lock condition: Quiz unlocks only if levelProgress is 100%
// // //   const isQuizLocked = levelProgress < 100;

// // //   useEffect(() => {
// // //     if (!accessToken) {
// // //       navigate("/login");
// // //       return;
// // //     }
// // //     const fetchCourseDetails = async () => {
// // //       try {
// // //         const courseResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setCourse(courseResponse.data);

// // //         const levelsResponse = await axios.get(
// // //           `http://127.0.0.1:8000/api/courses/${courseId}/levels/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         const fetchedLevels = levelsResponse.data;
// // //         setLevels(fetchedLevels);
// // //         console.log("Fetched Levels:", fetchedLevels);

// // //         // Filtering levels using level.name (converted to lowercase)
// // //         const filteredLevels = fetchedLevels.filter(
// // //           (level) => level.name.toLowerCase() === activeTab
// // //         );
// // //         console.log("Filtered Levels for activeTab", activeTab, ":", filteredLevels);

// // //         const levelsToUse = filteredLevels.length > 0 ? filteredLevels : fetchedLevels;

// // //         if (levelsToUse.length > 0) {
// // //           const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
// // //           const levelToSet =
// // //             savedLevelId && levelsToUse.find((level) => level.id === parseInt(savedLevelId))
// // //               ? levelsToUse.find((level) => level.id === parseInt(savedLevelId))
// // //               : levelsToUse[0];
// // //           setCurrentLevel(levelToSet);
// // //           fetchVideos(levelToSet.id);
// // //         } else {
// // //           setCurrentLevel(null);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error fetching course details:", err);
// // //         setError("Error fetching course details. Please try again.");
// // //       }
// // //     };

// // //     fetchCourseDetails();
// // //   }, [courseId, accessToken, navigate, activeTab]);

// // //   const fetchVideos = async (levelId) => {
// // //     try {
// // //       const videosResponse = await axios.get(
// // //         `http://127.0.0.1:8000/api/levels/${levelId}/videos/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       const fetchedVideos = videosResponse.data;
// // //       setVideos(fetchedVideos);
// // //       console.log("Fetched Videos for level", levelId, ":", fetchedVideos);

// // //       await fetchProgress(levelId);

// // //       const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
// // //       const lastWatchedVideo = fetchedVideos.find(
// // //         (video) => video.id === parseInt(savedVideoId)
// // //       );
// // //       if (lastWatchedVideo) {
// // //         setCurrentVideo(lastWatchedVideo);
// // //       } else {
// // //         const unlockedVideos = fetchedVideos.filter((video) => !video.is_locked);
// // //         setCurrentVideo(unlockedVideos[0] || fetchedVideos[0]);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching videos:", error);
// // //       setError("Error fetching videos.");
// // //     }
// // //   };

// // //   const fetchProgress = async (levelId) => {
// // //     try {
// // //       const progressResponse = await axios.get(
// // //         `http://127.0.0.1:8000/api/levels/${levelId}/progress/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       setLevelProgress(progressResponse.data.progress);
// // //     } catch (error) {
// // //       console.error("Error fetching progress:", error);
// // //       setLevelProgress(0);
// // //     }
// // //   };

// // //   const handleCompleteVideo = async (videoId) => {
// // //     try {
// // //       await axios.post(
// // //         `http://127.0.0.1:8000/api/videos/${videoId}/complete/`,
// // //         {},
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       toast.success("Video marked as completed!");

// // //       await fetchProgress(currentLevel.id);

// // //       const updatedVideos = videos.map((video, index) => {
// // //         if (video.id === videoId) {
// // //           return { ...video, is_completed: true };
// // //         }
// // //         if (videos[index - 1]?.id === videoId) {
// // //           return { ...video, is_locked: false };
// // //         }
// // //         return video;
// // //       });
// // //       setVideos(updatedVideos);

// // //       const nextVideo = updatedVideos.find(
// // //         (video) => !video.is_locked && video.id !== videoId
// // //       );
// // //       if (nextVideo) {
// // //         setCurrentVideo(nextVideo);
// // //         localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error completing video:", error);
// // //       toast.error("Failed to mark video as completed.");
// // //     }
// // //   };

// // //   const handleTabChange = (tabId) => {
// // //     setActiveTab(tabId);
// // //   };

// // //   return (
// // //     <div className="course-details-container">
// // //       <div className="course-header">
// // //         <h2 className="course-title">{course?.title || "Course Details"}</h2>
// // //         {error && <p className="error-message">{error}</p>}
// // //       </div>

// // //       <div className="course-tabs">
// // //         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "beginner" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("beginner")}
// // //               id="beginner-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="beginner"
// // //               aria-selected={activeTab === "beginner"}
// // //             >
// // //               Beginner
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "intermediate" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("intermediate")}
// // //               id="intermediate-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="intermediate"
// // //               aria-selected={activeTab === "intermediate"}
// // //             >
// // //               Intermediate
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "professional" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("professional")}
// // //               id="professional-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="professional"
// // //               aria-selected={activeTab === "professional"}
// // //             >
// // //               Professional
// // //             </button>
// // //           </li>
// // //         </ul>

// // //         <div className="tab-content" id="courseTabsContent">
// // //           {currentLevel ? (
// // //             <div
// // //               className="tab-pane fade show active"
// // //               id={activeTab}
// // //               role="tabpanel"
// // //               aria-labelledby={`${activeTab}-tab`}
// // //             >
// // //               <div className="level-header d-flex justify-content-between align-items-center">
// // //                 <h2>{currentLevel.name}</h2>
// // //                 <button
// // //                   className="btn btn-danger"
// // //                   onClick={() => {
// // //                     localStorage.setItem(`lastLevel_${courseId}`, currentLevel.id);
// // //                     fetchVideos(currentLevel.id);
// // //                   }}
// // //                 >
// // //                   View Level
// // //                 </button>
// // //               </div>

// // //               {/* Level progress bar */}
// // //               <div className="progress mb-4">
// // //                 <div style={{ textAlign: "center", marginBottom: "5px" }}>
// // //                   Level Progress: {levelProgress}%
// // //                 </div>
// // //                 <div
// // //                   className="progress-bar bg-success"
// // //                   role="progressbar"
// // //                   style={{ width: `${levelProgress}%` }}
// // //                   aria-valuenow={levelProgress}
// // //                   aria-valuemin="0"
// // //                   aria-valuemax="100"
// // //                 ></div>
// // //               </div>

// // //               <div className="video-container">
// // //                 {currentVideo ? (
// // //                   !currentVideo.is_locked ? (
// // //                     <>
// // //                       <div className="video-player" style={{ marginBottom: "20px" }}>
// // //                         <ReactPlayer
// // //                           url={`http://127.0.0.1:8000${currentVideo.video_file}`}
// // //                           controls
// // //                           playing
// // //                           width="100%"
// // //                           height="360px"
// // //                           onEnded={() => handleCompleteVideo(currentVideo.id)}
// // //                           onProgress={(progress) => setVideoProgress(progress.played * 100)}
// // //                         />
// // //                       </div>
// // //                       <div
// // //                         className="video-progress-container"
// // //                         style={{ width: "100%", padding: "10px 0" }}
// // //                       >
// // //                         <div style={{ textAlign: "center", marginBottom: "5px" }}>
// // //                           Video Progress: {Math.round(videoProgress)}%
// // //                         </div>
// // //                         <div
// // //                           style={{
// // //                             background: "#ddd",
// // //                             height: "5px",
// // //                             width: "100%",
// // //                             borderRadius: "5px"
// // //                           }}
// // //                         >
// // //                           <div
// // //                             style={{
// // //                               background: "green",
// // //                               height: "5px",
// // //                               width: `${videoProgress}%`,
// // //                               borderRadius: "5px"
// // //                             }}
// // //                           ></div>
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   ) : (
// // //                     <div className="video-lock-overlay">
// // //                       <div className="lock-content">
// // //                         <i className="bi bi-lock-fill"></i>
// // //                         <h4>Unlock Content</h4>
// // //                         <p>Complete previous videos to unlock</p>
// // //                       </div>
// // //                     </div>
// // //                   )
// // //                 ) : (
// // //                   <p>No video available</p>
// // //                 )}
// // //               </div>

// // //               <div className="video-list mt-4">
// // //                 {videos.length > 0 ? (
// // //                   videos.map((video) => (
// // //                     <div
// // //                       key={video.id}
// // //                       className={`video-card ${video.is_locked ? "locked" : ""}`}
// // //                     >
// // //                       <h4>{video.title}</h4>
// // //                       <p>{video.description}</p>
// // //                       {video.is_locked ? (
// // //                         <button className="btn btn-secondary" disabled>
// // //                           Locked
// // //                         </button>
// // //                       ) : (
// // //                         <button
// // //                           className="btn btn-primary"
// // //                           onClick={() => {
// // //                             setCurrentVideo(video);
// // //                             localStorage.setItem(`lastVideo_${currentLevel.id}`, video.id);
// // //                           }}
// // //                         >
// // //                           Play Video
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <p>No videos available for this level.</p>
// // //                 )}
// // //               </div>

// // //               {/* Quiz Button with lock logic */}
// // //               <div
// // //                 className="quiz-btn-container"
// // //                 style={{ textAlign: "center", marginTop: "30px" }}
// // //               >
// // //                 {isQuizLocked ? (
// // //                   <button className="btn btn-secondary quiz-btn" disabled>
// // //                     <i className="bi bi-lock-fill"></i> Quiz Locked
// // //                   </button>
// // //                 ) : (
// // //                   <button
// // //                     className="btn btn-primary quiz-btn"
// // //                     onClick={() => setShowModal(true)}
// // //                   >
// // //                     Take Quiz
// // //                   </button>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <p>No levels available for the selected tab.</p>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Quiz Modal */}
// // //       <div
// // //         className={`modal fade ${showModal ? "show d-block" : ""}`}
// // //         tabIndex="-1"
// // //         role="dialog"
// // //       >
// // //         <div className="modal-dialog modal-dialog-centered" role="document">
// // //           <div className="modal-content">
// // //             <div className="modal-header">
// // //               <h5 className="modal-title">Starting Quiz</h5>
// // //               <button
// // //                 type="button"
// // //                 className="btn-close"
// // //                 onClick={() => setShowModal(false)}
// // //               ></button>
// // //             </div>
// // //             <div className="modal-body">
// // //               <p>Are you ready to start the quiz?</p>
// // //             </div>
// // //             <div className="modal-footer">
// // //               <button
// // //                 className="btn btn-secondary"
// // //                 onClick={() => setShowModal(false)}
// // //               >
// // //                 Close
// // //               </button>
// // //               <button className="btn btn-success">Start Quiz</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {showModal && <div className="modal-backdrop fade show"></div>}
// // //     </div>
// // //   );
// // // }

// // // export default CoursesDetail;


// // // // this code is for production:




// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import "../styles/coursedetails.css";
// // // import ReactPlayer from "react-player";
// // // import { toast } from "react-toastify";

// // // function CoursesDetail() {
// // //   const [activeTab, setActiveTab] = useState("beginner");
// // //   const [showModal, setShowModal] = useState(false);
// // //   const { courseId } = useParams();
// // //   const [course, setCourse] = useState(null);
// // //   const [levels, setLevels] = useState([]);
// // //   const [currentLevel, setCurrentLevel] = useState(null);
// // //   const [videos, setVideos] = useState([]);
// // //   const [currentVideo, setCurrentVideo] = useState(null);
// // //   const [levelProgress, setLevelProgress] = useState(0);
// // //   const [videoProgress, setVideoProgress] = useState(0);
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();
// // //   const accessToken = localStorage.getItem("accessToken");

// // //   // Quiz lock condition: Quiz unlocks only if levelProgress is 100%
// // //   const isQuizLocked = levelProgress < 100;

// // //   // Use environment variable for API base URL; remove trailing slash if present.
// // //   const API_BASE_URL = (process.env.REACT_APP_API_URL || "").replace(/\/$/, "");

// // //   useEffect(() => {
// // //     if (!accessToken) {
// // //       navigate("/login");
// // //       return;
// // //     }
// // //     const fetchCourseDetails = async () => {
// // //       try {
// // //         const courseResponse = await axios.get(
// // //           `${API_BASE_URL}/api/courses/${courseId}/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         setCourse(courseResponse.data);

// // //         const levelsResponse = await axios.get(
// // //           `${API_BASE_URL}/api/courses/${courseId}/levels/`,
// // //           { headers: { Authorization: `Bearer ${accessToken}` } }
// // //         );
// // //         const fetchedLevels = levelsResponse.data;
// // //         setLevels(fetchedLevels);
// // //         console.log("Fetched Levels:", fetchedLevels);

// // //         // Filter levels using level.name (converted to lowercase)
// // //         const filteredLevels = fetchedLevels.filter(
// // //           (level) => level.name.toLowerCase() === activeTab
// // //         );
// // //         console.log("Filtered Levels for activeTab", activeTab, ":", filteredLevels);

// // //         const levelsToUse = filteredLevels.length > 0 ? filteredLevels : fetchedLevels;

// // //         if (levelsToUse.length > 0) {
// // //           const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
// // //           const levelToSet =
// // //             savedLevelId && levelsToUse.find((level) => level.id === parseInt(savedLevelId))
// // //               ? levelsToUse.find((level) => level.id === parseInt(savedLevelId))
// // //               : levelsToUse[0];
// // //           setCurrentLevel(levelToSet);
// // //           fetchVideos(levelToSet.id);
// // //         } else {
// // //           setCurrentLevel(null);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error fetching course details:", err);
// // //         setError("Error fetching course details. Please try again.");
// // //       }
// // //     };

// // //     fetchCourseDetails();
// // //   }, [courseId, accessToken, navigate, activeTab, API_BASE_URL]);

// // //   const fetchVideos = async (levelId) => {
// // //     try {
// // //       const videosResponse = await axios.get(
// // //         `${API_BASE_URL}/api/levels/${levelId}/videos/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       let fetchedVideos = videosResponse.data;
// // //       setVideos(fetchedVideos);
// // //       console.log("Fetched Videos for level", levelId, ":", fetchedVideos);

// // //       await fetchProgress(levelId);

// // //       const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
// // //       const lastWatchedVideo = fetchedVideos.find(
// // //         (video) => video.id === parseInt(savedVideoId)
// // //       );
// // //       if (lastWatchedVideo) {
// // //         setCurrentVideo(lastWatchedVideo);
// // //       } else {
// // //         // If no saved video, unlock only the first video and lock the rest.
// // //         if (fetchedVideos.length > 0) {
// // //           fetchedVideos = fetchedVideos.map((video, index) => {
// // //             return index === 0
// // //               ? { ...video, is_locked: false }
// // //               : { ...video, is_locked: true };
// // //           });
// // //           setVideos(fetchedVideos);
// // //           setCurrentVideo(fetchedVideos[0]);
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching videos:", error);
// // //       setError("Error fetching videos.");
// // //     }
// // //   };

// // //   const fetchProgress = async (levelId) => {
// // //     try {
// // //       const progressResponse = await axios.get(
// // //         `${API_BASE_URL}/api/levels/${levelId}/progress/`,
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       setLevelProgress(progressResponse.data.progress);
// // //     } catch (error) {
// // //       console.error("Error fetching progress:", error);
// // //       setLevelProgress(0);
// // //     }
// // //   };

// // //   const handleCompleteVideo = async (videoId) => {
// // //     try {
// // //       await axios.post(
// // //         `${API_BASE_URL}/api/videos/${videoId}/complete/`,
// // //         {},
// // //         { headers: { Authorization: `Bearer ${accessToken}` } }
// // //       );
// // //       toast.success("Video marked as completed!");

// // //       await fetchProgress(currentLevel.id);

// // //       const updatedVideos = videos.map((video, index) => {
// // //         if (video.id === videoId) {
// // //           return { ...video, is_completed: true };
// // //         }
// // //         if (videos[index - 1]?.id === videoId) {
// // //           return { ...video, is_locked: false };
// // //         }
// // //         return video;
// // //       });
// // //       setVideos(updatedVideos);

// // //       const nextVideo = updatedVideos.find(
// // //         (video) => !video.is_locked && video.id !== videoId
// // //       );
// // //       if (nextVideo) {
// // //         setCurrentVideo(nextVideo);
// // //         localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error completing video:", error);
// // //       toast.error("Failed to mark video as completed.");
// // //     }
// // //   };

// // //   const handleTabChange = (tabId) => {
// // //     setActiveTab(tabId);
// // //   };

// // //   return (
// // //     <div className="course-details-container">
// // //       <div className="course-header">
// // //         <h2 className="course-title">{course?.title || "Course Details"}</h2>
// // //         {error && <p className="error-message">{error}</p>}
// // //       </div>

// // //       <div className="course-tabs">
// // //         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "beginner" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("beginner")}
// // //               id="beginner-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="beginner"
// // //               aria-selected={activeTab === "beginner"}
// // //             >
// // //               Beginner
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "intermediate" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("intermediate")}
// // //               id="intermediate-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="intermediate"
// // //               aria-selected={activeTab === "intermediate"}
// // //             >
// // //               Intermediate
// // //             </button>
// // //           </li>
// // //           <li className="nav-item flex-grow-1" role="presentation">
// // //             <button
// // //               className={`nav-link ${activeTab === "professional" ? "active" : ""}`}
// // //               onClick={() => handleTabChange("professional")}
// // //               id="professional-tab"
// // //               type="button"
// // //               role="tab"
// // //               aria-controls="professional"
// // //               aria-selected={activeTab === "professional"}
// // //             >
// // //               Professional
// // //             </button>
// // //           </li>
// // //         </ul>

// // //         <div className="tab-content" id="courseTabsContent">
// // //           {currentLevel ? (
// // //             <div
// // //               className="tab-pane fade show active"
// // //               id={activeTab}
// // //               role="tabpanel"
// // //               aria-labelledby={`${activeTab}-tab`}
// // //             >
// // //               <div className="level-header d-flex justify-content-between align-items-center">
// // //                 <h2>{currentLevel.name}</h2>
// // //                 <button
// // //                   className="btn btn-danger"
// // //                   onClick={() => {
// // //                     localStorage.setItem(`lastLevel_${courseId}`, currentLevel.id);
// // //                     fetchVideos(currentLevel.id);
// // //                   }}
// // //                 >
// // //                   View Level
// // //                 </button>
// // //               </div>

// // //               {/* Level progress bar */}
// // //               <div className="progress mb-4">
// // //                 <div style={{ textAlign: "center", marginBottom: "5px" }}>
// // //                   Level Progress: {levelProgress}%
// // //                 </div>
// // //                 <div
// // //                   className="progress-bar bg-success"
// // //                   role="progressbar"
// // //                   style={{ width: `${levelProgress}%` }}
// // //                   aria-valuenow={levelProgress}
// // //                   aria-valuemin="0"
// // //                   aria-valuemax="100"
// // //                 ></div>
// // //               </div>

// // //               <div className="video-container">
// // //                 {currentVideo ? (
// // //                   !currentVideo.is_locked ? (
// // //                     <div className="video-player">
// // //                       <ReactPlayer
// // //                         url={`${API_BASE_URL}${currentVideo.video_file}`}
// // //                         controls
// // //                         playing
// // //                         width="100%"
// // //                         height="360px"
// // //                         onEnded={() => handleCompleteVideo(currentVideo.id)}
// // //                       />
// // //                     </div>
// // //                   ) : (
// // //                     <div className="video-lock-overlay">
// // //                       <div className="lock-content">
// // //                         <i className="bi bi-lock-fill"></i>
// // //                         <h4>Unlock Content</h4>
// // //                         <p>Complete previous videos to unlock</p>
// // //                       </div>
// // //                     </div>
// // //                   )
// // //                 ) : (
// // //                   <p>No video available</p>
// // //                 )}
// // //               </div>

// // //               <div className="video-list mt-4">
// // //                 {videos.length > 0 ? (
// // //                   videos.map((video) => (
// // //                     <div
// // //                       key={video.id}
// // //                       className={`video-card ${video.is_locked ? "locked" : ""}`}
// // //                     >
// // //                       <h4>{video.title}</h4>
// // //                       <p>{video.description}</p>
// // //                       {video.is_locked ? (
// // //                         <button className="btn btn-secondary" disabled>
// // //                           Locked
// // //                         </button>
// // //                       ) : (
// // //                         <button
// // //                           className="btn btn-primary"
// // //                           onClick={() => {
// // //                             setCurrentVideo(video);
// // //                             localStorage.setItem(`lastVideo_${currentLevel.id}`, video.id);
// // //                           }}
// // //                         >
// // //                           Play Video
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <p>No videos available for this level.</p>
// // //                 )}
// // //               </div>

// // //               <div className="quiz_btn mt-4">
// // //                 <button className="btn btn-theme" onClick={() => setShowModal(true)}>
// // //                   Take Quiz
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <p>No levels available for the selected tab.</p>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Quiz Modal */}
// // //       <div
// // //         className={`modal fade ${showModal ? "show d-block" : ""}`}
// // //         tabIndex="-1"
// // //         role="dialog"
// // //       >
// // //         <div className="modal-dialog modal-dialog-centered" role="document">
// // //           <div className="modal-content">
// // //             <div className="modal-header">
// // //               <h5 className="modal-title">Starting Quiz</h5>
// // //               <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
// // //             </div>
// // //             <div className="modal-body">
// // //               <p>Are you ready to start the quiz?</p>
// // //             </div>
// // //             <div className="modal-footer">
// // //               <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
// // //                 Close
// // //               </button>
// // //               <button className="btn btn-success">Start Quiz</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {showModal && <div className="modal-backdrop fade show"></div>}
// // //     </div>
// // //   );
// // // };

// // // export default CoursesDetail;



// // ======================================================== with working production code


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import ReactPlayer from "react-player";
// import { toast } from "react-toastify";
// import "../styles/coursedetails.css";

// function CoursesDetail() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const accessToken = localStorage.getItem("accessToken");

//   // State declarations
//   const [course, setCourse] = useState(null);
//   const [levels, setLevels] = useState([]);
//   const [activeTab, setActiveTab] = useState("beginner");
//   const [currentLevel, setCurrentLevel] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const [levelProgress, setLevelProgress] = useState(0);
//   const [videoProgress, setVideoProgress] = useState(0);
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   // Quiz unlock condition: quiz button becomes active only if progress is 100%
//   const isQuizLocked = levelProgress < 100;

//   useEffect(() => {
//     if (!accessToken) {
//       navigate("/login");
//       return;
//     }
//     fetchCourseDetails();
//     // eslint-disable-next-line
//   }, [courseId, accessToken, navigate, activeTab]);

//   // Fetch course details and levels from API
//   const fetchCourseDetails = async () => {
//     try {
//       const courseResponse = await axios.get(
//         `http://127.0.0.1:8000/api/courses/${courseId}/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setCourse(courseResponse.data);

//       const levelsResponse = await axios.get(
//         `http://127.0.0.1:8000/api/courses/${courseId}/levels/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       const fetchedLevels = levelsResponse.data;
//       setLevels(fetchedLevels);

//       // Filter levels based on the active tab (comparing lowercase)
//       const filteredLevels = fetchedLevels.filter(
//         (level) => level.name.toLowerCase() === activeTab
//       );
//       const levelsToUse = filteredLevels.length > 0 ? filteredLevels : fetchedLevels;

//       if (levelsToUse.length > 0) {
//         const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
//         const levelToSet =
//           savedLevelId && levelsToUse.find((level) => level.id === parseInt(savedLevelId))
//             ? levelsToUse.find((level) => level.id === parseInt(savedLevelId))
//             : levelsToUse[0];
//         setCurrentLevel(levelToSet);
//         fetchVideos(levelToSet.id);
//       } else {
//         setCurrentLevel(null);
//       }
//     } catch (err) {
//       console.error("Error fetching course details:", err);
//       setError("Error fetching course details. Please try again.");
//     }
//   };

//   // Fetch videos and progress for a selected level
//   const fetchVideos = async (levelId) => {
//     try {
//       const videosResponse = await axios.get(
//         `http://127.0.0.1:8000/api/levels/${levelId}/videos/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       const fetchedVideos = videosResponse.data;
//       setVideos(fetchedVideos);

//       const progressResponse = await axios.get(
//         `http://127.0.0.1:8000/api/levels/${levelId}/progress/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setLevelProgress(progressResponse.data.progress);

//       // Restore last watched video from localStorage if available
//       const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
//       const lastWatchedVideo = fetchedVideos.find(
//         (video) => video.id === parseInt(savedVideoId)
//       );
//       if (lastWatchedVideo) {
//         setCurrentVideo(lastWatchedVideo);
//       } else {
//         const unlockedVideos = fetchedVideos.filter((video) => !video.is_locked);
//         setCurrentVideo(unlockedVideos[0] || fetchedVideos[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//       setError("Error fetching videos.");
//     }
//   };

//   // Mark video as completed, update progress and unlock next video if applicable
//   const handleCompleteVideo = async (videoId) => {
//     try {
//       await axios.post(
//         `http://127.0.0.1:8000/api/videos/${videoId}/complete/`,
//         {},
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       toast.success("Video marked as completed!");

//       // Update level progress
//       const progressResponse = await axios.get(
//         `http://127.0.0.1:8000/api/levels/${currentLevel.id}/progress/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setLevelProgress(progressResponse.data.progress);

//       // Mark video as completed and unlock the next one
//       const updatedVideos = videos.map((video, index) => {
//         if (video.id === videoId) {
//           return { ...video, is_completed: true };
//         }
//         if (videos[index - 1]?.id === videoId) {
//           return { ...video, is_locked: false };
//         }
//         return video;
//       });
//       setVideos(updatedVideos);

//       // Move to the next unlocked video if available
//       const nextVideo = updatedVideos.find(
//         (video) => !video.is_locked && video.id !== videoId
//       );
//       if (nextVideo) {
//         setCurrentVideo(nextVideo);
//         localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
//       }
//     } catch (error) {
//       console.error("Error completing video:", error);
//       toast.error("Failed to mark video as completed.");
//     }
//   };

//   // Handle switching between tabs (levels)
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   // Manual level selection (if you want users to switch level within a tab)
//   const handleLevelSelect = (level) => {
//     setCurrentLevel(level);
//     localStorage.setItem(`lastLevel_${courseId}`, level.id);
//     fetchVideos(level.id);
//   };

//   return (
//     <div className="course-details-container">
//       <div className="course-header">
//         <h1>{course?.title || "Course Details"}</h1>
//         <p className="course-subtitle">
//           {course?.subtitle || "Master the art of FOREX scalping with our comprehensive course"}
//         </p>
//         {error && <p className="error-message">{error}</p>}
//       </div>

//       {/* Tabs for Beginner, Intermediate, Professional */}
//       <div className="course-tabs">
//         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
//           <li className="nav-item flex-grow-1" role="presentation">
//             <button
//               className={`nav-link ${activeTab === "beginner" ? "active" : ""}`}
//               onClick={() => handleTabChange("beginner")}
//               id="beginner-tab"
//               type="button"
//               role="tab"
//               aria-controls="beginner"
//               aria-selected={activeTab === "beginner"}
//             >
//               Beginner
//             </button>
//           </li>
//           <li className="nav-item flex-grow-1" role="presentation">
//             <button
//               className={`nav-link ${activeTab === "intermediate" ? "active" : ""}`}
//               onClick={() => handleTabChange("intermediate")}
//               id="intermediate-tab"
//               type="button"
//               role="tab"
//               aria-controls="intermediate"
//               aria-selected={activeTab === "intermediate"}
//             >
//               Intermediate
//             </button>
//           </li>
//           <li className="nav-item flex-grow-1" role="presentation">
//             <button
//               className={`nav-link ${activeTab === "professional" ? "active" : ""}`}
//               onClick={() => handleTabChange("professional")}
//               id="professional-tab"
//               type="button"
//               role="tab"
//               aria-controls="professional"
//               aria-selected={activeTab === "professional"}
//             >
//               Professional
//             </button>
//           </li>
//         </ul>

//         {/* Tab Content */}
//         <div className="tab-content" id="courseTabsContent">
//           {/* Beginner Tab */}
//           <div
//             className={`tab-pane fade ${activeTab === "beginner" ? "show active" : ""}`}
//             id="beginner"
//             role="tabpanel"
//             aria-labelledby="beginner-tab"
//           >
//             <div className="level-header">
//               <h2>{currentLevel?.name || "Beginner Level"}</h2>
//               <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
//                 View Level
//               </button>
//             </div>
//             <div className="progress mb-4">
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${levelProgress}%` }}
//                 aria-valuenow={levelProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <div className="video-container">
//               {currentVideo ? (
//                 !currentVideo.is_locked ? (
//                   <>
//                     <div className="video-player" style={{ marginBottom: "20px" }}>
//                       <ReactPlayer
//                         url={`http://127.0.0.1:8000${currentVideo.video_file}`}
//                         controls
//                         playing
//                         width="100%"
//                         height="360px"
//                         onEnded={() => handleCompleteVideo(currentVideo.id)}
//                         onProgress={(progress) =>
//                           setVideoProgress(progress.played * 100)
//                         }
//                       />
//                     </div>
//                     <div className="video-progress-container" style={{ width: "100%", padding: "10px 0" }}>
//                       <div style={{ textAlign: "center", marginBottom: "5px" }}>
//                         Video Progress: {Math.round(videoProgress)}%
//                       </div>
//                       <div style={{ background: "#ddd", height: "5px", width: "100%", borderRadius: "5px" }}>
//                         <div
//                           style={{
//                             background: "green",
//                             height: "5px",
//                             width: `${videoProgress}%`,
//                             borderRadius: "5px",
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <div className="video-lock-overlay">
//                     <div className="lock-content">
//                       <i className="bi bi-lock-fill"></i>
//                       <h4>Unlock Content</h4>
//                       <p>Complete previous videos to unlock</p>
//                     </div>
//                   </div>
//                 )
//               ) : (
//                 <p>No video available</p>
//               )}
//             </div>

//             {/* Course Modules (static/demonstrative content) */}
//             <div className="course-modules mt-4">
//               <div className="module-item">
//                 <h3>Introduction to FOREX Scalping</h3>
//                 <p>Learn the basics of scalping in the FOREX market</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Best Forex Currency Pairs to Scalp</h3>
//                 <p>Discover which currency pairs are best for scalping strategies</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>How to Choose Your Broker</h3>
//                 <p>Learn how to select the right broker for scalping</p>
//               </div>
//               <div className="quiz_btn">
//                 <button className="theme_btn" onClick={() => setShowModal(true)}>
//                   Take Quiz
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Intermediate Tab */}
//           <div
//             className={`tab-pane fade ${activeTab === "intermediate" ? "show active" : ""}`}
//             id="intermediate"
//             role="tabpanel"
//             aria-labelledby="intermediate-tab"
//           >
//             <div className="level-header">
//               <h2>{currentLevel?.name || "Intermediate Level"}</h2>
//               <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
//                 View Level
//               </button>
//             </div>
//             <div className="progress mb-4">
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${levelProgress}%` }}
//                 aria-valuenow={levelProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <div className="video-container locked-video">
//               <div className="video-lock-overlay">
//                 <div className="lock-content">
//                   <i className="bi bi-lock-fill"></i>
//                   <h4>Unlock Intermediate Content</h4>
//                   <p>Complete beginner level to unlock</p>
//                 </div>
//               </div>
//             </div>
//             <div className="course-modules mt-4">
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Advanced Scalping Patterns</h3>
//                 <p>Master advanced patterns for more profitable trades</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Risk Management for Scalpers</h3>
//                 <p>Learn essential risk management techniques</p>
//               </div>
//               <div className="quiz_btn">
//                 <button className="theme_btn" onClick={() => setShowModal(true)}>
//                   Take Quiz
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Professional Tab */}
//           <div
//             className={`tab-pane fade ${activeTab === "professional" ? "show active" : ""}`}
//             id="professional"
//             role="tabpanel"
//             aria-labelledby="professional-tab"
//           >
//             <div className="level-header">
//               <h2>{currentLevel?.name || "Professional Level"}</h2>
//               <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
//                 View Level
//               </button>
//             </div>
//             <div className="progress mb-4">
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${levelProgress}%` }}
//                 aria-valuenow={levelProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <div className="video-container locked-video">
//               <div className="video-lock-overlay">
//                 <div className="lock-content">
//                   <i className="bi bi-lock-fill"></i>
//                   <h4>Unlock Professional Content</h4>
//                   <p>Complete intermediate level to unlock</p>
//                 </div>
//               </div>
//             </div>
//             <div className="course-modules mt-4">
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Expert Scalping Strategies</h3>
//                 <p>Advanced techniques used by professional traders</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Automating Your Scalping Strategy</h3>
//                 <p>Learn how to automate your scalping strategies</p>
//               </div>
//               <div className="quiz_btn">
//                 <button className="theme_btn" onClick={() => setShowModal(true)}>
//                   Take Quiz
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Starting Quiz</h5>
//               <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
//             </div>
//             <div className="modal-body">
//               <p>Are you ready to start the quiz?</p>
//             </div>
//             <div className="modal-footer">
//               <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
//                 Close
//               </button>
//               <button className="btn btn-success">Start Quiz</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showModal && <div className="modal-backdrop fade show"></div>}
//     </div>
//   );
// }

// export default CoursesDetail;




// update and correct code all thing working 

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import ReactPlayer from "react-player";
// import { toast } from "react-toastify";
// import "../styles/coursedetails.css";

// function CoursesDetail() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const accessToken = localStorage.getItem("accessToken");

//   // State declarations
//   const [course, setCourse] = useState(null);
//   const [levels, setLevels] = useState([]);
//   const [activeTab, setActiveTab] = useState("beginner");
//   const [currentLevel, setCurrentLevel] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const [levelProgress, setLevelProgress] = useState(0);
//   const [videoProgress, setVideoProgress] = useState(0);
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   // Quiz unlock condition: quiz button becomes active only if progress is 100%
//   const isQuizLocked = levelProgress < 100;

//   useEffect(() => {
//     if (!accessToken) {
//       navigate("/login");
//       return;
//     }
//     fetchCourseDetails();
//     // eslint-disable-next-line
//   }, [courseId, accessToken, navigate, activeTab]);

//   // Fetch course details and levels from API
//   const fetchCourseDetails = async () => {
//     try {
//       const courseResponse = await axios.get(
//         `http://127.0.0.1:8000/api/courses/${courseId}/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setCourse(courseResponse.data);

//       const levelsResponse = await axios.get(
//         `http://127.0.0.1:8000/api/courses/${courseId}/levels/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       const fetchedLevels = levelsResponse.data;
//       setLevels(fetchedLevels);

//       // Filter levels based on the active tab (comparing lowercase)
//       const filteredLevels = fetchedLevels.filter(
//         (level) => level.name.toLowerCase() === activeTab
//       );
//       const levelsToUse = filteredLevels.length > 0 ? filteredLevels : fetchedLevels;

//       if (levelsToUse.length > 0) {
//         const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
//         const levelToSet =
//           savedLevelId && levelsToUse.find((level) => level.id === parseInt(savedLevelId))
//             ? levelsToUse.find((level) => level.id === parseInt(savedLevelId))
//             : levelsToUse[0];
//         setCurrentLevel(levelToSet);
//         fetchVideos(levelToSet.id);
//       } else {
//         setCurrentLevel(null);
//       }
//     } catch (err) {
//       console.error("Error fetching course details:", err);
//       setError("Error fetching course details. Please try again.");
//     }
//   };

//   // Fetch videos and progress for a selected level
//   const fetchVideos = async (levelId) => {
//     try {
//       const videosResponse = await axios.get(
//         `http://127.0.0.1:8000/api/levels/${levelId}/videos/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       const fetchedVideos = videosResponse.data;
//       setVideos(fetchedVideos);

//       const progressResponse = await axios.get(
//         `http://127.0.0.1:8000/api/levels/${levelId}/progress/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setLevelProgress(progressResponse.data.progress);

//       // Restore last watched video from localStorage if available
//       const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
//       const lastWatchedVideo = fetchedVideos.find(
//         (video) => video.id === parseInt(savedVideoId)
//       );
//       if (lastWatchedVideo) {
//         setCurrentVideo(lastWatchedVideo);
//       } else {
//         const unlockedVideos = fetchedVideos.filter((video) => !video.is_locked);
//         setCurrentVideo(unlockedVideos[0] || fetchedVideos[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//       setError("Error fetching videos.");
//     }
//   };

//   // Mark video as completed, update progress and unlock next video if applicable
//   const handleCompleteVideo = async (videoId) => {
//     try {
//       await axios.post(
//         `http://127.0.0.1:8000/api/videos/${videoId}/complete/`,
//         {},
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       toast.success("Video marked as completed!");

//       // Update level progress
//       const progressResponse = await axios.get(
//         `http://127.0.0.1:8000/api/levels/${currentLevel.id}/progress/`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setLevelProgress(progressResponse.data.progress);

//       // Mark video as completed and unlock the next one
//       const updatedVideos = videos.map((video, index) => {
//         if (video.id === videoId) {
//           return { ...video, is_completed: true };
//         }
//         if (videos[index - 1]?.id === videoId) {
//           return { ...video, is_locked: false };
//         }
//         return video;
//       });
//       setVideos(updatedVideos);

//       // Move to the next unlocked video if available
//       const nextVideo = updatedVideos.find(
//         (video) => !video.is_locked && video.id !== videoId
//       );
//       if (nextVideo) {
//         setCurrentVideo(nextVideo);
//         localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
//       }
//     } catch (error) {
//       console.error("Error completing video:", error);
//       toast.error("Failed to mark video as completed.");
//     }
//   };

//   // Handle switching between tabs (levels)
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   // Manual level selection (if you want users to switch level within a tab)
//   const handleLevelSelect = (level) => {
//     setCurrentLevel(level);
//     localStorage.setItem(`lastLevel_${courseId}`, level.id);
//     fetchVideos(level.id);
//   };

//   // Utility to construct a proper video URL with a slash in between
//   const getVideoUrl = (video) => {
//     if (!video || !video.video_file) return "";
//     // If video_file already starts with a slash, do not add an extra one.
//     return `http://127.0.0.1:8000${video.video_file.startsWith("/") ? video.video_file : "/" + video.video_file}`;
//   };

//   return (
//     <div className="course-details-container">
//       <div className="course-header">
//         <h1>{course?.title || "Course Details"}</h1>
//         <p className="course-subtitle">
//           {course?.subtitle || "Master the art of FOREX scalping with our comprehensive course"}
//         </p>
//         {error && <p className="error-message">{error}</p>}
//       </div>

//       {/* Tabs for Beginner, Intermediate, Professional */}
//       <div className="course-tabs">
//         <ul className="nav nav-tabs" id="courseTabs" role="tablist">
//           <li className="nav-item flex-grow-1" role="presentation">
//             <button
//               className={`nav-link ${activeTab === "beginner" ? "active" : ""}`}
//               onClick={() => handleTabChange("beginner")}
//               id="beginner-tab"
//               type="button"
//               role="tab"
//               aria-controls="beginner"
//               aria-selected={activeTab === "beginner"}
//             >
//               Beginner
//             </button>
//           </li>
//           <li className="nav-item flex-grow-1" role="presentation">
//             <button
//               className={`nav-link ${activeTab === "intermediate" ? "active" : ""}`}
//               onClick={() => handleTabChange("intermediate")}
//               id="intermediate-tab"
//               type="button"
//               role="tab"
//               aria-controls="intermediate"
//               aria-selected={activeTab === "intermediate"}
//             >
//               Intermediate
//             </button>
//           </li>
//           <li className="nav-item flex-grow-1" role="presentation">
//             <button
//               className={`nav-link ${activeTab === "professional" ? "active" : ""}`}
//               onClick={() => handleTabChange("professional")}
//               id="professional-tab"
//               type="button"
//               role="tab"
//               aria-controls="professional"
//               aria-selected={activeTab === "professional"}
//             >
//               Professional
//             </button>
//           </li>
//         </ul>

//         {/* Tab Content */}
//         <div className="tab-content" id="courseTabsContent">
//           {/* Beginner Tab */}
//           <div
//             className={`tab-pane fade ${activeTab === "beginner" ? "show active" : ""}`}
//             id="beginner"
//             role="tabpanel"
//             aria-labelledby="beginner-tab"
//           >
//             <div className="level-header">
//               <h2>{currentLevel?.name || "Beginner Level"}</h2>
//               <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
//                 View Level
//               </button>
//             </div>
//             <div className="progress mb-4">
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${levelProgress}%` }}
//                 aria-valuenow={levelProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <div className="video-container">
//               {currentVideo ? (
//                 !currentVideo.is_locked ? (
//                   <>
//                     <div className="video-player" style={{ marginBottom: "20px" }}>
//                       <ReactPlayer
//                         url={getVideoUrl(currentVideo)}
//                         controls
//                         playing
//                         width="100%"
//                         height="360px"
//                         onEnded={() => handleCompleteVideo(currentVideo.id)}
//                         onProgress={(progress) =>
//                           setVideoProgress(progress.played * 100)
//                         }
//                       />
//                     </div>
//                     <div className="video-progress-container" style={{ width: "100%", padding: "10px 0" }}>
//                       <div style={{ textAlign: "center", marginBottom: "5px" }}>
//                         Video Progress: {Math.round(videoProgress)}%
//                       </div>
//                       <div style={{ background: "#ddd", height: "5px", width: "100%", borderRadius: "5px" }}>
//                         <div
//                           style={{
//                             background: "green",
//                             height: "5px",
//                             width: `${videoProgress}%`,
//                             borderRadius: "5px",
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <div className="video-lock-overlay">
//                     <div className="lock-content">
//                       <i className="bi bi-lock-fill"></i>
//                       <h4>Unlock Content</h4>
//                       <p>Complete previous videos to unlock</p>
//                     </div>
//                   </div>
//                 )
//               ) : (
//                 <p>No video available</p>
//               )}
//             </div>

//             {/* Course Modules */}
//             <div className="course-modules mt-4">
//               <div className="module-item">
//                 <h3>Introduction to FOREX Scalping</h3>
//                 <p>Learn the basics of scalping in the FOREX market</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Best Forex Currency Pairs to Scalp</h3>
//                 <p>Discover which currency pairs are best for scalping strategies</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>How to Choose Your Broker</h3>
//                 <p>Learn how to select the right broker for scalping</p>
//               </div>
//               <div className="quiz_btn">
//                 <button className="theme_btn" onClick={() => setShowModal(true)}>
//                   Take Quiz
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Intermediate Tab */}
//           <div
//             className={`tab-pane fade ${activeTab === "intermediate" ? "show active" : ""}`}
//             id="intermediate"
//             role="tabpanel"
//             aria-labelledby="intermediate-tab"
//           >
//             <div className="level-header">
//               <h2>{currentLevel?.name || "Intermediate Level"}</h2>
//               <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
//                 View Level
//               </button>
//             </div>
//             <div className="progress mb-4">
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${levelProgress}%` }}
//                 aria-valuenow={levelProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <div className="video-container locked-video">
//               <div className="video-lock-overlay">
//                 <div className="lock-content">
//                   <i className="bi bi-lock-fill"></i>
//                   <h4>Unlock Intermediate Content</h4>
//                   <p>Complete beginner level to unlock</p>
//                 </div>
//               </div>
//             </div>
//             <div className="course-modules mt-4">
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Advanced Scalping Patterns</h3>
//                 <p>Master advanced patterns for more profitable trades</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Risk Management for Scalpers</h3>
//                 <p>Learn essential risk management techniques</p>
//               </div>
//               <div className="quiz_btn">
//                 <button className="theme_btn" onClick={() => setShowModal(true)}>
//                   Take Quiz
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Professional Tab */}
//           <div
//             className={`tab-pane fade ${activeTab === "professional" ? "show active" : ""}`}
//             id="professional"
//             role="tabpanel"
//             aria-labelledby="professional-tab"
//           >
//             <div className="level-header">
//               <h2>{currentLevel?.name || "Professional Level"}</h2>
//               <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
//                 View Level
//               </button>
//             </div>
//             <div className="progress mb-4">
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${levelProgress}%` }}
//                 aria-valuenow={levelProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <div className="video-container locked-video">
//               <div className="video-lock-overlay">
//                 <div className="lock-content">
//                   <i className="bi bi-lock-fill"></i>
//                   <h4>Unlock Professional Content</h4>
//                   <p>Complete intermediate level to unlock</p>
//                 </div>
//               </div>
//             </div>
//             <div className="course-modules mt-4">
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Expert Scalping Strategies</h3>
//                 <p>Advanced techniques used by professional traders</p>
//               </div>
//               <div className="module-item locked">
//                 <div className="locked-overlay">
//                   <i className="bi bi-lock-fill"></i>
//                   <span>Locked</span>
//                 </div>
//                 <h3>Automating Your Scalping Strategy</h3>
//                 <p>Learn how to automate your scalping strategies</p>
//               </div>
//               <div className="quiz_btn">
//                 <button className="theme_btn" onClick={() => setShowModal(true)}>
//                   Take Quiz
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quiz Modal */}
//       <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Starting Quiz</h5>
//               <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
//             </div>
//             <div className="modal-body">
//               <p>Are you ready to start the quiz?</p>
//             </div>
//             <div className="modal-footer">
//               <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
//                 Close
//               </button>
//               <button className="btn btn-success">Start Quiz</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showModal && <div className="modal-backdrop fade show"></div>}
//     </div>
//   );
// }

// export default CoursesDetail;





// 

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import "../styles/coursedetails.css";

// Use the API base URL from your environment variable and remove any trailing slash.
const API_BASE_URL = process.env.REACT_APP_API_URL.replace(/\/$/, "");

function CoursesDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  // State declarations
  const [course, setCourse] = useState(null);
  const [levels, setLevels] = useState([]);
  const [activeTab, setActiveTab] = useState("beginner");
  const [currentLevel, setCurrentLevel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [levelProgress, setLevelProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Quiz unlock condition: quiz button becomes active only if progress is 100%
  const isQuizLocked = levelProgress < 100;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
      return;
    }
    fetchCourseDetails();
    // eslint-disable-next-line
  }, [courseId, accessToken, navigate, activeTab]);

  // Fetch course details and levels from API
  const fetchCourseDetails = async () => {
    try {
      const courseResponse = await axios.get(
        `${API_BASE_URL}/api/courses/${courseId}/`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setCourse(courseResponse.data);

      const levelsResponse = await axios.get(
        `${API_BASE_URL}/api/courses/${courseId}/levels/`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      const fetchedLevels = levelsResponse.data;
      setLevels(fetchedLevels);

      // Filter levels based on the active tab (comparing lowercase)
      const filteredLevels = fetchedLevels.filter(
        (level) => level.name.toLowerCase() === activeTab
      );
      const levelsToUse = filteredLevels.length > 0 ? filteredLevels : fetchedLevels;

      if (levelsToUse.length > 0) {
        const savedLevelId = localStorage.getItem(`lastLevel_${courseId}`);
        const levelToSet =
          savedLevelId && levelsToUse.find((level) => level.id === parseInt(savedLevelId))
            ? levelsToUse.find((level) => level.id === parseInt(savedLevelId))
            : levelsToUse[0];
        setCurrentLevel(levelToSet);
        fetchVideos(levelToSet.id);
      } else {
        setCurrentLevel(null);
      }
    } catch (err) {
      console.error("Error fetching course details:", err);
      setError("Error fetching course details. Please try again.");
    }
  };

  // Fetch videos and progress for a selected level
  const fetchVideos = async (levelId) => {
    try {
      const videosResponse = await axios.get(
        `${API_BASE_URL}/api/levels/${levelId}/videos/`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      const fetchedVideos = videosResponse.data;
      setVideos(fetchedVideos);

      const progressResponse = await axios.get(
        `${API_BASE_URL}/api/levels/${levelId}/progress/`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setLevelProgress(progressResponse.data.progress);

      // Restore last watched video from localStorage if available
      const savedVideoId = localStorage.getItem(`lastVideo_${levelId}`);
      const lastWatchedVideo = fetchedVideos.find(
        (video) => video.id === parseInt(savedVideoId)
      );
      if (lastWatchedVideo) {
        setCurrentVideo(lastWatchedVideo);
      } else {
        const unlockedVideos = fetchedVideos.filter((video) => !video.is_locked);
        setCurrentVideo(unlockedVideos[0] || fetchedVideos[0]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError("Error fetching videos.");
    }
  };

  // Mark video as completed, update progress and unlock next video if applicable
  const handleCompleteVideo = async (videoId) => {
    try {
      await axios.post(
        `${API_BASE_URL}/api/videos/${videoId}/complete/`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      toast.success("Video marked as completed!");

      // Update level progress
      const progressResponse = await axios.get(
        `${API_BASE_URL}/api/levels/${currentLevel.id}/progress/`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setLevelProgress(progressResponse.data.progress);

      // Mark video as completed and unlock the next one
      const updatedVideos = videos.map((video, index) => {
        if (video.id === videoId) {
          return { ...video, is_completed: true };
        }
        if (videos[index - 1]?.id === videoId) {
          return { ...video, is_locked: false };
        }
        return video;
      });
      setVideos(updatedVideos);

      // Move to the next unlocked video if available
      const nextVideo = updatedVideos.find(
        (video) => !video.is_locked && video.id !== videoId
      );
      if (nextVideo) {
        setCurrentVideo(nextVideo);
        localStorage.setItem(`lastVideo_${currentLevel.id}`, nextVideo.id);
      }
    } catch (error) {
      console.error("Error completing video:", error);
      toast.error("Failed to mark video as completed.");
    }
  };

  // Handle switching between tabs (levels)
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Manual level selection (if you want users to switch level within a tab)
  const handleLevelSelect = (level) => {
    setCurrentLevel(level);
    localStorage.setItem(`lastLevel_${courseId}`, level.id);
    fetchVideos(level.id);
  };

  // Utility to construct a proper video URL.
  // If the video file is already an absolute URL, return it as-is.
  const getVideoUrl = (video) => {
    if (!video || !video.video_file) return "";
    if (
      video.video_file.startsWith("http://") ||
      video.video_file.startsWith("https://")
    ) {
      return video.video_file;
    }
    // Otherwise, build the URL using the API_BASE_URL.
    const url = `${API_BASE_URL}${
      video.video_file.startsWith("/") ? video.video_file : "/" + video.video_file
    }`;
    console.log("getVideoUrl: ", url);
    return url;
  };

  return (
    <div className="course-details-container">
      <div className="course-header">
        <h1>{course?.title || "Course Details"}</h1>
        <p className="course-subtitle">
          {course?.subtitle ||
            "Master the art of FOREX scalping with our comprehensive course"}
        </p>
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Tabs for Beginner, Intermediate, Professional */}
      <div className="course-tabs">
        <ul className="nav nav-tabs" id="courseTabs" role="tablist">
          <li className="nav-item flex-grow-1" role="presentation">
            <button
              className={`nav-link ${activeTab === "beginner" ? "active" : ""}`}
              onClick={() => handleTabChange("beginner")}
              id="beginner-tab"
              type="button"
              role="tab"
              aria-controls="beginner"
              aria-selected={activeTab === "beginner"}
            >
              Beginner
            </button>
          </li>
          <li className="nav-item flex-grow-1" role="presentation">
            <button
              className={`nav-link ${activeTab === "intermediate" ? "active" : ""}`}
              onClick={() => handleTabChange("intermediate")}
              id="intermediate-tab"
              type="button"
              role="tab"
              aria-controls="intermediate"
              aria-selected={activeTab === "intermediate"}
            >
              Intermediate
            </button>
          </li>
          <li className="nav-item flex-grow-1" role="presentation">
            <button
              className={`nav-link ${activeTab === "professional" ? "active" : ""}`}
              onClick={() => handleTabChange("professional")}
              id="professional-tab"
              type="button"
              role="tab"
              aria-controls="professional"
              aria-selected={activeTab === "professional"}
            >
              Professional
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" id="courseTabsContent">
          {/* Beginner Tab */}
          <div
            className={`tab-pane fade ${activeTab === "beginner" ? "show active" : ""}`}
            id="beginner"
            role="tabpanel"
            aria-labelledby="beginner-tab"
          >
            <div className="level-header">
              <h2>{currentLevel?.name || "Beginner Level"}</h2>
              <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
                View Level
              </button>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${levelProgress}%` }}
                aria-valuenow={levelProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="video-container">
              {currentVideo ? (
                !currentVideo.is_locked ? (
                  <>
                    <div className="video-player" style={{ marginBottom: "20px" }}>
                      <ReactPlayer
                        url={getVideoUrl(currentVideo)}
                        controls
                        playing
                        width="100%"
                        height="360px"
                        onEnded={() => handleCompleteVideo(currentVideo.id)}
                        onProgress={(progress) => setVideoProgress(progress.played * 100)}
                      />
                    </div>
                    <div className="video-progress-container" style={{ width: "100%", padding: "10px 0" }}>
                      <div style={{ textAlign: "center", marginBottom: "5px" }}>
                        Video Progress: {Math.round(videoProgress)}%
                      </div>
                      <div style={{ background: "#ddd", height: "5px", width: "100%", borderRadius: "5px" }}>
                        <div
                          style={{
                            background: "green",
                            height: "5px",
                            width: `${videoProgress}%`,
                            borderRadius: "5px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="video-lock-overlay">
                    <div className="lock-content">
                      <i className="bi bi-lock-fill"></i>
                      <h4>Unlock Content</h4>
                      <p>Complete previous videos to unlock</p>
                    </div>
                  </div>
                )
              ) : (
                <p>No video available</p>
              )}
            </div>

            {/* Course Modules */}
            <div className="course-modules mt-4">
              <div className="module-item">
                <h3>Introduction to FOREX Scalping</h3>
                <p>Learn the basics of scalping in the FOREX market</p>
              </div>
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Best Forex Currency Pairs to Scalp</h3>
                <p>Discover which currency pairs are best for scalping strategies</p>
              </div>
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>How to Choose Your Broker</h3>
                <p>Learn how to select the right broker for scalping</p>
              </div>
              <div className="quiz_btn">
                <button className="theme_btn" onClick={() => setShowModal(true)}>
                  Take Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Intermediate Tab */}
          <div
            className={`tab-pane fade ${activeTab === "intermediate" ? "show active" : ""}`}
            id="intermediate"
            role="tabpanel"
            aria-labelledby="intermediate-tab"
          >
            <div className="level-header">
              <h2>{currentLevel?.name || "Intermediate Level"}</h2>
              <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
                View Level
              </button>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${levelProgress}%` }}
                aria-valuenow={levelProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="video-container locked-video">
              <div className="video-lock-overlay">
                <div className="lock-content">
                  <i className="bi bi-lock-fill"></i>
                  <h4>Unlock Intermediate Content</h4>
                  <p>Complete beginner level to unlock</p>
                </div>
              </div>
            </div>
            <div className="course-modules mt-4">
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Advanced Scalping Patterns</h3>
                <p>Master advanced patterns for more profitable trades</p>
              </div>
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Risk Management for Scalpers</h3>
                <p>Learn essential risk management techniques</p>
              </div>
              <div className="quiz_btn">
                <button className="theme_btn" onClick={() => setShowModal(true)}>
                  Take Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Professional Tab */}
          <div
            className={`tab-pane fade ${activeTab === "professional" ? "show active" : ""}`}
            id="professional"
            role="tabpanel"
            aria-labelledby="professional-tab"
          >
            <div className="level-header">
              <h2>{currentLevel?.name || "Professional Level"}</h2>
              <button className="btn btn-danger" onClick={() => currentLevel && fetchVideos(currentLevel.id)}>
                View Level
              </button>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${levelProgress}%` }}
                aria-valuenow={levelProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="video-container locked-video">
              <div className="video-lock-overlay">
                <div className="lock-content">
                  <i className="bi bi-lock-fill"></i>
                  <h4>Unlock Professional Content</h4>
                  <p>Complete intermediate level to unlock</p>
                </div>
              </div>
            </div>
            <div className="course-modules mt-4">
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Expert Scalping Strategies</h3>
                <p>Advanced techniques used by professional traders</p>
              </div>
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Automating Your Scalping Strategy</h3>
                <p>Learn how to automate your scalping strategies</p>
              </div>
              <div className="quiz_btn">
                <button className="theme_btn" onClick={() => setShowModal(true)}>
                  Take Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Starting Quiz</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>Are you ready to start the quiz?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button className="btn btn-success">Start Quiz</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default CoursesDetail;
