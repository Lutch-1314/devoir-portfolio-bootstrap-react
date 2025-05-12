import React from "react";
import {Routes,Route,Link} from "react-router-dom";

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Legalnotice from './pages/Legalnotice';

class App extends React.Component {
  render() {
    return(
      <div className="">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/legalnotice">Mentions légales</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/legalnotice" element={<Legalnotice/>}></Route>
        </Routes>

        
      </div>
    )
  }
}

export default App;
