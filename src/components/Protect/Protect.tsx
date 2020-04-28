import React from "react";
import protect from "../../assets/images/gfx/protect.png";
import dontsA from "../../assets/images/gfx/donts-a.png";
import dontsB from "../../assets/images/gfx/donts-b.png";
import dontsC from "../../assets/images/gfx/donts-c.png";
import dosA from "../../assets/images/gfx/dos-a.png";
import dosB from "../../assets/images/gfx/dos-b.png";
import dosC from "../../assets/images/gfx/dos-c.png";

const Protect = () => {
  return (
    <section
      className="section section-l bg-light section-protect"
      id="protect"
    >
      <div className="container">
        <div className="section-head text-center wide-lg">
          <h5 className="subtitle">¿Qué hacer y qué no?</h5>
          <h2 className="title">Protégete</h2>
          <p>
            Lo mejor que puedes realizar ahora es planificar tu rutina diaria.
            Toma algunas medidas para cuidarte, lávate las manos con frecuencia,
            evita el contacto cercano con otras personas, cúbrete al toser y
            estornudar, limpia las superficies de uso diario y usa elementos de
            protección. La mejor manera de prevenir la enfermedad es evitar la
            exposición al virus.
          </p>
        </div>
        <div className="section-content">
          <div className="row g-gs justify-content-center flex-lg-nowrap">
            <div className="col-md-8 col-lg-5 col-xl-6 align-self-end">
              <div className="protect-block-gfx">
                <img src={protect} alt="" />
              </div>
            </div>
            <div className="col-6 col-mb-5 col-sm-6 col-lg-4 col-xl-3 flex-grow-1 order-lg-first">
              <div className="protect-item negative">
                <div className="protect-gfx">
                  <img src={dontsA} alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Evita el contacto cercano</h5>
                </div>
              </div>
              <div className="protect-item negative">
                <div className="protect-gfx">
                  <img src={dontsB} alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">No te toques el rostro</h5>
                </div>
              </div>
              <div className="protect-item negative">
                <div className="protect-gfx">
                  <img src={dontsC} alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Mantén distancia social</h5>
                </div>
              </div>
            </div>
            <div className="col-6 col-mb-5 col-sm-6 col-lg-4 col-xl-3 flex-grow-1 ">
              <div className="protect-item positive">
                <div className="protect-gfx">
                  <img src={dosA} alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Lava tus manos</h5>
                </div>
              </div>
              <div className="protect-item positive">
                <div className="protect-gfx">
                  <img src={dosB} alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Toma mucha agua</h5>
                </div>
              </div>
              <div className="protect-item positive">
                <div className="protect-gfx">
                  <img src={dosC} alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Usa tapabocas</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protect;
