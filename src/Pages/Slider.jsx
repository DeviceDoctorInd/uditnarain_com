import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function SlickSlider({bannerData,bannerType}) {
  const slider = React.useRef(null);
  const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;

  const handleGetStarted = () => {
    const userToken = localStorage.getItem("user_token");
    // if(!userToken){
    //     navigate('/signIn')
    // }else{
    //     navigate('/myorder')
    // }
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          right: "50px",
          zIndex: "20",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          left: "30px",
          zIndex: "20",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    auto: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={"NextArrow"} />,
    prevArrow: <SamplePrevArrow className={"PrevArrow"} />,
    appendDots: (dots) => (
      <div
        className="dots"
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="custom-slick"
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "rgb(232, 162, 222)",
        }}
      ></div>
    ),
  };
  const settings1 = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplaySpeed: 3000,
    // autoplay: true,
    slidesToShow: 3,
    auto: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={"NextArrow"} />,
    prevArrow: <SamplePrevArrow className={"PrevArrow"} />,
    appendDots: (dots) => (
      <div
        className="dots"
        style={{
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="custom-slick"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgb(232, 162, 222)",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderboxes = [
    {
      title: (
        <>
          <div className="subtitle text-uppercase" data-aos="fade-up">
            Welcome to{" "}
          </div>
          <h1 data-aos="fade-up">Naraina Group of Institutions (NGI)</h1>
        </>
      ),
      image_URL: "/assets/img/banner.jpg",
    },
    {
      title: (
        <>
          <div className="subtitle text-uppercase" data-aos="fade-up">
            Welcome to{" "}
          </div>
          <h1 data-aos="fade-up">Naraina Group of Institutions (NGI)</h1>
        </>
      ),
      image_URL: "/assets/img/banner.jpg",
    },
    {
      title: (
        <>
          <div className="subtitle text-uppercase" data-aos="fade-up">
            Welcome to{" "}
          </div>
          <h1 data-aos="fade-up">Naraina Group of Institutions (NGI)</h1>
        </>
      ),
      image_URL: "/assets/img/banner.jpg",
    },
  ];

  return (
    <>
      {bannerType === "mainBanner" ? (
        <div className="slickcontainer relative">
          <Slider ref={slider} {...settings}>
            {bannerData
              .filter((banner) => banner.banner_type === "banner")
              .map((slidebox, index) => {
                return (
                  <div key={index} className="position-relative">
                    <div className="row slider_row ">
                      <div className="col-lg-12 col-md-12 col-sm-12 w-100 h-100">
                        <div className=" position-absolute top-50  responsive_title">
                          <>
                            <div
                              className="subtitle text-uppercase"
                              data-aos="fade-up"
                            >
                              {slidebox.banner_title}
                            </div>
                            <h1 data-aos="fade-up">
                              {slidebox.banner_description}
                            </h1>
                          </>
                          {/* {
                                                            slidebox.title
                                                        } */}
                        </div>
                        <img
                          className="w-100 h-100 object-fit-cover"
                          src={`${homeURL}${slidebox.image}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      ) : (
        <div className="slider-container">
          <Slider ref={slider} {...settings1}>
            {bannerData
              .filter((banner) => banner.banner_type === "campus-life")
              .map((banner, index) => {
                return (
                  <div key={index} className="d-flex hhhhh">
                    <div className="ablog" data-aos="fade-up">
                      <div className="ablog__img">
                        {/* <a href={banner.banner_url}> */}
                          <img
                              onClick={() =>
                                window.open(`${homeURL}/${banner.image}`, "_blank")
                              }
                            src={`${homeURL}${banner.image}`}
                            className="img-fluid"
                            alt="img"
                          />
                        {/* </a> */}
                      </div>
                      {/* <div className="ablog__text ablog__text--service">
                        <h4 className="ablog__text--title">
                          <a>{banner.banner_title}</a>
                        </h4>
                        <p>{banner.banner_description}</p>
                        <div className="ablog__btn">
                          <a href={banner.banner_url} className="theme-read">
                            Read More
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      )}
    </>
  );
}

export default SlickSlider