import React from 'react';
import './style.css';
import CountUp from 'react-countup'

function Kuresoi() {
    return (
        <>
        <div className="b-title">
            <h2>Kuresoi Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src="https://source.unsplash.com/400x200/?Bishop" alt="Branch head profile"/>
            </div>
            <div className="profile-text">
            <h2>Overseer</h2>
               <h1> Rev Kirui</h1>
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
                <p>Siongiroi</p>
            </div>
            <div className="data">
                <p></p>
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
                <p>Soitara</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>50</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Tenowet</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>52</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>CHebara</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>27</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kapkwen</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>57</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>JUdea</p>
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
                <p>Kirenget</p>
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
                <p></p>
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
                <h2>9</h2>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
    </>
    )
}

export default Kuresoi
