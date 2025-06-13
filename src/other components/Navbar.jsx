import { NavLink } from "react-router";
import './css/Navbar.css';

const Navbar = () => {
    const activeLink = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            textDecoration: isActive ? "underline" : "",
        };
    };

    return (
        <div>
          <nav className="navbar navbar-dark navbar-expand-md bg-dark text-uppercase px-4">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">John Doe</span>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/" style={activeLink}>Accueil</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/services" style={activeLink}>Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/portfolio" style={activeLink}>Portfolio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/contact" style={activeLink}>Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/legalnotice" style={activeLink}>Mentions légales</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;