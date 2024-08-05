import { Card } from '@chakra-ui/react'
import React from 'react'

function EBrochure() {
    const data = [
        {
            name:"Engineering Prospectus",
            url:"https://backend.uditnarain.com/prospects/engineering.pdf"
        }, {
            name:"Pharmacy Prospectus",
            url:"https://backend.uditnarain.com/prospects/pharmacy.pdf"
        }, {
            name:"Computer Application",
            url:"https://backend.uditnarain.com/prospects/ca.pdf"
        }, {
            name:"Management Prospectus",
            url:"https://backend.uditnarain.com/prospects/management.pdf"
        }, {
            name:"Nursing Prospectus",
            url:"https://backend.uditnarain.com/prospects/nursing.pdf"
        },
    ]
  return (
    <>
    <div className='row box_dynamic_card_design mx-5 p-1 '>
    {
        data.map((x)=> <div style={{ width:"230px"}} className='col-xl-2.5 col-lg-2 col-md-6 mb-3 box_dynamic_card brochure m-1'>
            
            <div>
              <div class="head_titel_show">
                <p>{x.name}</p>
              </div>
            </div>
            <div className='box_dynamic_card_contant box_dynamic_card_contant2'>
              <div class="overlay_two">
                <div class="items"></div>
                <div class="items head">
                  <p>{x.name}</p>
                </div>
               
                <div>
                  <button  class="box_dynamic_card_button ">
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                    <span class="text">
                      <a target='_blank' href={x.url}>Download</a>
                    </span>
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
          </div>)
    }
        
          </div>
    </>
  )
}

export default EBrochure