import React from 'react';
import './style.css';
import CountUp from 'react-countup'

function Changoi() {
    return (
        <>
        <div className="b-title">
            <h2>Changoi Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src="https://source.unsplash.com/400x200/?Bishop" alt="Branch head profile"/>
            </div>
            <div className="profile-text">
            <h2>Overseer</h2>
               <h1> Rev Ben Korir</h1>
               <h3> <CountUp start={0} end={16} delay={0} duration={11}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>Sub  Branches</h3>
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
                <p>Chebangang </p>
            </div>
            <div className="data">
                <p>Pstr Robert</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>KOilsir</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Arorwet</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kaptebengwet</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Cheibei</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Mukenyi</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Chepngetuny</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Tuiyobei</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Chemotot</p>
            </div>
            <div className="data">
                <p>Siongok Kenneth</p>
            </div>
            <div className="data">
                <p>0706500901</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kpachebongoror</p>
            </div>
            <div className="data">
                <p>Pst Andrew Sitonik</p>
            </div>
            <div className="data">
                <p>0711680404</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Seanik</p>
            </div>
            <div className="data">
                <p>Pst Charles Ngetich</p>
            </div>
            <div className="data">
                <p>01</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kapchanga</p>
            </div>
            <div className="data">
                <p>Pstr David Tonui</p>
            </div>
            <div className="data">
                <p>0719220390</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kimugul</p>
            </div>
            <div className="data">
                <p>Pstr Raphael Cheruiyot</p>
            </div>
            <div className="data">
                <p>0709337279</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Chemegong</p>
            </div>
            <div className="data">
                <p>Pstr Wilson</p>
            </div>
            <div className="data">
                <p>0717659668</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Sigowet</p>
            </div>
            <div className="data">
                <p>Pstr Chemiron</p>
            </div>
            <div className="data">
                <p>0702106407</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Changware</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
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
                <h2>16</h2>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
    </>
    )
}

export default Changoi
