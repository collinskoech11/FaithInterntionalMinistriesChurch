import React from 'react';
import './style.css';
import CountUp from 'react-countup';

function Makimeny() {
    return (
        <>
        <div className="b-title">
            <h2>Makimeny Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src="https://source.unsplash.com/400x200/?Bishop" alt="Branch head profile"/>
            </div>
            <div className="profile-text">
            <h2>Overseer</h2>
               <h1>Pst Phillip Rono</h1>
               <h3> <CountUp start={0} end={9} delay={0} duration={10}>
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
                <p>Makimeny</p>
            </div>
            <div className="data">
                <p>Pstr Phillip Rono</p>
            </div>
            <div className="data">
                <p>0723699828</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Singoiwek</p>
            </div>
            <div className="data">
                <p>JOhn Yegon</p>
            </div>
            <div className="data">
                <p>0724722325</p>
            </div>
            <div className="data">
                <p>20</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kapolesero</p>
            </div>
            <div className="data">
                <p>Nehemiah Langat</p>
            </div>
            <div className="data">
                <p>0725839437</p>
            </div>
            <div className="data">
                <p>70</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kabema</p>
            </div>
            <div className="data">
                <p>Christopher</p>
            </div>
            <div className="data">
                <p>0729041044</p>
            </div>
            <div className="data">
                <p>18</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kesosio</p>
            </div>
            <div className="data">
                <p>John KIrui</p>
            </div>
            <div className="data">
                <p>0721874441</p>
            </div>
            <div className="data">
                <p>10</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Sosur</p>
            </div>
            <div className="data">
                <p>Richard LongBet</p>
            </div>
            <div className="data">
                <p>0772583597</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>KIpkuror</p>
            </div>
            <div className="data">
                <p>Daniel Terer</p>
            </div>
            <div className="data">
                <p>0716125131</p>
            </div>
            <div className="data">
                <p>15</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Olbutio</p>
            </div>
            <div className="data">
                <p>Thomas Kemei</p>
            </div>
            <div className="data">
                <p>0706093446</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Tumoiyot</p>
            </div>
            <div className="data">
                <p>Linah Bett </p>
            </div>
            <div className="data">
                <p>0716174470</p>
            </div>
            <div className="data">
                <p>10</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Cheborian</p>
            </div>
            <div className="data">
                <p>Isaiah Keter</p>
            </div>
            <div className="data">
                <p>0723760860</p>
            </div>
            <div className="data">
                <p>24</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Galili</p>
            </div>
            <div className="data">
                <p>Thomas Kemei</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>20</p>
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
                <h2>11</h2>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
    </>
    )
}

export default Makimeny
