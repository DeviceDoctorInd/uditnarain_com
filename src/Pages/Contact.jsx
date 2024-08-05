import React from "react";

const Contact = () => {
  return (
    <>

    <section  className="text-center py-5 pagebanner" >
    <div className="container">
    <h1 className="title-section  mb-0 " data-aos="fade-up">Contact Us</h1>
    </div>
    </section>

    <section className="bg-light py-5">
    <div className="container"><h1 className="pb-5 mb-0 text-center" data-aos="fade-up"><strong>General Contact Information</strong></h1>

    <div className="row">
    <div className="col-lg-4" data-aos="fade-up">
    <div className="info-box" data-height="full">
    <div className="fa fa-volume-control-phone center" aria-hidden="true"></div>
    <h3>Telephone</h3>
    <ul className="vertical-links">
    <li><strong>Campus operator</strong><br />
    9918601154, 9918601160,</li>
    </ul></div>

    </div>
    <div className="col-lg-4" data-aos="fade-up">
    <div className="info-box" data-height="full">
    <div className="fa fa-home  center" aria-hidden="true"></div> 
    <h3>Primary Address</h3>
    <ul className="vertical-links">
    <li>Naraina Group Of Institutions
    Gangaganj, Panki, Kanpur
    UP - 0208020</li>
    </ul></div>

    </div>
    <div className="col-lg-4" data-aos="fade-up">
    <div className="info-box" data-height="full">
    <div className="fa fa-list center" aria-hidden="true"></div>
    <h3>Stanford Directory</h3>
    <ul className="vertical-links">
    <li>Search the Stanford Directory for listings from both the University and Medical Center.</li>
    </ul></div>

    </div>
    </div>
    </div>

    </section>

    <div className="container py-5"><h1 className="pb-5 mb-0 text-center" data-aos="fade-up"><strong>Other Campus Contacts</strong></h1>

    <div className="row justify-content-center">
    <div className="col-lg-4" data-aos="fade-up">
    <div className="info-box" data-height="full">
    <div className="fa fa-volume-control-phone center" aria-hidden="true"></div>
    <h3>Telephone</h3>
    <ul className="vertical-links">
    <li><strong>Campus operator</strong><br />
    9918601154, 9918601160,</li>
    </ul></div>

    </div>
    <div className="col-lg-4" data-aos="fade-up">
    <div className="info-box" data-height="full">
    <div className="fa fa-home  center" aria-hidden="true"></div> 
    <h3>Primary Address</h3>
    <ul className="vertical-links">
    <li>Naraina Group Of Institutions
    Gangaganj, Panki, Kanpur
    UP - 0208020</li>
    </ul></div>

    </div>

    </div>
    </div>

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

export default Contact;
