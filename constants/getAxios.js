import axios from "./axios";
import { Products } from "../redux/actions/product";
export function getProducts() {
  return async (dispatch) => {
    await axios
      .get("/vendors")
      .then((data) => {
        dispatch({ type: Products.GET_PRODUCTS, payload: data.data });
      })
      .catch((err) => alert(err.message));
  };
}
