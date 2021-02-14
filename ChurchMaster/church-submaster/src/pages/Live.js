
import React from 'react';
import ReactPlayer from "react-player";
import './style.css';
import {Animated} from 'react-animated-css'


function Live() {
    return (
      <>
      <div className="row">
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} delay={6}>


        <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <h3>Latest Church Service</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=J-cvX3he9b8"
                pip={true}
                />
               
            </div>
          </div>
        </Animated>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} delay={6}>

          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <h3>More Live Church Services</h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=fMGhZ5QorVk"/>
            </div>
          </div>
          </Animated>


          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=jr21cYk9zUE"/>
            </div>
          </div>

          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=H2wmR0dZv2w"/>
            </div>
          </div>

          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=CGXh0uBEtBc"/>
            </div>
          </div>

          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=hSj0e4rxqtA"/>
            </div></div>


          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=k8bwVZI3uGE"/>
            </div>
          </div>

          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=Qt7JuWOVTWw"/>
            </div>
          </div>

          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=XMb40lw4T_k"/>
            </div>
          </div>

          <div className="col-lg-6" style={{marginBottom:'20px'}}>
            <div className="col-lg-6 col-md-6">
              <ReactPlayer url="https://www.youtube.com/watch?v=GdySa2IDuhY"/>
            </div>
          </div>
  
       </div> 
       </>
    )
}

export default Live
