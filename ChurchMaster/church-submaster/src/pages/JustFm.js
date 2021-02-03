import React from 'react';
import FacebookPage from '../Navigators/FacebookPage';
import './style.css';
import just from './img/just.jpg';
import Twitter from '../Navigators/Twitter';

function JustFm() {
  return (
    <>
    <div className="justCon">
      <h1>The Just f.m radio</h1> <h3>98.9 fm</h3>
      <img src={just} alt="just fm header"/>
    </div>
    <div className="title">
      <h1>Live Radio Streaming Coming soon </h1>
    </div>
    <div className="container">
      <Twitter/>
    </div>
    <div className="container">
      <FacebookPage/>
    </div>
    </>
  )
}

export default JustFm
