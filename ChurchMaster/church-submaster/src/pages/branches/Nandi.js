import React from 'react';
import './style.css'

function Nandi() {
    return (
        <>
        <div className="b-title">
            <h2>Nandi Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src="https://source.unsplash.com/400x200/?Bishop" alt="Branch head profile"/>
            </div>
            <div className="profile-text">
            <h2>Pastor In Charge</h2>
               <h1> Rev Tabut</h1>
            </div>
        </div>
        <div className="sub-branch-title">
            <h2>Our Sub branches</h2>
        </div>
        <div className="sub-branch">
            <div className="data">
                <h4>Church Name</h4>
            </div>
            <div className="data">
                <h4>Pastors Name</h4>
            </div>
            <div className="data">
                <h4>Pastors Contact</h4>              
            </div>
            <div className="data">
                <h4>Number of Members</h4>
            </div>    
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kamarich</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>40</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kimolwo</p>
            </div>
            <div className="data">
                <p>Pstr Andrea</p>
            </div>
            <div className="data">
                <p>0702815048</p>
            </div>
            <div className="data">
                <p>46</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kubujoi</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>15</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <h2>Total</h2>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <h2>3</h2>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
    </>
    )
}

export default Nandi
