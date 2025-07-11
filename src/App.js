import React from "react";
import {Routes,Route,Link} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Legalnotice from './pages/Legalnotice';
import Navbar from './other components/Navbar';

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

        <footer>
          <ul>
            <li>
              <h4>John Doe</h4>
              <address>
                <span>40 rue Laure Diebold</span>
                <span>69009 Lyon, France</span>
                <span>10 20 30 40 50</span>
                <span>johndoe@gmail.com</span>
              </address>
              <a href="https://github.com/Johndoedoestai/john" target="blank">
              <i className="bi bi-github"></i>
              </a>
              <a href="https://x.com/JohnDoe93668706" target="blank">
              <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/john-doe-1236ab364/" target="blank">
              <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <h4>Liens utiles</h4>
              <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/legalnotice">Mentions légales</Link></li>
              </ul>
            </li>
            <li>
              <h4>Mes dernières réalisations</h4>
              <ul>
                <li><a href="/portfolio">Fresh Food</a></li>
                <li><a href="/portfolio">Restaurant Akira</a></li>
                <li><a href="/portfolio">Espace bien-être</a></li>
                <li><a href="/portfolio">SEO</a></li>
                <li><a href="/portfolio">Création d'une API</a></li>
                <li><a href="/portfolio">Maquette d'un site</a></li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default App;
