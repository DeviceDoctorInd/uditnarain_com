import axios from 'axios';
import React, { useState } from 'react'

function AdmissionEnqDynamic() {
    const WebapiURL = process.env.REACT_APP_API_URL_WebURL;
    const [admissionEnq,setadmissionEnquori] =useState(false)
    let initaldata = {
        name:"",
        dateOfBirth:"",
        fathersName:"",
        contactNumber:null,
        alternateContactNumber:null,
        email:"",
        address:"",
        message:"",
        course:""
    
    }
    const [localdata,setLocaldata]= useState(initaldata)
    console.log(localdata)
    function  inpvalue(e){
        console.log(e.target.value)
        console.log(e.target.name)
        setLocaldata((pre)=>({...localdata,[e.target.name]:e.target.value}))

    }



    async function AdmissionSupportForm(e){
        e.preventDefault()
        try{
            const res =await axios.post(`${WebapiURL}/admission-enquiries`,localdata)
            console.log(res)
            setLocaldata(initaldata)
            localStorage.setItem("admissionEnquori",true)
            // setadmissionEnquori(true)
        }   
        catch(error){
            console.log(error)
        }

    }


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
    <div
      style={{
        width: "80%",
        height: "100%",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "rgba(0, 0, 0, 0.50)",
        // opacity: "2",
      }}
    >
   
       
        <div className="bg-light p-lg-5 p-4 appointment-form " style={{
        position:"sticky",
        top:"0px",
        left:"0px",
        zIndex: "20",
      }}>
          <div className="text-center">
            <h4 className="pb-2 text-uppercase text-danger">
              <strong>Admissions Enquiry 2024-25 Batch</strong>
            </h4>
          
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
                <option value="B.Arch">B.Arch</option>
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
                </option>
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
            <button type="submit" className="btn btn-warning text-uppercase ">
              {/* {isLoading === false ? 'Submit' :
                'Wait....'} */}
              Submit
            </button>
          </form>
        </div>
   
    </div>
  );
}

export default AdmissionEnqDynamic