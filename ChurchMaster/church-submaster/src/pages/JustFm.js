import React from 'react';
import './style.css';
import just from './img/just.jpg';

function JustFm() {
  return (
    <div className="justCon">
      <h1>Just f.m radio</h1> <h3>98.9 fm</h3>
      <img src={just} alt="just fm header image"/>
    </div>
  )
}

export default JustFm
