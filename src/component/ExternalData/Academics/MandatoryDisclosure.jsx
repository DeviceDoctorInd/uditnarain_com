import React from 'react'

const MandatoryDisclosure = () => {
  return (
    <>
      {/* <section className='ourColleges'>
        <div className="section1">
          <h4 className='text-center mt-3'>Mandatory Disclosures
            <button className='btn-mandatory-disclosures'>
              <div className='blinking-dot'></div>
              <a className='heylink' target='_blank' href="https://wbs.narainagroup.ac.in/ngi/view/images/2012/AICTE%20Mandatory%20Disclosures%20287.pdf">Click here</a> &nbsp; &nbsp; for mandatory disclosures.
            </button>
          </h4>
          <a target='_blank' href="https://wbs.narainagroup.ac.in/ngi/view/images/2012/Kanpur-city-road-map.jpg">
            <img className='disclosureimg' src="https://wbs.narainagroup.ac.in/ngi/view/images/2012/Kanpur-city-road-map.jpg" alt="Kanpur city road map" />
          </a>
        </div>
      </section> */}

      <div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-12">
              <article className="blog-card">
                <div className="blog-card__background">
                  <div className="card__background--wrapper">
                    <div className="card__background--main"  style={{ backgroundImage: 'url("https://wbs.narainagroup.ac.in/ngi/view/images/2012/Kanpur-city-road-map.jpg")' }}> 
                      <div className="card__background--layer" />
                    </div>
                  </div>
                </div>
                <div className="blog-card__head">
                  {/* <span className="date__box">
                    <span className="date__day">11</span>
                    <span className="date__month">JAN</span>
                  </span> */}
                  <a target='_blank' href="https://wbs.narainagroup.ac.in/ngi/view/images/2012/Kanpur-city-road-map.jpg"></a>
                </div>
                <div className="blog-card__info">
                  <h5>Mandatory Disclosures</h5>
                  
                  <p>for mandatory disclosures.</p>
                  <a target="_blank" href="https://wbs.narainagroup.ac.in/ngi/view/images/2012/AICTE%20Mandatory%20Disclosures%20287.pdf" className="btn2 btn--with-icon"><i className="btn-icon fa fa"></i>Click here</a>
                </div>
              </article>
            </div>
          </div>
        </div>
        <section className="detail-page">
          <div className="container mt-5">
          </div>
        </section>
      </div>

    </>
  )
}

export default MandatoryDisclosure