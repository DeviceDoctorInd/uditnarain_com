import React from 'react';
// import './BrandLogoSliderStyle.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

                            
import Slider from "react-slick";

// import 'bootstrap/dist/css/bootstrap.min.css';

function BrandLogoSlider() {

    var settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 3000,
      	autoplaySpeed: 2000,
		// speed: 2000,
		// cssEase: "linear",
		
		slidesToShow: 8,
		slidesToScroll: 8,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 6,
			  slidesToScroll: 6,
			  infinite: true,
			  dots: true,
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  initialSlide: 2,
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  dots: false,
			}
		  }
		]
	  };
	  const imagePath =[
		{
		  url:'assets/img/companyName/AIIMS-Logo.jpg',
		},
		{
		  url:'assets/img/companyName/Apollo_Hospitals_Logo.svg.png',
		},
		{
		  url:'assets/img/companyName/byjus.png',
		},
		{
		  url:'assets/img/companyName/Biocon_Logo..png',
		},
		{
		  url:'assets/img/companyName/biz2credit.png',
		},
		{
		  url:'assets/img/companyName/Dabur_Logo.png',
		},
		{
		  url:'assets/img/companyName/Dell.png',
		},
		{
		  url:'assets/img/companyName/Escorts_Group.png',
		},
		{
		  url:'assets/img/companyName/chetu.png',
		},
		{
		  url:'assets/img/companyName/FIS_logo.svg.png',
		},
		{
		  url:'assets/img/companyName/fortis.png',
		},
		{
		  url:'assets/img/companyName/honda.png',
		},
		{
		  url:'assets/img/companyName/HDFC-Bank-Logo.png',
		},
		{
		  url:'assets/img/companyName/genpact.png',
		},
		{
		  url:'assets/img/companyName/GlobalLogic-Logo.png',
		},
		{
		  url:'assets/img/companyName/IBM.png',
		},
		{
		  url:'assets/img/companyName/IDBI-Bank-logo.png',
		},
		{
		  url:'assets/img/companyName/igt-solutions-logo.png',
		},
		{
		  url:'assets/img/companyName/iSON-Logo.jpg',
		},
		{
		  url:'assets/img/companyName/Infosys.png',
		},
		{
		  url:'assets/img/companyName/Jio.png',
		},
		{
		  url:'assets/img/companyName/lupin.jpg',
		},
		{
		  url:'assets/img/companyName/kailash.jpg',
		},
		{
		  url:'assets/img/companyName/jbm-group.png',
		},
		{
		  url:'assets/img/companyName/jubilant.png',
		},
		{
		  url:'assets/img/companyName/TCG.jpg',
		},
		{
		  url:'assets/img/companyName/TCS.png',
		},
		{
		  url:'assets/img/companyName/torrent.png',
		},
		{
		  url:'assets/img/companyName/Sun_Pharma.png',
		},
		{
		  url:'assets/img/companyName/Velocis-HI-Res-Logo_tcm19-8354.png',
		},
		{
		  url:'assets/img/companyName/siemens-ag-logo.png',
		},
		{
		  url:'assets/img/companyName/Infosys.png',
		},
		{
		  url:'assets/img/companyName/zydus cadila.jpg',
		},
		{
		  url:'assets/img/companyName/medanta-the-medicity.webp',
		},
		{
		  url:'assets/img/companyName/vivo.png',
		},
		{
		  url:'assets/img/companyName/reddy.png',
		},
		{
		  url:'assets/img/companyName/policy.png',
		}
		

	  ]
    return (
        <div className=''>
        <h2 className=' logo-title-section text-center mb-5 text-bold title-section pb-0 mb-0 text-center'> Our Top Recruiter</h2>

		<div className='brand_logo_slide_box ' style={{overflow:"hidden"}}>
    
    <Slider {...settings} >
    {
      imagePath.map((imgpath,indx)=>{
        return(
          <div key={indx} className='img_box'>
			<img className='' src={imgpath.url} alt=""/>
        
      </div>

        )
      })
    }
    
    </Slider>
  </div>
        
      </div>









      
      );
}

export default BrandLogoSlider;
