import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from "../../assets/whiteTick.png"
import "./Plans.css"

function Plans() {
    return (
        <div className='plans-container' id='plans'>
            <div className="programs-header" style={{gap:"2rem"}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>
            
            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, i) => {
                    return <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => {
                                return <div key={i} className='feature'>
                                    <img src={whiteTick} alt="whiteTick" />
                                    <span>{feature}</span>
                                </div>
                            })}
                        </div>
                        <div className="plan-btn">
                            <span>See more benefits -{'>'}</span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Plans