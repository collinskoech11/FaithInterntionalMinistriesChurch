import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import './style.css';
import Sparkle from 'react-sparkle';
import Youtube from './img/Youtube.png';
import HomeIcon from './img/HomeIcon.png';
import Branch from './img/Branch.png';
import justIcon from './img/justIcon.png';
import AboutIcon from './img/AboutIcon.png';


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
          <Sparkle>Faith Ministries International</Sparkle>
        </Navbar.Brand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active to="/">
            <Nav.Link href="/"><img src={HomeIcon} className="icon" alt=""/> Home</Nav.Link>
            </MDBNavItem>

            <MDBNavItem to="/Live">
            <Nav.Link href="/Live"><img src={Youtube} className="icon"/> Live Service</Nav.Link>
            </MDBNavItem>
           
            
           

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"><img src={Branch} className="icon" /> Our Branches</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropDown">
                  <MDBDropdownItem href="/branches/Kericho">Kericho FMI</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/AinamoiNoth">Ainamoi Nothern</MDBDropdownItem>      
                  <MDBDropdownItem href="/branches/Kipkelion">Kipkelion Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Londiani">Londiani Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Olenguruone">Nakuru Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Kuresoi">Kuresoi Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/KuresoiSouth">Kuresoi South</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Marishoni">Marishoni</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Changoi">Changoi Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Litein">Litein Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Makimeny">Makimeny</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Bomet">Bomet</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Transmara">Transmara</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Nandi">Nandi</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem href="/AboutPage">
            <Nav.Link href="/JustFm"><img src={justIcon} className="icon" /> Just fm</Nav.Link>
            </MDBNavItem>

            <MDBNavItem href="/AboutPage">
          <Nav.Link  href="/AboutPage"><img src={AboutIcon} className="icon"/> About Us </Nav.Link>
            </MDBNavItem>


            <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2 ">Help</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/ContactUs">Contact Us</MDBDropdownItem>
                <MDBDropdownItem href="/Location">Find Us</MDBDropdownItem>       
                <MDBDropdownItem href="/ContactDev">Contact Developers</MDBDropdownItem>           
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
