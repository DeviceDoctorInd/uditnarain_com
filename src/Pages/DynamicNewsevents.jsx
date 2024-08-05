import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import GallaryImg from "../component/gallarypage/Gallary";
const DynamicNewsevents = (props) => {
    const location = useLocation();
    const {to}=  location.state || null
  const id = to



    return (
        <>


            <div className="">
       
                <GallaryImg id={id} />

            </div>

        </>
    );
};

export default DynamicNewsevents;
