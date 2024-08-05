
import React, { Suspense, useEffect, useState } from 'react';
import BrandLogoSlider from "../component/SliderComponent/BrandLogoSlider"
import { Link, useNavigate } from 'react-router-dom';
import AdmissionEnquiry from '../component/Models/AdmissionEnquiry';
import Slider from './Slider'
import { IoSearchCircle } from "react-icons/io5";
import AdmissionEnquiryMarquee from './marquee/Marquee';
import VisitCampus from '../component/VisitCampus';
import { FaMicrophone, FaVideo } from 'react-icons/fa6';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { SiLibreofficewriter } from 'react-icons/si';
import NewsAndEvents from './NewsAndEvents';
import MotionData from './MotionData';
import Loader from '../Loader';
import LatestUpdate from './LatestUpdate';

const AdmissionEnquiryData = React.lazy(()=>import('../component/Models/AdmissionEnquiry'))
const Home = ({admissionEnquori, setadmissionEnquori}) => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL_LIVE;
  const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;
  // const [admissionEnquori, setadmissionEnquori] = useState(false)
  const [courseId, setCourseId] = useState(0)
  const [aboutUsId, setAboutUsId] = useState("6659a6d495fc041c3dcd1c94")
  const [courseName, setCourseName] = useState('')
  const [subCourse, setSubCourse] = useState([])
  console.log(services)
  useEffect(() => {
    fetchMenu();
    fetchBannerData()
    // if(localStorage.getItem("admissionEnquori")){
    //   setadmissionEnquori(true)
    // }
  }, [admissionEnquori]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${apiURL}/servicesSubservicesList/`);
      const data = await response.json();

      let coursesdata = await data.data.filter((x) => x.service_name === "Courses").map(x => x.subservices);;

      console.log(coursesdata[0]);
      // let AboutusId = await data.data.filter((x)=>x.service_name === "About Us" ).map(x => x._id);;
      // console.log(AboutusId)
      // setAboutUsId("6659a6d495fc041c3dcd1c94")
      setServices(coursesdata[0].sort((a, b) => a.order - b.order))
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  }


  const fetchBannerData = async () => {

    try {
      const response = await fetch(`${apiURL}/banner`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);
      setBannerData(data.data);

    } catch (error) {
      console.log(error);
      // Toast.fire({
      //   icon: 'error',
      //   title: error.response.data ? error.response.data.msg : error.message,
      // });
    }
  };

  const array = new Array(15).fill(null).map((_, index) => `https://backend.uditnarain.com/banner/about${index + 1}.jpg`);


  function searchCourse() {
    console.log(courseId)
    console.log(courseId, courseName);
    navigate(`/page/${courseName}`, { state: { to: courseId } })

  }
  function handleCourse(e) {
    const courseid = e.target.value
    setCourseId(courseid)
    let subcourse = services.filter((x) => x._id === courseid).map((name) => JSON.parse(name?.question_answer))

    setSubCourse(subcourse[0])
    console.log(subcourse[0])

  }




  return (
    <>
      {!admissionEnquori && (
        <Suspense fallback={<Loader/>}>

        <AdmissionEnquiryData setadmissionEnquori={setadmissionEnquori} />
        </Suspense>
      )}
      {/* <section className="banner  d-flex align-items-center justify-content-center"> */}

      <section className="text-center text-white overflow-hidden">
        <Slider bannerData={bannerData} bannerType={"mainBanner"} />
        {/* <div className="subtitle text-uppercase" data-aos="fade-up">Welcome to </div> */}
        {/* <h1 data-aos="fade-up">Naraina Group of Institutions (NGI)</h1> */}
      </section>
      {/* </section> */}
      <div className="bg-danger py-2 explore-btn">
        <div className="px-3 text-center text-white">
          {/* <a href="#about">Explore Naraina Group of Institutions </a> */}

          <AdmissionEnquiryMarquee />
        </div>
      </div>




      <div className="md-mx-5 my-5 shadow rounded p-5">
        <h1 className="title-section pb-5 mb-0 text-center" data-aos="fade-up">
          ABOUT NARAINA
        </h1>
        <div className="">
          {/* <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <div className="icon mb-3">
                <img src="path_to_icon1.png" alt="Personalized Learning" />
              </div>
              <h5 className="card-title">Personalized Learning Programs</h5>
              <p className="card-text">
                Navya® offers tailored educational courses that cater to individual difficulty levels and conceptual requirements, ensuring a personalized learning experience that propels students to higher levels of achievement.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <div className="icon mb-3">
                <img src="path_to_icon2.png" alt="Comprehensive Test Series" />
              </div>
              <h5 className="card-title">Comprehensive Test Series/ Mock Tests</h5>
              <p className="card-text">
                With an extensive collection of test series and mock tests, Navya® covers a diverse range of examinations in India, providing students with ample practice opportunities and resources to succeed in their chosen fields.
              </p>
            </div>
          </div>
        </div> */}
          <div className="col-md-12">
            <div className=" h-100 ">
              <div className="card-body d-md-flex col-md-12 position_relative">
                <p className=" pb-1 course-all-text col-md-6">
                  <span>
                    The Naraina Group of Institutions (NGI) is a renowned
                    educational institution situated in Kanpur Nagar, Uttar
                    Pradesh. It is a private institution that was founded in 2007
                    and offers students an education of the highest caliber with a
                    primary emphasis on holistic learning and the development of
                    competitive skills.<Link class="moreless-button d-sm-block d-block d-md-none" to={`/page/${'About Us'}`}
                      state={{ to: aboutUsId }}
                    >
                      Read more
                    </Link>
                  </span>
                  <br /><br />
                  <span className="d-sm-none d-none d-md-block">
                    The institution takes pride in being the multi-discipline
                    campus in Kanpur and is affiliated with several statutory
                    educational bodies (Approved by UGC/AICTE, New Delhi &
                    Indian Nursing Council, New Delhi & PCI and affiliated to
                    AKTU, Lucknow, U.P State Medical Faculty, UPBTE & CSJMU).
                    Over 138 acres of land, the institute's two expansive,
                    verdant campuses—one in Ratanpur,Panki Kanpur and the other
                    in Gangaganj, Panki Kanpur—each have all the amenities and
                    first-rate infrastructure that are required. Our students
                    are a miniature representation of the ethos and culture of
                    India due to their varied backgrounds and interests. You
                    would interact with a competitive yet cooperative group of
                    peers at this institution, building trusting relationships
                    over time. NGI is a prestigious professional institute with
                    a global perspective...<Link class="moreless-button " to={`/page/${'About Us'}`}
                      state={{ to: aboutUsId }}>
                      Read more
                    </Link>
                  </span>

                  {/* <br />
                  We cordially invite you to join the vibrant community of
                  limitless prospects. */}
                </p>
                <div class="gallery">
                  <MotionData />
                  {/* {array.map((banner, index) => {
                    return (
                      <img
                        src={banner}
                        alt="campus-image"
                      />
                    );
                  })} */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LatestUpdate/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-9 m-auto">
            <h1
              className="title-section pb-0 mb-0 text-center"
              data-aos="fade-up"
            >
              Courses at NGI
            </h1>
            <p className="text-center pb-5 font24" data-aos="fade-up">
              Preparing students to make meaningful contributions to society as
              engaged citizens and leaders in a complex world
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-md-flex justify-content-center align-self-center mb-5 Select_Programs">
            <div className="me-4">
              <label className="me-2">Programmes :</label>
              <select onChange={handleCourse} className="py-1 px-2 border">
                <option disabled selected>
                  -- select programme --
                </option>
                {services.map((course, index) => {
                  return (
                    <option key={index} value={course._id} name={course.title}>
                      {course.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="me-4 selectcourse">
              <label className="me-2">Courses : </label>
              <select

                disabled={!courseId && true}
                onChange={(e) => setCourseName(e.target.value)}
                className="py-1 px-2 border selectCOurse"
              >
                <option disabled selected>
                  -- select course --{" "}
                </option>
                {subCourse?.map((x, index) => {
                  return (
                    <option key={index} value={x.question}>
                      {x.question}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="d-flex justify-content-center align-self-center">
              <button
                disabled={!courseName && true}
                type="button"
                class="px-5 py-1 border btn_hover searchCourseBtn"
                onClick={searchCourse}
              >
                Search <IoSearchCircle size={'1.3em'} />
              </button>

            </div>
          </div>
          {services.map((card, index) => (
            <div className="col-lg-3 mt-2 col-md-4 col-sm-6 col-xs-12" key={index}>
              <Link
                // to={`/page/${card._id}`}
                to={`/page/${card.title}`}
                state={{ to: card._id }}
                // className="w-100 h-100 "
                style={{ color: "black" }}
              >
                <div class="hovereffect">
                  <img
                    class="img-responsive card-img-top"
                    src={`${homeURL}/${card?.image_url}`}
                    alt=""
                  />
                  <div class="overlay">
                    <h2>{card.title}</h2>
                    <a className='' class="info" href="#">
                      click here
                    </a>
                  </div>
                </div>
                {/* <div className="card h-100 overflow-hidden" data-aos="fade-up">
              <img src={`${homeURL}/${card?.image_url}`} className="card-img-top card_img" alt={card.title} />
              <div className="card-body">
                
                <h2 className=" text-center text-bold text-black">
                        
                        {card.title}
                    </h2>
              </div>
            </div> */}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <NewsAndEvents />



      <section className="py-5">
        <BrandLogoSlider />
      </section>

      <VisitCampus />
      <section>
        <div className=" rounded pt-5">
          <h1 className=" mb-0 text-center" data-aos="fade-up">
            Institutions  News/Circulars
          </h1>
        </div>
        <div className='Institutions_Circulars'>
          <div className='row mt-5 Institutions_Circulars_row'>
            <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
              <div class="it-category-item text-center">
                <div class="it-category-icon">
                  <span>
                    <i><FaMicrophone /></i>
                  </span>
                </div>
                <div class="it-category-text">
                  <h4 class="it-category-title">Media Coverage</h4>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
              <Link to={'/data/press-release'}>
                <div class="it-category-item text-center">
                  <div class="it-category-icon">
                    <span>
                      <i><BsFillPersonVcardFill /> </i>
                    </span>
                  </div>
                  <div class="it-category-text">
                    <h4 class="it-category-title">Press Release</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
              <div class="it-category-item text-center">
                <div class="it-category-icon">
                  <span>
                    <i><SiLibreofficewriter /> </i>
                  </span>
                </div>
                <div class="it-category-text">
                  <h4 class="it-category-title">Office Circulars</h4>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
              <div class="it-category-item text-center">
                <div class="it-category-icon">
                  <span>
                    <i><FaVideo /> </i>
                  </span>
                </div>
                <div class="it-category-text">
                  <h4 class="it-category-title">Video Gallery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className='col-md-12 d-md-flex '>
        <div className='col-md-12 p-4 Goolel_map'>


          <iframe style={{ borderRadius: '15px' }} width="85%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1423,%20Shatabdi%20Rd,%20Gangaganj%20Colony,%20Panki,%20Kanpur,%20Uttar%20Pradesh%20208020+(Naraina%20College%20Of%20Engineering%20&amp;%20Technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
