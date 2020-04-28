import React from "react";
import steps from "../../assets/images/gfx/steps.png";

const Steps: React.FC = () => {
  return (
    <section
      className="section section-l bg-light section-steps pb-4"
      id="steps"
    >
      <div className="container">
        <div className="section-content section-content-boxed">
          <div className="row g-gs justify-content-center align-items-center">
            <div className="col-lg-8">
              <div className="list-block pr-lg-4">
                <h4 className="title">Protégete y cuida a los demás</h4>
                <ul className="list-check">
                  <li>
                    <strong>Quédate en casa si estás enfermo</strong> – Excepto
                    para recibir atención médica, en caso de que el personal de
                    salud no pueda visitarte.
                  </li>
                  <li>
                    <strong>Cubre tu boca y nariz</strong> – Usa la parte
                    interna del codo o un pañuelo al toser o estornudar. Hazlo
                    dentro y fuera de casa.
                  </li>
                  <li>
                    <strong>Usa un tapabocas</strong> – Sobre todo en espacios
                    aglomerados e instituciones médicas.
                  </li>
                  <li>
                    <strong>
                      Limpia y desinfecta las superficies que son frecuentemente
                      tocadas
                    </strong>{" "}
                    – Esta medida incluye teléfonos, mesas, interruptores de
                    luz, pomos de puertas, escritorios, inodoros, botones de
                    ascensores, grifos, lavabos, entre otros objetos.
                  </li>
                  <li>
                    <strong>Desinfecta la superficie de tus zapatos </strong> –
                    Usa detergente y alcohol en un frasco dispensador. Recuerda
                    que el virus puede vivir durante varias horas en la
                    superficie de tu calzado.
                  </li>
                  <li>
                    <strong>
                      Mantente informado sobre las medidas que tomen los entes
                      gubernamentales
                    </strong>{" "}
                    – Funcionarios y profesionales de la salud pública están
                    informando de forma constante sobre las nuevas acciones a
                    seguir, que varían según la mutación del virus y estado de
                    la pandemia.
                  </li>
                  <li>
                    <strong>Cesto de basura dedicado</strong> – Si es posible,
                    dedica un cesto de basura forrado para la persona enferma.
                    Utiliza guantes al retirar las bolsas de basura y en la
                    manipulación de los desechos.
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-sm-10 col-md-8 col-lg-4">
              <img src={steps} className="mb-2 mb-sm-0" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
