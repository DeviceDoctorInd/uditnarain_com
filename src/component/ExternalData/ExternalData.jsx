import React from 'react'
// import "./external.css"
import OurColleges from './Components/OurColleges'
import { useParams } from 'react-router-dom'
import StudenActivities from './Components/StudenActivities'
import StudentDevelopment from './Components/StudentDevelopment'
import FinancialServices from './Components/FinancialServices'
import MediaCoverage from './Academics/MediaCoverage'
import Calenders from './Academics/Calenders'
import MandatoryDisclosure from './Academics/MandatoryDisclosure'
import AcademicOffice from './Academics/AcademicOffice'
import EBrochure from './Academics/EBrochure'

function ExternalData() {
  const { type } = useParams()

  switch (type) {
    case 'ourcolleges':
      return <section className='dataSection'>
        <OurColleges />
      </section>
      break;

    case "studentActivities":
     return  <section className='dataSection'>
        <StudenActivities />
      </section>
      break; 
      case "student-development":
     return  <section className='dataSection'>
        <StudentDevelopment />
      </section>
      break;

      case "financial-services":
        return  <section className='dataSection'>
           <FinancialServices />
         </section>
         break;
          case "press-release":
        return  <section className='dataSection'>
           <MediaCoverage />
         </section>
         break;
          case "academic-calendars":
        return  <section className='dataSection'>
           <Calenders />
         </section>
         break; 
         case "mandatory-disclosure":
        return  <section className='dataSection'>
           <MandatoryDisclosure/>
         </section>
         break;  
          case "academics-office":
        return  <section className='dataSection'>
           <AcademicOffice/>
         </section>
         break;case "e-brochure":
        return  <section className='dataSection'>
           <EBrochure/>
         </section>
         break;
    default: <section className='dataSection'>
      <h1>Page not found</h1>
    </section>
  }


}

export default ExternalData