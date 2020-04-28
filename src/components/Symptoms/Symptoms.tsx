import React from "react";
import symptomA from "../../assets/images/gfx/symptom-a.png";
import symptomB from "../../assets/images/gfx/symptom-b.png";
import symptomC from "../../assets/images/gfx/symptom-c.png";

const Symptoms: React.FC = () => {
  return (
    <section
      className="section section-l bg-white section-symptom"
      id="symptoms"
    >
      <div className="container">
        <div className="section-head text-center wide-lg">
          <h5 className="subtitle">¿Podría ser positivo del covid-19?</h5>
          <h2 className="title">síntomas del coronavirus</h2>
          <p>
            {" "}
            Fiebre, cansancio y tos seca son algunos de los síntomas comunes del
            COVID-19. Algunos pacientes también pueden tener dolores, molestias,
            congestión y secreción nasal, malestar en la garganta o diarrea.
            Esta sintomatología generalmente es leve y se intensifica
            gradualmente. Además, los indicios pueden aparecer entre 2 y 14 días
            después de la exposición.
          </p>
        </div>
        <div className="section-content">
          <div className="row g-gs justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-4">
              <div className="box2">
                <div className="box2-gfx">
                  <img src={symptomA} alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Fiebre</h5>
                  <p>
                    <strong>Fiebre alta</strong> – Fiebre alta – La temperatura
                    corporal normal de las personas oscila entre 36° y 37°
                    grados centígrados, si supera los 38° grados hay que estar
                    atentos a esta señal. Si la fiebre persiste comunícate a la
                    línea de atención del Ministerio de Salud: 192.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4">
              <div className="box2">
                <div className="box2-gfx">
                  <img src={symptomB} alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Tos</h5>
                  <p>
                    <strong>Tos continua</strong> – Tos continua – Si toses
                    mucho y durante más de una hora, o has tenido 3 o más
                    episodios de tos en las últimas 24 horas, infórmanos por
                    medio de la app Miscua. Analizaremos los datos y te
                    aconsejaremos si es pertinente o no, asistir a una unidad
                    médica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4">
              <div className="box2">
                <div className="box2-gfx">
                  <img src={symptomC} alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Falta de aliento</h5>
                  <p>
                    <strong>Dificultad para respirar</strong> – EDificultad para
                    respirar – Este es el síntoma que más debe preocuparnos, ya
                    que supone que el virus está progresando en tu organismo.
                    Puede ir acompañado de sensación de frío, sudor, desmayos,
                    desorientación, errores incoherentes en el habla. Informa tu
                    situación por medio de Miscua, en donde prestaremos especial
                    especial a este síntoma que puede ocasionar el deterioro de
                    tu salud rápidamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <div className="row g-gs justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-7 col-xl-8">
                <div className="notes">
                  <em className="icon ni ni-alert-fill-c"></em>
                  <p>
                    <strong>Quédate en casa y protege a los demás:</strong> Si
                    crees que has estado expuesto al virus SARS COV-2, además
                    tienes fiebre o cualquier otro síntoma como tos o dificultad
                    para respirar, infórmalo en Miscua y a la línea de atención
                    192 para que recibas asesoramiento médico. Te aconsejamos
                    que te Quedes en casa y evita acudir a lugares con
                    aglomeración de personas, porque puede favorecer los
                    contagios, entre ellos el tuyo, en caso de que presentes
                    infección respiratoria por otro microorganismo, y el de los
                    demás si estás infectado por Coronavirus (COVID-19).
                  </p>
                </div>
              </div>
              <div className="col-sm-10 col-md-8 col-lg-5 col-xl-4">
                <div className="d-flex justify-content-lg-end ml-sm-5 ml-4 pl-3 ml-lg-0 pl-lg-0">
                  <a href="#faq" className="btn scrollto">
                    <em className="icon ni ni-question"></em>
                    <span>¿Tienes alguna pregunta?</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
