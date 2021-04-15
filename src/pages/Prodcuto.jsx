import React from "react";
import ReactImageMagnify from "react-image-magnify";
import Axios from "axios";
import { connect } from "react-redux";
import "./styles/Producto.css";

import envios from "../images/envios.png";
import devoluciones from "../images/devoluciones.png";
import ayuda from "../images/ayuda.png";
import Whatsapp from "../images/Whatsapp__right.png";
import Tallas from "../images/Medidas_Tallas.png";
import ex from "../images/X.png";

class Producto extends React.Component {
  constructor(props) {
    super(props);
    const { parameter2 } = this.props.match.params;
    this.state = {
      Img: "",
      Producto: parameter2,
      Producto_info: {
        Id: "",
        Nombre: "",
        Precio: "",
        Detalles: "",
        Img_1: "",
        Img_2: "",
        Img_3: "",
      },
      descripcion: true,
      detalles: false,
      envios: false,
      Over: "beside",
      backend: "https://izzata.herokuapp.com",
      selectedColor: "",
      selectedColor_S: true,
      selectedColor_M: true,
      selectedColor_L: true,
      selectedSize: "",
      Color_1_Border: "solid rgb(160, 160, 160) 1px",
      Color_2_Border: "solid rgb(160, 160, 160) 1px",
      Color_3_Border: "solid rgb(160, 160, 160) 1px",
      Color_4_Border: "solid rgb(160, 160, 160) 1px",
      Color_5_Border: "solid rgb(160, 160, 160) 1px",
      S_Border: "solid rgb(160, 160, 160) 1px",
      M_Border: "solid rgb(160, 160, 160) 1px",
      L_Border: "solid rgb(160, 160, 160) 1px",
      Añadir_Pointer: "default",
    };
  }

  componentDidMount = (e) => {
    this.handleTallas(0);
    Axios.get(this.state.backend + "/look", {
      params: {
        ID: this.state.Producto,
      },
    }).then((response) => {
      let lookProduct = response.data;
      this.setState({
        Producto_info: {
          Id: response.data[0].client_ID,
          Nombre: response.data[0].nombre,
          Precio: response.data[0].precio,
          Detalles: response.data[0].detalles,
          Img_1: this.state.backend + "/" + response.data[0].img_1,
          Img_2: this.state.backend + "/" + response.data[0].img_2,
          Img_3: this.state.backend + "/" + response.data[0].img_3,
          Img_4: this.state.backend + "/" + response.data[0].img_4,
          Img_5: this.state.backend + "/" + response.data[0].img_5,
          Color_1:
            lookProduct[0].color_1 != null
              ? lookProduct[0].color_1.split(",", 4)[0]
              : null,
          Color_2:
            lookProduct[0].color_2 != null
              ? lookProduct[0].color_2.split(",", 4)[0]
              : null,
          Color_3:
            lookProduct[0].color_3 != null
              ? lookProduct[0].color_3.split(",", 4)[0]
              : null,
          Color_4:
            lookProduct[0].color_4 != null
              ? lookProduct[0].color_4.split(",", 4)[0]
              : null,
          Color_5:
            lookProduct[0].color_5 != null
              ? lookProduct[0].color_5.split(",", 4)[0]
              : null,
          Color_1_S:
            lookProduct[0].color_1 != null
              ? lookProduct[0].color_1.split(",", 4)[1] === "1"
                ? true
                : false
              : null,
          Color_1_M:
            lookProduct[0].color_1 != null
              ? lookProduct[0].color_1.split(",", 4)[2] === "1"
                ? true
                : false
              : null,
          Color_1_L:
            lookProduct[0].color_1 != null
              ? lookProduct[0].color_1.split(",", 4)[3] === "1"
                ? true
                : false
              : null,
          Color_2_S:
            lookProduct[0].color_2 != null
              ? lookProduct[0].color_2.split(",", 4)[1] === "1"
                ? true
                : false
              : null,
          Color_2_M:
            lookProduct[0].color_2 != null
              ? lookProduct[0].color_2.split(",", 4)[2] === "1"
                ? true
                : false
              : null,
          Color_2_L:
            lookProduct[0].color_2 != null
              ? lookProduct[0].color_2.split(",", 4)[3] === "1"
                ? true
                : false
              : null,
          Color_3_S:
            lookProduct[0].color_3 != null
              ? lookProduct[0].color_3.split(",", 4)[1] === "1"
                ? true
                : false
              : null,
          Color_3_M:
            lookProduct[0].color_3 != null
              ? lookProduct[0].color_3.split(",", 4)[2] === "1"
                ? true
                : false
              : null,
          Color_3_L:
            lookProduct[0].color_3 != null
              ? lookProduct[0].color_3.split(",", 4)[3] === "1"
                ? true
                : false
              : null,
          Color_4_S:
            lookProduct[0].color_4 != null
              ? lookProduct[0].color_4.split(",", 4)[1] === "1"
                ? true
                : false
              : null,
          Color_4_M:
            lookProduct[0].color_4 != null
              ? lookProduct[0].color_4.split(",", 4)[2] === "1"
                ? true
                : false
              : null,
          Color_4_L:
            lookProduct[0].color_4 != null
              ? lookProduct[0].color_4.split(",", 4)[3] === "1"
                ? true
                : false
              : null,
          Color_5_S:
            lookProduct[0].color_5 != null
              ? lookProduct[0].color_5.split(",", 4)[1] === "1"
                ? true
                : false
              : null,
          Color_5_M:
            lookProduct[0].color_5 != null
              ? lookProduct[0].color_5.split(",", 4)[2] === "1"
                ? true
                : false
              : null,
          Color_5_L:
            lookProduct[0].color_5 != null
              ? lookProduct[0].color_5.split(",", 4)[3] === "1"
                ? true
                : false
              : null,
        },
      });
      this.setState({
        Img: this.state.Producto_info.Img_1,
        Info_Abajo: this.state.Producto_info.Detalles,
      });
    });
    const { innerWidth: width } = window;
    if (width < 600) {
      this.setState({
        Over: "over",
      });
    } else {
      this.setState({
        Over: "beside",
      });
    }
  };

  handleImg = (img) => {
    this.setState({ Img: img });
  };

  handleInfo = (info) => {
    switch (info) {
      case "descripción":
        this.setState({ descripcion: true, detalles: false, envios: false });
        break;
      case "detalles":
        this.setState({ descripcion: false, detalles: true, envios: false });
        break;
      case "envios":
        this.setState({ descripcion: false, detalles: false, envios: true });
        break;
      default:
        console.log("");
        break;
    }
  };

  handleSubmit = () => {
    this.setState({
      selectedColor: "",
      selectedSize: "",
      S_Border: "solid rgb(160, 160, 160) 1px",
      M_Border: "solid rgb(160, 160, 160) 1px",
      L_Border: "solid rgb(160, 160, 160) 1px",
      Color_1_Border: "solid rgb(160, 160, 160) 1px",
      Color_2_Border: "solid rgb(160, 160, 160) 1px",
      Color_3_Border: "solid rgb(160, 160, 160) 1px",
      Color_4_Border: "solid rgb(160, 160, 160) 1px",
      Color_5_Border: "solid rgb(160, 160, 160) 1px",
      Añadir_Pointer: "default",
    });
    this.handleSidebarCart();
  };

  handleColor = (color) => {
    this.setState({
      selectedColor: color,
      selectedSize: "",
      S_Border: "solid rgb(160, 160, 160) 1px",
      M_Border: "solid rgb(160, 160, 160) 1px",
      L_Border: "solid rgb(160, 160, 160) 1px",
      Añadir_Pointer: "default",
    });
    if (color === this.state.Producto_info.Color_1) {
      this.setState({
        Color_1_Border: "solid rgb(0, 0, 0) 1px",
        Color_2_Border: "solid rgb(160, 160, 160) 1px",
        Color_3_Border: "solid rgb(160, 160, 160) 1px",
        Color_4_Border: "solid rgb(160, 160, 160) 1px",
        Color_5_Border: "solid rgb(160, 160, 160) 1px",
        selectedColor_S: this.state.Producto_info.Color_1_S,
        selectedColor_M: this.state.Producto_info.Color_1_M,
        selectedColor_L: this.state.Producto_info.Color_1_L,
      });
      this.handleImg(this.state.Producto_info.Img_1);
    }
    if (color === this.state.Producto_info.Color_2) {
      this.setState({
        Color_1_Border: "solid rgb(160, 160, 160) 1px",
        Color_2_Border: "solid rgb(0, 0, 0) 1px",
        Color_3_Border: "solid rgb(160, 160, 160) 1px",
        Color_4_Border: "solid rgb(160, 160, 160) 1px",
        Color_5_Border: "solid rgb(160, 160, 160) 1px",
        selectedColor_S: this.state.Producto_info.Color_2_S,
        selectedColor_M: this.state.Producto_info.Color_2_M,
        selectedColor_L: this.state.Producto_info.Color_2_L,
      });
      this.handleImg(this.state.Producto_info.Img_2);
    }
    if (color === this.state.Producto_info.Color_3) {
      this.setState({
        Color_1_Border: "solid rgb(160, 160, 160) 1px",
        Color_2_Border: "solid rgb(160, 160, 160) 1px",
        Color_3_Border: "solid rgb(0, 0, 0) 1px",
        Color_4_Border: "solid rgb(160, 160, 160) 1px",
        Color_5_Border: "solid rgb(160, 160, 160) 1px",
        selectedColor_S: this.state.Producto_info.Color_3_S,
        selectedColor_M: this.state.Producto_info.Color_3_M,
        selectedColor_L: this.state.Producto_info.Color_3_L,
      });
      this.handleImg(this.state.Producto_info.Img_3);
    }
    if (color === this.state.Producto_info.Color_4) {
      this.setState({
        Color_1_Border: "solid rgb(160, 160, 160) 1px",
        Color_2_Border: "solid rgb(160, 160, 160) 1px",
        Color_3_Border: "solid rgb(160, 160, 160) 1px",
        Color_4_Border: "solid rgb(0, 0, 0) 1px",
        Color_5_Border: "solid rgb(160, 160, 160) 1px",
        selectedColor_S: this.state.Producto_info.Color_4_S,
        selectedColor_M: this.state.Producto_info.Color_4_M,
        selectedColor_L: this.state.Producto_info.Color_4_L,
      });
      this.handleImg(this.state.Producto_info.Img_4);
    }
    if (color === this.state.Producto_info.Color_5) {
      this.setState({
        Color_1_Border: "solid rgb(160, 160, 160) 1px",
        Color_2_Border: "solid rgb(160, 160, 160) 1px",
        Color_3_Border: "solid rgb(160, 160, 160) 1px",
        Color_4_Border: "solid rgb(160, 160, 160) 1px",
        Color_5_Border: "solid rgb(0, 0, 0) 1px",
        selectedColor_S: this.state.Producto_info.Color_5_S,
        selectedColor_M: this.state.Producto_info.Color_5_M,
        selectedColor_L: this.state.Producto_info.Color_5_L,
      });
      this.handleImg(this.state.Producto_info.Img_5);
    }
  };

  handleSize = (size) => {
    this.setState({ selectedSize: size });
    if (size === "S") {
      this.setState({
        S_Border: "solid rgb(0, 0, 0) 1px",
        M_Border: "solid rgb(160, 160, 160) 1px",
        L_Border: "solid rgb(160, 160, 160) 1px",
        Añadir_Pointer: "pointer",
      });
    }
    if (size === "M") {
      this.setState({
        S_Border: "solid rgb(160, 160, 160) 1px",
        M_Border: "solid rgb(0, 0, 0) 1px",
        L_Border: "solid rgb(160, 160, 160) 1px",
        Añadir_Pointer: "pointer",
      });
    }
    if (size === "L") {
      this.setState({
        S_Border: "solid rgb(160, 160, 160) 1px",
        M_Border: "solid rgb(160, 160, 160) 1px",
        L_Border: "solid rgb(0, 0, 0) 1px",
        Añadir_Pointer: "pointer",
      });
    }
  };

  handleSidebarCart = (e) => {
    document.getElementById("Navbar__side__cart").style.width = "300px";
  };

  handleTallas = (number) => {
    if (number === 1) {
      document.getElementById("Producto__tallas__outter").style.display =
        "block";
    } else {
      document.getElementById("Producto__tallas__outter").style.display =
        "none";
    }
  };

  render() {
    return (
      <React.Fragment>
        <a href="https://wa.me/message/5T4PIJLRMEKXA1">
          <img src={Whatsapp} alt="Whatsapp" className="fixedbutton" />
        </a>
        <div className="Producto__tallas__outter" id="Producto__tallas__outter">
          <div className="Producto__tallas__inner">
            <img src={Tallas} alt="Tallas" className="Producto__tallas__img" />
            <img
              src={ex}
              alt="Tallas"
              className="Producto__tallas__x"
              onClick={() => this.handleTallas(0)}
            />
          </div>
        </div>
        <div className="Blank__Space"></div>
        <div>
          <div className="Producto__outter__outter">
            <div className="Proucto__outter">
              <div className="Procuto__zoom">
                <div className="Producto__zoom__images">
                  {this.state.Producto_info.Img_1 !==
                  this.state.backend + "/null" ? (
                    <img
                      className="Producto__zoom__img"
                      src={this.state.Producto_info.Img_1}
                      alt="img1"
                      onClick={() =>
                        this.handleImg(this.state.Producto_info.Img_1)
                      }
                    />
                  ) : (
                    <div></div>
                  )}
                  {this.state.Producto_info.Img_2 !==
                  this.state.backend + "/null" ? (
                    <img
                      className="Producto__zoom__img"
                      src={this.state.Producto_info.Img_2}
                      alt="img1"
                      onClick={() =>
                        this.handleImg(this.state.Producto_info.Img_2)
                      }
                    />
                  ) : (
                    <div></div>
                  )}
                  {this.state.Producto_info.Img_3 !==
                  this.state.backend + "/null" ? (
                    <img
                      className="Producto__zoom__img"
                      src={this.state.Producto_info.Img_3}
                      alt="img1"
                      onClick={() =>
                        this.handleImg(this.state.Producto_info.Img_3)
                      }
                    />
                  ) : (
                    <div></div>
                  )}
                  {this.state.Producto_info.Img_4 !==
                  this.state.backend + "/null" ? (
                    <img
                      className="Producto__zoom__img"
                      src={this.state.Producto_info.Img_4}
                      alt="img1"
                      onClick={() =>
                        this.handleImg(this.state.Producto_info.Img_4)
                      }
                    />
                  ) : (
                    <div></div>
                  )}
                  {this.state.Producto_info.Img_5 !==
                  this.state.backend + "/null" ? (
                    <img
                      className="Producto__zoom__img"
                      src={this.state.Producto_info.Img_5}
                      alt="img1"
                      onClick={() =>
                        this.handleImg(this.state.Producto_info.Img_5)
                      }
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="Producto__reactmagnify">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Prenda Izzata",
                        isFluidWidth: true,
                        src: this.state.Img,
                      },
                      largeImage: {
                        src: this.state.Img,
                        width: 1200,
                        height: 1800,
                      },
                      enlargedImagePosition: this.state.Over,
                    }}
                  />
                </div>
              </div>
              <div className="Producto__info">
                <div className="Producto__info__inner">
                  <div className="Producto__nombre">
                    {this.state.Producto_info.Nombre}
                  </div>
                  <div className="Producto__referencia">
                    ref: {this.state.Producto_info.Id}
                  </div>
                  <div className="Producto__precio">
                    $ &nbsp;{" "}
                    {this.state.Producto_info.Precio.toString().slice(-6, -3) +
                      "." +
                      this.state.Producto_info.Precio.toString().slice(-3)}
                  </div>
                  <div className="Producto__color">
                    COLOR
                    <br />
                    <div className="Producto__colores__outter">
                      <div className="Producto__colores">
                        <div
                          className="Producto__color__div"
                          style={{
                            background: this.state.Producto_info.Color_1,
                            border: this.state.Color_1_Border,
                          }}
                          onClick={() =>
                            this.handleColor(this.state.Producto_info.Color_1)
                          }
                        ></div>
                        {this.state.Producto_info.Color_2 != null ? (
                          <div
                            className="Producto__color__div"
                            style={{
                              background: this.state.Producto_info.Color_2,
                              border: this.state.Color_2_Border,
                            }}
                            onClick={() =>
                              this.handleColor(this.state.Producto_info.Color_2)
                            }
                          ></div>
                        ) : (
                          ""
                        )}
                        {this.state.Producto_info.Color_3 != null ? (
                          <div
                            className="Producto__color__div"
                            style={{
                              background: this.state.Producto_info.Color_3,
                              border: this.state.Color_3_Border,
                            }}
                            onClick={() =>
                              this.handleColor(this.state.Producto_info.Color_3)
                            }
                          ></div>
                        ) : (
                          ""
                        )}
                        {this.state.Producto_info.Color_4 != null ? (
                          <div
                            className="Producto__color__div"
                            style={{
                              background: this.state.Producto_info.Color_4,
                              border: this.state.Color_4_Border,
                            }}
                            onClick={() =>
                              this.handleColor(this.state.Producto_info.Color_4)
                            }
                          ></div>
                        ) : (
                          ""
                        )}
                        {this.state.Producto_info.Color_5 != null ? (
                          <div
                            className="Producto__color__div"
                            style={{
                              background: this.state.Producto_info.Color_5,
                              border: this.state.Color_5_Border,
                            }}
                            onClick={() =>
                              this.handleColor(this.state.Producto_info.Color_5)
                            }
                          ></div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="Producto__talla">
                    TALLA
                    <br />
                    <div className="Producto__colores__outter">
                      <div className="Producto__colores">
                        {this.state.selectedColor_S === true ? (
                          <div
                            className="Producto__talla__div"
                            style={{
                              border: this.state.S_Border,
                            }}
                            onClick={() => this.handleSize("S")}
                          >
                            <div className="Producto__talla__div__inner">S</div>
                          </div>
                        ) : (
                          ""
                        )}
                        {this.state.selectedColor_M === true ? (
                          <div
                            className="Producto__talla__div"
                            style={{
                              border: this.state.M_Border,
                            }}
                            onClick={() => this.handleSize("M")}
                          >
                            <div className="Producto__talla__div__inner">M</div>
                          </div>
                        ) : (
                          ""
                        )}
                        {this.state.selectedColor_L === true ? (
                          <div
                            className="Producto__talla__div"
                            style={{
                              border: this.state.L_Border,
                            }}
                            onClick={() => this.handleSize("L")}
                          >
                            <div className="Producto__talla__div__inner">L</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => this.handleTallas(1)}
                    >
                      {" "}
                      Ver guía de tallas{" "}
                    </div>
                  </div>
                  <div
                    className="Producto__colores"
                    style={{ cursor: this.state.Añadir_Pointer }}
                    onClick={() => {
                      this.props.agregarProducto({
                        nombre: this.state.Producto_info.Nombre,
                        imagen: this.state.Img,
                        precio: this.state.Producto_info.Precio,
                        color: this.state.selectedColor,
                        talla: this.state.selectedSize,
                      });
                      if (this.state.selectedColor !== "") {
                        if (this.state.selectedSize !== "") {
                          this.handleSubmit();
                        }
                      }
                    }}
                  >
                    <div className="Producto__añadir">
                      <div className="Producto__añadir__inner">
                        {this.state.selectedColor === ""
                          ? "SELECCIONA UN COLOR"
                          : this.state.selectedSize === ""
                          ? "SELECCIONA UNA TALLA"
                          : "AÑADIR A MI BOLSA DE COMPRAS"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Blank__Space"></div>

        <div className="Producto__info__abajo">
          <div className="Producto__info__abajo__inner">
            <div className="Producto__info__abajo__menu">
              <div style={{ height: "100%" }}>
                <button
                  id="descripcion"
                  className="Producto__button"
                  autoFocus
                  onClick={() => this.handleInfo("descripción")}
                >
                  DESCRIPCIÓN
                </button>
              </div>

              <div style={{ height: "100%" }}>
                <button
                  className="Producto__button"
                  onClick={() => this.handleInfo("detalles")}
                >
                  DETALLES
                </button>
              </div>
              <div style={{ height: "100%" }}>
                <button
                  className="Producto__button"
                  onClick={() => this.handleInfo("envios")}
                >
                  ENVÍO
                </button>
              </div>
            </div>
            <div className="Producto__info__abajo__info">
              {this.state.descripcion === true ? (
                <div> {this.state.Producto_info.Detalles} </div>
              ) : (
                ""
              )}
              {this.state.detalles === true ? (
                <div>
                  {" "}
                  El lavado puede cambiar su apariencia. <br /> Lavar a mano.{" "}
                  <br /> No dejar en remojo. <br /> No planchar. No retorcer.{" "}
                  <br /> Secar en superficie plana. <br /> Secar a la sombra.{" "}
                  <br /> No utilizar blanqueador{" "}
                </div>
              ) : (
                ""
              )}
              {this.state.envios === true ? (
                <div>
                  {" "}
                  Los pedidos en el Área Metropolitana de Medellín son
                  entregados a la empresa Gopick una vez se confirme tu pago y
                  este tardara un día hábil en ser entregada en la dirección
                  proporcionada.
                  <br />
                  <br />
                  A nivel nacional, los pedidos son entregados a la
                  transportadora un día hábil después de confirmado tu pago,
                  entregando en la mayoría los municipios de Colombia utilizando
                  el servicio de envío de Interrapidisimo. Los tiempos de
                  entrega varían de acuerdo con tu ubicación, al estado del
                  clima y las carreteras y son los siguientes:
                  <br />
                  <br /> Ciudades principales de 24 horas
                  <br />
                  <br /> Ciudades secundarias de 48 horas
                  <br />
                  <br /> Municipios pequeños de 72 horas <br />
                  <br />
                  Una vez que tu pedido ha sido enviado, recibirás un correo
                  electrónico informándote que ya ha sido entregado a la
                  transportadora y el número de guía de tu despacho. Los tiempos
                  de entrega pueden variar dependiendo de las novedades de la
                  transportadora. Para el seguimiento de tu pedido lo primero
                  que debes hacer es ingresar a tu cuenta y consultar el estado
                  de tu pedido o consultar directamente en la página de la
                  transportadora https://www.interrapidisimo.com/sigue-tu-envio/
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="Blank__Space"></div>
        <div className="Blank__Space"></div>
        <div className="Producto__advertencias">
          <div className="Producto__advertencias__inner">
            <div className="Producto__advertencias__inner__item">
              <div>
                <img src={envios} alt="envios" className="Producto__img" />
              </div>{" "}
              <div className="Producto__advertencias__inner__item__info">
                Envíos <br />
                <div className="Producto__advertencias__inner__item__info__info">
                  {" "}
                  Enviós gratis por compras iguales o superiores a $ 100.000
                </div>
              </div>
            </div>
            <div className="Producto__advertencias__inner__item">
              <div>
                <img
                  src={devoluciones}
                  alt="envios"
                  className="Producto__img"
                />
              </div>{" "}
              <div className="Producto__advertencias__inner__item__info">
                Devoluciones <br />
                <div className="Producto__advertencias__inner__item__info__info">
                  {" "}
                  Si presentas algún inconveniente con tus pedidos puedes
                  devolverlo sin costo
                </div>
              </div>
            </div>
            <div className="Producto__advertencias__inner__item1">
              <div>
                <img src={ayuda} alt="envios" className="Producto__img" />
              </div>{" "}
              <div className="Producto__advertencias__inner__item__info">
                Ayuda <br />
                <div className="Producto__advertencias__inner__item__info__info">
                  {" "}
                  Contamos con una línea unica de servicio al cliente 3225959683
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Blank__Space"></div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  productos: state.productos,
});

const mapDispatchToProps = (dispatch) => ({
  agregarProducto(producto) {
    dispatch({
      type: "AGREGAR_PRODUCTO",
      producto,
    });
  },
  elminarProducto(id) {
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Producto);
