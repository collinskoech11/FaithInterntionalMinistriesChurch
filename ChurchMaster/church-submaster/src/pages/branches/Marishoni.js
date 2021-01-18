import React from 'react';
import './style.css';
import CountUp from  'react-countup';

function Marishoni() {
    return (
        <>
        <div className="b-title">
            <h2>Marishoni Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src="https://source.unsplash.com/400x200/?Bishop" alt="Branch head profile"/>
            </div>
            <div className="profile-text">
            <h2>Overseer</h2>
               <h1> William Samoei</h1>
               <h3> <CountUp start={0} end={6} delay={0} duration={10}>
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
                <p>Marishoni</p>
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
                <p>Kaprop</p>
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
                <p>Msingi Mwema</p>
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
                <p>Ndashata</p>
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
                <p>Sigaon</p>
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
                <p>Ndoswa</p>
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
                <h2>6</h2>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
    </>
    )
}

export default Marishoni
