import React from "react";
import adviceA from "../../assets/images/gfx/advice-a.png";
import adviceB from "../../assets/images/gfx/advice-b.png";
import adviceC from "../../assets/images/gfx/advice-c.png";
import adviceD from "../../assets/images/gfx/advice-d.png";

const Prevention: React.FC = () => {
  return (
    <section
      className="section section-l bg-light section-advice pb-0 ov-h"
      id="prevention"
    >
      <div className="container">
        <div className="section-head text-center wide-lg">
          <h5 className="subtitle">¿Cómo puedes protegerte?</h5>
          <h2 className="title">CONSEJOS DE PREVENCIÓN</h2>
          <p>
            Actualmente no existe una vacuna para prevenir la enfermedad por
            Coronavirus 2019 (COVID-19).{" "}
            <strong>
              La mejor manera de protección, es evitar exponerse al virus. Te
              recomendamos que te mantengas informado con las actualizaciones
              recientes del brote, que están disponibles en el sitio web de la
              OMS, la página oficial del Ministerio de Salud, y que sigas las
              instrucciones dadas por las autoridades gubernamentales.
            </strong>
          </p>
        </div>
        <div className="section-content">
          <div className="row g-gs gy-sm-m">
            <div className="col-lg-3 col-sm-6">
              <div className="box3">
                <div className="box3-gfx">
                  <img src={adviceA} alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Lava tus manos frecuentemente</h5>
                  <p>
                    Limpia tus manos regularmente con agua y jabón, por lo menos
                    durante 20 segundos, en lo posible usa gel desinfectante a
                    base de alcohol.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box3">
                <div className="box3-gfx">
                  <img src={adviceB} alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Distanciamiento social</h5>
                  <p>
                    Mantén una distancia mínima de 2 metros dentro y fuera de tu
                    hogar, especialmente si hay una persona que esté tosiendo o
                    estornudando. Si te encuentras demasiado cerca podrías
                    infectarte..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box3">
                <div className="box3-gfx">
                  <img src={adviceC} alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Evita tocarte la cara</h5>
                  <p>
                    Nuestras manos constantemente tocan muchas superficies que
                    pueden contener el virus, el mismo se transfiriere a tu
                    organismo por medio de tus sus ojos, nariz o boca.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box3">
                <div className="box3-gfx">
                  <img src={adviceD} alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Higiene respiratoria</h5>
                  <p>
                    Conserva una buena higiene respiratoria al cubrir la boca y
                    la nariz, cuando tosas o estornudes recuerda siempre
                    cubrirte con el codo o con un pañuelo doblado.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="section-actions">
            <li>
              <a href="#handwash" className="btn scrollto">
                <span>Mira aquí cómo lavar tus manos</span>
                <em className="icon ni ni-arrow-long-right"></em>
              </a>
            </li>
            {/* <li><a href="#faq" className="btn btn-transparent scrollto"><span>ABC sobre el coronavirus</span><em className="icon ni ni-arrow-long-right"></em></a></li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prevention;
