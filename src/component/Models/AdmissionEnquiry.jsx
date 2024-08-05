import axios from 'axios';
import React, { useState } from 'react'
import swal from "sweetalert";
import Loader from '../../Loader';

function AdmissionEnquiry({ setadmissionEnquori }) {

  const [showLoader, setShowLoader] = useState(false)
  const WebapiURL = process.env.REACT_APP_API_URL_WebURL;
  let initaldata = {
    name: "",
    dateOfBirth: "",
    fathersName: "",
    contactNumber: null,
    alternateContactNumber: null,
    email: "",
    address: "",
    message: "",
    course: ""

  }
  const [localdata, setLocaldata] = useState(initaldata)
  console.log(localdata)
  function inpvalue(e) {
    console.log(e.target.value)
    console.log(e.target.name)
    setLocaldata((pre) => ({ ...localdata, [e.target.name]: e.target.value }))

  }
  function closepopup() {
    localStorage.setItem("admissionEnquori", true)
    setadmissionEnquori(true)
  }



  async function AdmissionSupportForm(e) {
    e.preventDefault()
    setShowLoader(true)

    try {
      const res = await axios.post(`${WebapiURL}/admission-enquiries`, localdata)
      console.log(res)
      setLocaldata(initaldata)
      closepopup()

      swal("Success", 'Form Submitted Successfully', "success").then((ok) => {
        if (ok) {
          // window.location.reload();
        }
      });

 

      setShowLoader(false)
    }
    catch (error) {
      console.log(error)
      setShowLoader(false)
    }

  }


  const programs = [
    "B.Tech CSE",
    "B.Tech CSE - AI",
    "B.Tech CSE - AI & ML",
    "B.Tech CSE - Data Science",
    "B.Tech CSE - Cyber Security",
    "B.Tech ECE",
    "B.Tech ME",
    "M.Tech CSE",
    "M.Tech ECE",
    "M.Tech ME",
    "Diploma ME",
    "Diploma EN",
    "MCA",
    "BCA",
    "MBA",
    "BBA",
    "D.Pharm",
    "B.Pharm",
    "Pharm.D (6-year professional doctoral degree program)",
    "M.Pharm - Pharmaceutical Chemistry",
    "M.Pharm - Pharmaceutics",
    "M.Pharm - Pharmacology",
    "ANM",
    "GNM",
    "B.Sc Nursing",
    "P.B B.Sc Nursing",
    "M.Sc Nursing - Medical Surgical Nursing",
    "M.Sc Nursing - Child Health Nursing",
    "M.Sc Nursing - Obstetrics & Gynaecological Nursing",
    "M.Sc Nursing - Mental Health Nursing",
    "M.Sc Nursing - Community Health Nursing",
    "B.P.T (Bachelor of Physiotherapy)",
    "Diploma in O.T. Technician",
    "Diploma in Emergency & Trauma care",
    "Diploma in Optometry",
    "Diploma in D.M.L.T",
    "Diploma in C.T. Technician",
    "Diploma in Dialysis Technician",
    "Diploma in Anesthesia & Critical Care Technician",
    "Diploma in X-ray Technician",
    "Diploma in Physiotherapy",
    "MBBS"
  ];

  // const AddSupportForm = async (e) => {


  //     await fetch(APIURL, {
  //       method: "POST",
  //       body: JSON.stringify(dataObject),

  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }).then((res) => {
  //       res.json().then((data) => {
  //         const status = data.status;
  //         if (status === true) {
  //           setIsLoading(false);
  //           setImgpopup(false)
  //           swal("Success", data.message, "success").then((ok) => {
  //             if (ok) {

  //             }
  //           });
  //         } else {
  //           setIsLoading(true);
  //           swal("Error", data.message, "error");
  //         }
  //       });
  //     });


  //   };


  
  return (
    <>
    {showLoader&& <Loader/>}
<div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        opacity: "2",

        zIndex: "10000000",
      }}
    >
      <div className="col-lg-5 ps-lg-5  position-relative">
        <div
          className=''
          // onClick={() => setadmissionEnquori(true)}
          onClick={closepopup}
          style={{
            position: "absolute",
            top: "0",
            right: "5px",
            // width: "30px",
            // height: "30px",
            // backgroundColor: "red",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // color: "#fff",
            cursor: "pointer",
            // borderRadius:"10px",
            // zIndex: "100000000",

          }}
        >
          <a class="close-button">
            <div class="in">
              <div class="close-button-block"></div>
              <div class="close-button-block"></div>
            </div>
            <div class="out">
              <div class="close-button-block"></div>
              <div class="close-button-block"></div>
            </div>
          </a>

        </div>
        <div className="bg-light p-lg-5 p-4 appointment-form ">
          <div className="text-center">
            <h4 className="pb-2 text-uppercase text-danger">
              <strong>Admissions Enquiry 2024-25 Batch</strong>
            </h4>
            {/* <p className="pb-4"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p> */}
          </div>
          <form
            data-aos="fade-up"
            className="aos-init"
            onSubmit={AdmissionSupportForm}
          >
            <div className="mb-3">

              <select
                className="form-control"
                style={{
                  color: "#212529",
                }}
                name="course"
                value={localdata.course}
                onChange={inpvalue}
              >
                <option value="">Please select your course</option>
                {programs.map((program, index) => (
                  <option key={index} value={program}>
                    {program}
                  </option>
                ))}
                {/* <option value="B.Arch">B.Arch</option>
                <option value="B.Tech (ME)">
                  B.Tech (Mechanical Engineering)
                </option>
                <option value="B.Tech (CS)">
                  B.Tech (Computer Science &amp; Engineering)
                </option>
                <option value="B.Tech (Civil Engg)">
                  B.Tech (Civil Engineering)
                </option>
                <option value="B.Tech (EC)">
                  B.Tech (Electronics &amp; Communication Engineering)
                </option>
                <option value="B.Tech (EN)">
                  B.Tech (Electrical &amp; Electronics Engineering)
                </option>
                <option value="B.Tech (IT)">B.Tech (Biotechnology)</option>
                <option value="B.Tech (IT)">B.Tech (Textile Technology)</option>
                <option value="B.Tech (IT)">
                  B.Tech (Chemical Engineering)
                </option>
                <option value="M.Tech (Computer Networking &amp; Engineering)">
                  M.Tech (Computer Science &amp; Engineering)
                </option>
                <option value="M.Tech(Mechanical Manufacturing Engineering)">
                  M.Tech (Mechanical Engineering)
                </option>
                <option value="M.Tech (Electronic &amp; Communication Engineering)">
                  M.Tech (Electronic &amp; Communication Engineering)
                </option>
                <option value="M.Tech (Computer Hardware &amp; Networking)">
                  M.Tech (Electrical &amp; Electronics Engineering)
                </option>
                <option value="Diploma Mechanical">
                  Diploma (Mechanical Engineering)
                </option>
                <option value="Diploma Electrical">
                  Diploma (Electrical Engineering)
                </option>
                <option value="Diploma Electronics">
                  Diploma (Electrical &amp; Electronics Engineering)
                </option>
                <option value="Diploma Civil">
                  Diploma (Civil Engineering)
                </option>
                <option value="Diploma Mass Communication">
                  Diploma (Mass Communciation)
                </option>
                <option value="Diploma Automobile">
                  Diploma (Mechanical Engineering-Automobile)
                </option>
                <option value="Diploma Production">
                  Diploma (Mechanical Engineering-Production)
                </option>
                <option value="D.Pharma">D.Pharma</option>
                <option value="B.Pharma">B.Pharma</option>
                <option value="M.Pharma(Pharma Cology)">
                  M.Pharma (Pharmacology)
                </option>
                <option value="M.Pharma(Pharma Cognosy)">
                  M.Pharma(Pharmacognosy)
                </option>
                <option value="M.Pharma(Pharma Cognosy)">
                  M.Pharma(Pharmaceutics)
                </option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
                <option value="MBA(marketing,finance,HR,IT,International business">
                  MBA(marketing,finance,HR,IT,International business)
                </option>
                <option value="MBA (Adevrtising &amp; Public Relation)">
                  MBA (Advertising &amp; Public Relation)
                </option>
                <option value="BCA">MCA</option>
                <option value="ANM Nursing">ANM Nursing</option>
                <option value="GNM Nursing">GNM Nursing</option>
                <option value="B.Sc. Nursing">B.Sc. Nursing</option>
                <option value="B.Sc. Nursing">Post Basic B.Sc. Nursing</option>
                <option value="B.Sc. Optometry">Diploma in Optometry</option>
                <option value="B.Sc. Emergency &amp; Trauma Care">
                  Diploma in Emergency &amp; Trauma Care
                </option>
                <option value="B.Sc. OT Technician">
                  Diploma in OT Technician
                </option> */}
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={localdata.name}
                placeholder="Enter Your Name"
                onChange={inpvalue}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                min="1980-01-01"
                max="2024-12-31"
                value={localdata.dateOfBirth}
                placeholder="Enter Your DOB"
                onChange={inpvalue}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="fathersName"
                value={localdata.fathersName}
                placeholder="Enter Your Father's Name"
                onChange={inpvalue}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="contactNumber"
                className="form-control"
                value={localdata.contactNumber}
                placeholder="Enter Phone Number"
                onChange={inpvalue}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="alternateContactNumber"
                value={localdata.alternateContactNumber}
                className="form-control"
                placeholder="Parent's Contact Number"
                onChange={inpvalue}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                value={localdata.email}
                placeholder="Enter Your Email"
                onChange={inpvalue}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter Your Address"
                value={localdata.address}
                onChange={inpvalue}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                rows="3"
                name="message"
                className="form-control"
                placeholder="Enter your Question/Message to Naraina Group of Institution. Our executive will follow up your query."
                onChange={inpvalue}
                value={localdata.message}
                required
              ></textarea>
            </div>
            <button onClick={closepopup} type="button" className=" mx-1 btn btn-outline-danger text-uppercase ">
              {/* {isLoading === false ? 'Submit' :
                'Wait....'} */}
              close
            </button>
            <button type="submit" className="btn  btn-outline-success text-uppercase ">
              {/* {isLoading === false ? 'Submit' :
                'Wait....'} */}
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default AdmissionEnquiry