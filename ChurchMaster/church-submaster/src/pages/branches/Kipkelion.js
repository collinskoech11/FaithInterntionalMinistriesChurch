import React from 'react';
import './style.css';
import CountUp from 'react-countup';
import KipkelionOv from './img/KipkelionOv.jpeg';


function Kipkelion() {
    return (
        <>
        <div className="b-title">
            <h2>Kipkelion  Church</h2>
        </div>
        <div className="b-head">
            <div className="profile-img">
                <img src="https://source.unsplash.com/400x200/?Bishop" alt="Branch head profile"/>
            </div>
            <div className="profile-text">
            <h2>Overseer</h2>
               <h1> Rev Paul Kirui</h1>
               <h3> <CountUp start={0} end={16} delay={0} duration={11}>
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
                <p>Morau</p>
            </div>
            <div className="data">
                <p>Pstr KIrui</p>
            </div>
            <div className="data">
                <p>0728385136</p>
            </div>
            <div className="data">
                <p>467</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kasheen</p>
            </div>
            <div className="data">
                <p>Pstr David</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>17</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kebeneti</p>
            </div>
            <div className="data">
                <p>Pstr Ezeckiel Tengei</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>24</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Karoiot</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>24</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Chebarus</p>
            </div>
            <div className="data">
                <p>Pstr Nathan Sambu</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>133</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Cheraraa</p>
            </div>
            <div className="data">
                <p>Euder Samuel Cheruiyot</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>51</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>YALA</p>
            </div>
            <div className="data">
                <p>Pstr Erick Rotich</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>97</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kapkures</p>
            </div>
            <div className="data">
                <p>Pstr Stanley Langat</p>
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
                <p>Blue Hills</p>
            </div>
            <div className="data">
                <p>Pstr Peter Soi</p>
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
                <p>KImologit</p>
            </div>
            <div className="data">
                <p>Pstr Sophiat Chepkwony</p>
            </div>
            <div className="data">
                <p></p>
            </div>
            <div className="data">
                <p>280</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Kedowa</p>
            </div>
            <div className="data">
                <p>Pstr Kemei</p>
            </div>
            <div className="data">
                <p>0723463121</p>
            </div>
            <div className="data">
                <p>190</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Chepseon</p>
            </div>
            <div className="data">
                <p>Pst Weldon Ngeno</p>
            </div>
            <div className="data">
                <p>0723463121</p>
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
                <p>David Soi</p>
            </div>
            <div className="data">
                <p>0710674578</p>
            </div>
            <div className="data">
                <p>25</p>
            </div>  
        </div>
        <div className="sub-branch">
            <div className="data">
                <p>Leberer</p>
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
                <p>Tenowet</p>
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
                <p>Kaptenet</p>
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

export default Kipkelion
