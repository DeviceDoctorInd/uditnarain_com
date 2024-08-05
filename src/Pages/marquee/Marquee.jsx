import React from 'react';
// import './Marquee.css'; // Make sure to create this CSS file

const AdmissionEnquiryMarquee = () => {
  const enquiryData = [
    { category: "Engineering", contact: "+91 9918601145" },
    { category: "Diploma", contact: "+91 9918601103" },
    { category: "Computer Applications", contact: "+91 9918601168" },
    { category: "Management", contact: "+91 9918601102" },
    { category: "Nursing & Paramedical", contact: "+91 9918402157, +91 9918402171" },
    { category: "Pharmacy", contact: "+91 9918601164" }
  ];

  return (
    <div className="marquee">
      <div className="marquee-content">
   <span className='mr-5' style={{marginRight:"30px"}}>   FOR ADMISSION ENQUIRY	 </span>
        {enquiryData.map((item, index) => (
          <span key={index} className="marquee-item">
            {item.category}: {item.contact}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AdmissionEnquiryMarquee;
