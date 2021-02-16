import React from 'react';
import './style.css';
import CountUp from 'react-countup';
import LondianiOv from './img/LondianiOv.jpeg'

function Londiani() {
    return (
        <>
        <div className="b-title">
            <h2>Londiani  Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src={LondianiOv} alt="Branch head profile"/>
            </div>
            <div className="profile-text">
            <h2>Overseer</h2>
               <h1>Rev Langat</h1>
               <h3> <CountUp start={0} end={7} delay={0} duration={10}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>Sub Branches</h3>
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
                <p>Tilolwet</p>
            </div>
            <div className="data">
                <p>Pstr Langat</p>
            </div>
            <div className="data">
                <p>0722115209</p>
            </div>
            <div className="data">
                <p>45</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>KIpsirichet</p>
            </div>
            <div className="data">
                <p>Pstr E Rotich</p>
            </div>
            <div className="data">
                <p>0716784311</p>
            </div>
            <div className="data">
                <p>24</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kabianga</p>
            </div>
            <div className="data">
                <p>Pstr P Mutai</p>
            </div>
            <div className="data">
                <p>0727498037</p>
            </div>
            <div className="data">
                <p>55</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Koige Total</p>
            </div>
            <div className="data">
                <p>Pstr D KOech</p>
            </div>
            <div className="data">
                <p>07019625</p>
            </div>
            <div className="data">
                <p>50</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Sirikwa</p>
            </div>
            <div className="data">
                <p>Pstr E Matwek</p>
            </div>
            <div className="data">
                <p>0723766811</p>
            </div>
            <div className="data">
                <p>22</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Londiani Junction</p>
            </div>
            <div className="data">
                <p>Pstr Sharon</p>
            </div>
            <div className="data">
                <p>0701820103</p>
            </div>
            <div className="data">
                <p>4</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Bendi Tai</p>
            </div>
            <div className="data">
                <p>Pstr P Mutai</p>
            </div>
            <div className="data">
                <p>C/of Kakianga</p>
            </div>
            <div className="data">
                <p>24</p>
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
                <h2>7</h2>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
    </>
    )
}

export default Londiani
