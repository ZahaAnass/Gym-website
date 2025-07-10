import React from "react"
import "./Hero.css"
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from "framer-motion";


const Hero = () => {

    const transtion = {
        type: "spring",
        duration: 3
    }

    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <>
            <div className="hero">
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />
                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left: mobile ? "173px" : "238px" }}
                            whileInView={{ left: "8px" }}
                            transition={{...transtion, type: "tween"}}
                        ></motion.div>
                        <span>The best fitness club in the town</span>
                    </div>

                    <div className="hero-text">
                        <div>
                            <span className="stroke-text">Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div>
                            <span>
                                In here we will help you to shape and
                                build your ideal body and live up your
                                life to fullest
                            </span>
                        </div>
                    </div>

                    <div className="figures">
                        <div>
                            <span>
                                +140
                            </span>
                            <span>
                                expert coachs
                            </span>
                        </div>
                        <div>
                            <span>
                                +978
                            </span><span>
                                members joined
                            </span>
                        </div>
                        <div>
                            <span>
                                +50
                            </span>
                            <span>
                                fitness programs
                            </span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn">Get Started</button>
                        <button className="btn">Learn More</button>
                    </div>

                </div>

                <div className="right-h">
                    <button className="btn">Join Now</button>


                    <motion.div className="heart-rate"
                        initial={{ right: "-1rem" }}
                        whileInView={{ right: "3rem" }}
                        transition={transtion}
                    >
                        <img src={Heart} alt="heart" />
                        <span>Heart Rate</span>
                        <span>120 bpm</span>
                    </motion.div>

                    {/* Hero images */}
                    <img className="hero-image" src={hero_image} alt="hero_image" />
                    <motion.img className="hero-image-back"
                        initial={{ right: "-1rem" }}
                        whileInView={{ right: "18rem" }}
                        transition={transtion}
                        src={hero_image_back} alt="hero_image_back" />

                    {/* Calories */}
                    <motion.div className="calories"
                        initial={{ right: "37rem" }}
                        whileInView={{ right: "28rem" }}
                        transition={transtion}
                    >
                        <img src={Calories} alt="calories" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>
                        </div>
                    </motion.div>


                </div>

            </div>
        </>
    );
}

export default Hero;