import s1 from "./images/s1.jpg"
import s2 from "./images/s2.jpg"
import s3 from "./images/s3.jpg"
import s4 from "./images/s4.jpg"
import s5 from "./images/s5.jpg"
import s6 from "./images/s6.jpg"
import s7 from "./images/s7.jpg"


export default function Slider2() {
    return (
        <div className="sl-container">
            <div className="slider-container">

                <div className="slide-img">
                    <img src={s1} alt="image" />
                </div>
                <div className="slide-img">
                    <img src={s2} alt="image" />

                </div><div className="slide-img">
                    <img src={s3} alt="image" />

                </div><div className="slide-img">
                    <img src={s4} alt="image" />

                </div>
                <div className="slide-img">
                    <img src={s5} alt="image" />

                </div><div className="slide-img">
                    <img src={s6} alt="image" />

                </div><div className="slide-img">
                    <img src={s7} alt="image" />

                </div>


                <div className="slide-img">
                    <img src={s1} alt="image" />

                </div>
                <div className="slide-img">
                    <img src={s2} alt="image" />

                </div><div className="slide-img">
                    <img src={s3} alt="image" />

                </div><div className="slide-img">
                    <img src={s4} alt="image" />

                </div><div className="slide-img">
                    <img src={s5} alt="image" />

                </div><div className="slide-img">
                    <img src={s6} alt="image" />

                </div><div className="slide-img">
                    <img src={s7} alt="image" />

                </div>


            </div>
        </div>
    )
}