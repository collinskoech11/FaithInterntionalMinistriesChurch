import React from 'react';
import './style.css';
import CountUp from 'react-countup';
import BometOv from './img/BometOv.jpeg';

function Bomet() {
    return (
        <>
        <div className="b-title">
            <h2>Bomet Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src={BometOv} alt="Branch head profile"/>
            </div>
            <div className="profile-text">
                <h2>Overseer</h2>
               <h1>JOSEAH KIRUI</h1>
               <h3> <CountUp start={0} end={13} delay={0} duration={11}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp> Branches</h3>
                <p></p>
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
                <p>Sigor</p>
            </div>
            <div className="data">
                <p>Leonard Ngetich</p>
            </div>
            <div className="data">
                <p>0712453391</p>
            </div>
            <div className="data">
                <p>58</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Tumoi</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>0722460487</p>
            </div>
            <div className="data">
                <p>10</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kapkisosio</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>0717355676</p>
            </div>
            <div className="data">
                <p>15</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Chebois</p>
            </div>
            <div className="data">
                <p>Joseph Ngeno</p>
            </div>
            <div className="data">
                <p>0721649305</p>
            </div>
            <div className="data">
                <p>30</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>KOtoibe</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>0711273499</p>
            </div>
            <div className="data">
                <p>25</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Mariango</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>0713454091</p>
            </div>
            <div className="data">
                <p>12</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Cheboigong</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>0707885062</p>
            </div>
            <div className="data">
                <p>8</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Sachoran</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>0713672968</p>
            </div>
            <div className="data">
                <p>30</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>LOngisal</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>0710458162</p>
            </div>
            <div className="data">
                <p>30</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kapsmbiri</p>
            </div>
            <div className="data">
                <p>Jacob Langat</p>
            </div>
            <div className="data">
                <p>0712065391</p>
            </div>
            <div className="data">
                <p>30</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Josea KIrui</p>
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

export default Bomet
