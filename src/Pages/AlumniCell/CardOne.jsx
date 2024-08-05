
import React from "react"
function CardOne({ user }) {
    return (
        <div className="p-3 bg-white shadow-sm m-4 border-radius-new carda">
            <div className='upperpart'>
                <img src=
                    "https://annedece.sirv.com/Images/commos.png" className="pb-4 comms" />
                <div >  <p className=" small font-medium text-muted">{user?.current_company}</p>
                    <p className=" small font-medium text-muted">{user?.designation}</p></div>
            </div>

            <p className="text-muted messagetext">{user.message} </p>

            <hr />
            <div className="d-flex align-items-center pt-3">
                <div className="author-img mr-3">
                    <img src={user.image} />
                </div>
                <div className='mx-2'>
                    <h5 className="m-0">{user.name}   &nbsp; {user.Passout && `( ${user.Passout})`}</h5>

                    <p className="m-0 small font-medium text-muted">{user?.branch}</p>

                </div>
            </div>
        </div>

    )
}
export default CardOne

