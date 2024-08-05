import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { GoArrowUpRight } from 'react-icons/go';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageLoader from '../HOC/ImageShow';

function LatestUpdate() {
    const [ourUpdates, setOurUpdates] = useState([])
    const [ infinite,setInfinite]=useState(false)
    const [ slidesToShow,setSlidesToShow]=useState(4)
    const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;

    console.log(ourUpdates);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`
https://backend.uditnarain.com/admin/subserviceList/66a8e009f7421f1f16ef8529`)
            console.log(res);
            const resData = res.data.data 
            resData.reverse()
            setOurUpdates(resData)
            switch(resData.length){
                case 1:
                    setInfinite(false)
                    setSlidesToShow(3)
                    break;
                case 2:
                    setInfinite(false)
                    setSlidesToShow(2)
                    break;
                case 3:
                    setInfinite(false)
                    setSlidesToShow(1)
                    break;
                default:
                    setInfinite(true)
                    setSlidesToShow(0)
                    break;
            }
        }
        getData()
    }, [])


    const data = ['']
    const itemCount = data.length
    const getSlidesToShow = () => {
        if (itemCount >= 4) return 0;
        if (itemCount === 3) return 1;
        if (itemCount === 2) return 2;
        return 3;
    };
    var settings = {
        dots: true,
        infinite: infinite,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: slidesToShow,
        autoplay: true,
        autoplaySpeed: 2000,
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

    // dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll:4,
    // initialSlide: getSlidesToShow(),
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', options);
    };
    return (
        <>
            <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
                <div className=" rounded pt-2 mb-5">
                    <h1 className=" mb-0 text-center" data-aos="fade-up">
                        Latest Updates
                    </h1>
                </div>
                <div className='__Latest_update_main'>
                    <Slider {...settings}>
                        {ourUpdates&&ourUpdates.map((x, index) => (
                            <div key={index} className="col Latest_update_card">
                                <div className="service-card">
                                    <div className="icon-wrapper">
                                     {/* <ImageLoader  src={`${homeURL}${x.imageUrl}`}></ImageLoader> */}
                                        {/* <img src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trust & Co." /> */}
                                        <div>
                                            <h3 className="header___" href="#">
                                               {x.title}
                                            </h3>
                                            <div className="meta">{formatDate(x.updatedAt)}</div>
                                        </div>
                                    </div>
                                    <div className="___content__">
                                        <p className="___description___" dangerouslySetInnerHTML={{__html:x?.description}}>

                                        </p>
                                    </div>
                                    <div className="extra_content">
                                        <span><Link to={`/events-galary/${x.title}`}  state={{ to: x._id , from:"updates" } } >View</Link></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default LatestUpdate;
