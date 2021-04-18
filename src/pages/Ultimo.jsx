import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Item from "../components/Item_Publico.jsx";
import Axios from "axios";

import Banner_1 from "../images/Banner_1.png";
import Banner_2 from "../images/Banner_2.png";
import Banner_3 from "../images/Banner_3.png";

import Whatsapp from "../images/Whatsapp__right.png";

import "./styles/Ultimo.css";

class Ultimo extends React.Component {
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

        <div
          style={{
            display: "inline-block",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <Carousel>
            <div>
              <img src={Banner_1} alt="Banner_1" />
            </div>
            <div>
              <img src={Banner_2} alt="Banner_2" />
            </div>
            <div>
              <img src={Banner_3} alt="Banner_3" />
            </div>
          </Carousel>
        </div>
        <div className="Blank__Space"></div>
        <div className="Ultimo__3Item__Container">
          <div className="Ultimo__3Item__Container__Inner">
            {this.state.productList
              .slice(-12)
              .reverse()
              .map((val, key) => {
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

export default Ultimo;
