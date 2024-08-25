import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"

export default function Recent(){
    return(
        <div id="recentWork" className="text-container">
         <p className="R-heading1">Selected works</p>
         <p className="R-heading2">To get a sense of our work, here are some of our projects. Please note that certain details have been modified to protect the partner's privacy.</p>
        
        <div className="reimg-container">
        <div className="re-img">
          <img src={i1} alt="image" />
        </div>

        <div className="re-img">
          <img src={i2} alt="image" />
        </div>

        <div className="re-img">
          <img src={i3} alt="image" />
        </div>

        <div className="re-img">
          <img src={i4} alt="image" />
        </div>
        </div>
        <div className="btn3-container">
                    <button className="btn-recentwork" >
                    <i class="fa-brands fa-dribbble"></i>
                       View recent work
                    </button>
                </div>
        
        </div>

        


    )
}