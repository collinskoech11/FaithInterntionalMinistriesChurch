
import React from 'react';
import { Video } from 'react-video-stream';
import './style.css';

const url = 'https://youtu.be/_YhkTD02scM'
 
const options = {
  requestHeader: 'Authorization',
  requestToken: 'access_token'
}



function Live() {
    return (
        <div>
        <Video
          className='video-class'
          controls={true}
          autoPlay={true}
          options={options}
          remoteUrl={url}
        />
      </div>
    )
}

export default Live
