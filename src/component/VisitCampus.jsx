import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
function VisitCampus() {
    return (
       <div className='campuscontainer'>
         <section className='visitCampus'>


<div _ngcontent-ng-c2584295585="" className=" video-frame-left visitdiv">
    <div >
        <h1 className='visith1' >CAMPUS TOUR</h1>
        <div className="social" style={{ background: "none" }}>
            <div className="px-3">
                <ul className="d-flex justify-content-center">
                    <li>
                        <a
                            title="Facebook"
                            className="xsu-link"
                            data-ga-label="Facebook"
                            href="https://www.facebook.com/NarainaGroupOfInstitutions"
                            target='_blank'
                        >
                            <RiFacebookBoxFill color='white' />
                        </a>
                    </li>
                    <li>
                        <a
                            title="Twitter"
                            className="xsu-link"
                            data-ga-label="Twitter"
                            href="https://twitter.com/i/flow/login?redirect_after_login=%2FNarainaGroup"
                            target='_blank'
                        >
                            <FaTwitter color='white' />
                        </a>
                    </li>
                    <li>
                        <a
                            title="Instagram"
                            className="xsu-link"
                            data-ga-label="Instagram"
                            href="#"
                            target='_blank'
                        >

                            <LuInstagram color='white' />
                        </a>
                    </li>
                    <li>
                        <a
                            title="LinkedIn"
                            className="xsu-link"
                            data-ga-label="LinkedIn"
                            href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fgroups%3Fgid%3D3045840&trk=login_reg_redirect"
                            target='_blank'
                        >
                            <FaLinkedinIn color='white' />
                        </a>
                    </li>
                    <li>
                        <a
                            title="YouTube"
                            className="xsu-link"
                            data-ga-label="YouTube"
                            href="#"
                            target='_blank'
                        >
                            <FaYoutube color='white' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>
<div _ngcontent-ng-c2584295585="" className="ndiv">
    <div _ngcontent-ng-c2584295585="" className="video-sec">
        <video
            src="https://backend.uditnarain.com/collegetour.mp4"
            title="Video player"
            frameborder="0"
            allowfullscreen
            className="video-frame border-radius-s"
            autoPlay
            muted
            controls>
        </video>
    </div>
</div>
</section>
       </div>
    )
}

export default VisitCampus