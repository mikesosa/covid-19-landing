import React from "react";
import boyCity from "../../assets/images/gfx/boy-city.png";
import women from "../../assets/images/gfx/women.png";
import virus from "../../assets/images/gfx/virus.png";

const Spread: React.FC = () => {
  return (
    <section className="section section-l bg-light section-spread" id="spread">
      <div className="container">
        <div className="section-head text-center wide-md">
          <h5 className="subtitle">Tres botones principales</h5>
          <h2 className="title">
            JUNTOS CORTAREMOS LA TRANSMISIÓN DEL VIRUS
            <br className="d-sm-none" /> COVID-19
          </h2>
          <p>
            Todos los días los médicos y científicos nos proporcionan nuevos
            descubrimientos sobre el virus. Aún estamos aprendiendo a conocerlo.
            Sin embargo, podemos prevenir más contagios informando a los otros
            sobre tu salud actual y analizando los riesgos de contagio de tu
            entorno.
          </p>
        </div>
        <div className="section-content">
          <div className="row g-gs justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-4">
              <div className="box">
                <div className="box-gfx">
                  <img src={boyCity} alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">Voy a salir de casa </h4>
                  <p>
                    {" "}
                    Las relaciones “persona a persona” son el principal medio de
                    contagio del coronavirus. Al salir de casa, selecciona la
                    actividad que realizarás. Así nos ayudarás a establecer
                    cuáles serían las actividades que presentan mayor
                    posibilidad de transmisión del virus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4">
              <div className="box">
                <div className="box-gfx">
                  <img src={women} alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">Riesgo de contagio</h4>
                  <p>
                    En el momento que avises tu regreso a casa, se analizarán
                    los datos que proporcionaste inicialmente, para hacer una
                    proyección sobre el riesgo de contagio al que estuviste
                    expuesto. Así mismo, podrás ver un historial de las zonas
                    donde transitaste.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4">
              <div className="box">
                <div className="box-gfx">
                  <img src={virus} alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">Positivo al COVID-19</h4>
                  <p>
                    Si alguien informa que es positivo dentro de la app, Miscua
                    enviará el historial completo al INS (Instituto Nacional de
                    Salud) en conjunto con los individuos que tuvieron contacto
                    con esa persona, y el reporte de las áreas visitadas por el
                    positivo. Así podremos rastrear los posibles contagios y
                    juntos ayudaremos a cortar la cadena de contagio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="section-actions">
            <li>
              <a href="#faq" className="btn scrollto">
                <em className="icon ni ni-question"></em>
                <span>Tienes alguna pregunta sobre el virus?</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Spread;
