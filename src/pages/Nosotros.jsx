import React from "react";
import "./styles/Nosotros.css";
import Logo from "../images/Logo-05.png";
import Whatsapp from "../images/Whatsapp__right.png";

class Nosotros extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a href="https://wa.me/message/5T4PIJLRMEKXA1">
          <img src={Whatsapp} alt="Whatsapp" className="fixedbutton" />
        </a>
        <div className="Blank__Space"></div>
        <div className="Nosotros__outer">
          <div className="Nosotros__inner">
            <div className="Nosotros__inner__inner__logo">
              <div id="circle-shape-example">
                <img
                  src={Logo}
                  alt="A photograph of sliced kiwifruit on a while plate"
                  class="curve"
                />
                En Grupo Veja S.A.S desde 2020 diseñamos, producimos y
                comercializamos ropa para mujer a través de la marca: Izzata.
                Comercializamos nuestros productos a través de diferentes
                canales como: Tienda Online, distribuidores especializados,
                boutiques y tiendas por departamento. Contamos con plantas
                satélite de producción, estos están conformados, en su mayoría,
                por madres cabeza de familia. Nuestra propuesta de valor: crear
                diseños exclusivos y vanguardistas, elaborados con materiales de
                altísima calidad ofreciendo siempre un excelente servicio al
                cliente.
                <br />
                <br />
                <b>Misión:</b> Somos diseñadores, productores y
                comercializadores de una marca de moda, donde la innovación,
                creatividad y calidad superior siempre se ven reflejadas en el
                desarrollo de nuestros productos, buscando satisfacer las
                expectativas de nuestros clientes. Promovemos modelos de negocio
                y/o alianzas estratégicas en mercados internacionales, buscando
                el crecimiento a través de la expansión y la consolidación de
                nuestras marcas. Incentivamos permanentemente la mejora en todos
                los procesos y motivamos un buen ambiente laboral donde el
                comportamiento corporativo ejemplar genere el desarrollo
                integral de la organización, el bienestar del talento humano y
                de todos los públicos relacionados para lograr siempre un
                crecimiento rentable y sostenible que contribuya al desarrollo
                social del país
                <br />
                <br />
                <b>Visión:</b> Seremos reconocidos como una empresa vanguardista
                en el diseño, producción y comercialización de productos de
                moda, posicionando nuestra marca como referentes en los mercados
                atendidos y nos convertiremos en la primera opción de compra del
                cliente en el portafolio de productos que ofrecemos.
              </div>
            </div>
          </div>
        </div>
        <div className="Blank__Space"></div>
      </React.Fragment>
    );
  }
}

export default Nosotros;
