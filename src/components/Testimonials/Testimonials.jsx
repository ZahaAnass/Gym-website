import React from 'react'
import { testimonialsData } from "../../data/testimonialsData"
import "./Testimonials.css"
import { useState } from "react"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { motion } from "framer-motion";


function Testimonials() {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transtion = {
        type: "spring",
        duration: 3
    }

    return (
        <div>
            <div className="Testimonials">
                <div className="left-t">
                    <span>Testimonals</span>
                    <span className='stroke-text'>What they</span>
                    <span>say about us</span>
                    <motion.span
                        initial={{ opacity: 0, x: -100 }}
                     git    animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={transtion}
                        key={selected}
                        >
                        {testimonialsData[selected].review}
                    </motion.span>
                    <span style={{color:"var(--orange)"}}>
                        <span>{testimonialsData[selected].name}</span>
                        {" "}
                        <span>{testimonialsData[selected].status}</span>
                    </span>
                </div>
                <div className="right-t">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{...transtion, duration: 2}}
                        ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{...transtion, duration: 2}}
                        ></motion.div>
                    <motion.img
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={transtion}
                        src={testimonialsData[selected].image} alt="" key={selected}/>

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