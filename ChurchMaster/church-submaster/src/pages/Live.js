
import React from 'react';

import YouTubePlayer from “react-player/lib/players/YouTube”;



function Live() {
    return (
        <div className="video">
            <YouTubePlayer
               url='https://www.youtube.com/watch?v=d46Azg3Pm4c'
             />
        </div>
    )
}

export default Live
