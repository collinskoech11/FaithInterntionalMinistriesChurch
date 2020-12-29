import React from 'react';
import CarouselPage from '../Navigators/CarouselPage';
import Pages from './Pages';
import Bishop from './SuperProfiles/Bishop';
import Chairman from './SuperProfiles/Chairman';
import Upcoming from '../Navigators/Upcoming';
import './style.css';
import Twitter from '../Navigators/Twitter'




export default function Home() {
    return (
        <div>
            <div className="container">
                <CarouselPage/>
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
