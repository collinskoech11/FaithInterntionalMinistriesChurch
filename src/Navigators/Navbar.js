import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import './style.css';
import Sparkle from 'react-sparkle';


class NavBar extends React.Component {
  listener = null;
  state = {
    isOpen: false,
    nav:false
  }
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  handleSCroll = () => {
    if (window.pageYOffset > 140) {
      if(!this.state.nav){
        this.setState({ nav: true});
      }
    } else {
      if(this.state.nav){
        this.setState({nav: false});
      }
    }
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <div >
        <div className="">
          <MDBNavbar color="indigo" dark expand="md"  margin-bottom="50px">
            <Navbar.Brand href="/">
              <strong className="white-text">Faith International Ministries</strong>
              <Sparkle>Faith International Ministries</Sparkle>
            </Navbar.Brand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active to="/">
                <Nav.Link href="/"> Home</Nav.Link>
                </MDBNavItem>

                <MDBNavItem active to="/Live">
                <Nav.Link href="/Live"> Live Service</Nav.Link>
                </MDBNavItem>
              
                
              

                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2"> Our Branches</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropDown">
                      <MDBDropdownItem href="/branches/Kericho">Kericho FMI</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/AinamoiNoth">Ainamoi Region</MDBDropdownItem>      
                      <MDBDropdownItem href="/branches/Kipkelion">Kipkelion Region</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Londiani">Londiani Region</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Nakuru">Nakuru Region</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Kuresoi">Kuresoi Region</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Marishoni">Marishoni</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Changoi">Changoi Region</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Litein">Bureti Region</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Makimeny">Makimeny</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Bomet">Bomet</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Transmara">Transmara</MDBDropdownItem>
                      <MDBDropdownItem href="/branches/Nandi">Nandi</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem active href="/JustFm">
                <Nav.Link href="/JustFm"> Just fm</Nav.Link>
                </MDBNavItem>

                <MDBNavItem active href="/AboutPage">
              <Nav.Link  href="/AboutPage"> About Us </Nav.Link>
                </MDBNavItem>


                <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2 "> Help</span>
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
      </div>
    </Router>
    );
  }
}

export default NavBar;
