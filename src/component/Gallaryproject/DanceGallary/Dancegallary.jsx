import React, { useEffect, useState } from 'react'
// import './Dancegallary.css'
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
// import FacultyPopUp from './FacultyPopUp';
import ImageLoader from '../../../HOC/ImageShow';


function Dancegallary(props) {
  const location = useLocation();

  const { to, from } = location.state || null
  console.log(from);
  const id = to
  const [subServices, setSubServices] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [nextimage, setNextImage] = useState(0);
  const [Imgpopup, setImgpopup] = useState(false);
  const [openFaculty, setFacultyPopup] = useState(false)
  const [Imgpath, setImgpath] = useState();
  const apiURL = process.env.REACT_APP_API_URL_LIVE;
  const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;
  const [Iconhide, setIconhide] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [ourDes, setOurDes] = useState(null)
  console.log(ourDes);
  var slider_images = '';
  if (subServices.slider_images != '') {
    slider_images = subServices.slider_images;
  }

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${apiURL}/subservicesListById/${id}`);
        const data = await response.json();
        console.log(data.data)
        if (data.data.long_description !== 'undefined') {
          setOurDes(data.data.long_description)
        }
        setSubServices(data.data);
        setFilterData(data.data.slider_images)
      } catch (error) {
        console.error('Error fetching subservices gallary data:', error);
      }
    }

    fetchMenu();
  }, [id]);

  const navigate = useNavigate()

  const navTofaculty = (data) => {
    navigate(`/faculty/profile`, { state: data })
  }

  function imgurlsend(e, indx, data) {
    if (from === "Faculty") {
      return

      // navigate(`/faculty/profile`, { state: data })

    } else {
      setImgpath(e.target.src);
      setImgpopup(true);

    }

  };

  function nextImage() {
    console.log(slider_images)
    console.log(subServices)
    if (slider_images.length > nextimage + 1) {
      let nextindex = nextimage + 1;
      setNextImage(nextindex);
      setImgpath(homeURL + subServices.slider_images[nextindex].imageUrl);
    } else {
      console.log("Reached the last image.");

    }
  }

  function previsImage() {
    if (nextimage >= 0) {
      setNextImage(nextimage - 1);
      setImgpath(homeURL + subServices.slider_images[nextimage].imageUrl);
    }
  }
  console.log(subServices)

  const data = [...filterData]

  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 12
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


  console.log(subServices);

  return (
    <section className='ddd dataSection'>
      <div className="row">
        <div className="col-lg-12" dangerouslySetInnerHTML={{ __html: ourDes }}>

        </div>
      </div>
      <p></p>
      <div className='dance_gallary_box'>
        <div className='dance_gallary_wrapper '>
          {
            (slider_images != undefined && slider_images != '') ?
              record.map((dgallaryimg, indx) => (
                <div className= {from==="updates"? `imggallaryboxEvents`:'imggallarybox'} key={indx}>


                  <div className="gallery-item" onclick="openModal(0)" onClick={(e) => {
                    imgurlsend(e, indx, dgallaryimg)
                  }}>
                    <ImageLoader src={homeURL + dgallaryimg.imageUrl} className={''} />

                    {/* <img onClick={(e) => {
                      imgurlsend(e, indx, dgallaryimg)
                    }} src={homeURL + dgallaryimg.imageUrl} alt={dgallaryimg.title} /> */}

                    <div className='img_text '>
                      {dgallaryimg.title && <p style={{ textAlign: "center" }} className='mb-1 '>{dgallaryimg.title}</p>}


                    </div>
                    {
                      from === "Faculty" && <div className="custom-overlayfaculty">
                        <button class="box_dynamic_card_button facultybutton" onClick={() => navTofaculty(dgallaryimg)}>
                          <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                          </svg>
                          <span class="text">Know more..</span>
                          <span class="circle"></span>
                          <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    }


                  </div>

                  {/* <div className='imgbox_img'>
                    <img
                      className='img_tag'
                      onClick={(e) => imgurlsend(e, indx)}
                      src={homeURL + dgallaryimg.imageUrl}
                      alt={dgallaryimg.title}
                    />
                  </div> */}

                </div>
              ))
              : null
          }
        </div>
      </div>

      {
        filterData.length ? <div className='paginations'>
          <Button onClick={handlePrev}>Previous</Button>
          <div className='paginations-items'>
            {pageNumbers.map(number => (
              <>
                <div className='iconofpagination' key={number} onClick={() => setCurrentPage(number)} style={{ margin: '0 5px', cursor: 'pointer', background: currentPage === number ? "#b1040e" : "white", color: currentPage === number ? "white" : "black", fontWeight: 600, }}>
                  {number}
                </div>

              </>


            ))}
            <span className='mt-2'> </span>
          </div>
          <Button onClick={handleNext}>Next</Button>

        </div> : null
      }


      {(Imgpopup) && <>
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

            <BsArrowRightCircle />


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
      {/* <FacultyPopUp
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={filterData}
        baseUrl={homeURL}

      /> */}

    </section>
  );
}

export default Dancegallary;
