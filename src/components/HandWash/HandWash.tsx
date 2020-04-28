import React from "react";
import handA from "../../assets/images/gfx/hand-a.png";
import handB from "../../assets/images/gfx/hand-b.png";
import handC from "../../assets/images/gfx/hand-c.png";
import handD from "../../assets/images/gfx/hand-d.png";
import handE from "../../assets/images/gfx/hand-e.png";
import handF from "../../assets/images/gfx/hand-f.png";

const HandWash: React.FC = () => {
  return (
    <section
      className="section section-l bg-light section-handwash"
      id="handwash"
    >
      <div className="container mt-n4">
        <div className="section-subhead text-center">
          <h4 className="title">
            Sigue estos pasos para <br className="d-sm-none" /> lavar bien tus
            manos
          </h4>
          <a href="#faq" className="btn btn-sm btn-transparent scrollto">
            <span>¿Por qué necesito lavar mis manos?</span>
            <em className="icon ni ni-arrow-long-right"></em>
          </a>
        </div>
        <div className="section-content">
          <div className="row g-gs justify-content-center">
            <div className="col-6 col-mb-5 col-sm-4 col-lg-2">
              <div className="box4">
                <div className="box4-gfx">
                  <img src={handA} alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Usa jabón para manos</h6>
                </div>
              </div>
            </div>
            <div className="col-6 col-mb-5 col-sm-4 col-lg-2">
              <div className="box4">
                <div className="box4-gfx">
                  <img src={handB} alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Frota con fuerza las palmas</h6>
                </div>
              </div>
            </div>
            <div className="col-6 col-mb-5 col-sm-4 col-lg-2">
              <div className="box4">
                <div className="box4-gfx">
                  <img src={handC} alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Lava cada dedo</h6>
                </div>
              </div>
            </div>
            <div className="col-6 col-mb-5 col-sm-4 col-lg-2">
              <div className="box4">
                <div className="box4-gfx">
                  <img src={handD} alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Vuelve a restregar las manos</h6>
                </div>
              </div>
            </div>
            <div className="col-6 col-mb-5 col-sm-4 col-lg-2">
              <div className="box4">
                <div className="box4-gfx">
                  <img src={handE} alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Enjuaga con abundante agua</h6>
                </div>
              </div>
            </div>
            <div className="col-6 col-mb-5 col-sm-4 col-lg-2">
              <div className="box4">
                <div className="box4-gfx">
                  <img src={handF} alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Sécate, incluye las muñecas</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandWash;
