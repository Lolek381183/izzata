import { createStore } from "redux";

const initialState = {
  productos: [],
  counter: 0,
  subtotal: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "AGREGAR_PRODUCTO") {
    action.producto.counter = state.counter;
    state.counter = state.counter + 1;
    if (action.producto.talla !== "") {
      return {
        ...state,
        productos: state.productos.concat(action.producto),
        subtotal: state.subtotal + Number(action.producto.precio),
      };
    }
  } else {
    if (action.type === "ELIMINAR_PRODUCTO") {
      return {
        ...state,
        productos: state.productos.filter((j) => j.counter !== action.id.id),
        subtotal: state.subtotal - Number(action.id.precio),
        counter: state.counter - 1,
      };
    }
  }
  return state;
};

export default createStore(reducer);
