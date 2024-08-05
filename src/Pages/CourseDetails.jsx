import React, { useEffect, useState } from "react";

import ImageSlider from "../component/SliderImageComponent/ImageSlider";
// import Header from "../component/Header";
import swal from "sweetalert";
import axios from 'axios';
import AdmissionEnqDynamic from "../component/Models/AdmissionEnqDynamic";
import { useParams } from "react-router-dom";




 function CourseDetails(props) {

 

    const apiURL = process.env.REACT_APP_API_URL_LIVE;
    const WebapiURL = process.env.REACT_APP_API_URL_WebURL;
    
    const {courseId,coursename} = useParams()
    
    const { id } = props.match.params;
    const [subServices, setSubServices] = useState([]);
    const [questionAnswer, setQuestionAnswer] = useState([]);
    const [courseDetail, setCourseDetail] = useState({});


    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`${apiURL}/FindSubservice/${courseId}`);
                const data = await response.json();
                console.log(data)
                setSubServices(data.data);
                if (data.data.question_answer) {
                    var question_answer = await JSON.parse(data.data.question_answer);
                    console.log(question_answer)
                    setQuestionAnswer(question_answer);
                } else {
                    setQuestionAnswer('');
                }
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        }
        fetchMenu();
    }, [id]);


   

    var sliderImages = '';
    if (subServices.slider_images !== undefined) {
        sliderImages = subServices.slider_images;
    }


   console.log(questionAnswer)
   useEffect(()=>{
    if(questionAnswer){
     
        console.log(questionAnswer)
        const coursedata = questionAnswer.filter((x)=>x.question === coursename)
        setCourseDetail(coursedata[0])
    }
   },[questionAnswer])

    return (
        <>

            <section className="pt-5 mt-5" style={{ marginTop: '40px !important' }}>
                {/* {sliderImages.length > 0 ? (
                    <ImageSlider sliderImages={sliderImages} />
                ) : null
                } */}

                <div className="px-3 text-center aos-init aos-animate" data-aos="fade-up">
                    <h1 className=" title-section pb-2 mt-5 pt-2 mb-0">{subServices.heading != 'undefined' ? subServices.heading : null}</h1>
                    <h3 className=" pb-2 mb-0">{(courseDetail && courseDetail.question) ? courseDetail.question: subServices.sub_heading }</h3>

                    <p className="pagebanner-sub-text">
                    </p><ul className="p-0 m-0 courses-sub-page-title">
                        <li>{subServices.duration != 'undefined' ? subServices.duration : null}</li>
                    </ul>
                    <p></p>
                </div>
            </section>
            <div className="px-3">
                <div className="row">
                    <div className="col-lg-7 course-all-text aos-init" data-aos="fade-up">
                <p dangerouslySetInnerHTML={{ __html: subServices?.long_description }} />
                <div dangerouslySetInnerHTML={{ __html: courseDetail?.answer }} />
                        

                        {/* {questionAnswer != '' ? (
                            <div className="accordion" id="accordionExample">
                                {
                                    questionAnswer?.filter((x)=>{x.question === coursename}).map((element, index) => {
                                        return (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header show" id={`heading${index}`}>
                                                <button style={{
                                                   
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
                                    )})
                                }
                            </div>) : null} */}
                    </div>
                    <div className="col-lg-5 ps-lg-5 ">
                        {/* <div className="bg-light p-lg-5 p-4 appointment-form">
                            <div className="text-center">
                                <h4 className="pb-2 text-uppercase text-danger"><strong> Admission form</strong></h4>
                              
                            </div>
                            <form data-aos="fade-up" className="aos-init " onSubmit={AddAdmission}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="phone" className="form-control" placeholder="Enter Phone" onChange={(e) => { setPhone(e.target.value) }} required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} required />
                                </div>
                                <div className="mb-3">
                                

                                    <select className="form-control" style={{
                                        color: '#212529',
                                    }} name="selectedCourses" onChange={(e) => { setCourse(e.target.value) }} >
                                        <option value="Courses" disabled selected>Select Course</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="MBBS">MBBS</option>
                                        <option value="Nursing">Nursing</option>
                                        <option value="Management">Management</option>
                                        <option value="Computer_application">Computer application</option>
                                        <option value="Education">Education</option>
                                        <option value="Other">Other</option>

                                    </select>
                                </div>
                                <div className="mb-3">
                                    <textarea rows="7" name="message" className="form-control" placeholder="Message(Optional)" onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning text-uppercase">Send Message</button>
                            </form>
                        </div> */}
                        <AdmissionEnqDynamic/>
                    </div>
                </div>
            </div>
            <img src="assets/img/footerbanner.jpg" className="w-100" alt="" />
            <div className="social">
                <div className="px-3">  <ul className="d-flex justify-content-center">
                    <li><a title="Facebook" className="xsu-link" data-ga-label="Facebook" href="#"><span className="fa fa-facebook-square" aria-hidden="true"></span></a></li>
                    <li><a title="Twitter" className="xsu-link" data-ga-label="Twitter" href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
                    <li><a title="Instagram" className="xsu-link" data-ga-label="Instagram" href="#"><span className="fa fa-instagram" aria-hidden="true"></span></a></li>
                    <li><a title="LinkedIn" className="xsu-link" data-ga-label="LinkedIn" href="#"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
                    <li><a title="YouTube" className="xsu-link" data-ga-label="YouTube" href="#"><span className="fa fa-youtube-play" aria-hidden="true"></span></a></li>
                </ul></div>
            </div>

        </>
    );

}

export default CourseDetails;