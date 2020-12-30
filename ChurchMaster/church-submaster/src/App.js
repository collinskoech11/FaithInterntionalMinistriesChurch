import React from 'react';
import './App.css';
import './css/products/WomensWear.css';
import './css/Screens/ProductScreen.css';
import Navbar from './Navigators/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home';
import CustomFooter from './Navigators/CustomFooter';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Location from './pages/Location';
import AinamoiNoth from './pages/branches/AinamoiNoth';
import AinamoiSouth from './pages/branches/AinamoiSouth';
import Changoi from './pages/branches/Changoi';
import Kericho from './pages/branches/Kericho';
import Kipkelion from './pages/branches/Kipkelion';
import Kuresoi from './pages/branches/Kuresoi';
import KuresoiSouth from './pages/branches/KuresoiSouth';
import Litein from './pages/branches/Litein';
import Londiani from './pages/branches/Londiani';
import Makimeny from './pages/branches/Makimeny';
import Marishoni from './pages/branches/Marishoni';
import Nandi from './pages/branches/Nandi';
import Olenguruone from './pages/branches/Olenguruone';
import Transmara from './pages/branches/Transmara';
import Tunioi from './pages/branches/Tunioi';
import Live from './pages/Live';
import JustFm from './pages/JustFm';
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
     

     {/*Branches screens */}
     <Route path="/branches/AinamoiNoth" component={AinamoiNoth}/>
     <Route path="/branches/AinamoiSouth" component={AinamoiSouth}/>
     <Route path="/branches/Changoi" component={Changoi}/>
     <Route path="/branches/Kericho" component={Kericho}/>
     <Route path="/branches/Kipkelion" component={Kipkelion}/>
     <Route path="/branches/Kuresoi" component={Kuresoi}/>
     <Route path="/branches/KuresoiSouth" component={KuresoiSouth}/>
     <Route path="/branches/Litein" component={Litein}/>
     <Route path="/branches/Londiani" component={Londiani}/>
     <Route path="/branches/Makimeny" component={Makimeny}/>
     <Route path="/branches/Marishoni" component={Marishoni}/>
     <Route path="/branches/Nandi" component={Nandi}/>
     <Route path="/branches/Olenguruone" component={Olenguruone}/>
     <Route path="/branches/Transmara" component={Transmara}/>
     <Route path="/branches/Tunioi" component={Tunioi}/>
     
     {/**Live servce */}
     <Route path="/Live" component={Live}/>

     {/**Facebook */}
     <Route path="/JustFm" component={JustFm}/>


    </div>
    <CustomFooter/>
    </Router>
    
  );
}

export default App;
