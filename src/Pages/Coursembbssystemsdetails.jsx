import React from "react";

const CourseMbbsSystemsDetails = () => {
    return (
        <>
            <section className="py-5 pagebanner">
                <div className="container text-center" data-aos="fade-up">
                    <h1 className="title-section pb-2 mb-0">
                        Bachelor of Medicine, Bachelor of Surgery (MBBS)
                    </h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 course-all-text aos-init aos-animate" data-aos="fade-up">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">MBBS</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h5>COURSE OVERVIEW</h5>
                                        <p>Bachelor of Medicine, Bachelor of Surgery is a 4.5 years undergraduate degree programmer + 1 year of internship. One of the most prestigious degrees not only of the recent times but since generations, MBBS is one of the most reputed as well as one of the most challenging courses of higher studies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Eligibility Criteria: </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h4>Overview</h4>
                                        <p>MBBS admission takes place through the NEET exam. Students must be above 17 years of age and have studied Physics, Chemistry, Mathematics, and Biology as compulsory subjects in class 12 in order to qualify for the NEET Exam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ps-lg-5">
                        <div className="bg-light p-lg-5 p-4 appointment-form">
                            <div className="text-center">
                                <h4 className="pb-2 text-uppercase text-danger"><strong> Admission form</strong></h4>
                                <p className="pb-4"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <form data-aos="fade-up" className="aos-init">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Phone" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Select Course " />
                                </div>
                                <div className="mb-3">
                                    <textarea rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning text-uppercase">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/img/footerbanner.jpg" className="w-100" alt="" />
            <div className="social">
                <div className="container">  <ul className="d-flex justify-content-center">
                    <li><a title="Facebook" className="xsu-link" data-ga-label="Facebook" href="#"><span className="fa fa-facebook-square" aria-hidden="true"></span></a></li>
                    <li><a title="Twitter" className="xsu-link" data-ga-label="Twitter" href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
                    <li><a title="Instagram" className="xsu-link" data-ga-label="Instagram" href="#"><span className="fa fa-instagram" aria-hidden="true"></span></a></li>
                    <li><a title="LinkedIn" className="xsu-link" data-ga-label="LinkedIn" href="#"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
                    <li><a title="YouTube" className="xsu-link" data-ga-label="YouTube" href="#"><span className="fa fa-youtube-play" aria-hidden="true"></span></a></li>
                </ul></div>
            </div>
        </>
    );
};

export default CourseMbbsSystemsDetails;
