import { useEffect, useState } from 'react';
// import './GallaryStyle.css'
import { Link, useNavigate } from 'react-router-dom';
import DPTraningandplacment from '../../Pages/DynamicPage'
import { Button } from '@chakra-ui/react';
import ImageLoader from '../../HOC/ImageShow';


function GallaryImg(props) {
  const siteUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  const apiURL = process.env.REACT_APP_API_URL_LIVE;
  const homeURL = process.env.REACT_APP_API_URL_LIVE_HOME;

  const { id } = props;
  console.log(id);
  const [subServices, setSubServices] = useState([]);
  const [Services, setServices] = useState([]);

  console.log(id);

  useEffect(() => {

    const fetchMenu = async () => {

      try {
        const response = await fetch(`${apiURL}/servicesSubservicesListById/${id}`);
        const data = await response.json();
        console.log(data, "kuch aaya ")
        if (id === "66508dfa8a1070a6c61d1ae6") {
          setSubServices(data.data.reverse())

        } else {

          setSubServices(data.data);
        }
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }

    const fetchServices = async () => {
      try {
        const response = await fetch(`${apiURL}/FindService/${id}`);
        // console.log(response+"kuch aaya ")
        const data = await response.json();
        setServices(data.data);
      } catch (error) {
        console.error('Error fetching Service data:', error);
      }
    }
    fetchMenu();
    fetchServices();
  }, [id]);

  const regex = /(<([^>]+)>)/gi;
  var long_description = '';
  if (subServices.long_description === undefined) {
    long_description = '';
  } else {
    long_description = subServices.long_description.replace(regex, " ");
  }
  // console.log("subServices ", subServices);
  const Gallary = subServices.map((item) => {
    return {
      id: item._id,
      title: item.title,
      subTitle: item.sub_heading,
      image: item.image_url,
      description: item.description
    };
  });
  console.log(Gallary);


  // ------------------pagination---------------------------


  const data = [...Gallary]

  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 8
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


  const navigate = useNavigate()

  // console.log("Gallary  =>   ", Gallary)
  return (
    <>
      <section className="" style={{ marginTop: '10rem', }}>
        <nav aria-label="breadcrumb" class="d-flex justify-content-end mx-5">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            {/* <li class="breadcrumb-item active"><a href="#"></a></li> */}
            <li class="breadcrumb-item " aria-current="page"> {Services.service_name || null}</li>
          </ol>
        </nav>
        <div className="container text-center">
          <h1 className="title-section pb-2 mb-0" data-aos="fade-up">
            {/* {Services.service_name != undefined ? Services.service_name : ''} */}
            {Services.service_name}
          </h1>
          <p className="pagebanner-sub-text">Explore opportunities to engage with people, ideas, art, and education across campus.</p>
        </div>
      </section>
      {/* {
        Services.service_name === "Brochures" && Gallary.length>0? <div className=''>
         
         <a href='https://www.africau.edu/images/default/sample.pdf' target="_blank"><img className='' src='/assets/img/pdf.png' width={200}></img>
         </a> 
          
        </div>: null
      } */}
      <div className='container box_dynamic_data' style={{ display: "none" }}>
        <div className='d-flex' >
          <div className=" card_row ">
            {/* {
                  
                  Services.service_name === 'Training & Placements' 
                  ?
                  

                  :null
                } */}


            {Gallary.map((gallaryimg, idx) => (

              <div key={idx} className='card_box'>
                <div className='p-1 card_box_in' >
                  {gallaryimg.image !== undefined ?

                    (gallaryimg.image.split(".").pop() === 'pdf') ?
                      <a href={homeURL + gallaryimg.image} target="_blank" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // width:'100%',
                        marginBottom: '5px',
                        overflow: "hidden",
                        height: "100px"
                      }}>
                        {/* <img className='mx-auto' src='https://cosmicgiant.com/wp-content/uploads/2019/11/fillable-pdf-1024x675.jpg' ></img> */}
                       
                        <img className='mx-auto' src='/assets/img/pdf.png' width={100} ></img>
                      </a>
                      :

                      <Link style={{
                        width: '100%',
                        height: '250px',

                        backgroundPosition: 'center',
                        backgroundSize: 'object-fit',
                        display: 'inline-block',
                      }} to={`/events-galary/${gallaryimg.id}`} >
                        <img className='Cardimg' variant="top" src={homeURL + gallaryimg.image} />
                      </Link>


                    :


                    <div>
                      {

                        Services.service_name === "Brochures" && Gallary.length > 0 ? <div className=''>
                          {
                            (gallaryimg.image) ?
                              <a href={gallaryimg.image} target="_blank">
                                {
                                  (gallaryimg.image && gallaryimg.image.split(".").pop() === 'pdf') ?
                                    <img className='' src='/assets/img/pdf.png' width={200}></img>
                                    :
                                    <img className='' src={homeURL + gallaryimg.image} width={200} ></img>
                                }


                              </a>
                              : ""
                          }


                        </div> : null
                      }

                      {/* <div className='d-flex' style={{

                      justifyContent: 'center',
                      alignItems: 'cenetr',
                      backgroundPosition: 'center',
                      backgroundSize: 'object-fit',
                      display: 'inline-block',
                    }}>


                      {
                 Services.service_name === "Brochures" ? <div className='container bg-info'>
                   <h1 className='container bg-info'>fdguvic xuvucxhcu</h1>
                 </div>
                 :
                 console.log(Services.service_name)
                 
                 }
                    </div> */}
                    </div>

                  }

                  {
                    Services.service_name === "Research & Development" && Gallary.length > 0 ? <div className='text-center'>
                      <p >
                        <a className='underline' href={homeURL + gallaryimg.image} style={{ cursor: 'pointer', color: "black" }} target="_blank">
                          {gallaryimg.title}
                        </a>
                      </p>

                    </div> :
                      <div className={gallaryimg.description != "undefined" && 'card_content'}>
                        <Link style={{

                          color: 'black',

                        }} to={`/events-galary/${gallaryimg.id}`} >
                          <p className=' mt-3 mb-0 mx-0' style={{
                            // fontSize: '20px',
                            fontWeight: "bold"
                          }}>{(gallaryimg.title != "undefined") ? gallaryimg.title : ''}</p>

                          <p className='my-1 mx-0 ' style={{
                            fontSize: '18px',
                            // fontWeight:"bold"
                          }}>{(gallaryimg.subTitle != "undefined") ? gallaryimg.subTitle : ''}</p>



                          {(gallaryimg.description != "undefined") ?
                            <p className='my-1 mx-0 ' > {gallaryimg.description} </p> : ''}




                        </Link>

                      </div>
                  }







                </div>

              </div>

            ))}
          </div>
        </div >
      </div>
      <div className='row box_dynamic_card_design mx-5'>

        {record.map((card) => (
          <div className='col-xl-3 col-lg-3 col-md-6 mb-3 box_dynamic_card'>
            <div className='box_dynamic_card_img'>
            <ImageLoader src={homeURL + card.image}  />
              {/* <img src={homeURL + card.image} alt="" /> */}
            </div>
            <div>
              <div class="head_titel_show">
                <p>{card?.title}</p>
              </div>
            </div>
            <div className='box_dynamic_card_contant'>
              <div class="overlay_two">
                <div class="items"></div>
                <div class="items head">
                  <p>{card?.title || null}</p>
                </div>
                <div class="items price">
                {card?.description!=='undefined' ?<p>{card?.description || null}</p> : null }  
                </div>
                <div>
                  <button onClick={() => navigate(`/events-galary/${card.title}`, { state: { to: card.id  , from:id==="6659d23b95fc041c3dcd1ee8"?"Faculty":null} })} class="box_dynamic_card_button">
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                    <span class="text">View All</span>
                    <span class="circle"></span>
                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div className='paginations' >
        <Button onClick={handlePrev}>Previous</Button>
        <div  className='paginations-items'>
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

      </div>
    </>
  );
}

export default GallaryImg; 