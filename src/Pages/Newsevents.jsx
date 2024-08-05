import React from "react";
import { Link } from "react-router-dom";
const Newsevents = () => {

  return (
    <>

    <section  class="py-5 pagebanner" >
    <div class="container text-center">
    <h1 class="title-section pb-2 mb-0" data-aos="fade-up">Upcoming Events</h1>
    <p class="pagebanner-sub-text">Explore opportunities to engage with people, ideas, art, and education across campus.</p>
    </div>
    </section>

    <div class="container">
    <div class="row g-4">
    <div class="col-lg-3"><div class="event">
    <article class="event-card">
    <div class="event-img__wrapper"><a href="/news-event-details"> <img src="assets/img/cab.jpg" /></a></div>
    <time class="event-short-date" datetime="2023-05-08"> <abbr class="month" title="May">May</abbr> <span class="day">08</span> </time>
    <div class="content-event"> <span class="event-type">Exhibition</span>
    <h2 class="event-title"> 
    <Link to={`/news-event-details`}> Bread + Medicine: Saving Lives in a Time of Famine </Link> </h2>
    <span class="start-time"> 10:00 am PT </span> </div>
    </article>
    </div></div>

    <div class="col-lg-3"><div class="event">
    <article class="event-card">
    <div class="event-img__wrapper"><a href="/news-event-details"> 
    <img src="assets/img/evt2.jpg" />
    </a></div>
    <time class="event-short-date" datetime="2023-05-08"> <abbr class="month" title="May">May</abbr> <span class="day">08</span> </time>
    <div class="content-event"> <span class="event-type">Exhibition</span>
    <h2 class="event-title"> <Link to={`/news-event-details`}> Bread + Medicine: Saving Lives in a Time of Famine </Link> </h2>
    <span class="start-time"> 10:00 am PT </span> </div>
    </article>
    </div></div>

    <div class="col-lg-3"><div class="event">
    <article class="event-card">
    <div class="event-img__wrapper"><a href="/news-event-details"> <img src="assets/img/cab.jpg" /></a></div>
    <time class="event-short-date" datetime="2023-05-08"> <abbr class="month" title="May">May</abbr> <span class="day">08</span> </time>
    <div class="content-event"> <span class="event-type">Exhibition</span>
    <h2 class="event-title"> <Link to={`/news-event-details`}> Bread + Medicine: Saving Lives in a Time of Famine </Link> </h2>
    <span class="start-time"> 10:00 am PT </span> </div>
    </article>
    </div></div>

    <div class="col-lg-3"><div class="event">
    <article class="event-card">
    <div class="event-img__wrapper"><a href="/news-event-details"> <img src="assets/img/cab.jpg" /></a></div>
    <time class="event-short-date" datetime="2023-05-08"> <abbr class="month" title="May">May</abbr> <span class="day">08</span> </time>
    <div class="content-event"> <span class="event-type">Exhibition</span>
    <h2 class="event-title"> <Link to={`/news-event-details`}> Bread + Medicine: Saving Lives in a Time of Famine </Link> </h2>
    <span class="start-time"> 10:00 am PT </span> </div>
    </article>
    </div></div>

    <div class="col-lg-3"><div class="event">
    <article class="event-card">
    <div class="event-img__wrapper"><a href="/news-event-details"> <img src="assets/img/cab.jpg" /></a></div>
    <time class="event-short-date" datetime="2023-05-08"> <abbr class="month" title="May">May</abbr> <span class="day">08</span> </time>
    <div class="content-event"> <span class="event-type">Exhibition</span>
    <h2 class="event-title"> <Link to={`/news-event-details`}> Bread + Medicine: Saving Lives in a Time of Famine </Link> </h2>
    <span class="start-time"> 10:00 am PT </span> </div>
    </article>
    </div></div>

    <div class="col-lg-3"><div class="event">
    <article class="event-card">
    <div class="event-img__wrapper"><a href="/news-event-details"> <img src="assets/img/cab.jpg" /></a></div>
    <time class="event-short-date" datetime="2023-05-08"> <abbr class="month" title="May">May</abbr> <span class="day">08</span> </time>
    <div class="content-event"> <span class="event-type">Exhibition</span>
    <h2 class="event-title"> <Link to={`/news-event-details`}> Bread + Medicine: Saving Lives in a Time of Famine </Link> </h2>
    <span class="start-time"> 10:00 am PT </span> </div>
    </article>
    </div></div>

    </div>

    </div>


    <img src="assets/img/footerbanner.jpg" class="w-100" /> 

    <div class="social">
    <div class="container">  <ul class="d-flex justify-content-center">
    <li><a title="Facebook" class="xsu-link" data-ga-label="Facebook" href="#"><span class="fa fa-facebook-square" aria-hidden="true"></span></a></li>
    <li><a title="Twitter" class="xsu-link" data-ga-label="Twitter" href="#"><span class="fa fa-twitter" aria-hidden="true"></span></a></li>
    <li><a title="Instagram" class="xsu-link" data-ga-label="Instagram" href="#"><span class="fa fa-instagram" aria-hidden="true"></span></a></li>
    <li><a title="LinkedIn" class="xsu-link" data-ga-label="LinkedIn" href="#"><span class="fa fa-linkedin" aria-hidden="true"></span></a></li>
    <li><a title="YouTube" class="xsu-link" data-ga-label="YouTube" href="#"><span class="fa fa-youtube-play" aria-hidden="true"></span></a></li>
    </ul></div>
    </div>      

    </>
    );
};

export default Newsevents;
