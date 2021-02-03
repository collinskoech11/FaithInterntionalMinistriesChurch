import React from 'react';
import FacebookPage from '../Navigators/FacebookPage';
import './style.css';
import just from './img/just.jpg';
import Twitter from '../Navigators/Twitter';
import MetaTags from 'react-meta-tags';

function JustFm() {
  return (
    <>
    <div className="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="JUst Fm Page " />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <div className="content"> Some Content </div>
        </div>
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
