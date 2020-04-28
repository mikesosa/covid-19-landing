import React from "react";
import logoWhitdde from "../../assets/images/logo-whitdde.png";
import logoWhite2x from "../../assets/images/logo-white2x.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoDark2x from "../../assets/images/logo-dark2x.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar: React.FC = () => {
  return (
    <React.Fragment>
      <div
        className="nk-navbar is-light is-sticky"
        style={{
          position: "fixed",
          backgroundColor: "#fff",
          padding: "15px 0",
          boxShadow: "0px 5px 40px 0px rgba(80, 101, 142, 0.08)",
        }}
        id="navbar"
      >
        <div className="container">
          <div className="nk-navbar-wrap">
            <div className="nk-navbar-logo logo">
              <Link to="/" className="logo-link">
                <img
                  className="logo-dark"
                  src={logoDark}
                  srcSet={logoDark2x}
                  alt="logo"
                />
                <img
                  className="logo-light"
                  src={logoWhitdde}
                  srcSet={logoWhite2x}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="nk-navbar-toggle d-lg-none">
              <a href="#test" className="toggle" data-menu-toggle="navbar-menu">
                <em className="icon-menu icon ni ni-menu"></em>
                <em className="icon-close icon ni ni-cross"></em>
              </a>
            </div>
            <nav className="nk-navbar-menu" id="navbar-menu">
              <ul className="nk-menu">
                <li className="nk-menu-item">
                  <HashLink
                    to="/#banner"
                    className="scrollto nav-link nk-menu-link"
                  >
                    Inicio
                  </HashLink>
                </li>
                <li className="nk-menu-item">
                  <HashLink
                    to="/#about"
                    className="scrollto nav-link nk-menu-link"
                  >
                    Sobre Miscua
                  </HashLink>
                </li>
                <li className="nk-menu-item">
                  <HashLink
                    to="/#symptoms"
                    className="scrollto nav-link nk-menu-link"
                  >
                    Síntomas
                  </HashLink>
                </li>
                <li className="nk-menu-item">
                  <HashLink
                    to="/#prevention"
                    className="scrollto nav-link nk-menu-link"
                  >
                    Protégete
                  </HashLink>
                </li>
                <li className="nk-menu-item">
                  <HashLink
                    to="/#treatment"
                    className="scrollto nav-link nk-menu-link"
                  >
                    Tratamientos
                  </HashLink>
                </li>
                {/* <li className="nk-menu-item">
                  <a className="scrollto nav-link nk-menu-link" href="#faq">
                    FAQ
                  </a>
                </li> */}
                {/* <li className="nk-menu-item">
                  <a className="scrollto nav-link nk-menu-link" href="#news">
                    Actualidad
                  </a>
                </li> */}
              </ul>
              <ul className="nk-menu-btns">
                <li className="nk-menu-item">
                  <a
                    href="https://storage.googleapis.com/miscua/app/miscua-v1.0.0.apk "
                    className="btn btn-sm scrollto nav-link"
                  >
                    Descarga gratis
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
