import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import "./Join.css"

function Join() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_dlhxheb', 'template_hhqbmxh', form.current, 'MB1KnucrF40BXZofC')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div>
            <div className="Join" id="join-us">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className='stroke-text'>READY TO</span>
                        <span>LEVEL UP</span>
                    </div>
                    <div>
                        <span>YOUR BODY</span>
                        <span className='stroke-text'>WITH US?</span>
                    </div>
                </div>
                <div className="right-j">
                    <form action="" onSubmit={sendEmail} className='email-container' ref={form}>
                        <input type="email" name='user_email' placeholder='Enter your email' />
                        <button className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Join