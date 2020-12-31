import React from 'react';
import CarouselPage from '../Navigators/CarouselPage';
import Bishop from './SuperProfiles/Bishop';
import Chairman from './SuperProfiles/Chairman';
import Upcoming from '../Navigators/Upcoming';
import './style.css';
import Twitter from '../Navigators/Twitter';
import CountUp from 'react-countup';




export default function Home() {
    return (
        <div>
            <div className="container first">
                <div className="f-block"><CarouselPage/></div>
                <div className="f-block">
                    <div className="mpesa">
                        <div className="block">
                            <h3>Number of Satelite Branches</h3>
                        </div>
                        <div className="block">
                            <h4>
                            <CountUp start={0} end={100} />
                            </h4>
                        </div>
                        <div className="block">
                            <h3>Total Members</h3>
                        </div>
                        <div className="block">
                            <h4><CountUp start={0} end={100} /></h4>
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
