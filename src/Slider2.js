import s1 from "./s1.jpg"
import s2 from "./s2.jpg"
import s3 from "./s3.jpg"
import s4 from "./s4.jpg"
import s5 from "./s5.jpg"
import s6 from "./s6.jpg"
import s7 from "./s7.jpg"
import imgLogo from "./logo1.jpg"

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