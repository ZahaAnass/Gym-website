import React from 'react'
import "./Programs.css"
import { programsData } from "../../data/programsData"
import RigthArrow from "../../assets/rightArrow.png"

function Programs() {
    return (
        <>
            <div className="Programs" id='programs'>
                {/* Header */}
                <div className="programs-header">
                    <span className='stroke-text'>Explore our</span>
                    <span>Programs</span>
                    <span className='stroke-text'>To shape you</span>
                </div>

                {/* Programs */}
                <div className="programs-categories">
                    {programsData.map((program) => (
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now">
                                <span>Join Now</span>
                                <span>
                                    <img src={RigthArrow} alt="" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Programs