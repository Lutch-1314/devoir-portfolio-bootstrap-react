import { Link } from "react-router";

const Footer = () => {
    return (
        <ul className="text-light bg-dark list-unstyled">
            <li>
              <h4>John Doe</h4>
              <address className="d-flex flex-column">
                <span>40 rue Laure Diebold</span>
                <span>69009 Lyon, France</span>
                <span>10 20 30 40 50</span>
                <span>johndoe@gmail.com</span>
              </address>
              <a href="https://github.com/Johndoedoestai/john" className="link-light text-decoration-none" target="blank">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://x.com/JohnDoe93668706" className="link-light text-decoration-none" target="blank">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/john-doe-1236ab364/" className="link-light text-decoration-none" target="blank">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <h4>Liens utiles</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className="link-light text-decoration-none">Accueil</Link></li>
                <li><Link to="/services" className="link-light text-decoration-none">Services</Link></li>
                <li><Link to="/portfolio" className="link-light text-decoration-none">Portfolio</Link></li>
                <li><Link to="/contact" className="link-light text-decoration-none">Contact</Link></li>
                <li><Link to="/legalnotice" className="link-light text-decoration-none">Mentions légales</Link></li>
              </ul>
            </li>
            <li>
              <h4>Mes dernières réalisations</h4>
              <ul className="list-unstyled">
                <li><a href="/portfolio" className="link-light text-decoration-none">Fresh Food</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Restaurant Akira</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Espace bien-être</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">SEO</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Création d'une API</a></li>
                <li><a href="/portfolio" className="link-light text-decoration-none">Maquette d'un site</a></li>
              </ul>
            </li>
        </ul>
    )
}

export default Footer;