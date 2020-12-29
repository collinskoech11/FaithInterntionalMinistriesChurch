import React from 'react';
import './App.css';
import './css/products/WomensWear.css';
import './css/Screens/ProductScreen.css';
import Navbar from './Navigators/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';
import CustomFooter from './Navigators/CustomFooter';
import Login from './pages/Login';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Location from './pages/Location';
import SignUp from './pages/SignUp';
import Bishop from './pages/SuperProfiles/Bishop'

function App() {
  return (
    <Router>
    <div className="app">
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route path="/AboutPage" component={AboutPage}/>
     <Route path="/ContactUs" component={ContactUs}/>
     <Route path="/Location" component={Location}/>
     
     
     
     {/*Profiles*/}
     <Route path="/SuperProfiles/Bishop" component={Bishop}/>
     

     {/*product screens */}
     
     <Route path="/SignUp" component={SignUp}/>
     <Route path="/Login" component={Login}/>
     
     
     
    </div>
    <CustomFooter/>
    </Router>
    
  );
}

export default App;
