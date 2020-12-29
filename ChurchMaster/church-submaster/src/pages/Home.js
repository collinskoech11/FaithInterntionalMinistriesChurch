import React from 'react';
import CarouselPage from '../Navigators/CarouselPage';
import Pages from './Pages';
import Bishop from './SuperProfiles/Bishop';
import Chairman from './SuperProfiles/Chairman';
import Upcoming from '../Navigators/Upcoming';
import Twitter from '../Navigators/Twitter'




export default function Home() {
    return (
        <div>
        <CarouselPage/>
        <Bishop/>
        <Twitter/>
        <Chairman/>
        <Upcoming/>
        </div>
    )
}
