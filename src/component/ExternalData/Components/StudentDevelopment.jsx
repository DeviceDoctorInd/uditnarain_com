import React from 'react'
import { FadingContent, FadingImages } from './Fading'

function StudentDevelopment() {

    const content = `
<style>
    h1{
        color:#b1040e ;
        margin-bottom: 20px;
        text-align: center;
    }
</style>
<h1>Student Development Program</h1>
<p>As a course of instruction in the Naraina Group of Institutions, Kanpur, College Student Development offers emphases
  in Student Affairs Practice and College Outdoor Programs Administration.</p>
<p>The Student Development prepares students to work in a variety of Student Affairs functional areas at colleges and
  universities. Recent graduates have secured employment in Career Development, First Year Student Programs,
  Orientation, Residence Life, Service Learning, Student Activities, Leadership Development, Learning Assistance
  Programs, Academic Advising, and many other areas of Student Affairs.</p>
<p>The Student Development Program at Naraina Group of Institutions sets as its primary mission the development of
  knowledgeable and skilled professionals for positions of responsibility as practitioners in student affairs or in a
  related area in the helping professions. An emphasis is placed on mastering the concepts of human development and
  examining the implications of this knowledge base for the design of educationally appropriate practice.</p>
<p>Students are engaged in active learning which emphasizes academic work and theory that is solidly supplemented by
  practical work experience within a college and/or university setting. Proceeding from a theoretical construct,
  classroom instruction integrates experiential learning into a practice which promotes imaginative and creative ways of
  thinking.</p>
<p>Students benefit from the close educational partnerships between the program faculty and practicing colleagues in the
  areas of student development and general administration. The applied aspects of the program are aimed at the holistic
  development of student learners as well as development of leadership, human relations, and management competencies.
</p>
<p>Finally, students are encouraged and assisted in adopting for themselves a set of personal values and a sense of
  educational purposefulness which will enable them to lead their institutions with intention and in accordance with the
  building of humane and inclusive communities.</p>`

  const imagesUrl = [
    "https://wbs.narainagroup.ac.in/ngi/view/images/development/DSC_7682.JPG",
    "https://wbs.narainagroup.ac.in/ngi/view/images/development/DSC_7973.JPG",
    "https://wbs.narainagroup.ac.in/ngi/view/images/development/DSC_8043.JPG"

  ]

    return (
        <div>

            <FadingContent  content={content}/>
            <section className="">
                <div className="container">
                    <div className="row pb-5 mt-lg-5 mb-lg-5">
                       {imagesUrl.map((x)=><FadingImages url={x}/>)}
                       
                    </div>

                </div>

            </section>

        </div>

    )
}

export default StudentDevelopment