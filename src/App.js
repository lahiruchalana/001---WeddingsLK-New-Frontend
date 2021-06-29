import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header.js"
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import About from "./Components/About.js"
import Galleries from "./Components/Galleries.js"
import SearchResults from "./Components/SearchResults.js"
import Services from "./Components/Services.js"
import UserProfile from "./Components/UserProfile.js"
import UserAuth from "./Components/UserAuth.js"
import Vendors from "./Components/Vendors.js"
import WeddingPlans from "./Components/WeddingPlans.js"
import AdminLogin from "./Components/AdminLogin.js"
import EmployeeLogin from "./Components/EmployeeLogin.js"
import SideBarUser from "./Components/SideBarUser.js";
import AdminProfile from "./Components/AdminProfile";
import EmployeeProfile from "./Components/EmployeeProfile";
import SideBarEmployee from "./Components/SideBarEmployee";
import SideBarAdmin from "./Components/SideBarAdmin";
import HeaderAdmin from "./Components/HeaderAdmin";
import HeaderEmployee from "./Components/HeaderEmployee";
import Shop from "./Components/Shop";
import Websites from "./Components/Websites";
import InvitationCards from "./Components/InvitationCards";
import CommunityFeedBacks from "./Components/CommunityFeedBacks";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Header/> 
            <About/>
            <Footer/>        
          </Route>
          <Route path="/Galleries">
            <Header/> 
            <Galleries/>
            <Footer/>        
          </Route>
          <Route path="/search/results">
            <Header/> 
            <SearchResults/>
            <Footer/>        
          </Route>
          <Route path="/services">
            <Header/> 
            <Services/>
            <Footer/>        
          </Route>
          <Route path="/user/profile">
            <SideBarUser />
            <Header/>
            <UserProfile/> 
          </Route>
          <Route path="/user/auth">
            <Header/> 
            <UserAuth/>
            <Footer/>        
          </Route>
          <Route path="/vendors">
            <Header/> 
            <Vendors/>
            <Footer/>        
          </Route>
          <Route path="/weddingplans">
            <Header/> 
            <WeddingPlans/>
            <Footer/>        
          </Route>
          <Route path="/admin/profile">
            <SideBarAdmin/>
            <HeaderAdmin/>
            <AdminProfile/>    
          </Route>
          <Route path="/admin/login">
            <Header/> 
            <AdminLogin/>
            <Footer/>        
          </Route>
          <Route path="/employee/profile">
            <SideBarEmployee/>
            <HeaderEmployee/>
            <EmployeeProfile/>     
          </Route>
          <Route path="/employee/login">
            <Header/> 
            <EmployeeLogin/>
            <Footer/>        
          </Route>
          <Route path="/shops">
            <Header/> 
            <Shop/>
            <Footer/>        
          </Route>
          <Route path="/weddingwebsites">
            <Header/> 
            <Websites/>
            <Footer/>        
          </Route>
          <Route path="/weddinginvitationcards">
            <Header/> 
            <InvitationCards/>
            <Footer/>        
          </Route>
          <Route path="/communityfeedbacks">
          <Header/>
            <CommunityFeedBacks/>
       
          </Route>
          <Route path="/search/reasults">
            <Header/> 
            <SearchResults />
            <Footer/>        
          </Route>
        </Switch>
        <Route exact path="/">
            <Header /> 
            <Home />
            <Footer />        
          </Route>
      </div>
    </Router>
    
  );
}

export default App;
