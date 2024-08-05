import React, { useEffect, useState } from "react";
import ImageSlider from "../component/SliderImageComponent/ImageSlider";
// import Header from "../component/Header";
import swal from "sweetalert";
import axios from "axios";
import AdmissionEnqDynamic from "../component/Models/AdmissionEnqDynamic";
import {
  ChakraProvider,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  useAccordionItemState
} from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AlumniData from "./AlumniData";
import PlacementEvents from "./PlacementEvents";



function DynamicPage(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  const navProps = location.state?.name || '';

  const id = location?.state?.to



  const apiURL = process.env.REACT_APP_API_URL_LIVE;
  const WebapiURL = process.env.REACT_APP_API_URL_WebURL;

  const ids = useParams();
  console.log(ids);
  // const { id } = props.match.params;
  const [subServices, setSubServices] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [ShowAnswerData, setShowAnswerData] = useState([]);
  const [ShowData, setShowData] = useState('ShowAnswerData[0]?.subAnswer');
  const [question, setQuestion] = useState('')
  const [subquestion, setSubQuestion] = useState('')
  const[showComp,setShowComp]= useState(null)

  function handelShowDataArray(content) {
    console.log(content)
    setShowAnswerData(content);

  }
  function handelShowData(content) {
    console.log(content)
    setShowData(content);

  }

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${apiURL}/FindSubservice/${id}`);
        const data = await response.json();
        console.log(data);
        setSubServices(data.data);
        if (data.data.question_answer) {
          var question_answer = await JSON.parse(data.data.question_answer);
          console.log(question_answer);
          setQuestionAnswer(question_answer);
          // setQuestion(question_answer[0].question)
          // setShowAnswerData(question_answer[0]?.answer);
          // setShowData(question_answer[0]?.subquestions[0].subAnswer);
          // setSubQuestion(question_answer[0]?.subquestions[0].subquestions);
        } else {
          setQuestionAnswer("");
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenu();
  }, [id]);

  const regex = /(<([^>]+)>)/gi;
  var long_description = "";
  if (subServices?.long_description !== undefined) {
    // long_description = subServices.long_description.replace(regex, " ");
    long_description = `${subServices?.long_description}`;
  }

  var sliderImages = "";
  if (subServices?.slider_images !== undefined) {
    sliderImages = subServices?.slider_images;
  }

  const AddAdmission = async (e) => {
    e.preventDefault();
    // if(name <=5 || phone <=10|| email.length <5){
    //     alert('type correct value')
    // }
    // API Call
    const dataObject = {
      name,
      phone,
      email,
      course,
      message,
    };

    /*

        try {

            const response = await axios.post(`${WebapiURL}/admission`, JSON.stringify(dataObject), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const status = response.data.status;
            if (status === true) {
                swal("Success", response.data.message, "success").then((ok) => {
                    if (ok) {
                        window.location.reload();
                    }
                });
            } else {
                swal("Error", response.data.message, "error");
            }
        } catch (error) {
            swal('Upload error:', error);
        }
        */

    /*

        const response = await fetch(`${WebapiURL}/admission`, {
            method: "POST",
            body: JSON.stringify(dataObject),

            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.log('Request failed', response);
        } else {
            swal("Success", 'sssssssssss', "success").then((ok) => {
                if (ok) {
                    window.location.reload();
                }
            });
        }

        */

    // .then((res) => {
    //     res.json().then((data) => {
    //         const status = data.status;
    //         if (status === true) {
    //             swal("Success", data.message, "success").then((ok) => {
    //                 if (ok) {
    //                     window.location.reload();
    //                 }
    //             });
    //         } else {
    //             swal("Error", data.message, "error");
    //         }
    //     });
    // });

    await fetch(`${WebapiURL}/admission`, {
      method: "POST",
      body: JSON.stringify(dataObject),

      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        const status = data.status;
        if (status === true) {
          swal("Success", data.message, "success").then((ok) => {
            if (ok) {
              window.location.reload();
            }
          });
        } else {
          swal("Error", data.message, "error");
        }
      });
    });
  };

  //  , , ,  ,  ,  ,
  //  ,  ,  , 

  //  --------------------------get subservice------------------------------------
  const [showAccord, setShowACcord] = useState(false)
  const [aboutUs, setAboutUs] = useState({})
  const getSubservice = async () => {
    const res = await axios(`${apiURL}/servicesSubservicesList/`)
    const resData = res.data.data
    const aboutUsData = resData.filter((x) => x._id === "66508dc48a1070a6c61d1ada")[0]
    const allId = aboutUsData.subservices.map((x) => x._id)
    const haHai = allId.includes(id)
    console.log(haHai);
    if (haHai) {
      setShowACcord(true)
    } else {
      setShowACcord(false)
    }
    setAboutUs(aboutUsData)
  }


  useEffect(() => {
    getSubservice()
  }, [id])

  console.log(showAccord);
  return (
    <>

      <section className="pt-5 mt-5" style={{ marginTop: "40px !important" }}>
        {(sliderImages.length > 0  && (showComp==="placementEvents"))? (
          <ImageSlider sliderImages={sliderImages} />
        ) : null}

        <div
          className="px-3 text-center aos-init aos-animate"
          data-aos="fade-up"
        >

          <h1 className=" title-section pb-2 mt-5 pt-2 mb-0">
            {subServices?.heading != "undefined" ? subServices?.heading : null}
          </h1>
          <h3 className=" pb-2 mb-0">
            {subServices?.sub_heading != "undefined"
              ? subServices?.sub_heading
              : null}
          </h3>

          <p className="pagebanner-sub-text"></p>
          <ul className="p-0 m-0 courses-sub-page-title">
            <li>
              {subServices?.duration != "undefined"
                ? subServices?.duration
                : null}
            </li>
          </ul>
          <p></p>
        </div>
      </section>

      {/* // bread cumb  */}

      <nav aria-label="breadcrumb" class="d-flex justify-content-end mx-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          {/* <li class="breadcrumb-item active"><a href="#"></a></li> */}
          <li class="breadcrumb-item " aria-current="page">{subServices?.heading || null}</li>
        </ol>
      </nav>



      <div className=" px-3 " style={{ margin: "auto" }}>
        <div className="row">
          <div
            className="col-lg-12 course-all-text aos-init Dynamic_page_overview"
            data-aos="fade-up"
          >
            <div className="row">
              <div className={showAccord ? "col-lg-9" : "col-lg-12"}>
                <p
                  className="mx-2"
                  dangerouslySetInnerHTML={{ __html: long_description }}
                />
              </div>
              {showAccord && <div className="col-lg-3">

                <NavAccordion about={aboutUs} id={id} />
              </div>}

            </div>


            <div className="col-lg-12 course_all_text_contant aos-init">
              <div
                className="col-lg-5 course-all-text aos-init"
                data-aos="fade-up"
              >
                {
                  questionAnswer.length ?
                    <BoostrapAccordion 
                    showComp={showComp}
                    setShowComp={setShowComp}
                    navProps={navProps} questionAnswer={questionAnswer} setShowData={setShowData} setQuestion={setQuestion} setSubQuestion={setSubQuestion} />
                    : null
                }


                {/* {questionAnswer != "" ? (
                  <div className="accordion" id="accordionExample">
                    <div class="radio-input">
                      {questionAnswer.map((element, index) =>
                      (
                        <>
                          <input

                            value={`value-${index}`}
                            name="value-radio"
                            id={`value-${index}`}
                            type="radio"
                            onChange={() => handelShowDataArray(element.answer)}
                          />
                          <label for={`value-${index}`}>{element.question} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" >
                            <path fill="white" d="M512 199.7c0 23.6-20.7 43.8-44.8 43.8h-99.9c16.3 17 18.3 49.8-6.3 70.9 14.3 22.8 2.1 53-16.5 62.3C353.6 425.9 322.7 448 272 448c-2.7 0-13.3-.2-16-.2-62 .2-76.9-31.1-123.7-38.3C120.6 407.7 112 397.6 112 385.8V214.3l0 0c0-18.4 10.6-35.9 28.5-43.8 28.9-13 95.4-49 107.5-77.3 7.8-18.2 21.4-29.1 40-29.1 34.2 0 57.8 35.1 44.1 66.9-3.6 8.4-8.3 16.7-14.2 24.9H467.2c23.5 0 44.8 20.5 44.8 43.8zM96 200v192c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V200c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24zM68 368c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                          </svg>
                          </label>

                        </>

                      ))}
                    </div>

                    <div class="radio-input mt-5">
                      {ShowAnswerData.map((element, index) =>
                      (
                        <div className="">
                       
                          <div>
                            <input
                          
                              value={`value-sub-${index}`}
                              name="value-radiosub"
                              id={`value-sub-${index}`}
                              type="radio"
                              onChange={() => handelShowData(element.subAnswer)}
                            />
                            <label for={`value-sub-${index}`}>{element.subQuestion} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" >
                              <path fill="white" d="M512 199.7c0 23.6-20.7 43.8-44.8 43.8h-99.9c16.3 17 18.3 49.8-6.3 70.9 14.3 22.8 2.1 53-16.5 62.3C353.6 425.9 322.7 448 272 448c-2.7 0-13.3-.2-16-.2-62 .2-76.9-31.1-123.7-38.3C120.6 407.7 112 397.6 112 385.8V214.3l0 0c0-18.4 10.6-35.9 28.5-43.8 28.9-13 95.4-49 107.5-77.3 7.8-18.2 21.4-29.1 40-29.1 34.2 0 57.8 35.1 44.1 66.9-3.6 8.4-8.3 16.7-14.2 24.9H467.2c23.5 0 44.8 20.5 44.8 43.8zM96 200v192c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V200c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24zM68 368c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                            </svg>
                            </label>
                          </div>

                        </div>

                      ))}
                    </div>

                  </div>
                ) : null} */}
                {/* <div className="col-lg-12 ps-lg-5 mt-5 "> */}

                {/* <AdmissionEnqDynamic/> */}
                {/* </div> */}
              </div>
              {questionAnswer != '' && <div className="col-lg-6">
                <div className="mx-3 mb-3">
                  <h3 className="mb-2 ">{question}</h3>
                  <h5 style={{ color: "#b1040e" }}>{subquestion}</h5>
                </div>
                {showComp==="placement" ?
                  <AlumniData/> : showComp==="placementEvents" ?<PlacementEvents sliderImages={sliderImages}/>
                  : 

                <div className=" ms-3 contentData" dangerouslySetInnerHTML={{ __html: ShowData }} />
                }
              </div>
              }
            </div>

            {/* {questionAnswer != '' ? (
                            <div className="accordion" id="accordionExample">
                                {
                                    questionAnswer.map((element, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header show" id={`heading${index}`}>
                                                <button style={{
                                                    // backgroundColor: '#fff',
                                                    // color: "#000",
                                                    fontSize:"20px",
                                                    fontWeight: "bold",


                                                }} className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>{element.question}</button>
                                            </h2>
                                            <div id={`collapse${index}`} className="accordion-collapse collapse " aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div dangerouslySetInnerHTML={{ __html: element.answer }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>) : null} */}
          </div>

          {/* <div className="col-lg-5 ps-lg-5 ">
                       
                        <AdmissionEnqDynamic/>
                    </div> */}
        </div>
      </div>
      <img src="assets/img/footerbanner.jpg" className="w-100" alt="" />
      <div className="social">
        <div className="px-3">
          {" "}
          <ul className="d-flex justify-content-center">
            <li>
              <a
                title="Facebook"
                className="xsu-link"
                data-ga-label="Facebook"
                href="#"
              >
                <span
                  className="fa fa-facebook-square"
                  aria-hidden="true"
                ></span>
              </a>
            </li>
            <li>
              <a
                title="Twitter"
                className="xsu-link"
                data-ga-label="Twitter"
                href="#"
              >
                <span className="fa fa-twitter" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a
                title="Instagram"
                className="xsu-link"
                data-ga-label="Instagram"
                href="#"
              >
                <span className="fa fa-instagram" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a
                title="LinkedIn"
                className="xsu-link"
                data-ga-label="LinkedIn"
                href="#"
              >
                <span className="fa fa-linkedin" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a
                title="YouTube"
                className="xsu-link"
                data-ga-label="YouTube"
                href="#"
              >
                <span className="fa fa-youtube-play" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DynamicPage;


const BoostrapAccordion = ({ questionAnswer, setShowData, setQuestion, setSubQuestion, navProps,showComp,setShowComp }) => {
  const [selectedContent, setSelectedContent] = useState(null);

  const [openSubIndex, setOpenSubIndex] = useState(0);
  const [openCourseIndex, setOpenCourseIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState([0])

  useEffect(() => {
    console.log(navProps);
    if (navProps === "DIPLOMA IN ENGINEERING") {

      setCourseIndex([1])
      setOpenSubIndex(2)
      setOpenCourseIndex(0)
      setQuestion(questionAnswer[1]?.question);
      setSubQuestion(questionAnswer[1]?.subquestions[2]?.subAnswer[0].courseType);
      setShowData(questionAnswer[1]?.subquestions[2]?.subAnswer[0].courseAnswer);

    } else if (navProps === "DIPLOMA IN PHARMACY") {
      setCourseIndex([0])
      setOpenSubIndex(2)
      setOpenCourseIndex(3)
      setQuestion(questionAnswer[0]?.question);
      setSubQuestion(questionAnswer[0]?.subquestions[2]?.subAnswer[3].courseType);
      setShowData(questionAnswer[0]?.subquestions[2]?.subAnswer[3].courseAnswer);
    }
    else {
      console.log('nahi hai')
      setCourseIndex([0])
      setOpenSubIndex(0)
      setQuestion(questionAnswer[0]?.question);
      setSubQuestion(questionAnswer[0]?.subquestions[0]?.subquestions);
      setShowData(questionAnswer[0]?.subquestions[0]?.subAnswer);
      // setOpenCourseIndex(0)
    }
  }, [navProps, questionAnswer])


  const changeIndex = (index) => {
    setCourseIndex(index);
    setOpenCourseIndex(index);
    setQuestion(questionAnswer[index]?.question);
    setSubQuestion(questionAnswer[index]?.subquestions[0]?.subquestions);
    setShowData(questionAnswer[index]?.subquestions[0]?.subAnswer);
    setOpenSubIndex(0); // Default to the first subquestion when opening a course

  }

  const handleItemClick = (content,id)=> {
   
    const cont = id.subquestions

    if(cont==='Student’s Testimonials'){
      setShowComp('placement')
    }else if(cont==="Placement Events"){
      setShowComp('placementEvents')
    }
    
    else{
    
      setShowComp(null)
      setSelectedContent(content);
    }
    console.log(content);
    console.log(id);
  };

  console.log(questionAnswer);
  const handleSubItemClick = (index, subItem, fullItem) => {
    const answser = subItem?.subAnswer;
    if (Array.isArray(answser)) {
      setQuestion(subItem?.subquestions);
      setSubQuestion(subItem?.subAnswer[0].courseType);
      setShowData(subItem?.subAnswer[0].courseAnswer);
      setOpenCourseIndex(0); // Default to the first course when opening a subquestion
    } else {
      setQuestion(fullItem?.question);
      setShowData(answser);
      setSubQuestion(subItem?.subquestions);
      setOpenCourseIndex(null); // No course is selected when there's no array of courses
    }
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  const handleCourseItemClick = (index, course) => {
    setSubQuestion(course?.courseType);
    setShowData(course?.courseAnswer);
    setOpenCourseIndex(openCourseIndex === index ? null : index);
  };

  const StyledAccordionButton = ({ children, ...props }) => {
    const { isOpen } = useAccordionItemState();
    return (
      <AccordionButton
        {...props}
        bg={isOpen ? "#b1040e" : "white"}
        color={isOpen ? "white" : "black"}
        _hover={{ bg: isOpen ? "red.600" : "gray.100" }}
      >
        {children}
      </AccordionButton>
    );
  };

  return (
    <Box p={4} width="95%">
      <Accordion allowToggle index={courseIndex} >
        {questionAnswer.map((item, index) => (
          <AccordionItem key={index}  >
            <StyledAccordionButton onClick={() => changeIndex(index)}>
              <Box flex="1" textAlign="left" >
                {item.question}
              </Box>
              <AccordionIcon />
            </StyledAccordionButton>
            <AccordionPanel >
              {item.subquestions.map((subItem, subIndex) => (
                <Box key={subIndex} mb={4} >
                  <Accordion allowToggle index={openSubIndex === subIndex ? [0] : []} onChange={() => handleSubItemClick(subIndex, subItem, item)}>
                    <AccordionItem  >
                      <StyledAccordionButton onClick={() => handleItemClick(subItem.subAnswer,subItem)} >
                        <Box flex="1" textAlign="left" >
                          {subItem.subquestions}
                        </Box>
                        <FaArrowRight />
                      </StyledAccordionButton>
                      <AccordionPanel>
                        {Array.isArray(subItem.subAnswer) && subItem.subAnswer.map((course, courseIndex) => (
                          <Accordion allowToggle index={openCourseIndex === courseIndex ? [0] : []} onChange={() => handleCourseItemClick(courseIndex, course)} key={courseIndex}>
                            <AccordionItem>
                              <StyledAccordionButton onClick={() => handleItemClick(course.courseAnswer)}>
                                <Box flex="1" textAlign="left">
                                  {course.courseType}
                                </Box>
                                <FaArrowRight />
                              </StyledAccordionButton>
                            </AccordionItem>
                          </Accordion>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};


const NavAccordion = ({ about, id }) => {

  const navigate = useNavigate()
  const [indexofData, setIndexofData] = useState(0)

  const navDatato = (data, index) => {
    console.log(data);
    setIndexofData(index)
    navigate(`/page/${data.title}`, { state: { to: data._id } })
    // navigate(`/page/${}`)

  }
  useEffect(() => {
    if (id) {
      console.log(id);
      const index = about.subservices && about.subservices.findIndex(obj => obj._id === id);
      setIndexofData(index)
    }
  }, [about, id])
  console.log(about.subservices);
  return <Accordion index={indexofData}>
    {about?.subservices && about?.subservices.map((ser, index) => <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: '#b1040e', color: 'white' }} onClick={() => navDatato(ser, index)}>
          <Box as='span' flex='1' textAlign='left'>
            {ser?.title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>

    </AccordionItem>)}
  </Accordion>
}