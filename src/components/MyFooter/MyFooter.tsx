import React from "react";
import logoWhitdde from "../../assets/images/logo-whitdde.png";
import logoWhite2x from "../../assets/images/logo-white2x.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoDark2x from "../../assets/images/logo-dark2x.png";
import { Link } from "react-router-dom";

const MyFooter: React.FC = () => {
  return (
    <footer className="nk-footer bg-dark tc-light has-overlay">
      <div className="overlay shape shape-c"></div>
      <section className="section section-footer section-m tc-light">
        <div className="container">
          <div className="nk-footer-top">
            <div className="row g-gs gy-m">
              <div className="col-lg-3 col-md-9 mr-auto">
                <div className="wgs wgs-about">
                  <div className="wgs-logo logo">
                    <a href="./" className="logo-link">
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
                    </a>
                  </div>
                  <div className="wgs-about-text">
                    <p>
                      Miscua es una iniciativa sin ánimo de lucro impulsada por
                      un colectivo formado por empresas y colombianos
                      independientes. Su objetivo fundamental es contribuir a la
                      actual apuesta nacional de frenar la cadena de contagio
                      del SARS COV-2.
                    </p>
                    <p>
                      {" "}
                      Miscua es un concepto que viene del vocablo muysca, que se
                      usa como correlativo para agregar al significado de{" "}
                      <em>transitar, ir, caminar, conducirse</em> a otros
                      términos.
                    </p>
                  </div>
                  <ul className="wgs-social">
                    <li>
                      <a href="http://facebook.com/miscuaapp">
                        <em className="icon ni ni-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="http://instagram.com/miscuaapp">
                        <em className="icon ni ni-instagram"></em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-lg-2">
                <div className="wgs wgs-menu">
                  <h6 className="wgs-title">Cocreadores</h6>
                  <ul className="wgs-links">
                    <li>
                      <a className="scrollto" href="http://pluriza.com">
                        Pluriza
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="http://conicomlab.com">
                        ConicomLab
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="http://thedataculture.com">
                        The Data Cultures
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="http://doniben.tech">
                        Doĉja Filmo
                      </a>
                    </li>
                    <li>
                      <a
                        className="scrollto"
                        href="http://comunicaciones.primernombre.com"
                      >
                        Comunicaciones Primer Nombre
                      </a>
                    </li>
                    <li>
                      <a className="scrollto" href="http://b4bcompany.com/">
                        B4B Company
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="wgs wgs-menu">
                  <h6 className="wgs-title">Links de ayuda</h6>
                  <ul className="wgs-links">
                    <li>
                      <a href="#test">Healthcare Professionals</a>
                    </li>
                    <li>
                      <a href="#test">Healthcare Facilities</a>
                    </li>
                    <li>
                      <a href="#test">Older Adults & Medical Conditions</a>
                    </li>
                    <li>
                      <a href="#test">Repare your Family</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-lg-2">
                <div className="wgs wgs-menu">
                  <h6 className="wgs-title">Páginas Oficiales</h6>
                  <ul className="wgs-links">
                    <li>
                      <a href="http://minsalud.gov.co">Ministerio de Salud</a>
                    </li>
                    <li>
                      <a href="http://ins.gov.co">
                        Instituto Nacional de la Salud
                      </a>
                    </li>
                    <li>
                      <a href="https://www.elespectador.com/coronavirus/esta-es-la-situacion-del-coronavirus-en-colombia-en-tiempo-real-articulo-909153">
                        Cifras en tiempo real - El Espectador
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="nk-copyright">&copy; 2020 Miscua.</p>
              </div>
              <div className="col-md-6">
                <ul className="nk-footer-links justify-content-md-end">
                  <li>
                    <Link to="/terminos-y-condiciones">
                      Términos y condiciones
                    </Link>
                    {/* <a href="terminos-y-condiciones.html">
                      Términos y condiciones
                    </a> */}
                  </li>
                  <li>
                    <Link to="/politicas-de-privacidad">
                      Política de privacidad
                    </Link>
                    {/* <a href="politica-de-privacidad.html">
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="nk-dislaimer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default MyFooter;
