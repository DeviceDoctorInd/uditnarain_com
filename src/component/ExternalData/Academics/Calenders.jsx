import React from 'react'
// import ourColleges from '../Components/ourCollegeData.json'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
const Calenders = () => {

    const pdf = [
        {
            pdf: "Academic Calendar(B.Tech/M.Tech/MCA/Diploma Polytechnic) For NVPEMI, NPI & NCET EVEN SEM 2023-24",
            url: "http://img.narainagroup.co.in/ngi/academic-calendar/Academic%20Calendar%202023-24%20EVEN%20SemesterENGG.pdf"
        }, {
            pdf: "Academic Calendar(D.PHARM/B.PHARM/M.PHARM) EVEN SEM 2023-24",
            url: "http://img.narainagroup.co.in/ngi/academic-calendar/Academic%20Calendar%202023-24%20EVEN%20SemesterENGG.pdf"
        }, {
            pdf: "Academic Calendar(MBA/BBA/BCA) For NVPMI & NCM EVEN SEM 2023-24",
            url: "http://img.narainagroup.co.in/ngi/academic-calendar/Academic%20Calendar%202023-24%20EVEN%20SemesterENGG.pdf"
        }, {
            pdf: "Academic Calendar Naraina Nursing College (ANM/GNM/B.Sc. Nursing) For Session 2023-24",
            url: "http://img.narainagroup.co.in/ngi/academic-calendar/NNC_Academic%20Calender.pdf"
        },

    ]
    return (
        <>
            {/* <section className='ourColleges row'>
                <div className="section1 col-lg-8">
                    <h4 className='text-center mt-3'>Academic Calenders</h4>
                    <h6>Academic Calendar of Naraina Group of Institutions</h6>

                    <ul>
                        {pdf.map((college, index) => (
                            <li key={index}><a target='_blank' href={college.url}>{college.pdf}</a></li>
                        ))}
                    </ul>

                </div>
                <div className="section2 col-lg-4 mt-2">

                    <img src=" https://wbs.narainagroup.ac.in/ngi/view/images/development/4.JPG" alt="" />
                </div>


            </section> */}
            <div className="blog-slider">
                <Swiper
                    spaceBetween={30}
                    effect="fade"
                    loop={true}
                    mousewheel={{ invert: false }}
                    pagination={{ clickable: true }}
                    className="blog-slider__wrp"
                >
                    <SwiperSlide className="blog-slider__item">
                        <div className="blog-slider__img">
                        <img src=" https://wbs.narainagroup.ac.in/ngi/view/images/development/4.JPG" alt="" />
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">Academic Calenders</span>
                            <div className="blog-slider__title">Academic Calendar of Naraina Group of Institutions</div>
                            <div className="blog-slider__text">
                                <ul>
                                    {pdf.map((college, index) => (
                                        <li key={index}><a target='_blank' href={college.url}>{college.pdf}</a></li>
                                    ))}
                                </ul>
                            </div>
                            {/* <a href="#" className="blog-slider__button">READ MORE</a> */}
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="blog-slider__pagination"></div>
            </div>
        </>
    )
}

export default Calenders