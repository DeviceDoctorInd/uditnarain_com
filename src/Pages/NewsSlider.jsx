import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function NewsSlider({ourEvents}) {

    ourEvents.reverse()

    const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
         cssEase: "linear",
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
              breakpoint: 800,
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

  return (
    <div className="slider-container">
      <Slider {...settings}>
      {
        ourEvents.map((gallaryimg) => {
                                console.log(gallaryimg)
                                return <div className="col-lg-4 col-md-6 gap-2">
                                <div className="kd-blog-1-card txaa-slide-down-1-item" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}>
                                    <div className="main-img fix img-cover">
                                        <img loading="lazy" decoding="async" width={400} height={265} src={homeURL + gallaryimg.image_url} className="attachment-kadu-img-size-1 size-kadu-img-size-1 wp-post-image" alt sizes="(max-width: 400px) 100vw, 400px" />              </div>
                                    <div className="card-content">
                                        <h3 className="card-title kd-heading-1 kd-font-900">
                                            <Link aria-label="name"  to={`/events-galary/${gallaryimg.title}`} state={{to:gallaryimg._id}}>{gallaryimg?.title}</Link>
                                        </h3>
                                        <p className="card-disc kd-para-1">{gallaryimg?.description}</p>
                                    </div>
                                </div>
                            </div>
                                
                            })
                        }
      </Slider>
    </div>
  );
}

export default NewsSlider;
