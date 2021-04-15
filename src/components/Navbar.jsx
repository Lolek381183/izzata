import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/Navbar.css";

import Name from "../images/Name.png";
import Cart from "../images/Cart.png";
import Menu from "../images/menu.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleSidebarMenu = (e) => {
    document.getElementById("Navbar__side__menu").style.width = "250px";
  };

  handleSidebarCloseMenu = (e) => {
    document.getElementById("Navbar__side__menu").style.width = "0px";
  };
  handleSidebarCart = (e) => {
    document.getElementById("Navbar__side__cart").style.width = "300px";
  };

  handleSidebarCloseCart = (e) => {
    document.getElementById("Navbar__side__cart").style.width = "0px";
  };
  render() {
    return (
      <React.Fragment>
        <div id="Navbar__side__menu" className="Navbar__side__menu">
          <div
            onClick={this.handleSidebarCloseMenu}
            className="Navbar__closebtn"
            style={{ cursor: "pointer" }}
          >
            &times;
          </div>
          <Link to="/" onClick={this.handleSidebarCloseMenu}>
            LO ÚLTIMO
          </Link>

          <Link to="/Tienda" onClick={this.handleSidebarCloseMenu}>
            TIENDA
          </Link>

          <Link to="/Nosotros" onClick={this.handleSidebarCloseMenu}>
            NOSOTROS
          </Link>
        </div>
        <div id="Navbar__side__cart" className="Navbar__side__cart">
          <div
            onClick={this.handleSidebarCloseCart}
            className="Navbar__cart__closebtn"
            style={{ cursor: "pointer", fontSize: "40px" }}
          >
            &times;
          </div>
          <div className="Navbar__cart__bolsa__compras">
            <img
              src={Cart}
              alt="Shopping"
              className="Navbar__cart__carrito__compras"
            />
            &nbsp; &nbsp; CARRITO DE COMPRAS
          </div>
          <div className="Navbar__cart__blank__border"></div>
          <div className="Navbar__cart__subtotal">
            <div className="Navbar__cart__subtotal__title"> Subtotal:</div>
            <div className="Navbar__cart__subtotal__sum">
              $
              {this.props.suma.toString().slice(-6, -3) +
                "." +
                this.props.suma.toString().slice(-3)}
            </div>
          </div>
          <div>
            {this.props.productos.map((j) => (
              <div className="Navbar__cart__producto" key={j.counter}>
                <div
                  onClick={() => {
                    this.props.elminarProducto({
                      id: j.counter,
                      precio: j.precio,
                    });
                  }}
                  className="Navbar__cart__producto__closebtn"
                  style={{ cursor: "pointer", fontSize: "30px" }}
                >
                  &times;
                </div>
                <div className="Navbar__cart__producto__img">
                  <img
                    src={j.imagen}
                    alt="producto"
                    className="Navbar__cart__producto__img__archivo"
                  />
                </div>
                <div className="Navbar__cart__producto__nombre">
                  {" "}
                  {j.nombre}
                </div>
                <div className="Navbar__cart__producto__talla">
                  {" "}
                  Talla: {j.talla}
                </div>
                <div className="Navbar__cart__producto__color">
                  {" "}
                  <div
                    className="Navbar__cart__producto__color__div"
                    style={{
                      background: j.color,
                    }}
                  ></div>
                </div>
                <div className="Navbar__cart__producto__precio">
                  {" "}
                  ${j.precio.slice(-6, -3) + "." + j.precio.slice(-3)}
                </div>
              </div>
            ))}
          </div>
          <div className="Blank__Space"></div>
          <div className="Navbar__cart__pagar__outter">
            <Link
              to="/Pagar"
              onClick={() => {
                document.getElementById("Navbar__side__cart").style.width =
                  "0px";
              }}
            >
              <div className="Navbar__cart__pagar">
                <div className="Navbar__cart__pagar_inner">PAGAR</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="Navbar__Envios">
          <div className="Navbar__Envios__Inner">
            {" "}
            <p> ENVÍOS GRATIS EN COMPRAS SUPERIORES A 99.900</p>
          </div>
        </div>
        <div className="Navbar__Menu">
          <div className="Navbar__Menu__Inner">
            <div className="Navbar__Menu__Menu">
              <div
                onClick={this.handleSidebarMenu}
                className="closebtn"
                style={{ cursor: "pointer" }}
              >
                <div className="Navbar__Menu__Menu__Phone">
                  <img src={Menu} alt="" />
                </div>
              </div>

              <div className="Navbar__Menu__Menu__Inner">
                <div className="Link__Container">
                  <Link to="/" className="Link">
                    LO ÚLTIMO
                  </Link>
                </div>
                <div className="Link__Container">
                  <Link to="/Tienda" className="Link">
                    TIENDA
                  </Link>
                </div>
                <div className="Link__Container">
                  <Link to="/Nosotros" className="Link">
                    NOSOTROS{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="Navbar__Menu__Img">
              <div className="Navbar__Menu__Img__Inner">
                <Link to="/">
                  <img
                    src={Name}
                    alt="Bhand"
                    className="Navbar__Menu__Img__Img"
                  />
                </Link>
              </div>
            </div>
            <div className="Navbar__Menu__Buscar">
              <div className="Navbar__Menu__Buscar__Inner">
                <form action="/action_page.php">
                  <div className="Navbar__Menu__Buscar__Form">
                    <input
                      className="Navbar__Menu__Buscar__Barra"
                      placeholder="Buscar..."
                      name="search"
                    />
                  </div>
                </form>
                <div
                  onClick={this.handleSidebarCart}
                  className="closebtn"
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <img
                      src={Cart}
                      alt="Shopping"
                      className="Navbar__Menu__Buscar__Cart"
                    />
                  </div>
                  {this.props.counter !== 0 ? (
                    <div className="Navbar__cart__counter">
                      {this.props.counter}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  productos: state.productos,
  suma: state.subtotal,
  counter: state.counter,
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
