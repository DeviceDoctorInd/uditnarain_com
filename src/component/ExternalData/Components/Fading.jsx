export const FadingContent = ({ content }) => {
    return <div className="tab-content text-start pt-5 group-message-tab" data-aos="fade-up" id="pills-tabContent">
        <div className="tab-pane fade show active" id="Message1" role="tabpanel" aria-labelledby="Message1-tab">

            <div className="row">
                <div className="col-lg-12" data-aos="fade-up">

                    <div dangerouslySetInnerHTML={{ __html: content }}>

                    </div>
                </div>


            </div>

        </div>


        <div className="tab-pane fade" id="Message2" role="tabpanel" aria-labelledby="Message2-tab">...</div>
        <div className="tab-pane fade" id="Message3" role="tabpanel" aria-labelledby="Message3-tab">...</div>

        <div className="tab-pane fade" id="Message4" role="tabpanel" aria-labelledby="Message4-tab">...</div>
    </div>
}

export const FadingImages = ({url, }) => {
    return <div className="col-lg-4">
        <div className="ablog" data-aos="fade-up">
            <div className="ablog__img"> <a href="#"><img src={url} className="img-fluid" alt="img" /></a> </div>

        </div>
    </div>
}
export const FadingImagesWithOpen = ({url,setImagePath , index}) => {
    return <div className="col-lg-4 mt-3 gap-3 shadowcard" onClick={()=>setImagePath(index)} style={{ overflow:"hidden", maxHeight:"250px"}}>
        <div className="ablog" data-aos="fade-up">
            <div className="ablog__img"> <a href="#"><img src={url} className="img-fluid" alt="img" /></a> </div>

        </div>
    </div>
}