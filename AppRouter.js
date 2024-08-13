import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from 'react';
import Menu from "./Menu";
import Home from "./Home";
import Jobs from "./Jobs";
import Contact from "./Contact";
import Footer from "./footer";


function AppRouter() {
  return (
    <Router>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Contact" element={<Contact/>}/>


            
        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter