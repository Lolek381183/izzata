import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout.jsx";
import Tienda from "../pages/Tienda.jsx";
import Ultimo from "../pages/Ultimo.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Subir from "../pages/Subir.jsx";
import Producto from "../pages/Prodcuto.jsx";
import Pagar from "../pages/Pagar.jsx";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Ultimo} />
            <Route exact path="/Tienda" component={Tienda} />
            <Route exact path="/Nosotros" component={Nosotros} />
            <Route exact path="/Subir" component={Subir} />
            <Route exact path="/Pagar" component={Pagar} />
            <Route
              path="/Producto/:parameter2"
              render={(props) => <Producto {...props} />}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
