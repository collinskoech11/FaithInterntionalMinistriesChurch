import React from 'react';
import CarouselPage from '../Navigators/CarouselPage';
import Bishop from './SuperProfiles/Bishop';
import Chairman from './SuperProfiles/Chairman';
import Upcoming from '../Navigators/Upcoming';
import './style.css';
import Twitter from '../Navigators/Twitter';
import CountUp from 'react-countup';
import {Animated} from 'react-animated-css';
import TextTransition, { presets, index } from "react-text-transition"


const TEXTS = [
    "Forest",
    "Building",
    "Tree",
    "Color"
  ];
  
  const App = () => {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
    }, []);
  }

export default function Home() {
    return (
        <div>
            <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
            <div className="container first">
                <div className="f-block"><CarouselPage/></div>
                <div className="f-block">
                    <div className="mpesa">
                        <div className="block">
                            <h3><TextTransition
                                text={index % TEXTS[ TEXTS.length] }
                                style={{color:'blue'}}
                                springConfig={ presets.wobbly }
                            /></h3>
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
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDelay={6} animationInDuration={2000}>
            <div className="container">
                <Bishop/>
            </div>
            </Animated>
            <div className="container">
                <h1>Join us Sunday mornings as we gather online</h1>
                <p>The Faith INternational Ministries Church wants to do everything we can to ensure that our communities are taking the necessary precautions to slow the spread of COVID-19. At the same time, we want to make it possible for everyone to experience the fellowship and Biblical teaching that keeps our faith strong, which is more important now than ever.
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
            <div className="container">
                <Upcoming/>
            </div>
           
        </div>
    )
}
