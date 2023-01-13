
import React from 'react';
import './styles.css';
import ChairmanProfile from './img/ChairmanProfile.jpeg'

function Chairman() {
    return (
        <div className="containerBlue">
            <div className="profile-title">

                <h2>Our chairperson shares the vision of our church</h2>
                <h1 className="head">Mr Stanley Cheruiyot</h1>
            
            </div>
            <div className="profile-img">
                <img src={ChairmanProfile} alt="Chairperson profile"/>
            </div>
            <div className="profile-desc">
                <p>To welcome the community with open arms. To train an army of people who are passionate about living out God’s purpose for their lives. To then give that army an outlet for sharing the love of Christ through outreach and missions.<br/> We believe everyone needs the hope Jesus offers, so our passion is to help people find that hope and grow in a relationship with Him. We emphasize grace and acceptance, as we help people understand who Jesus is and how to take the next right step in their journey of faith </p>
            </div>
        </div>
    )
}

export default Chairman
