
import React from 'react';
import ReactPlayer from "react-player";
import './style.css';


function Live() {
    return (
      <>
      <div className="row">
      <div className="col-lg-6">
          <div className="col-lg-6 col-md-6">
            <h3>Latest Church Service</h3>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=CGXh0uBEtBc"
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <h3>More Live Church Services</h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=hSj0e4rxqtA"/>
          </div>
          </div>
          <div className="col-lg-6">
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=k8bwVZI3uGE"/>
            </div>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=Qt7JuWOVTWw"/>
            </div>
        </div>
       </div> </>
    )
}

export default Live
