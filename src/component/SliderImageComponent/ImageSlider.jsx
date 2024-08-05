import React from 'react';
// import './ImageSliderStyle.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageLoader from '../../HOC/ImageShow';



// import 'bootstrap/dist/css/bootstrap.min.css';

function ImageSlider(props) {
    const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;
   
    const { sliderImages } = props;
    console.log(sliderImages)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            // slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            // slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            // slidesToSlide: 1 // optional, default to 1.
        }
    };
    // console.log("sliderImagessliderImages ", sliderImages);
    // const siteUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // }
    return (
        <div className='mt-0 mb-5 parent'>


            <Carousel
                responsive={responsive}
                // autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={true}
                slidesToSlide={4}
                dotListClass="custom-dot-list-style"
            >
                {sliderImages.map((slider, index) => {
                    // console.log(slider)
                    return (
                        (slider.imageUrl) ?
                            <div className="slider slider_img_box" key={index}  >
                            <ImageLoader  src={`${homeURL}${slider.imageUrl}`} className='image_slider_img'></ImageLoader>
                                {/* <img className='image_slider_img' src={`${homeURL}${slider.imageUrl}`} alt="Images" /> */}
                            </div>
                            : null
                    );
                })}
            </Carousel>












            {/* <h2> Single Item</h2> */}
            {/* <Slider className='img_slider_box' {...settings}>
                <div className="slide d-flex gap-5">
                 
                    {sliderImages.map((slider,index) => (
                        (slider) && index <=2 ?
                        
                            <img className='image_slider_img' src={`${homeURL}${slider}`} alt="" key={slider} />
                            : null
                    ))}
                </div>

                <div className="slide d-flex justify-content-between">
                    <img src={`${siteUrl}/assets/ImageSlider/sliderimg6.jpg`} alt="" />
                    <img src={`${siteUrl}/assets/ImageSlider/sliderimg7.jpg`} alt="" />
                    <img src={`${siteUrl}/assets/ImageSlider/sliderimg8.jpg`} alt="" />

                </div> 

            </Slider>*/}
        </div>

    );
}

export default ImageSlider;
