import React from "react";
import Axios from "axios";

import "./styles/Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.id,
      backend: "https://izzata.herokuapp.com",
      precio: this.props.price.slice(-6, -3) + "." + this.props.price.slice(-3),
    };
  }

  changeBackground = (e) => {
    document.getElementById(this.state.name).style.display = "block";
    document.getElementById(this.state.name).style.pointerEvents = "none";
  };
  changeBackground1 = (e) => {
    document.getElementById(this.state.name).style.display = "none";
    document.getElementById(this.state.name).style.pointerEvents = "none";
  };

  lookProduct = (e) => {
    Axios.get(this.state.backend + "/look", {
      params: {
        ID: this.props.id,
      },
    }).then((response) => {
      this.props.onLook(response.data);
      alert("Producto encontrado");
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Item__Img__Container" onClick={this.lookProduct}>
          <div
            className="des"
            onMouseOver={this.changeBackground}
            onMouseOut={this.changeBackground1}
          >
            <img
              src={
                "https://bucketeer-7a95e2ad-f5e2-4b34-aae6-d8960a86ad88.s3.amazonaws.com/izzata/" +
                this.props.img
              }
              alt="Img_Producto"
              className="Item__Img"
            />
          </div>
          <div className="des1">
            <div className="Item__Name__Text">
              {this.props.Item_Name} <br />
            </div>
            <div className="Item__Price">$ {this.state.precio}</div>
          </div>
          <div className="des2" id={this.props.id}>
            <div className="Item__Comprar">
              <p>EDITAR</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
