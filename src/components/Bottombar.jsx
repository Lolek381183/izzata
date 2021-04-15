import React from "react";

import "./styles/Bottombar.css";
import Whatsapp from "../images/Whatsapp.png";
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import Bottom_Logo from "../images/Logo_bottombar.png";
import Pago from "../images/Formas_Pago.png";
import Pago1 from "../images//Formas_Pago_1.png";
import Pago2 from "../images//Formas_Pago_2.png";
import Pago3 from "../images//Formas_Pago_3.png";
import Pago4 from "../images//Formas_Pago_4.png";

class Bottombar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Bottombar__Container">
          <div className="Bottombar__Container__Inner">
            <div>
              {" "}
              <img src={Bottom_Logo} alt="Whastapp" className="Bottom__Logo" />
            </div>
            <div className="Bottombar__Container__Inner__Inner">
              <div className="Bottombar__Container__Inner__Minimal">
                <div>
                  <a href="https://wa.me/message/5T4PIJLRMEKXA1">
                    <img
                      src={Whatsapp}
                      alt="Whastapp"
                      className="Media__Icon"
                    />
                  </a>
                </div>
                <div className="Bottombar__Container__Inner__Minimal__Text__1">
                  <a href="https://wa.me/message/5T4PIJLRMEKXA1">3225959683</a>
                </div>
              </div>
              <div className="Bottombar__Container__Inner__Minimal">
                <div>
                  <a href="https://www.facebook.com/Izzata.co">
                    <img
                      src={Facebook}
                      alt="Facebook"
                      className="Media__Icon"
                    />
                  </a>
                </div>
                <div className="Bottombar__Container__Inner__Minimal__Text__2">
                  <a href="https://www.facebook.com/Izzata.co">@Izzata.co</a>
                </div>
              </div>
              <div className="Bottombar__Container__Inner__Minimal">
                <div>
                  <a href="https://instagram.com/izzata.co?igshid=v90dlx76ia7s">
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="Media__Icon"
                    />
                  </a>
                </div>
                <div className="Bottombar__Container__Inner__Minimal__Text__3">
                  <a href="https://instagram.com/izzata.co?igshid=v90dlx76ia7s">
                    @Izzata.co
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="https://wompi.co/">
            <div className="Bottombar__pagos">
              <div className="Bottombar__pagos__images">
                <img
                  src={Pago}
                  alt="Formas de pago"
                  className="Bottombar__pagos__img"
                />{" "}
                <img
                  src={Pago1}
                  alt="Formas de pago"
                  className="Bottombar__pagos__img"
                />
                <img
                  src={Pago2}
                  alt="Formas de pago"
                  className="Bottombar__pagos__img"
                />
                <img
                  src={Pago3}
                  alt="Formas de pago"
                  className="Bottombar__pagos__img"
                />
                <img
                  src={Pago4}
                  alt="Formas de pago"
                  className="Bottombar__pagos__img"
                />
              </div>
              <div className="Bottombar__pagos__text">
                RECIBIMOS TODAS LAS TARJETAS Y CONTAMOS CON DIFERENTES FORMAS DE
                PAGO
              </div>
            </div>
          </a>
        </div>

        <div className="Bottombar__Derechos">
          <div className="Bottombar__Derechos__Inner">
            {" "}
            <p> TODOS LOS DERECHOS RESERVADOS IZZATA&#174; 2021. </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bottombar;
