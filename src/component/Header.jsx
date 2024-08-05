import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { StoreContext } from '../App';
import AdmissionEnquiryData from './Models/AdmissionEnquiry'

function Header(props) {


  const { setOurServices } = useContext(StoreContext)
  let location = useLocation();
  const { apiURL } = props;
  const [admissionEnquori, setadmissionEnquori] = useState(true);
  console.log(props);
  const [services, setServices] = useState([]);
  const [dropupicon, setdropupicon] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${apiURL}/servicesSubservicesList/`);
      console.log(response);
      const data = await response.json();
      setOurServices(data.data)
      setServices(data.data);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  }
  const siteUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

  // console.log("services ", services);
  return (
    <>

{!admissionEnquori && <AdmissionEnquiryData setadmissionEnquori={setadmissionEnquori} />}
      {(location.pathname === '/') ?

        <header className="header headerfixed fixed-top position-fixed  navbar_style" >
          <div className="topbaar d-lg-flex d-none">
            <div className="w-100 pe-4">
              <div className="row">
                <div className="col-lg-3 socail-link d-flex align-items-center"> </div>
                <div className="col-lg-9 text-white text-lg-end d-flex align-items-center justify-content-lg-end ">
                  <div>
                    <a style={{cursor:"pointer"}} onClick={()=>setadmissionEnquori(false)}>Admission Enquiry</a>
                    <a target="_blank" href="https://www.narainagroup.ac.in/page/online-payment"> Online Payment </a>
                    <a href="/careers" target="_blank" rel="noopener noreferrer">Careers</a>
                    <a target="_blank" href="http://www.narainamedicalcollege.com/"> Naraina Medical College </a>
                    <a target="_blank" href="https://login.narainagroup.ac.in/l.ngi"> NIS Login </a>
                  </div>

                  <div className="col-lg-1 socail-link d-flex align-items-center"> </div>
                  <div>

                    <a target="_blank" href="https://iic.mic.gov.in/">  IIC </a>
                    <a target="_blank" href="#"> IQAC</a>
                    <a target="_blank" href="https://nad.gov.in/"> NAD </a>
                    <Link target="_blank" to="/alumni-cell">  ALUMNI CELL</Link>
                  </div>
                </div>
                {/* <div className="col-lg-6 text-white text-lg-end d-flex align-items-center justify-content-lg-end "><a target="_blank" href="https://www.narainagroup.ac.in/page/admission-enquiry">Admission Enquiry</a><a target="_blank" href="https://www.narainagroup.ac.in/page/online-payment"> Online Payment </a> <a target="_blank" href="http://www.narainamedicalcollege.com/"> Naraina Medical College </a> <a target="_blank" href="https://login.narainagroup.ac.in/l.ngi"> NIS Login </a> </div> */}
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light ul_nav_title" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }} >
            <div className='logo_img ms-4 navbar-brand'>
              <Link className="  " to="/"> <img className='logo_top_img' src={siteUrl + `/assets/img/logo.png`} /> </Link>
            </div>
            <div className="pe-3 box-oxxxx" style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              // marginRight: '100px'
            }}>
              <button className="navbar-toggler collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                <div className="hamburger-toggle ">
                  <div className="hamburger"> <span></span> <span></span> <span></span> </div>
                </div>
              </button>
            </div>
            <div className="collapse navbar-collapse me-lg-3 ms-lg-5 " id="navbar-content">
              <ul className="navbar-nav ms-lg-4 all_title_text" style={{
                width: '100%',
                // backgroundColor:'red',
                display: 'flex',
                justifyContent: 'right',
                flexWrap: 'wrap',

                fontSize: '16px',
                fontWidth: '800',
              }}>

                {services.map((service) => (

                  (service.drop_down == true) ?
                    < li className='nav-item drop_title dropdown' key={service._id} >

                      <a className="nav-link   dropdown-toggle  dropdown_icon"
                        style={{
                          fontSize: '16px ',
                          fontWidth: '800',




                        }} href="" data-bs-toggle="dropdown">{service.service_name}</a>
                      <ul className="dropdown-menu ul_nav_subtitle" key={service._id}>
                        {service.subservices.sort((a, b) => a.order - b.order).map((subservice) => {
                          let to;
                          let title;
                          

                          switch (subservice.title) {
                            case "Canteen/Mess":
                              to = "/page/canteen";
                              title = "canteen";
                              break;
                            case "Banking/ATM Facilities":
                              to = "/page/banking-atm";
                              title = "Banking/ATM Facilities";
                              break;
                            case "Hostel/Accommodation":
                              to = "/page/hostel-accommodation";
                              title = "Hostel/Accommodation";
                              break;
                            default:
                              to = `/page/${subservice.title}`;
                              title = subservice.title;
                          }

                          return (
                            <li key={subservice._id} className='drop_subtitle'>
                              <Link
                                to={to}
                                state={{ to: subservice._id }}
                                className="dropdown-item" >
                                {subservice.title}
                              </Link>
                            </li>
                          );
                        })}

                      </ul>
                    </li>
                    :

                    <li className={`nav-item dropdown servicename_nodrop my-auto px-lg-2 ${service.service_name}`} style={{}} key={service._id}>
                      <Link
                        to={`/news-events/${service.service_name}`}
                        state={{ to: service._id }}
                        className=" nav-link" style={
                          {
                            fontSize: '16px',
                            fontWidth: '800',

                          }
                        }>
                        {service.service_name}
                      </Link>
                    </li>
                ))}


                {/* <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href="" data-bs-toggle="dropdown"> About Us</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/about">About Company</a></li>
                      <li><a className="dropdown-item" href="#">Certification</a></li>
                      <li><a className="dropdown-item" href="#">Quality Policy</a></li>
                      <li><a className="dropdown-item" href="#">Group of Companies</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Courses</a>
                    <ul className="dropdown-menu shadow">
                      <li><a className="dropdown-item" href="/management-course-details">Management</a></li>
                      <li><a className="dropdown-item" href="/engineering-course-details">Engineering</a></li>
                      <li><a className="dropdown-item" href="/nursing-course-details">Nursing</a></li>
                      <li><a className="dropdown-item" href="/npharmacy-course-details">Pharmacy</a></li>
                      <li><a className="dropdown-item" href="/mbbs-course-details">MBBS</a></li>
                    </ul>
                  </li> */}
                {/* <li className="nav-item"> <a className="nav-link" href="/news-events">News & Events </a> </li> */}
                {/* <li className="nav-item"> <a className="nav-link" href="intitutions">Institutions </a> </li>
                  <li className="nav-item"> <a className="nav-link" href="rnd">Research And Development</a> </li>
                  <li className="nav-item"> <a className="nav-link " href="training-placement">Training & Placements  </a> </li>
                  <li className="nav-item"> <a className="nav-link " href="facilities">Facilities </a> </li> */}
              </ul>
            </div>

          </nav>
        </header>

        :

        <header className="header headerfixed fixed-top position-fixed  navbar_style pageheader showeScroll_header" >
          <div className="topbaar d-lg-flex d-none">
            <div className="w-100 pe-4">
              <div className="row">
                <div className="col-lg-3 socail-link d-flex align-items-center"> </div>
                <div className="col-lg-9 text-white text-lg-end d-flex align-items-center justify-content-lg-end ">
                  <div>
                    <a style={{cursor:"pointer"}} onClick={()=>setadmissionEnquori(false)}>Admission Enquiry</a>
                    <a target="_blank" href="https://www.narainagroup.ac.in/page/online-payment"> Online Payment </a>
                    <a target="_blank" href="http://www.narainamedicalcollege.com/"> Naraina Medical College </a>
                    <a target="_blank" href="https://login.narainagroup.ac.in/l.ngi"> NIS Login </a>
                  </div>

                  <div className="col-lg-1 socail-link d-flex align-items-center"> </div>
                  <div>

                    <a target="_blank" href="https://iic.mic.gov.in/">  IIC </a>
                    <a target="_blank" href="#"> IQAC</a>
                    <a target="_blank" href="https://nad.gov.in/"> NAD </a>
                    <Link target="_blank" to="/alumni-cell">  ALUMNI CELL</Link>
                  </div>
                </div>
                {/* <div className="col-lg-6 text-white text-lg-end d-flex align-items-center justify-content-lg-end "><a target="_blank" href="https://www.narainagroup.ac.in/page/admission-enquiry">Admission Enquiry</a><a target="_blank" href="https://www.narainagroup.ac.in/page/online-payment"> Online Payment </a> <a target="_blank" href="http://www.narainamedicalcollege.com/"> Naraina Medical College </a> <a target="_blank" href="https://login.narainagroup.ac.in/l.ngi"> NIS Login </a> </div> */}
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light py-lg-3 ul_nav_title " style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }} >
            <div className='logo_img ms-4 navbar-brand'>
              <Link  className="  " to="/"> <img className='logo_top_img' src={siteUrl + `/assets/img/logo.png`} /> </Link>
            </div>
            <div className="pe-3 box-oxxxx" style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              // marginRight: '100px'
            }}>
              <button className="navbar-toggler collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                <div className="hamburger-toggle ">
                  <div className="hamburger"> <span></span> <span></span> <span></span> </div>
                </div>
              </button>
            </div>
            <div className="collapse navbar-collapse me-lg-3 ms-lg-5 " id="navbar-content">
              <ul className="navbar-nav ms-lg-4 all_title_text" style={{
                width: '100%',
                // backgroundColor:'red',
                display: 'flex',
                justifyContent: 'right',
                flexWrap: 'wrap',

                fontSize: '16px',
                fontWidth: '800',
              }}>

                {services.map((service) => (

                  (service.drop_down == true) ?
                    < li className='nav-item drop_title dropdown' key={service._id} >

                      <a className="nav-link   dropdown-toggle  dropdown_icon"
                        style={{
                          fontSize: '16px ',
                          fontWidth: '800',




                        }} href="" data-bs-toggle="dropdown">{service.service_name}</a>
                      <ul className="dropdown-menu ul_nav_subtitle" key={service._id}>
                      {service.subservices.sort((a, b) => a.order - b.order).map((subservice) => {
                          let to;
                          let title;
                          

                          switch (subservice.title) {
                            case "Canteen/Mess":
                              to = "/page/canteen";
                              title = "canteen";
                              break;
                            case "Banking/ATM Facilities":
                              to = "/page/banking-atm";
                              title = "Banking/ATM Facilities";
                              break;
                            case "Hostel/Accommodation":
                              to = "/page/hostel-accommodation";
                              title = "Hostel/Accommodation";
                              break;
                            default:
                              to = `/page/${subservice.title}`;
                              title = subservice.title;
                          }

                          return (
                            <li key={subservice._id} className='drop_subtitle'>
                              <Link
                                to={to}
                                state={{ to: subservice._id }}
                                className="dropdown-item" >
                                {subservice.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    :

                    <li className={`nav-item dropdown servicename_nodrop my-auto px-lg-2 ${service.service_name}`} style={{}} key={service._id}>
                      <Link to={`/news-events/${service.service_name}`}
                        state={{ to: service._id }}

                        className=" nav-link" style={
                          {
                            fontSize: '16px',
                            fontWidth: '800',

                          }
                        }>
                        {service.service_name}
                      </Link>
                    </li>
                ))}


                {/* <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href="" data-bs-toggle="dropdown"> About Us</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/about">About Company</a></li>
                    <li><a className="dropdown-item" href="#">Certification</a></li>
                    <li><a className="dropdown-item" href="#">Quality Policy</a></li>
                    <li><a className="dropdown-item" href="#">Group of Companies</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Courses</a>
                  <ul className="dropdown-menu shadow">
                    <li><a className="dropdown-item" href="/management-course-details">Management</a></li>
                    <li><a className="dropdown-item" href="/engineering-course-details">Engineering</a></li>
                    <li><a className="dropdown-item" href="/nursing-course-details">Nursing</a></li>
                    <li><a className="dropdown-item" href="/npharmacy-course-details">Pharmacy</a></li>
                    <li><a className="dropdown-item" href="/mbbs-course-details">MBBS</a></li>
                  </ul>
                </li> */}
                {/* <li className="nav-item"> <a className="nav-link" href="/news-events">News & Events </a> </li> */}
                {/* <li className="nav-item"> <a className="nav-link" href="intitutions">Institutions </a> </li>
                <li className="nav-item"> <a className="nav-link" href="rnd">Research And Development</a> </li>
                <li className="nav-item"> <a className="nav-link " href="training-placement">Training & Placements  </a> </li>
                <li className="nav-item"> <a className="nav-link " href="facilities">Facilities </a> </li> */}
              </ul>
            </div>

          </nav>
        </header>
        // <header className="header headerfixed fixed-top pageheader ">
        //   <div className="topbaar d-lg-flex d-none">
        //     <div className="container me-5">
        //       <div className="row">
        //         <div className="col-lg-6 socail-link d-flex align-items-center"> </div>
        //         <div className="col-lg-6 text-white text-lg-end d-flex align-items-center justify-content-lg-end w-100"> <a target="_blank" href="https://www.narainagroup.ac.in/page/admission-enquiry"> Admission Enquiry </a> <a href="#"> Online Payment </a> <a target="_blank" href="http://www.narainamedicalcollege.com/"> Naraina Medical College </a> <a target="_blank" href="https://login.narainagroup.ac.in/l.ngi"> NIS Login </a> </div>
        //       </div>
        //     </div>
        //   </div>
        //   <nav className="navbar navbar-expand-lg navbar-light shadow py-3 " >
        //     <a className="navbar-brand ps-5 " href="/"> <img className='other_page_img' src={siteUrl + `/assets/img/logo.png`}  /> </a>
        //     <div className="w-100 " >
        //       <button className="navbar-toggler w-100 pe-5 collaspe_btn collapsed" style={{
        //         justifyContent: 'right',
        //         display: 'flex',
        //         marginRight:'50px',


        //       }} type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
        //         <div className="hamburger-toggle">
        //           <div className="hamburger"> <span></span> <span></span> <span></span> </div>
        //         </div>
        //       </button>
        //       <div className="collapse navbar-collapse nav_not_home nav_box" id="navbar-content">
        //         <ul className="navbar-nav ms-5 me-5 mb-2 mb-lg-0 flex-wrap nav_not_home ul_nav_title"
        //           style={{
        //             fontSize: '14px',
        //             fontWidth: '800',
        //           }}>

        //           {services.map((service) => (

        //             (service.drop_down == true) ?
        //               <li className="nav-item dropdown " key={service._id}>
        //                 <a className="nav-link  dropdown-toggle" href="" data-bs-toggle="dropdown">{service.service_name}</a>
        //                 <ul className="dropdown-menu px-3 ul_nav_subtitle" style={{
        //                   width: '40vh',
        //                 }} key={service._id}>
        //                   {service.subservices.map((subservice) => (
        //                     <li className='py-2' key={subservice._id}>
        //                       <Link to={`/page/${subservice._id}`}
        //                         className="nav-link  p-0" >
        //                         {subservice.title}
        //                       </Link>
        //                     </li>
        //                   ))}
        //                 </ul>
        //               </li>
        //               :
        //               <li className="nav-item dropdown  mx-2 my-auto" key={service._id}>
        //                 <Link to={`/news-events/${service._id}`}
        //                   className="nav-link"
        //                   style={
        //                     {
        //                       fontSize: '17px',
        //                       fontWidth: '800',
        //                       padding: '0',
        //                       margin: '0',
        //                       lineHeight: '40px'

        //                     }
        //                   } >
        //                   {service.service_name}
        //                 </Link>
        //               </li>

        //             // : null
        //           ))}
        //           {/* <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href="" data-bs-toggle="dropdown"> About Us</a>
        //             <ul className="dropdown-menu">
        //               <li><a className="dropdown-item" href="/about">About Company</a></li>
        //               <li><a className="dropdown-item" href="#">Certification</a></li>
        //               <li><a className="dropdown-item" href="#">Quality Policy</a></li>
        //               <li><a className="dropdown-item" href="#">Group of Companies</a></li>
        //             </ul>
        //           </li>
        //           <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Courses</a>
        //             <ul className="dropdown-menu shadow">
        //               <li><a className="dropdown-item" href="/management-course-details">Management</a></li>
        //               <li><a className="dropdown-item" href="/engineering-course-details">Engineering</a></li>
        //               <li><a className="dropdown-item" href="/nursing-course-details">Nursing</a></li>
        //               <li><a className="dropdown-item" href="/pharmacy-course-details">Pharmacy</a></li>
        //               <li><a className="dropdown-item" href="/mbbs-course-details">MBBS</a></li>
        //             </ul>
        //           </li> */}
        //           {/* <li className="nav-item"> <a className="nav-link" href="/news-events">News & Events </a> </li> */}
        //           {/* <li className="nav-item"> <a className="nav-link" href="intitutions">Institutions </a> </li>
        //           <li className="nav-item"> <a className="nav-link" href="rnd">Research And Development</a> </li>
        //           <li className="nav-item"> <a className="nav-link " href="training-placement">Training & Placements  </a> </li>
        //           <li className="nav-item"> <a className="nav-link " href="facilities">Facilities </a> </li> */}
        //         </ul>
        //       </div>
        //     </div>
        //   </nav>
        // </header>
      }
    </ >
  );
}

export default Header;
