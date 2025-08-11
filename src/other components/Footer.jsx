import { Link } from "react-router";
import './css/Footer.css';

const Footer = () => {
    return (
      <footer className="text-light bg-dark py-4">
        <div className="container mx-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h4>John Doe</h4>
              <address className="d-flex flex-column">
                <span>40 rue Laure Diebold</span>
                <span>69009 Lyon, France</span>
                <span>10 20 30 40 50</span>
                <span>johndoe@gmail.com</span>
              </address>
              <a href="https://github.com/Johndoedoestai/john" className="social-link" target="_blank" rel="nofollow">
                <i className="bi bi-github me-2 fs-4"></i>
              </a>
              <a href="https://x.com/JohnDoe93668706" className="social-link" target="_blank" rel="nofollow">
                <i className="bi bi-twitter me-2 fs-4"></i>
              </a>
              <a href="https://www.linkedin.com/in/john-doe-1236ab364/" className="social-link" target="_blank" rel="nofollow">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <h4>Liens utiles</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className="link-light text-decoration-none">Accueil</Link></li>
                <li><Link to="/services" className="link-light text-decoration-none">Services</Link></li>
                <li><Link to="/portfolio" className="link-light text-decoration-none">Portfolio</Link></li>
                <li><Link to="/contact" className="link-light text-decoration-none">Contact</Link></li>
                <li><Link to="/legalnotice" className="link-light text-decoration-none">Mentions légales</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <h4>Mes dernières réalisations</h4>
              <ul className="list-unstyled">
                {/*Je n'ai pas mis de Link pour les liens suivants car ce sont des liens externes normalement*/}
                <li><a href="/portfolio" className="link-light text-decoration-none">Fresh Food</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Restaurant Akira</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Espace bien-être</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">SEO</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Création d'une API</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Maquette d'un site</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;