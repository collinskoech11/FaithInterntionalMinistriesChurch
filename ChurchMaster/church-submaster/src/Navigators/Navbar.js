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

            <MDBNavItem to="/Live">
            <Nav.Link href="/Live">Live church service</Nav.Link>
            </MDBNavItem>
           
            
           

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Our Branches</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/branches/Kericho">Kericho FMI</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/AinamoiNorth">Ainamoi Nothern</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/AinamoiSouth">Ainamoi Southern</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Kipkelion">Kipkelion Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Londiani">Londiani Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Olenguruone">Olenguruone Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Kuresoi">Kuresoi Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/KuresoiSouth">Kuresoi South</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Marishoni">Marishoni</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Changoi">Changoi Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Litein">Litein Region</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Makimeny">Makimeny</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Tunioi">Tunioi</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Transmara">Transmara</MDBDropdownItem>
                  <MDBDropdownItem href="/branches/Nandi">Nandi</MDBDropdownItem>
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
