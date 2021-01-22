import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const CustomFooter = () => {
  return (
    <MDBFooter color="indigo" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Faith Ministries International</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              Faith Ministries International 
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Focus Items</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="/">Bible Study</a>
            </p>
            <p>
              <a href="/">Youth Congress</a>
            </p>
            <p>
              <a href="/">Womens Confrens</a>
            </p>
            <p>
              <a href="/">Prayer Crussades</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="/ContactDev">Our Developers</a>
            </p>
            <p>
              <a href="/ContactUs">Become an Member</a>
            </p>
            <p>
              <a href="/AboutPage">Our Mission</a>
            </p>
            <p>
              <a href="/ContactUs">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Kericho Kenya
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> Faith Ministries International
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +254700105721
            </p>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> Faith Ministries International </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default CustomFooter;