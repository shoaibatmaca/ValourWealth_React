// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout"; 
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./components/Dashboard";
// import PrivacyPolicy from "./pages/Privacypolicy";
// import CoursesDetail from "./pages/CoursesDetail";
// import ContactPage from "./pages/ContactPage";
// import AboutUs from "./pages/AboutUs";
// import Feature from "./pages/Feature";
// import MarketDetails from "./pages/MarketDetails";
// import TechnologyDetail from "./pages/TechnologyDetail";
// import WealthDetails from "./pages/WealthDetails";
// import EventsDetails from "./pages/EventsDetails";
// import CryptoDetails from "./pages/CryptoDetails";



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout><Home /></Layout>} />
//         <Route path="/about" element={<Layout><AboutUs /></Layout>} />
//         <Route path="/features" element={<Layout> <Feature/> </Layout>} />
//         <Route path="/market-details" element={<Layout> <MarketDetails/> </Layout>} />
//         <Route path="/technology-details" element={<Layout> <TechnologyDetail/> </Layout>} />
//         <Route path="/wealth-details" element={<Layout> <WealthDetails/> </Layout>} />
//         <Route path="/events-details" element={<Layout> <EventsDetails/> </Layout>} />
//         <Route path="/crypto-details" element={<Layout> <CryptoDetails/> </Layout>} />


//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Privacy-Policy" element={<PrivacyPolicy/>} />
//         <Route path="/course-detail" element={<CoursesDetail/>} />
//         <Route path="/contact" element={<ContactPage/>}></Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./pages/Privacypolicy";
import CoursesDetail from "./pages/CoursesDetail";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import Feature from "./pages/Feature";
import MarketDetails from "./pages/MarketDetails";
import TechnologyDetail from "./pages/TechnologyDetail";
import WealthDetails from "./pages/WealthDetails";
import EventsDetails from "./pages/EventsDetails";
import CryptoDetails from "./pages/CryptoDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/features" element={<Layout> <Feature/> </Layout>} />
        <Route path="/market-details" element={<Layout> <MarketDetails/> </Layout>} />
        <Route path="/technology-details" element={<Layout> <TechnologyDetail/> </Layout>} />
        <Route path="/wealth-details" element={<Layout> <WealthDetails/> </Layout>} />
        <Route path="/events-details" element={<Layout> <EventsDetails/> </Layout>} />
        <Route path="/crypto-details" element={<Layout> <CryptoDetails/> </Layout>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/course-detail/:courseId" element={<CoursesDetail />} /> {/* ✅ Fixed */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

