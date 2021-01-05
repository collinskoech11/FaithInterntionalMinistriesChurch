import React from 'react';
import './styles.css';
import BishopProfile from './img/BishopProfile.jpeg'

function Bishop() {
    return (
        <div className="containerBlue">
            <div className="profile-title">

                <h2>Word from our spiritual father</h2>
                <h1 className="head">Bishop Jimmy Bett</h1>
            
            </div>
            <div className="profile-img">
            <img src={BishopProfile} alt="Bishop Profile Image"/>
            </div>
            <div className="profile-desc">
                <p>To make and deploy mature and equipped followers of Christ for the sake of Family, Community and Global Transformation. At Gateway, we are committed to helping every person believe in Jesus, belong to a family, become a disciple and build His kingdom. </p>
            </div>
        </div>
    )
}

export default Bishop
