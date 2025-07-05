import React from "react"
import "./Hero.css"
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"


const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />
                    <div className="the-best-ad">
                        <div className=""></div>
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


                    <div className="heart-rate">
                        <img src={Heart} alt="heart" />
                        <span>Heart Rate</span>
                        <span>120 bpm</span>
                    </div>

                    {/* Hero images */}
                    <img className="hero-image" src={hero_image} alt="hero_image" />
                    <img className="hero-image-back" src={hero_image_back} alt="hero_image_back" />

                    {/* Calories */}
                    <div className="calories">
                        <img src={Calories} alt="calories" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Hero;