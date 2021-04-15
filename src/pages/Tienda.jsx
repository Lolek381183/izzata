import React from "react";
import Item from "../components/Item_Publico.jsx";
import Axios from "axios";

import Whatsapp from "../images/Whatsapp__right.png";

class Tienda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      backend: "https://izzata.herokuapp.com",
    };
  }

  componentDidMount = (e) => {
    this.getProducts();
  };

  getProducts = (e) => {
    Axios.get(this.state.backend + "/products").then((response) => {
      this.setState({ productList: response.data });
    });
  };

  render() {
    return (
      <React.Fragment>
        <a href="https://wa.me/message/5T4PIJLRMEKXA1">
          <img src={Whatsapp} alt="Whatsapp" className="fixedbutton" />
        </a>
        <div className="Blank__Space"></div>
        <div className="Ultimo__3Item__Container">
          <div className="Ultimo__3Item__Container__Inner">
            {this.state.productList.map((val, key) => {
              return (
                <Item
                  id={val.ID}
                  img={val.img_1}
                  Item_Name={val.nombre}
                  price={val.precio}
                  onLook={this.lookChange}
                />
              );
            })}
          </div>
        </div>
        <div className="Blank__Space"></div>
      </React.Fragment>
    );
  }
}

export default Tienda;
