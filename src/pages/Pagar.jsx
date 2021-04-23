import React from "react";
import "./styles/Pagar.css";
import { connect } from "react-redux";
import Axios from "axios";

import Whatsapp from "../images/Whatsapp__right.png";

class Pagar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        Nombre: "",
        Apellido: "",
        Email: "",
        Telefono: "",
        Direccion: "",
        Documento: "",
        Departamento: "",
        Municipio: "",
      },
      Codigo: "",
      Codigos: { descuento: "0" },
      Mensaje: "",
      backend: "https://backend.izzata.co",
      Subtotal: this.props.suma,
      Envio: "0",
      fecha: new Date(),
    };
  }
  lookProduct = (e) => {
    Axios.get(this.state.backend + "/codigo", {
      params: {
        Codigo: this.state.Codigo,
      },
    }).then((response) => {
      if (response.data[0] !== undefined) {
        this.setState({
          Codigos: response.data[0],
          Mensaje: "Codigo válido!",
        });
      } else {
        this.setState({
          Codigos: { descuento: "0" },
          Mensaje: "Codigo inválido!",
        });
      }
    });
  };

  handleCodeChange = (e) => {
    this.setState({
      Codigo: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
    if (e.target.name === "Municipio") {
      if (
        e.target.value === "Envigado" ||
        e.target.value === "Bello" ||
        e.target.value === "Itagui" ||
        e.target.value === "Medellín" ||
        e.target.value === "Sabaneta"
      ) {
        this.setState({
          Envio: "7000",
        });
      } else {
        this.setState({
          Envio: "9800",
        });
      }
    }
    if (this.props.suma > 99900) {
      this.setState({
        Envio: "0",
      });
    }
  };

  addProduct = (e) => {
    if (
      this.state.form.Nombre !== "" &&
      this.state.form.Apellido !== "" &&
      this.state.form.Email !== "" &&
      this.state.form.Telefono !== "" &&
      this.state.form.Direccion !== "" &&
      this.state.form.Documento !== "" &&
      this.state.form.Departamento !== "" &&
      this.state.form.Municipio !== ""
    ) {
      this.setState({
        Mensaje1: "",
      });
      console.log(this.props.productos);
      Axios.post(this.state.backend + "/email", {
        Apellido: this.state.form.Apellido,
        Nombre: this.state.form.Nombre,
        Email: this.state.form.Email,
        Telefono: this.state.form.Telefono,
        Direccion: this.state.form.Direccion,
        Documento: this.state.form.Documento,
        Departamento: this.state.form.Departamento,
        Municipio: this.state.form.Municipio,
        Precio:
          this.props.suma +
          Number(this.state.Envio) -
          this.props.suma * Number(this.state.Codigos.descuento),
        Codigo: this.state.Codigo,
        Referencia:
          this.state.form.Nombre.slice(0, 1) +
          this.state.form.Apellido.slice(0, 1) +
          this.state.fecha.getFullYear().toString() +
          this.state.fecha.getDay().toString() +
          this.state.fecha.getDate().toString() +
          this.state.fecha.getHours().toString() +
          this.state.fecha.getMinutes().toString() +
          this.state.fecha.getSeconds().toString() +
          this.state.fecha.getMilliseconds().toString(),
        Productos: this.props.productos.map(
          (j) => j.nombre + "-" + j.talla + "-" + j.color
        ),
      }).then((response) => {
        console.log(response);
        this.handlePay();
      });
    } else {
      this.setState({
        Mensaje1: "Campos faltantes",
      });
    }
  };

  addProduct1 = (e) => {
    if (
      this.state.form.Nombre !== "" &&
      this.state.form.Apellido !== "" &&
      this.state.form.Email !== "" &&
      this.state.form.Telefono !== "" &&
      this.state.form.Direccion !== "" &&
      this.state.form.Documento !== "" &&
      this.state.form.Departamento !== "" &&
      this.state.form.Municipio !== ""
    ) {
      this.setState({
        Mensaje1: "",
      });
      console.log(this.props.productos);
      Axios.post(this.state.backend + "/email", {
        Apellido: this.state.form.Apellido,
        Nombre: this.state.form.Nombre,
        Email: this.state.form.Email,
        Telefono: this.state.form.Telefono,
        Direccion: this.state.form.Direccion,
        Documento: this.state.form.Documento,
        Departamento: this.state.form.Departamento,
        Municipio: this.state.form.Municipio,
        Precio:
          this.props.suma +
          Number(this.state.Envio) -
          this.props.suma * Number(this.state.Codigos.descuento),
        Codigo: this.state.Codigo,
        Referencia:
          this.state.form.Nombre.slice(0, 1) +
          this.state.form.Apellido.slice(0, 1) +
          this.state.fecha.getFullYear().toString() +
          this.state.fecha.getDay().toString() +
          this.state.fecha.getDate().toString() +
          this.state.fecha.getHours().toString() +
          this.state.fecha.getMinutes().toString() +
          this.state.fecha.getSeconds().toString() +
          this.state.fecha.getMilliseconds().toString(),
        Productos: this.props.productos.map(
          (j) => j.nombre + "-" + j.talla + "-" + j.color
        ),
      }).then((response) => {
        console.log(response);
        this.handlePay1();
      });
    } else {
      this.setState({
        Mensaje1: "Campos faltantes",
      });
    }
  };

  handlePay = () => {
    this.setState({
      Mensaje1: "",
    });
    var win = window.open(
      "https://checkout.wompi.co/p/?public-key=pub_prod_CdeQGWy0j7HYxnaNX3Dg4HtyiT7N67at&currency=COP&amount-in-cents=" +
        (
          (this.props.suma +
            Number(this.state.Envio) -
            this.props.suma * Number(this.state.Codigos.descuento)) *
          100
        ).toString() +
        "&reference=" +
        this.state.form.Nombre.slice(0, 1) +
        this.state.form.Apellido.slice(0, 1) +
        this.state.fecha.getFullYear().toString() +
        this.state.fecha.getDay().toString() +
        this.state.fecha.getDate().toString() +
        this.state.fecha.getHours().toString() +
        this.state.fecha.getMinutes().toString() +
        this.state.fecha.getSeconds().toString() +
        this.state.fecha.getMilliseconds().toString() +
        "&redirectUrl=https%3A%2F%2Ftransaction-redirect.wompi.co%2Fcheck",
      "_self"
    );
    win.focus();
  };

  handlePay1 = () => {
    this.setState({
      Mensaje1: "",
    });
    var win = window.open(
      "https://api.whatsapp.com/send?phone=573205872130&text=Hola!%20Quiero%20continuar%20mi%20pedido%20contigo%20numero%20" +
        this.state.form.Nombre.slice(0, 1) +
        this.state.form.Apellido.slice(0, 1) +
        this.state.fecha.getFullYear().toString() +
        this.state.fecha.getDay().toString() +
        this.state.fecha.getDate().toString() +
        this.state.fecha.getHours().toString() +
        this.state.fecha.getMinutes().toString() +
        this.state.fecha.getSeconds().toString() +
        this.state.fecha.getMilliseconds().toString(),
      "_self"
    );
    win.focus();
  };

  render() {
    return (
      <React.Fragment>
        <a href="https://wa.me/message/5T4PIJLRMEKXA1">
          <img src={Whatsapp} alt="Whatsapp" className="fixedbutton" />
        </a>

        <div className="Blank__Space"> </div>
        <div className="Pagar__outter">
          <div className="Pagar__inner">
            <div className="Pagar__total">
              <div className="Pagar__info__titulo">
                <div className="Pagar__info__titulo__inner">
                  DATOS DE LA COMPRA
                </div>
              </div>
              <div className="Blank__Space"> </div>
              <div className="Pagar__total__inner">
                <span> CUPÓN DE DESCUENTO</span>
                <div className="Pagar__total__cupon">
                  <input
                    onChange={this.handleCodeChange}
                    className="form-control"
                    type="text"
                    name="Cupon_Descuento"
                  />
                  <div
                    className="Pagar__total__agregar"
                    onClick={this.lookProduct}
                  >
                    <div className="Pagar__total__agregar__inner">
                      <div className="Pagar__total__agregar__inner__inner">
                        AGREGAR
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Pagar__total__codigo">
                  <span> {this.state.Mensaje}</span>
                </div>
              </div>
              <div className="Blank__Space"> </div>
              <div className="Pagar__total__ubicacion">
                <span>DEPARTAMENTO</span>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="Departamento"
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="Amazonas">Amazonas</option>
                  <option value="Antioquia">Antioquia</option>
                  <option value="Arauca">Arauca</option>
                  <option value="Atlántico">Atlántico</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Boyacá">Boyacá</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Caquetá">Caquetá</option>
                  <option value="Casanare">Casanare</option>
                  <option value="Cauca">Cauca</option>
                  <option value="Cesar">Cesar</option>
                  <option value="Chocó">Chocó</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Guainía">Guainía</option>
                  <option value="Guaviare">Guaviare</option>
                  <option value="Huila">Huila</option>
                  <option value="La Guajira">La Guajira</option>
                  <option value="Magdalena">Magdalena</option>
                  <option value="Meta">Meta</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Norte de Santander">Norte de Santander</option>
                  <option value="Putumayo">Putumayo</option>
                  <option value="Quindío">Quindío</option>
                  <option value="Risaralda">Risaralda</option>
                  <option value="San Andrés y Providencia">
                    San Andrés y Providencia
                  </option>
                  <option value="Santander">Santander</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Tolima">Tolima</option>
                  <option value="Valle del Cauca">Valle del Cauca</option>
                  <option value="Vaupés">Vaupés</option>
                  <option value="Vichada">Vichada</option>
                </select>
                <span>MUNICIPIO</span>
                <select
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="Municipio"
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="Arauca">Arauca</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Cali">Cali</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Cúcuta">Cúcuta</option>
                  <option value="Florencia">Florencia</option>
                  <option value="Ibagué">Ibagué</option>
                  <option value="Leticia">Leticia</option>
                  <option value="Manizales">Manizales</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Bello">Bello</option>
                  <option value="Envigado">Envigado</option>
                  <option value="Itagui">Itagui</option>
                  <option value="Itagui">Sabaneta</option>
                  <option value="Mitú">Mitú</option>
                  <option value="Mocoa">Mocoa</option>
                  <option value="Montería">Montería</option>
                  <option value="Neiva">Neiva</option>
                  <option value="Pasto">Pasto</option>
                  <option value="Pereira">Pereira</option>
                  <option value="Popayán">Popayán</option>
                  <option value="Puerto Carreño">Puerto Carreño</option>
                  <option value="Puerto Inírida">Puerto Inírida</option>
                  <option value="Quibdó">Quibdó</option>
                  <option value="Riohacha">Riohacha</option>
                  <option value="San Andrés">San Andrés</option>
                  <option value="San José del Guaviare">
                    San José del Guaviare
                  </option>
                  <option value="Santa Marta">Santa Marta</option>
                  <option value="Sincelejo">Sincelejo</option>
                  <option value="Tunja">Tunja</option>
                  <option value="Valledupar">Valledupar</option>
                  <option value="Villavicencio">Villavicencio</option>
                  <option value="Yopal">Yopal</option>
                  <option value="Otra">Otra (Nos comunicaremos contigo)</option>
                </select>
              </div>
              <div className="Blank__Space"> </div>
              <div className="Pagar__total__cuentas__finales">
                <div className="Pagar__total__cuentas__finales__inner">
                  <div className="Pagar__total__cuentas__finales__inner__item">
                    <div className="Pagar__total__cuentas__finales__item">
                      Subtotal
                    </div>
                    <div className="Pagar__total__cuentas__finales__precio">
                      $
                      {this.props.suma.toString().slice(-6, -3) +
                        "." +
                        this.props.suma.toString().slice(-3)}
                    </div>
                  </div>
                  <div className="Pagar__total__cuentas__finales__inner__item">
                    <div className="Pagar__total__cuentas__finales__item">
                      Envío
                    </div>
                    <div className="Pagar__total__cuentas__finales__precio">
                      $
                      {this.state.Envio.toString().slice(-6, -3) +
                        "." +
                        this.state.Envio.toString().slice(-3)}
                    </div>
                  </div>
                  <div className="Pagar__total__cuentas__finales__inner__item">
                    <div className="Pagar__total__cuentas__finales__item">
                      Descuento
                    </div>
                    <div className="Pagar__total__cuentas__finales__precio">
                      $
                      {(this.props.suma * Number(this.state.Codigos.descuento))
                        .toString()
                        .slice(-6, -3) +
                        "." +
                        (this.props.suma * Number(this.state.Codigos.descuento))
                          .toString()
                          .slice(-3)}
                    </div>
                  </div>
                </div>
                <div className="Blank__Space"> </div>
                <div className="Pagar__total__total">
                  <div className="Pagar__info__titulo__inner">Total</div>
                  <div className="Pagar__total__cuentas__finales__precio__total">
                    $
                    {(
                      this.props.suma +
                      Number(this.state.Envio) -
                      this.props.suma * Number(this.state.Codigos.descuento)
                    )
                      .toString()
                      .slice(-6, -3) +
                      "." +
                      (
                        this.props.suma +
                        Number(this.state.Envio) -
                        this.props.suma * Number(this.state.Codigos.descuento)
                      )
                        .toString()
                        .toString()
                        .slice(-3)}
                  </div>
                </div>
              </div>
            </div>
            <div className="Blank__Space"></div>
            <div className="Pagar__info">
              <div className="Pagar__info__titulo">
                <div className="Pagar__info__titulo__inner">
                  COMPLETA TU INFORMACIÓN
                </div>
              </div>
              <div className="Blank__Space"> </div>
              <div className="Blank__Space"> </div>
              <div className="Pagar__info__form__outter">
                <div className="Pagar__info__form__inner">
                  <div className="Pagar__info__form__1">
                    {" "}
                    <span> NOMBRE</span>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="Nombre"
                    />
                    <div className="Blank__Space"> </div>
                    <span> EMAIL</span>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="Email"
                    />
                    <div className="Blank__Space"> </div>
                    <span> DIRECCIÓN</span>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="Direccion"
                    />
                  </div>
                  <div></div>
                  <div className="Pagar__info__form__2">
                    <span> APELLIDO</span>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="Apellido"
                    />
                    <div className="Blank__Space"> </div>
                    <span> TELÉFONO </span>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="Telefono"
                    />
                    <div className="Blank__Space"> </div>
                    <span> DOCUMENTO</span>
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      name="Documento"
                    />
                  </div>
                </div>
              </div>
              <div className="Pagar__segura">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "45% 10% 45%",
                    width: "80%",
                    paddingLeft: "10%",
                    fontSize: "1px",
                    zIndex: "1000",
                  }}
                >
                  <div
                    className="Pagar__segura__inner"
                    onClick={this.addProduct}
                  >
                    <div className="Pagar__segura__inner__inner">
                      PAGAR EN LINEA
                    </div>
                  </div>
                  <div></div>
                  <div className="Pagar__segura__inner">
                    <div
                      className="Pagar__segura__inner__inner"
                      onClick={this.addProduct1}
                    >
                      COMUNICATE CON UNA ASESORA
                    </div>
                  </div>
                </div>
                <div className="Blank__Space"> </div>
                <div className="Pagar__total__codigo">
                  <span> {this.state.Mensaje1}</span>
                </div>
              </div>
              <div className="Blank__Space"> </div>
            </div>
          </div>
        </div>
        <div className="Blank__Space"> </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  productos: state.productos,
  suma: state.subtotal,
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

export default connect(mapStateToProps, mapDispatchToProps)(Pagar);
