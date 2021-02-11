import React from "react";
import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Carousel1 from './img/Carousel1.jpeg';
import carousel2 from './img/carousel2.jpeg';
import carousel3 from './img/carousel3.jpeg';
import poster from './img/poster.jpg';
import poster1 from './img/poster1.jpg';
import poster2 from './img/poster2.jpg';
import poster3 from './img/poster3.jpg';


const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={7}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Carousel1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={poster}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src={poster1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src={poster2}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
            <img
              className="d-block w-100"
              src={poster3}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;