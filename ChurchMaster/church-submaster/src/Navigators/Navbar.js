import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';


class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <div className="nav-con">
      <MDBNavbar color="indigo" dark expand="md"  margin-bottom="50px">
        <Navbar.Brand href="/">
          <strong className="white-text">Faith Ministries International</strong>
        </Navbar.Brand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active to="/">
            <Nav.Link href="/">Home</Nav.Link>
            </MDBNavItem>
           
            
           

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Our Branches</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/WomensWear">Kericho FMI</MDBDropdownItem>
                  <MDBDropdownItem href="/MensWear">Ainamoi Nothern</MDBDropdownItem>
                  <MDBDropdownItem href="Watches">Ainamoi Southern</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Kipkelion Region</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Londiani Region</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">OLenguruone Region</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Kuresoi Region</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Kuresoi South</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Marishoni</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Changoi Region</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Litein Region</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Makimeny</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Tunioi</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Transmara</MDBDropdownItem>
                  <MDBDropdownItem href="Shoes"></MDBDropdownItem>
                  <MDBDropdownItem href="Shoes">Londiani Region</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem href="/AboutPage">
            <Nav.Link href="/JustFm">Just Fm</Nav.Link>
            </MDBNavItem>

            <MDBNavItem href="/AboutPage">
            <Nav.Link href="/AboutPage">About Us</Nav.Link>
            </MDBNavItem>


            <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">Help</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/ContactUs">Contact Us</MDBDropdownItem>
                <MDBDropdownItem href="/Location">Find Us</MDBDropdownItem>
                <MDBDropdownItem href="/MensWear">FAQs</MDBDropdownItem>               
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-1" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
    </Router>
    );
  }
}

export default NavBar;
