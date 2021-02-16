import React from 'react';
import CarouselPage from '../Navigators/CarouselPage';
import Bishop from './SuperProfiles/Bishop';
import Chairman from './SuperProfiles/Chairman';
import Upcoming from '../Navigators/Upcoming';
import './style.css';
import './home.css';
import Twitter from '../Navigators/Twitter';
import CountUp from 'react-countup';
import {Animated} from 'react-animated-css';
import Video from './videos/video-2.mp4'


export default function Home() {
    return (
        <div>
            <div className="hero-container">
            <video src={Video} autoPlay loop muted />
            <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
            <div className="container first">
                <div className="f-block"><CarouselPage/></div>
                <div className="f-block">
                    <div className="mpesa">
                        <div className="block">
                            <h3>No of Satelite Branches</h3>
                        </div>
                        <div className="block">
                            <h3>
                            <CountUp start={0} end={151} delay={0} duration={5}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                            </h3>
                        </div>
                        <div className="block">
                            <h3>Total Members :</h3>
                        </div>
                        <div className="block">
                            <h3><CountUp start={0} end={7550} delay={0}  duration={5} >
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp></h3>
                        </div>
                    </div>
                </div>
            </div>
            </Animated>
            </div>
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDelay={6} animationInDuration={2000}>
            <div className="container">
                <Bishop/>
            </div>
            </Animated>
            <div className="container">
                <h1>Join us Sunday mornings as we gather online</h1>
                <p>The Faith International Ministries Church wants to do everything we can to ensure that our communities are taking the necessary precautions to slow the spread of COVID-19. At the same time, we want to make it possible for everyone to experience the fellowship and Biblical teaching that keeps our faith strong, which is more important now than ever.
                    With this in mind, we are ready to offer a series of special live stream worship services, Sundays at 11am GMT+3. These will take the place of in-person services for all of our Bay Area locations. We hope you’ll join us online!</p>
                <br/><br/><a href="/Live">--- join us live</a>
                <img src="https://source.unsplash.com/400x300/?Church" alt=""/>
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
