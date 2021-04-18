import React from "react";
import "./styles/Subir.css";
import Axios from "axios";
import Item from "../components/Item.jsx";
import Logo from "../images/Logo-05.png";

class Subir extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Id: "",
        Nombre: "",
        Precio: "",
        Detalles: "",
        Img_1: "",
        Img_2: "",
        Img_3: "",
        Img_4: "",
        Img_5: "",
        Color_1: null,
        Color_2: null,
        Color_3: null,
        Color_4: null,
        Color_5: null,
        Password: "",
      },
      form1: {
        Id__Actualizar: "",
        Nombre__Actualizar: "",
        Precio__Actualizar: "",
        Detalles__Actualizar: "",
        Color_1__Actualizar: "",
        Color_2__Actualizar: "",
        Color_3__Actualizar: "",
        Color_4__Actualizar: "",
        Color_5__Actualizar: "",
        Color_1_S_Actualizar: "",
        Color_1_M_Actualizar: "",
        Color_1_L_Actualizar: "",
        Color_2_S_Actualizar: "",
        Color_2_M_Actualizar: "",
        Color_2_L_Actualizar: "",
        Color_3_S_Actualizar: "",
        Color_3_M_Actualizar: "",
        Color_3_L_Actualizar: "",
        Color_4_S_Actualizar: "",
        Color_4_M_Actualizar: "",
        Color_4_L_Actualizar: "",
        Color_5_S_Actualizar: "",
        Color_5_M_Actualizar: "",
        Color_5_L_Actualizar: "",
      },
      updatedProduct: "",
      img_1_delete: "",
      img_2_delete: "",
      img_3_delete: "",
      img_4_delete: "",
      img_5_delete: "",
      productList: [],
      productList1: [
        {
          ID: "",
          client_ID: "",
          nombre: "",
          precio: "",
          detalles: "",
          img_1: "",
          img_2: "",
          img_3: "",
          img_4: "",
          img_5: "",
        },
      ],
      backend: "https://izzata.herokuapp.com",
    };
  }

  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  handleChangeAc = (e) => {
    this.setState({
      form1: { ...this.state.form1, [e.target.name]: e.target.value },
    });

    console.log(this.state.form1);
  };

  handleChangeAcChS = () => {
    this.setState({
      form1: {
        ...this.state.form1,
        Small__Actualizar:
          this.state.form1.Small__Actualizar === true ? false : true,
      },
    });
  };
  handleChangeAcChM = () => {
    this.setState({
      form1: {
        ...this.state.form1,
        Medium__Actualizar:
          this.state.form1.Medium__Actualizar === true ? false : true,
      },
    });
  };
  handleChangeAcChL = () => {
    this.setState({
      form1: {
        ...this.state.form1,
        Large__Actualizar:
          this.state.form1.Large__Actualizar === true ? false : true,
      },
    });
  };

  componentDidMount = (e) => {
    this.getProducts();
  };

  lookChange = (lookProduct) => {
    this.setState({
      productList1: lookProduct,
      form1: {
        Id__Actualizar: lookProduct[0].client_ID,
        Nombre__Actualizar: lookProduct[0].nombre,
        Precio__Actualizar: lookProduct[0].precio,
        Detalles__Actualizar: lookProduct[0].detalles,
        Color_1__Actualizar:
          lookProduct[0].color_1 != null
            ? lookProduct[0].color_1.split(",", 4)[0]
            : null,
        Color_2__Actualizar:
          lookProduct[0].color_2 != null
            ? lookProduct[0].color_2.split(",", 4)[0]
            : null,
        Color_3__Actualizar:
          lookProduct[0].color_3 != null
            ? lookProduct[0].color_3.split(",", 4)[0]
            : null,
        Color_4__Actualizar:
          lookProduct[0].color_4 != null
            ? lookProduct[0].color_4.split(",", 4)[0]
            : null,
        Color_5__Actualizar:
          lookProduct[0].color_5 != null
            ? lookProduct[0].color_5.split(",", 4)[0]
            : null,
        Color_1_S_Actualizar:
          lookProduct[0].color_1 != null
            ? lookProduct[0].color_1.split(",", 4)[1] === "1"
              ? true
              : false
            : null,
        Color_1_M_Actualizar:
          lookProduct[0].color_1 != null
            ? lookProduct[0].color_1.split(",", 4)[2] === "1"
              ? true
              : false
            : null,
        Color_1_L_Actualizar:
          lookProduct[0].color_1 != null
            ? lookProduct[0].color_1.split(",", 4)[3] === "1"
              ? true
              : false
            : null,
        Color_2_S_Actualizar:
          lookProduct[0].color_2 != null
            ? lookProduct[0].color_2.split(",", 4)[1] === "1"
              ? true
              : false
            : null,
        Color_2_M_Actualizar:
          lookProduct[0].color_2 != null
            ? lookProduct[0].color_2.split(",", 4)[2] === "1"
              ? true
              : false
            : null,
        Color_2_L_Actualizar:
          lookProduct[0].color_2 != null
            ? lookProduct[0].color_2.split(",", 4)[3] === "1"
              ? true
              : false
            : null,
        Color_3_S_Actualizar:
          lookProduct[0].color_3 != null
            ? lookProduct[0].color_3.split(",", 4)[1] === "1"
              ? true
              : false
            : null,
        Color_3_M_Actualizar:
          lookProduct[0].color_3 != null
            ? lookProduct[0].color_3.split(",", 4)[2] === "1"
              ? true
              : false
            : null,
        Color_3_L_Actualizar:
          lookProduct[0].color_3 != null
            ? lookProduct[0].color_3.split(",", 4)[3] === "1"
              ? true
              : false
            : null,
        Color_4_S_Actualizar:
          lookProduct[0].color_4 != null
            ? lookProduct[0].color_4.split(",", 4)[1] === "1"
              ? true
              : false
            : null,
        Color_4_M_Actualizar:
          lookProduct[0].color_4 != null
            ? lookProduct[0].color_4.split(",", 4)[2] === "1"
              ? true
              : false
            : null,
        Color_4_L_Actualizar:
          lookProduct[0].color_4 != null
            ? lookProduct[0].color_4.split(",", 4)[3] === "1"
              ? true
              : false
            : null,
        Color_5_S_Actualizar:
          lookProduct[0].color_5 != null
            ? lookProduct[0].color_5.split(",", 4)[1] === "1"
              ? true
              : false
            : null,
        Color_5_M_Actualizar:
          lookProduct[0].color_5 != null
            ? lookProduct[0].color_5.split(",", 4)[2] === "1"
              ? true
              : false
            : null,
        Color_5_L_Actualizar:
          lookProduct[0].color_5 != null
            ? lookProduct[0].color_5.split(",", 4)[3] === "1"
              ? true
              : false
            : null,
      },
    });
    this.setState({ updatedProduct: lookProduct[0].ID });
    this.setState({ img_1_delete: lookProduct[0].img_1 });
    this.setState({ img_2_delete: lookProduct[0].img_2 });
    this.setState({ img_3_delete: lookProduct[0].img_3 });
    this.setState({ img_4_delete: lookProduct[0].img_4 });
    this.setState({ img_5_delete: lookProduct[0].img_5 });
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({
      form: { ...this.state.form, [e.target.name]: file },
    });
  };

  addProduct = async (e) => {
    await Axios.post(this.state.backend + "/create", {
      Id: this.state.form.Id,
      Nombre: this.state.form.Nombre,
      Precio: this.state.form.Precio,
      Detalles: this.state.form.Detalles,
      Img_1: this.state.form.Img_1.name,
      Img_2: this.state.form.Img_2.name,
      Img_3: this.state.form.Img_3.name,
      Img_4: this.state.form.Img_4.name,
      Img_5: this.state.form.Img_5.name,
      Color_1:
        this.state.form.Color_1 != null
          ? this.state.form.Color_1.concat(",1,1,1")
          : null,
      Color_2:
        this.state.form.Color_2 != null
          ? this.state.form.Color_2.concat(",1,1,1")
          : null,
      Color_3:
        this.state.form.Color_3 != null
          ? this.state.form.Color_3.concat(",1,1,1")
          : null,
      Color_4:
        this.state.form.Color_4 != null
          ? this.state.form.Color_4.concat(",1,1,1")
          : null,
      Color_5:
        this.state.form.Color_5 != null
          ? this.state.form.Color_5.concat(",1,1,1")
          : null,
    }).then((response) => {
      this.getProducts();
      if (this.state.form.Img_1.name !== undefined) {
        this.uploadFile(this.state.form.Img_1);
      }
      if (this.state.form.Img_2.name !== undefined) {
        this.uploadFile(this.state.form.Img_2);
      }
      if (this.state.form.Img_3.name !== undefined) {
        this.uploadFile(this.state.form.Img_3);
      }
      if (this.state.form.Img_4.name !== undefined) {
        this.uploadFile(this.state.form.Img_4);
      }
      if (this.state.form.Img_5.name !== undefined) {
        this.uploadFile(this.state.form.Img_5);
      }
      alert("Espere un momento");
    });
  };

  getProducts = (e) => {
    Axios.get(this.state.backend + "/products").then((response) => {
      this.setState({ productList: response.data });
    });
  };

  uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", e); // appending file
    await Axios.post(this.state.backend + "/upload", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  updateProduct = (e) => {
    let Color_1_S = this.state.form1.Color_1_S_Actualizar === true ? "1" : "0";
    let Color_1_M = this.state.form1.Color_1_M_Actualizar === true ? "1" : "0";
    let Color_1_L = this.state.form1.Color_1_L_Actualizar === true ? "1" : "0";
    let Color_2_S = this.state.form1.Color_2_S_Actualizar === true ? "1" : "0";
    let Color_2_M = this.state.form1.Color_2_M_Actualizar === true ? "1" : "0";
    let Color_2_L = this.state.form1.Color_2_L_Actualizar === true ? "1" : "0";
    let Color_3_S = this.state.form1.Color_3_S_Actualizar === true ? "1" : "0";
    let Color_3_M = this.state.form1.Color_3_M_Actualizar === true ? "1" : "0";
    let Color_3_L = this.state.form1.Color_3_L_Actualizar === true ? "1" : "0";
    let Color_4_S = this.state.form1.Color_4_S_Actualizar === true ? "1" : "0";
    let Color_4_M = this.state.form1.Color_4_M_Actualizar === true ? "1" : "0";
    let Color_4_L = this.state.form1.Color_4_L_Actualizar === true ? "1" : "0";
    let Color_5_S = this.state.form1.Color_5_S_Actualizar === true ? "1" : "0";
    let Color_5_M = this.state.form1.Color_5_M_Actualizar === true ? "1" : "0";
    let Color_5_L = this.state.form1.Color_5_L_Actualizar === true ? "1" : "0";

    console.log(Color_1_S);

    Axios.put(this.state.backend + "/update", {
      IDp: this.state.updatedProduct,
      Id: this.state.form1.Id__Actualizar,
      Nombre: this.state.form1.Nombre__Actualizar,
      Precio: this.state.form1.Precio__Actualizar,
      Detalles: this.state.form1.Detalles__Actualizar,
      Color_1:
        this.state.form1.Color_1__Actualizar != null
          ? this.state.form1.Color_1__Actualizar.concat(
              "," + Color_1_S + "," + Color_1_M + "," + Color_1_L
            )
          : null,
      Color_2:
        this.state.form1.Color_2__Actualizar != null
          ? this.state.form1.Color_2__Actualizar.concat(
              "," + Color_2_S + "," + Color_2_M + "," + Color_2_L
            )
          : null,
      Color_3:
        this.state.form1.Color_3__Actualizar != null
          ? this.state.form1.Color_3__Actualizar.concat(
              "," + Color_3_S + "," + Color_3_M + "," + Color_3_L
            )
          : null,
      Color_4:
        this.state.form1.Color_4__Actualizar != null
          ? this.state.form1.Color_4__Actualizar.concat(
              "," + Color_4_S + "," + Color_4_M + "," + Color_4_L
            )
          : null,
      Color_5:
        this.state.form1.Color_5__Actualizar != null
          ? this.state.form1.Color_5__Actualizar.concat(
              "," + Color_5_S + "," + Color_5_M + "," + Color_5_L
            )
          : null,
    }).then((response) => {
      this.getProducts();
      alert("Producto actualizado");
    });
  };

  deleteProduct = (e) => {
    Axios.delete(
      this.state.backend + `/delete/${this.state.updatedProduct}`
    ).then((response) => {
      if (this.state.img_1_delete !== null) {
        Axios.delete(
          this.state.backend + `/deletei/${this.state.img_1_delete}`
        ).then((response) => {
          if (this.state.img_2_delete !== null) {
            Axios.delete(
              this.state.backend + `/deletei/${this.state.img_2_delete}`
            ).then((response) => {
              if (this.state.img_3_delete !== null) {
                Axios.delete(
                  this.state.backend + `/deletei/${this.state.img_3_delete}`
                ).then((response) => {
                  if (this.state.img_4_delete !== null) {
                    Axios.delete(
                      this.state.backend + `/deletei/${this.state.img_4_delete}`
                    ).then((response) => {
                      if (this.state.img_5_delete !== null) {
                        Axios.delete(
                          this.state.backend +
                            `/deletei/${this.state.img_5_delete}`
                        ).then((response) => {
                          console.log("listo");
                        });
                      }
                      console.log("listo");
                    });
                  }
                  console.log("listo");
                });
              }
              console.log("listo");
            });
          }
          console.log("listo");
        });
      }
      console.log("listo");
    });
  };
  handleEntrance = () => {
    if (this.state.form.Password === "DWMTM") {
      document.getElementById("Subir__security").style.display = "none";
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="Subir__security" id="Subir__security">
          <div className="Subir__security__inner">
            <img src={Logo} alt="izzata" className="Subir__security__img" />
            <div className="Subir__security__text">
              <span> BIENVENIDO</span>
            </div>
            <div className="Subir__security__input">
              <input
                onChange={this.handleChange}
                className="form-control"
                type="password"
                name="Password"
              />
            </div>
            <div
              className="Subir__security__entrar"
              onClick={this.handleEntrance}
            >
              <div className="Navbar__cart__pagar">
                <div className="Producto__añadir__inner">ENTRAR</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Blank__Space"></div>

        <div className="Subir__outer">
          <div className="Subir__form">
            <div className="Subir__form__inner">
              <div className="Subir__form__inner__inner">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Agrega un nuevo producto
                </div>
                <span> ID</span>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="Id"
                />
                <br />
                <span> Nombre</span>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="Nombre"
                />
                <br />
                <span> Precio</span>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="Precio"
                />
                <br />
                <span> Detalles</span>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="Detalles"
                />
                <br />
                <span>Imagen 1</span>
                <br />
                <input
                  onChange={this.handleFileChange}
                  className="form-control"
                  type="file"
                  name="Img_1"
                />
                <br />
                <span>Imagen 2</span>
                <br />
                <input
                  onChange={this.handleFileChange}
                  className="form-control"
                  type="file"
                  name="Img_2"
                />
                <br />
                <span>Imagen 3</span>
                <br />
                <input
                  onChange={this.handleFileChange}
                  className="form-control"
                  type="file"
                  name="Img_3"
                />{" "}
                <br />
                <span>Imagen 4</span>
                <br />
                <input
                  onChange={this.handleFileChange}
                  className="form-control"
                  type="file"
                  name="Img_4"
                />
                <br />
                <span>Imagen 5</span>
                <br />
                <input
                  onChange={this.handleFileChange}
                  className="form-control"
                  type="file"
                  name="Img_5"
                />
                <br />
                <br />
                <div className="Subir__colores">
                  <div className="Subir__color__individual">
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="color"
                      name="Color_1"
                    />
                  </div>

                  <div className="Subir__color__individual">
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="color"
                      name="Color_2"
                    />
                  </div>
                  <div className="Subir__color__individual">
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="color"
                      name="Color_3"
                    />
                  </div>
                  <div className="Subir__color__individual">
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="color"
                      name="Color_4"
                    />
                  </div>
                  <div className="Subir__color__individual">
                    <input
                      onChange={this.handleChange}
                      className="form-control"
                      type="color"
                      name="Color_5"
                    />
                  </div>
                </div>
                <br />
                <input
                  type="submit"
                  value="Subir"
                  className="Green"
                  onClick={this.addProduct}
                ></input>
              </div>
            </div>
          </div>
          <div className="Subir__active__info">
            {" "}
            <div className="Subir__form__inner">
              <div className="Subir__form__inner__inner">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Actualiza un producto
                </div>
                <span> ID</span>
                <input
                  onChange={(value) => {
                    this.handleChangeAc(value);
                  }}
                  className="form-control"
                  type="text"
                  name="Id__Actualizar"
                  value={this.state.form1.Id__Actualizar}
                />
                <br />
                <span> Nombre</span>
                <input
                  onChange={(value) => {
                    this.handleChangeAc(value);
                  }}
                  className="form-control"
                  type="text"
                  name="Nombre__Actualizar"
                  value={this.state.form1.Nombre__Actualizar}
                />
                <br />
                <span> Precio</span>
                <input
                  onChange={(value) => {
                    this.handleChangeAc(value);
                  }}
                  className="form-control"
                  type="text"
                  name="Precio__Actualizar"
                  value={this.state.form1.Precio__Actualizar}
                />
                <br />
                <span> Detalles</span>
                <input
                  onChange={(value) => {
                    this.handleChangeAc(value);
                  }}
                  className="form-control"
                  type="text"
                  name="Detalles__Actualizar"
                  value={this.state.form1.Detalles__Actualizar}
                />
                <br />
                <br />
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Disponibilidad de talla
                </div>
                <br />
                <div className="Subir__colores">
                  <div className="Subir__colores__inner">
                    <div className="Subir__color__individual">
                      <input
                        onChange={this.handleChangeAc}
                        className="form-control"
                        type="color"
                        name="Color_1__Actualizar"
                        value={this.state.form1.Color_1__Actualizar}
                      />
                      <br />
                      <br />
                      <div style={{ textAlign: "center" }}>
                        <input
                          type="checkbox"
                          onChange={() => {
                            this.setState({
                              form1: {
                                ...this.state.form1,
                                Color_1_S_Actualizar:
                                  this.state.form1.Color_1_S_Actualizar === true
                                    ? false
                                    : true,
                              },
                            });
                          }}
                          name="Color_1_S_Actualizar"
                          checked={this.state.form1.Color_1_S_Actualizar}
                        />
                        &nbsp;&nbsp;
                        <span> S </span>
                      </div>
                      <br />
                      <div style={{ textAlign: "center" }}>
                        <input
                          type="checkbox"
                          onChange={() => {
                            this.setState({
                              form1: {
                                ...this.state.form1,
                                Color_1_M_Actualizar:
                                  this.state.form1.Color_1_M_Actualizar === true
                                    ? false
                                    : true,
                              },
                            });
                          }}
                          name="Color_1_M_Actualizar"
                          checked={this.state.form1.Color_1_M_Actualizar}
                        />
                        &nbsp;&nbsp;
                        <span> M </span>
                      </div>
                      <br />
                      <div style={{ textAlign: "center" }}>
                        <input
                          type="checkbox"
                          onChange={() => {
                            this.setState({
                              form1: {
                                ...this.state.form1,
                                Color_1_L_Actualizar:
                                  this.state.form1.Color_1_L_Actualizar === true
                                    ? false
                                    : true,
                              },
                            });
                          }}
                          name="Color_1_L_Actualizar"
                          checked={this.state.form1.Color_1_L_Actualizar}
                        />
                        &nbsp;&nbsp;
                        <span> L </span>
                      </div>
                    </div>
                    {this.state.form1.Color_2__Actualizar != null ? (
                      <div className="Subir__color__individual">
                        <input
                          onChange={this.handleChangeAc}
                          className="form-control"
                          type="color"
                          name="Color_2__Actualizar"
                          value={this.state.form1.Color_2__Actualizar}
                        />
                        <br />
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_2_S_Actualizar:
                                    this.state.form1.Color_2_S_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_2_S_Actualizar"
                            checked={this.state.form1.Color_2_S_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> S </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_2_M_Actualizar:
                                    this.state.form1.Color_2_M_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_2_M_Actualizar"
                            checked={this.state.form1.Color_2_M_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> M </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_2_L_Actualizar:
                                    this.state.form1.Color_2_L_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_2_L_Actualizar"
                            checked={this.state.form1.Color_2_L_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> L </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.form1.Color_3__Actualizar != null ? (
                      <div className="Subir__color__individual">
                        <input
                          onChange={this.handleChangeAc}
                          className="form-control"
                          type="color"
                          name="Color_3__Actualizar"
                          value={this.state.form1.Color_3__Actualizar}
                        />
                        <br />
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_3_S_Actualizar:
                                    this.state.form1.Color_3_S_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_3_S_Actualizar"
                            checked={this.state.form1.Color_3_S_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> S </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_3_M_Actualizar:
                                    this.state.form1.Color_3_M_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_3_M_Actualizar"
                            checked={this.state.form1.Color_3_M_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> M </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_3_L_Actualizar:
                                    this.state.form1.Color_3_L_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_3_L_Actualizar"
                            checked={this.state.form1.Color_3_L_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> L </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.form1.Color_4__Actualizar != null ? (
                      <div className="Subir__color__individual">
                        <input
                          onChange={this.handleChangeAc}
                          className="form-control"
                          type="color"
                          name="Color_4__Actualizar"
                          value={this.state.form1.Color_4__Actualizar}
                        />
                        <br />
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_4_S_Actualizar:
                                    this.state.form1.Color_4_S_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_4_S_Actualizar"
                            checked={this.state.form1.Color_4_S_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> S </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_4_M_Actualizar:
                                    this.state.form1.Color_4_M_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_4_M_Actualizar"
                            checked={this.state.form1.Color_4_M_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> M </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_4_L_Actualizar:
                                    this.state.form1.Color_4_L_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_4_L_Actualizar"
                            checked={this.state.form1.Color_4_L_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> L </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.form1.Color_5__Actualizar != null ? (
                      <div className="Subir__color__individual">
                        <input
                          onChange={this.handleChangeAc}
                          className="form-control"
                          type="color"
                          name="Color_5__Actualizar"
                          value={this.state.form1.Color_5__Actualizar}
                        />
                        <br />
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_5_S_Actualizar:
                                    this.state.form1.Color_5_S_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_5_S_Actualizar"
                            checked={this.state.form1.Color_5_S_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> S </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_5_M_Actualizar:
                                    this.state.form1.Color_5_M_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_5_M_Actualizar"
                            checked={this.state.form1.Color_5_M_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> M </span>
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.setState({
                                form1: {
                                  ...this.state.form1,
                                  Color_5_L_Actualizar:
                                    this.state.form1.Color_5_L_Actualizar ===
                                    true
                                      ? false
                                      : true,
                                },
                              });
                            }}
                            name="Color_5_L_Actualizar"
                            checked={this.state.form1.Color_5_L_Actualizar}
                          />
                          &nbsp;&nbsp;
                          <span> L </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <br />
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Actualizar
                </div>
                <br />
                <input
                  type="submit"
                  className="Green"
                  value="Actualizar"
                  onClick={this.updateProduct}
                ></input>
                <br />
                <br />
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Borrar
                </div>
                <br />
                <input
                  type="submit"
                  className="Red"
                  value="Borrar"
                  onClick={this.deleteProduct}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="Ultimo__3Item__Container">
          <div className="Ultimo__3Item__Container__Inner">
            {this.state.productList.map((val, key) => {
              return (
                <div key={key}>
                  <Item
                    id={val.ID}
                    img={val.img_1}
                    Item_Name={val.nombre}
                    price={val.precio}
                    onLook={this.lookChange}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Subir;
