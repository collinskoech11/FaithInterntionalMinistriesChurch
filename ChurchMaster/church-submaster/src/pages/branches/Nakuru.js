import React from 'react';
import './style.css';
import CountUp from 'react-countup';
import NakuruOv from './img/NakuruOv.jpeg'

function Nakuru() {
    return (
        <>
        <div className="b-title">
            <h2>Nakuru Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src={NakuruOv} alt="Branch head profile"/>
            </div>
            <div className="profile-text">
                <h2>Overseer</h2>
                <h1>Rev Joel Towett</h1>
                <h3> <CountUp start={0} end={14} delay={0} duration={10}>
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
                <p>Nukiat</p>
            </div>
            <div className="data">
                <p>Pstr Stella Cheruiyot</p>
            </div>
            <div className="data">
                <p>0723966778</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Sukutek</p>
            </div>
            <div className="data">
                <p>Pstr M Chepkwony</p>
            </div>
            <div className="data">
                <p>0711742628</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kaptembwo</p>
            </div>
            <div className="data">
                <p>Pstr B Langat</p>
            </div>
            <div className="data">
                <p>0725723692</p>
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
                <p>Pstr N Koskei</p>
            </div>
            <div className="data">
                <p>0710519900</p>
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
                <p>Pstr J Terech</p>
            </div>
            <div className="data">
                <p>0725458047</p>
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
                <p>Pstr J Koech</p>
            </div>
            <div className="data">
                <p>0702157264</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kaplamboi</p>
            </div>
            <div className="data">
                <p>Pstr Picoty Cheruiyot</p>
            </div>
            <div className="data">
                <p>0711380728</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Chikamba</p>
            </div>
            <div className="data">
                <p>Pstr Ibra Mosonik</p>
            </div>
            <div className="data">
                <p>0719792725</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Baraka</p>
            </div>
            <div className="data">
                <p>Pstr Joel Mutai</p>
            </div>
            <div className="data">
                <p>0717563940</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Emitik</p>
            </div>
            <div className="data">
                <p>Pstr Sharon yegon</p>
            </div>
            <div className="data">
                <p>0716614122</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Tachasis</p>
            </div>
            <div className="data">
                <p>Pstr Julia Ruto</p>
            </div>
            <div className="data">
                <p>07024611091</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Konoito</p>
            </div>
            <div className="data">
                <p>Pstr Emily Ruto</p>
            </div>
            <div className="data">
                <p>0704142747</p>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Saosa</p>
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
                <p>Seanik</p>
            </div>
            <div className="data">
                <p>Pstr Emily Sang</p>
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
                <h2>14</h2>
            </div>
            <div className="data">
                <p></p>
            </div>  
        </div>
    </>
    )
}

export default Nakuru
