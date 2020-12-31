
import React from 'react';
import ReactPlayer from "react-player";
import './style.css';


function Live() {
    return (
      <>
        <div className="video">
          <h3>Latest Church Service</h3>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=CGXh0uBEtBc"
          />
        </div>
        <div className="video">
          <h3>More Live Church Services</h3>
          <ReactPlayer url="https://www.youtube.com/watch?v=hSj0e4rxqtA"/>
        </div>
        <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=k8bwVZI3uGE"/>
        </div>
        <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=Qt7JuWOVTWw"/>
        </div>
        </>
    )
}

export default Live
