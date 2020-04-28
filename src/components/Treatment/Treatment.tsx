import React from "react";

const Treatment: React.FC = () => {
  return (
    <section
      className="section section-l bg-accent-light tc-light section-treatment has-overlay"
      id="treatment"
    >
      <div className="overlay shape shape-b"></div>
      <div className="container">
        <div className="section-content">
          <div className="row g-gs gy-sm-m justify-content-between align-items-center">
            <div className="col-lg-7 col-xl-6">
              <div className="text-block">
                <h5 className="subtitle">CUÍDATE Y MANTENTE SEGURO</h5>
                <h2 className="title">Tratamientos para el Coronavirus</h2>
                <p>
                  {" "}
                  <strong>
                    Hasta la fecha no existe vacuna ni medicamento antiviral
                    específico para prevenir o tratar el SARS COV-2.{" "}
                  </strong>
                  Sin embargo, los afectados por el virus deben recibir atención
                  médica especializada para aliviar los síntomas. Las personas
                  con sintomatologías graves deben ser hospitalizadas en la
                  menor brevedad. La mayoría de los pacientes se recuperan
                  gracias al cuidado recibido de los entes de salud.
                </p>
                <p>
                  Los antibióticos no funcionan contra el virus. El tratamiento
                  tiene como objetivo principal aliviar los síntomas mientras el
                  cuerpo combate la enfermedad. El paciente de COVID-19 tendrá
                  que permanecer aislado de otras personas, hasta que se haya
                  recuperado completamente.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="box5 bg-accent-dark">
                <h6 className="title">Cuidado propio</h6>
                <p>
                  Si presentas síntomas leves, quédate en casa hasta que te
                  recuperes, puedes aliviar los mismos de esta manera:
                </p>
                <ul className="list-arrow">
                  <li>Duerme y descansa</li>
                  <li>Mantente caliente</li>
                  <li>Bebe constantemente líquidos</li>
                  <li>
                    Toma una ducha caliente para ayudar a aliviar el dolor de
                    garganta y la tos.
                  </li>
                </ul>
                <h6 className="title">Tratamientos médicos</h6>
                <p>
                  Si tienes fiebre, tos y dificultad para respirar, busca
                  atención médica de inmediato. Llama con anticipación al 192,
                  informa de tus síntomas en la app de Miscua e advierte a tu
                  proveedor de salud sobre cualquier viaje o contacto reciente
                  con viajeros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
