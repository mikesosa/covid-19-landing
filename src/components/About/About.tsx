import React, { useEffect } from "react";
import check from "../../assets/images/gfx/check.png";
import warning from "../../assets/images/gfx/warning.png";
import time from "../../assets/images/gfx/time.png";
import medic from "../../assets/images/gfx/medic.png";
import aboutPhone from "../../assets/images/gfx/about-phone.png";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section section-l bg-white section-about" id="about">
      <div className="container">
        <div className="row g-gs justify-content-center align-items-center">
          <div className="col-lg-8">
            <div className="list-block pr-lg-4">
              <h4 className="subtitle">
                Una app que protege la salud de los colombianos
              </h4>
              <h2 className="title">
                Frenemos juntos el Coronavirus <br className="d-sm-none" />
                (COVID-19)
              </h2>
              <div className="container">
                <div className="row">
                  <div className="about-list">
                    <img src={check} width="40px" height="40px" alt="" />
                  </div>
                  <div className="col about-list">
                    <p>
                      Esta app te permite observar y controlar en tiempo real
                      las zonas de riesgo en tu ciudad. Recuerda salir de casa
                      sólo cuando sea estrictamente necesario.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="about-list">
                    <img src={warning} width="40px" height="40px" alt="" />
                  </div>
                  <div className="col about-list">
                    <ul>
                      <li>
                        Determina automáticamente a qué nivel de riesgo
                        estuviste expuesto y cuáles son las medidas de seguridad
                        que debes tomar en cuenta al salir y llegar a tu hogar.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="about-list">
                    <img src={time} width="40px" height="40px" alt="" />
                  </div>
                  <div className="col about-list">
                    <ul>
                      <li>
                        Si presentas algunos síntomas, MISCUA te brindará
                        información verídica y útil en caso de requerir
                        asistencia médica.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="about-list">
                    <img src={medic} width="40px" height="40px" alt="" />
                  </div>
                  <div className="col about-list">
                    <ul>
                      <li>
                        Si seleccionas todos los síntomas del COVID-19, nuestros
                        datos podrán informar a profesionales y entidades de la
                        salud para que evalúen tu estado y, de ser necesario, te
                        transladen a una unidad médica autorizada. Miscua podrá
                        agilizar este proceso con un uso responsable de la app.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="section-actions">
                <li>
                  <a
                    href="https://storage.googleapis.com/miscua/app/miscua-v1.0.0.apk "
                    className="btn scrollto"
                  >
                    <span>Obtenla Gratis</span>
                    <em className="icon ni ni-arrow-long-right"></em>
                  </a>
                </li>
                <li>
                  <a
                    href="infografia.html"
                    className="btn btn-transparent scrollto"
                  >
                    <span>Guía para usar Miscua</span>
                    <em className="icon ni ni-arrow-long-right"></em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-sm-10 col-md-8 col-lg-4">
            <img src={aboutPhone} className="mb-2 mb-sm-0" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
