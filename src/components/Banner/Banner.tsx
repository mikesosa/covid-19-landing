import React, { useState, useEffect } from "react";
import axios from "axios";
import hearderAppst from "../../assets/images/gfx/hearder-appst.png";
import headerAppg from "../../assets/images/gfx/header-appg.png";
import headerA from "../../assets/images/gfx/header-a.png";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  const [stats, setStats] = useState({
    confirmed: "",
    deaths: "",
    recovered: "",
    lastUpdate: new Date(),
  });

  const getInfo = async () => {
    const result = await axios({
      method: "GET",
      url:
        "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Colombia",
      headers: {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "66f9c65cdbmsh3277a71f6345258p10c345jsn65bb3c0d4c37",
      },
    }).catch((err) => {
      return err;
    });
    return result;
  };

  useEffect(() => {
    // Create an scoped async function in the hook
    async function updateData() {
      let res = await getInfo();
      console.log("q asa", res.data.data.covid19Stats);
      console.log("q asa", res.data.data.covid19Stats[0].confirmed);

      setStats(res.data?.data.covid19Stats[0]);
    }
    // Execute the created function directly
    updateData();
  }, []);

  return (
    <div className="nk-banner" id="banner">
      <div className="container">
        <div className="row g-gs align-items-center justify-content-between">
          <div className="col-lg-5 order-lg-last">
            <div className="nk-banner-image">
              <img className="header_a" src={headerA} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="nk-banner-block">
              <div className="content">
                <h1 className="heading">
                  <span>COLOMBIA</span>
                  <span className="heading-sm">
                    <span className="sup">CONTRA EL</span>
                    <span className="sub">COVID-19</span>
                  </span>
                </h1>
                <ul className="nk-menu-btns">
                  <li>
                    <a
                      href="https://storage.googleapis.com/miscua/app/miscua-v1.0.0.apk "
                      className="btn scrollto"
                    >
                      <span>Descarga el apk</span>
                      <em className="icon ni ni-arrow-long-right"></em>
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/guia-de-uso"
                      className="btn btn-transparent scrollto"
                    >
                      <span>Guía para usar Miscua</span>
                      <em className="icon ni ni-arrow-long-right"></em>
                    </Link>
                    {/* <a
                      href="infografia.html"
                      className="btn btn-transparent scrollto"
                    >
                     
                    </a> */}
                  </li>
                </ul>
                <p>
                  Miscua es una herramienta con seguimiento GPS que proporciona
                  y recibe información para presentarte los casos de COVID-19
                  más cercanos a tu ubicación.
                </p>

                <p>
                  Es posible, que sin saberlo hayas tenido contacto cercano con
                  alguien que contrajo el virus. Lo conozcas o no, Miscua te
                  ayudará a rastrear las zonas de posible contagio que pueden
                  ser vulnerables para tí y tus seres queridos.
                </p>

                <p>
                  <strong>
                    Confiamos en tí, haz un uso responsable de la aplicación.
                  </strong>
                </p>
                <p>
                  <strong>
                    <em>
                      Con tecnología cortaremos juntos la cadena de contagio.
                    </em>
                  </strong>
                </p>

                <div className="container">
                  <div className="row">
                    <div className="col-6 col-md-4">
                      <img
                        src={hearderAppst}
                        width="150px"
                        height="150px"
                        alt=""
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        src={headerAppg}
                        width="150px"
                        height="150px"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="status-note">
                  * Disponible para iPhone, iPad y todos los dispositivos
                  Android
                </div>

                <div className="status">
                  <div className="row g-gs">
                    <div className="col-sm-4 col-6">
                      <div className="status-item">
                        <h6 className="title">Casos en Colombia</h6>
                        <div className="h3 count">{stats.confirmed}</div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="status-item">
                        <h6 className="title">Muertes</h6>
                        <div className="h3 count">{stats.deaths}</div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="status-item">
                        <h6 className="title">Recuperados</h6>
                        <div className="h3 count">{stats.recovered}</div>
                      </div>
                    </div>
                  </div>
                  <div className="status-note" id="lastupdate">
                    * Última actualización: {stats.lastUpdate.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
