import React from 'react'
// import testimonial from './AlumniCell/testimonial.json'
import CardOne from './AlumniCell/CardOne'

function AlumniData() {
    console.log('hiii')
    return (
        <div className="row">
            {/* {testimonial.map((user) => <div className="col-lg-6">
                <div className="p-3 bg-white shadow-sm m-4 border-radius-new cardb">
            <div className='upperpart'>
                <img src=
                    "https://annedece.sirv.com/Images/commos.png" className="pb-4 comms" />
                <div >  <p className=" small font-medium text-muted">{user?.current_company}</p>
                    <p className=" small font-medium text-muted">{user?.designation}</p></div>
            </div>

            <p className="text-muted messagetext2">{user.message} </p>

            <hr />
            <div className="d-flex align-items-center pt-3">
                <div className="author-img mr-3">
                    <img src={user.image} />
                </div>
                <div className='mx-2'>
                    <h5 style={{fontSize:"100%"}} className="m-0">{user.name}   &nbsp; {user.Passout && `( ${user.Passout})`}</h5>

                    <p style={{fontSize:"75%"}} className="m-0 mt-1 small font-medium text-muted">{user?.branch}</p>

                </div>
            </div>
        </div>
            </div>)} */}

        </div>
    )
}

export default AlumniData