import React from "react";

const About = () => {
  return (
    <>
      <section className="text-center py-5 pagebanner" >
        <div className="container">
          <h1 className="title-section pb-5 mb-0" data-aos="fade-up">A Purposeful University</h1>
          <p data-aos="fade-up">NARAINA FAMILY - The Naraina Group of Institutions (NGI) is a renowned educational institution situated in Kanpur Nagar, Uttar Pradesh. It is a private institution that was founded in 2007 and offers students an education of the highest caliber with a primary emphasis on holistic learning and the development of competitive skills.</p>
          <p data-aos="fade-up">The institution takes pride in being the multi-discipline campus in Kanpur and is affiliated with several statutory educational bodies (AKTU, BTE, CSJMU, UP State Medical Faculty Approved By AICTE, INC, & PCI). </p>
          <p data-aos="fade-up">Over 138 acres of land, the institute's two expansive, verdant campuses—one in Ratanpur,Panki Kanpur and the other in Gangaganj, Panki Kanpur—each have all the amenities and first-rate infrastructure that are required.</p>
          <p data-aos="fade-up">Our students are a miniature representation of the ethos and culture of India due to their varied backgrounds and interests. You would interact with a competitive yet cooperative group of peers at this institution, building trusting relationships over time. </p>
          <p data-aos="fade-up">NGI is a prestigious professional institute with a global perspective; we cordially invite you to join the vibrant community of limitless prospects.</p>

          <h1 className="title-section pb-5 mb-0" data-aos="fade-up">Vision</h1>

          <p data-aos="fade-up">To be an esteemed, innovative, reputed and leading educational institution dedicated to fostering talent via our work, people and adherence to basic principles, generating lifelong learners with the skills necessary to compete on a global scale. To contribute to the progress of humanity through excellence in education, learning, research, entrepreneurship and leadership.</p>

          <h1 className="title-section pb-5 mb-0" data-aos="fade-up">Misson</h1>

          <p data-aos="fade-up">Our goal is to develop and enhance deep disciplinary knowledge, problem solving skills, leadership abilities and communication skills. Enabling an environment that encourages life-long learning and team- based problem solving. To provide high quality, affordable and accessible educational programs so that the job market has access to a pool of quality and highly qualified candidates.
          </p>
        </div>
      </section>

      <section className="text-center py-5 bg-light" >
        <div className="container">
          <h1 className="title-section pb-5 mb-0" data-aos="fade-up">Group Message </h1>
          <ul data-aos="fade-up" className="nav nav-pills mb-3 justify-content-center photogallery" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="Message1-tab" data-bs-toggle="pill" data-bs-target="#Message1" type="button" role="tab" aria-controls="Message1" aria-selected="true">CHAIRMAN</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Message2-tab" data-bs-toggle="pill" data-bs-target="#Message2" type="button" role="tab" aria-controls="Message2" aria-selected="false">SECRETARY’S MESSAGE</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Message3-tab" data-bs-toggle="pill" data-bs-target="#Message3" type="button" role="tab" aria-controls="Message3" aria-selected="false">MANAGING DIRECTOR’S</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Message3-tab" data-bs-toggle="pill" data-bs-target="#Message3" type="button" role="tab" aria-controls="Message3" aria-selected="false">PRINCIPAL’S MESSAGE</button>
            </li>
          </ul>
          <div className="tab-content text-start pt-5 group-message-tab" data-aos="fade-up" id="pills-tabContent">
            <div className="tab-pane fade show active" id="Message1" role="tabpanel" aria-labelledby="Message1-tab">

              <div className="row">
                <div className="col-lg-9" data-aos="fade-up">

                  <p>Naraina Group of Institution was formed by Mr. Kailash Narain in 2007 with the vision of providing high quality education to young generations, so that they get to experience the beauty & importance of education. </p>
                  <p>He always believed one should be grounded in manner but higher in education.</p>
                  <p>We focus on building the foundation of education in our students through the best of faculties, laboratories, industrial visits and internships.</p>

                  <p>We impart our students with knowledge, awareness, skills, confidence, values & ethics which will help them in becoming the best of human beings & they will conquer the world. </p>

                  <p>NGI keeps motivating the students by creating a friendly, happy & stress free environment.</p>
                  <img src="assets/img/signature.png" width="200" />

                </div>
                <div className="col-lg-3 text-center" data-aos="fade-up">
                  <img src="assets/img/d.png" width="100%" />
                  <div className="name-message">Mr.KAILASH NARAIN</div>
                  <div className="name-post">CHAIRMAN</div>
                </div>

              </div>

            </div>


            <div className="tab-pane fade" id="Message2" role="tabpanel" aria-labelledby="Message2-tab">...</div>
            <div className="tab-pane fade" id="Message3" role="tabpanel" aria-labelledby="Message3-tab">...</div>

            <div className="tab-pane fade" id="Message4" role="tabpanel" aria-labelledby="Message4-tab">...</div>
          </div>


        </div>
      </section>



      <section className="pt-5 mt-lg-5">
        <div className="container">
          <div className="row pb-5 mb-lg-5">
            <div className="col-lg-4">
              <div className="ablog" data-aos="fade-up">
                <div className="ablog__img"> <a href="#"><img src="assets/img/Courses1.jpg" className="img-fluid" alt="img" /></a> </div>
                <div className="ablog__text ablog__text--service">
                  <h4 className="ablog__text--title"><a href="#">Teaching and research</a></h4>
                  <p>Eleifend lacinia prasent hendrerit quisque penatibus erat. At pulvinar integer. </p>
                  <div className="ablog__btn"> <a href="#" className="theme-read">Read More</a> </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ablog" data-aos="fade-up">
                <div className="ablog__img"> <a href="#"><img src="assets/img/Courses2.jpg" className="img-fluid" alt="img" /></a> </div>
                <div className="ablog__text ablog__text--service">
                  <h4 className="ablog__text--title"><a href="#">Access</a></h4>
                  <p>Eleifend lacinia prasent hendrerit quisque penatibus erat. At pulvinar integer. </p>
                  <div className="ablog__btn"> <a href="#" className="theme-read">Read More</a> </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ablog" data-aos="fade-up">
                <div className="ablog__img"> <a href="#"><img src="assets/img/Courses3.jpg" className="img-fluid" alt="img" /></a> </div>
                <div className="ablog__text ablog__text--service">
                  <h4 className="ablog__text--title"><a href="#">Community</a></h4>
                  <p>Eleifend lacinia prasent hendrerit quisque penatibus erat. At pulvinar integer. </p>
                  <div className="ablog__btn"> <a href="#" className="theme-read">Read More</a> </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>


      <section className="studentsay">
        <div className="container">

          <div className="row">
            <div className="col-lg-9 m-auto">
              <blockquote className="blockquote text-center">
                <div className="testimg"><img src="assets/img/Courses3.jpg" /></div>
                <p className="mb-0 text-white pt-4">I’m an optimist about our ability to cope with climate change. As I’ve moved forward in my career, what I see are more and more opportunities to address the challenge, to put in place solutions that lead to better lives for individuals and communities.” </p>
              </blockquote>
              <div className="attribution text-center">
                <h3><strong>Meet Chris Field </strong></h3>
                <p>Perry L. McCarty Director of the NGI Woods Institute for the Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 my-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <h1 className="title-section pb-0 mb-0 text-center" data-aos="fade-up">Research</h1>
              <p className="text-center pb-5 font24" data-aos="fade-up">Driving discoveries vital to our world, our health, and our intellectual life</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="Researchbox text-center" data-aos="fade-up">
                <h1>Faculty </h1>
                <p className="mb-0">1800+</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Researchbox text-center" data-aos="fade-up">
                <h1>Founded </h1>
                <p className="mb-0">2000+ </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Researchbox text-center" data-aos="fade-up">
                <h1>Students </h1>
                <p className="mb-0">17,000+</p>
              </div>
            </div>
          </div>
          <div className="text-center"> <a href="#" className="btn theme-btn m-auto mt-4" data-aos="fade-up">More about academics</a></div>
        </div>
      </section>

      <img src="assets/img/footerbanner.jpg" className="w-100" />

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

export default About;
