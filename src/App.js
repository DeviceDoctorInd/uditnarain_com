import React, { createContext, lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  CSSProperties } from "react";
// Import Components
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import Mantinance from "./component/undermantinance/Mantinance";

// Import Pages
// import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Newsevents from "./Pages/Newsevents";
import Careers from "./Pages/Careers";
import Newseventsdetails from "./Pages/Newseventsdetails";
import CourseEngineeringSystemsDetails from "./Pages/CourseEngineeringSystemsDetails";
import CourseManagementSystemsDetails from "./Pages/CourseManagementSystemsDetails";
import CourseMbbsSystemsDetails from "../src/Pages/Coursembbssystemsdetails";
import CourseNursingSystemsDetails from "./Pages/CourseNursingSystemsDetails";
import CoursePharmacySystemsDetails from "./Pages/CoursePharmacySystemsDetails";
import Instititions from "./Pages/Instititions";
import Rnd from "./Pages/Rnd";
import Trainingplacement from "./Pages/Trainingplacement";
import Facilities from "./Pages/Facilities";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample";
// import DynamicPage from "./Pages/DynamicPage";
import DynamicNewsevents from "./Pages/DynamicNewsevents";
import Dancegallary from "./component/Gallaryproject/DanceGallary/Dancegallary";
import CourseDetails from "./Pages/CourseDetails";
import Cell from "./Pages/AlumniCell/Cell";
import ExternalData from "./component/ExternalData/ExternalData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useStatStyles } from "@chakra-ui/react";
import Loader from "./Loader";


const Home = lazy(() => import('./Pages/Home'))
const DynamicPage = lazy(() => import('./Pages/DynamicPage'))
// const FacultyProfile = lazy(() => import('./Pages/FacultyProfile'))

export const StoreContext = createContext(null)
function App() {
  const apiURL = process.env.REACT_APP_API_URL_LIVE;



  const [ourServices, setOurServices] = useState([])


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [admissionEnquori, setadmissionEnquori] = useState(false)
  return (
    <Router>
      <StoreContext.Provider value={{ ourServices, setOurServices }}>


        <Header apiURL={apiURL} admissionEnquori={admissionEnquori} setadmissionEnquori={setadmissionEnquori}  />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<Loader></Loader>}>
                <Home admissionEnquori={admissionEnquori} setadmissionEnquori={setadmissionEnquori} />

              </Suspense>


            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news-events" element={<Newsevents />} />
            <Route path="/news-event-details" element={<Newseventsdetails />} />
            <Route path="/data/:type" element={<ExternalData />} />
            <Route path="/engineering-course-details" element={<CourseEngineeringSystemsDetails />} />
            <Route path="/management-course-details" element={<CourseManagementSystemsDetails />} />
            <Route path="/mbbs-course-details" element={<CourseMbbsSystemsDetails />} />
            <Route path="/nursing-course-details" element={<CourseNursingSystemsDetails />} />
            <Route path="/pharmacy-course-details" element={<CoursePharmacySystemsDetails />} />
            <Route path="/intitutions" element={<Instititions />} />
            <Route path="/rnd" element={<Rnd />} />
            <Route path="/training-placement" element={<Trainingplacement />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/react-hooks" element={<ReactHooks />} />
            <Route path="/ui-ux" element={<UiUx />} />
            <Route path="/form-example" element={<FormExample />} />
            <Route path="/page/:id" element={
              
              <Suspense fallback={<Loader></Loader>}>
              <DynamicPage apiURL={apiURL} />
              </Suspense>
            
            } />
            <Route path="/course/:courseId/:coursename" element={<CourseDetails apiURL={apiURL} />} />
            <Route path="/news-events/:id" element={<DynamicNewsevents />} />
            <Route path="/events-galary/:id" element={<Dancegallary />} />
            <Route path="/alumni-cell" element={<Cell />} />
            <Route path="/faculty/profile" element={
              
              <Suspense fallback={<Loader></Loader>}>
              {/* <FacultyProfile apiURL={apiURL} /> */}
              </Suspense>
            
            } />
          </Routes>
        </ScrollToTop>
        <Footer />
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
