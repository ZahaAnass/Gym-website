import React from 'react'
import { testimonialsData } from "../../data/testimonialsData"
import "./Testimonials.css"
import { useState } from "react"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

function Testimonials() {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div>
            <div className="Testimonials">
                <div className="left-t">
                    <span>Testimonals</span>
                    <span className='stroke-text'>What they</span>
                    <span>say about us</span>
                    <span>
                        {testimonialsData[selected].review}
                    </span>
                    <span style={{color:"var(--orange)"}}>
                        <span>{testimonialsData[selected].name}</span>
                        {" "}
                        <span>{testimonialsData[selected].status}</span>
                    </span>
                </div>
                <div className="right-t">
                    <div></div>
                    <div></div>
                    <img src={testimonialsData[selected].image} alt="" />

                    <div className="arrows">
                        <img src={leftArrow} alt="leftArrow" onClick={() => {
                            selected === 0 ? setSelected(tLength - 1) : setSelected(prev => prev - 1);
                        }} />
                        <img src={rightArrow} alt="rightArrow" onClick={() => {
                            selected === tLength - 1 ? setSelected(0) : setSelected(prev => prev + 1);
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials