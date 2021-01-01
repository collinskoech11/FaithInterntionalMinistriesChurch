import React from 'react';
import CarouselPage from '../Navigators/CarouselPage';
import Bishop from './SuperProfiles/Bishop';
import Chairman from './SuperProfiles/Chairman';
import Upcoming from '../Navigators/Upcoming';
import './style.css';
import Twitter from '../Navigators/Twitter';
import Countup from 'react-countup';





export default function Home() {
    return (
        <div>
            <div className="container first">
                <div className="f-block"><CarouselPage/></div>
                <div className="f-block">
                    <div className="mpesa">
                        <div className="block">
                            <h3>No of Satelite Branches :</h3>
                        </div>
                        <div className="block">
                            <h4>
                            <CountUp start={0} end={100} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            </h4>
                        </div>
                        <div className="block">
                            <h3>Total Members :</h3>
                        </div>
                        <div className="block">
                            <h4>100000</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Bishop/>
            </div>
            <div className="container">
                <Twitter/>
            </div>
            <div className="container">
                <Chairman/>
            </div>
            <div className="container">
                <Upcoming/>
            </div>
        
        </div>
    )
}
