import React from "react";
import {Routes,Route,Link} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Legalnotice from './pages/Legalnotice';
import Navbar from './other components/Navbar';
import Footer from './other components/Footer';

class App extends React.Component {
  render() {
    return(
      <div className="all">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/legalnotice" element={<Legalnotice/>}></Route>
        </Routes>

        <Footer />
      </div>
    )
  }
}

export default App;
