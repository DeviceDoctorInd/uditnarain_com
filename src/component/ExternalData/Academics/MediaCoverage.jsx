import React, { useState } from 'react'
import { FadingImages, FadingImagesWithOpen } from '../Components/Fading'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

const MediaCoverage = () => {
    const [nextimage, setNextImage] = useState(0);
    const [Imgpopup, setImgpopup] = useState(false);
    const [Imgpath, setImgpath] = useState("https://wbs.narainagroup.ac.in/ngi/view/images/media-2017/img1-2017.jpg");

    const arrayLength44 = new Array(44).fill(null).map((_, index) => `https://backend.uditnarain.com/news/${index + 1}.jpg`);


    const setImagePath = (index) => {
        setImgpath(arrayLength44[index]);
        setImgpopup(true);
    }
    function nextImage() {

        if (arrayLength44.length > nextimage + 1) {
            let nextindex = nextimage + 1;
            setNextImage(nextindex);
            // setImgpath(homeURL + subServices.slider_images[nextindex].imageUrl);
        } else {
            console.log("Reached the last image.");

        }
    }


    function previsImage() {
        if (nextimage >= 0) {
            setNextImage(nextimage - 1);
            // setImgpath(homeURL + subServices.slider_images[nextimage].imageUrl);
        }
    }



    const data = [...arrayLength44]

    const [currentPage, setCurrentPage] = useState(1)
    const imagesPerPage = 9
    const lastIndex = currentPage * imagesPerPage;
    const firstIndex = lastIndex - imagesPerPage;
    const record = data.slice(firstIndex, lastIndex)
    const npage = Math.ceil(data.length / imagesPerPage)
    const pageNumbers = [...Array(npage + 1).keys()].slice(1)

    const handleNext = () => {
        if (currentPage < npage) {
            setCurrentPage(currentPage + 1)
        }

    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    return (
        <div>
            <h4 style={{ textAlign: "center", paddingTop: "25px", color: "#b1040e" }}>Naraina Group in Print Media</h4>
            <div className="container">
                <div className="row pb-5 mt-lg-5 mb-lg-5">
                    {record.map((x, index) => <>
                        <FadingImagesWithOpen url={x} setImagePath={setImagePath} index={index} />
                    </>)}

                </div>

            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                <Button onClick={handlePrev}>Previous</Button>
                <div style={{ display: "flex", gap: "10px" }}>
                    {pageNumbers.map(number => (
                        <>
                            <div className='iconofpagination' key={number} onClick={() => setCurrentPage(number)} style={{ margin: '0 5px', cursor: 'pointer', background: currentPage === number ? "#b1040e" : "white", color: currentPage === number ? "white" : "black", fontWeight: 600, padding: "8px 14px", fontSize: "16px", borderRadius: "50%" }}>
                                {number}
                            </div>

                        </>


                    ))}
                    <span className='mt-2'> </span>
                </div>
                <Button onClick={handleNext}>Next</Button>

            </div>

            {Imgpopup && <>
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#000',
                        opacity: '1',
                        zIndex: '10000000'
                    }}
                >
                    <div
                        onClick={() => setImgpopup(false)}
                        style={{
                            position: 'fixed',
                            top: '11%',
                            right: '10%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: '1',
                            cursor: 'pointer',
                            color: '#fff',
                            fontSize: '50px',
                            zIndex: '10000000000'
                        }}
                    >
                        <IoIosCloseCircleOutline />
                    </div>
                    <div
                        onClick={previsImage}
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '5%',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#000',
                            color: '#fff',
                            cursor: 'pointer',
                            fontSize: '50px',
                            zIndex: '1000000000'
                        }}
                    >

                        <i className={nextimage < 0 && 'errow_hide'}>

                            <BsArrowLeftCircle />
                        </i>

                    </div>
                    <div
                        onClick={nextImage}
                        style={{
                            position: 'fixed',
                            top: '0',
                            right: '5%',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#000',
                            color: '#fff',
                            cursor: 'pointer',
                            fontSize: '50px',
                            zIndex: '1000000000'
                        }}
                    >
                        {/* <i className={  'errow_hide'}> */}

                        <BsArrowRightCircle />
                        {/* </i> */}


                    </div>
                    <div className='p-5 my-5' style={{ width: '80vw', height: '80vh', overflow: 'hidden' }}>
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
                            src={Imgpath}
                            alt='Image not found'
                        />
                    </div>
                </div>
            </>}

        </div>
    )
}

export default MediaCoverage