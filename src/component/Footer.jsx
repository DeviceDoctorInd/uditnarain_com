import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from 'react-router-dom';

var d = new Date();
var currYear = d.getFullYear();

function Footer() {

  const navigate =  useNavigate()

  const [name, setName] = useState("");
  const [contactNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isStudent, setisstudent] = useState(false);
  const [services, setServices] = useState([]);


  const [isLoading, setIsLoading] = useState(false);


  const [Imgpopup, setImgpopup] = useState(false);
  const apiURL = process.env.REACT_APP_API_URL_LIVE;

  const WebapiURL = process.env.REACT_APP_API_URL_WebURL;

  const AddSupportForm = async (e) => {
    setIsLoading(true);
    var APIURL = '';
    if (isStudent) {
      APIURL = `${WebapiURL}/staff-supports`;
    } else {
      APIURL = `${WebapiURL}/student-supports`;
    }

    e.preventDefault();
    // API Call 
    const dataObject = {
      name,
      contactNumber,
      email,
      address,
      message,
    };

    await fetch(APIURL, {
      method: "POST",
      body: JSON.stringify(dataObject),

      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      res.json().then((data) => {
        const status = data.status;
        if (status === true) {
          setIsLoading(false);
          setImgpopup(false)
          swal("Success", data.message, "success").then((ok) => {
            if (ok) {
              // window.location.reload();
            }
          });
        } else {
          setIsLoading(true);
          swal("Error", data.message, "error");
        }
      });
    });


  };


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${apiURL}/servicesSubservicesList/`);
      const data = await response.json();
      setServices(data.data);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  }

  // console.log("services =>>>>> ", services);



  function imgurlsend(e) {
    setImgpopup(true)
    // console.log(e.target.src)
  };
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fotr_container">
                <div className="ftr_tops">
                  <div className="popular_posts">
                    <div className="post_box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                        <line x1="5" y1="21" x2="5" y2="10.85" />
                        <line x1="19" y1="21" x2="19" y2="10.85" />
                        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                      </svg>
                      <div className="post_box_content">
                        <h4 className="stats_number">
                          CORPORATE OFFICE:-
                        </h4>
                        <p>Naraina Vidya Peeth, B Block Ground Floor, Gangaganj, Panki, Kanpur - 208020 (UP),</p>
                      </div>
                    </div>
                    <div className="post_box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="2" />
                        <line x1="9" y1="12" x2="9.01" y2="12" />
                        <line x1="13" y1="12" x2="15" y2="12" />
                        <line x1="9" y1="16" x2="9.01" y2="16" />
                        <line x1="13" y1="16" x2="15" y2="16" />
                      </svg>
                      <div className="post_box_content">
                        <h4 className="stats_number">
                          Helpline:
                        </h4>
                        <p>
                          +91 - 9918601154, 9918402154, 9918402170, 9918402147, 9918402171
                        </p>
                      </div>
                    </div>
                    <div className="post_box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z" />
                        <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" />
                        <path d="M6 9h-.01" />
                      </svg>
                      <div className="post_box_content">
                        <h4 className="stats_number">
                          ADMISSION OFFICE:-
                        </h4>
                        <p>
                          <strong>NORTH CAMPUS:</strong> 1423/1, Ratanpur, Panki, Kanpur- 208020<br/> <strong>SOUTH CAMPUS:</strong> 1180, Gangaganj, Panki, Kanpur -208020
                        </p>
                      </div>
                    </div>

                  </div>
                  <div className="nav_links">
                    <div className="ftr_links">
                      <h2 className="ftr_heading">Contact Us</h2>
                      <ul className="ftr_links_wrpr">
                        <li><a href="mailto:info@narainagroup.net"><span className="ti-email pb-2"></span>info@narainagroup.net</a></li>
                        <li className="admission__enquiry">

                          <table className="rwd-table">
                            <tbody>
                              <tr>
                                <th data-th="Supplier Code">FOR ADMISSION ENQUIRY</th>
                                <td data-th="Supplier Name"></td>
                              </tr>
                              <tr>
                                <th data-th="Supplier Code">Engineering</th>
                                <td data-th="Supplier Name">+91 9918601145</td>
                              </tr>
                              <tr>
                                <th data-th="Supplier Code">
                                Diploma
                                </th>
                                <td data-th="Supplier Name">
                                +91 9918601103
                                </td>
                              </tr>
                              <tr>
                                <th data-th="Supplier Code">
                                Computer Applications
                                </th>
                                <td data-th="Supplier Name">
                                +91 9918601168 
                                </td>
                              </tr>
                              <tr>
                                <th data-th="Supplier Code">
                                Management
                                </th>
                                <td data-th="Supplier Name">
                                +91 9918601102
                                </td>
                              </tr>
                              <tr>
                                <th data-th="Supplier Code">
                                Nursing & Paramedical
                                </th>
                                <td data-th="Supplier Name">
                                +91 9918402157 <br/>
                                +91 9918402171
                                </td>
                              </tr>
                              <tr>
                                <th data-th="Supplier Code">
                                Pharmacy
                                </th>
                                <td data-th="Supplier Name">
                                +91 9918601164
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                      </ul>
                    </div>
                    <div className="ftr_links">
                      <h2 className="ftr_heading">Students</h2>
                      <ul className="ftr_links_wrpr">
                        <li className="stundent_support" style={{cursor: "pointer"}} onClick={() => imgurlsend(setisstudent(false))}><i className="fa fa-caret-right"></i> Student Support Corner </li>
                        {/* <li>
                          <a target="_blank" href="https://www.narainagroup.ac.in/page/our-colleges">
                            <i className="fa fa-caret-right"></i> Our Colleges</a>

                        </li> */}
                        
                     
                        
                        <li>
                          <Link to={'/data/studentActivities'} >
                          <i className="fa fa-caret-right"></i> Student Activities</Link>

                        </li>
                         <li>
                          <Link to={'/data/student-development'} >
                          <i className="fa fa-caret-right"></i> Student Development</Link>

                        </li>  <li>
                          <Link to={'/data/financial-services'} >
                          <i className="fa fa-caret-right"></i> Student Financial Services</Link>

                        </li>
                        {/* <li>
                          <a target="_blank" href="https://www.narainagroup.ac.in/page/student-activities">
                            <i className="fa fa-caret-right"></i> Student Activities</a>


                        </li> */}


                        {/* <li>
                          <a target="_blank" href="https://www.narainagroup.ac.in/page/student-development"><i className="fa fa-caret-right"></i> Student Development</a>

                        </li> */}
                        {/* <li>
                          <a target="_blank" href="https://www.narainagroup.ac.in/page/student-financial-services"><i className="fa fa-caret-right"></i> Student Financial Services</a>

                        </li> */}
                      </ul>
                      {
                        Imgpopup && <>

                          <div style={
                            {
                              position: 'fixed',
                              top: '0',
                              left: '0',
                              width: '100vw',
                              height: '100vh',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'rgba(0, 0, 0, 0.50)',
                              opacity: '2',

                              zIndex: '10000000'


                            }
                          }>


                            <div className="col-lg-5 ps-lg-5  position-relative">
                              <div onClick={() => setImgpopup(false)} style={
                                {
                                  position: 'absolute',
                                  top: '0',
                                  right: '0',
                                  width: '20px',
                                  height: '20px',
                                  backgroundColor: 'red',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  color: '#fff',
                                  cursor: 'pointer',

                                  zIndex: '100000000',

                                }

                              }>x</div>
                              <div className="bg-light p-lg-5 p-4 appointment-form ">
                                <div className="text-center">
                                  <h4 className="pb-2 text-uppercase text-danger"><strong> {isStudent === false ? 'Student Support Corner' :
                                    'Staff Support Form'
                                  }

                                  </strong></h4>
                                  {/* <p className="pb-4"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p> */}
                                </div>
                                <form data-aos="fade-up" className="aos-init" onSubmit={AddSupportForm}>

                                  <div className="mb-3">
                                    <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onChange={(e) => { setName(e.target.value) }} required />
                                  </div>

                                  <div className="mb-3">
                                    <input type="number" name="contactNumber" className="form-control" placeholder="Enter Phone" onChange={(e) => { setPhone(e.target.value) }} required />
                                  </div>

                                  <div className="mb-3">
                                    <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} required />
                                  </div>
                                  <div className="mb-3">
                                    <input type="text" name="address" className="form-control" placeholder="Enter Address" onChange={(e) => { setAddress(e.target.value) }} required />
                                  </div>
                                  <div className="mb-3">
                                    <textarea rows="7" name="message" className="form-control" placeholder="Message" onChange={(e) => { setMessage(e.target.value) }} required></textarea>
                                  </div>
                                  <button type="submit" className="btn btn-warning text-uppercase ">{isLoading === false ? 'Submit' :
                                    'Wait....'}</button>
                                </form>
                              </div>
                            </div>



                          </div>
                        </>

                      }
                    </div>
                    <div className="ftr_links">
                      <h2 className="ftr_heading">Institutes</h2>
                      <ul className="ftr_links_wrpr">
                        <li><a target="_blank" href="/"><i className="fa fa-caret-right"></i>Home</a></li>
                        <li>

                          <a target="_blank" href="/about"><i className="fa fa-caret-right"></i>About Us</a>
                        </li>

                        <li>
                          <Link to={'/data/ourcolleges'} >
                            <i className="fa fa-caret-right"></i> Our Instititions</Link>

                        </li>
                         <li>
                          <Link
                           to={'/data/e-brochure'}
                           >
                            <i className="fa fa-caret-right"></i> Ebrochure</Link>

                        </li>
                      </ul>
                    </div>
                    <div className="ftr_links">
                      <h2 className="ftr_heading">Academics</h2>
                      <ul className="ftr_links_wrpr top_offers">
                        {/* <li>
                          <a target="_blank" href="https://www.narainagroup.ac.in/page/media-coverage">
                            <i className="fa fa-caret-right"></i> Press Release Information</a>


                        </li> */}
                             <li>
                          <Link to={'/data/press-release'}>
                            <i className="fa fa-caret-right"></i> Press Release Information</Link>
                        </li>

                        <li className="stundent_support" style={{cursor: "pointer"}} onClick={() => imgurlsend(setisstudent(true))}><i className="fa fa-caret-right"></i>Faculty/Staff Support Corner </li>
                        <li>
                          <Link  to="/data/academic-calendars"><i className="fa fa-caret-right"></i> Academic Calendars</Link>

                        </li>

                        <li>
                          <Link  to="/data/mandatory-disclosure"><i className="fa fa-caret-right"></i> Mandatory Disclosure</Link>

                        </li>
                        {/* <li>
                          <Link  to={'/data/academics-office'}><i className="fa fa-caret-right"></i> Academic Office</Link>


                        </li> */}
                        {/* <li><a target="_blank" href="http://www.narainagroup.ac.in/page/naraina-theme">Naraina Theme(CallerTune)</a></li> */}
                      </ul>
                    </div>

                  </div>
                </div>
                <hr/>
                <div className="ftr_bottom">
                  <p>© 2023 Ellevate. All Rights Reserved. Desgined & Developed By <a href="http://devicedoctorindia.in/">Device Doctor India</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
