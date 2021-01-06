import React from 'react';
import './style.css';
import Collins from './img/Collins.jpeg';
import Diana from './img/Diana.jpeg';

function ContactDev() {
    return (
       <>
        <div className="dev">
            <div className="dev-prof">
                <img src={Collins} alt=""/>
            </div>
            <div className="dev-desc">
               <a href="https://github.com/collinskoech11"><h2>Collins Koech</h2></a>
               <h3>Founder at DEVCOKENYA</h3>
               <h5>collinskoechck34@gmail.com</h5>
               <h5>+254728000107</h5>
            </div>
        </div>
        <div className="dev">
            <div className="dev-prof">
                <img src={Diana} alt=""/>
            </div>
            <div className="dev-desc">
                <a href="https://github.com/Diana-Nyamai"><h2>Diana Nyamai</h2></a>
                <h3>Co-Founder at DEVCOKENYA</h3>
                <h5>dnyamai.dn@gmail.com</h5>
                <h5>+254798777814</h5>
            </div>
        </div>
       </>
    )
}

export default ContactDev
