import axios from "./axios";
import { Products } from "../redux/actions/product";
import { Profiles } from "../redux/actions/profiles";
export function getProducts() {
  return async (dispatch) => {
    await axios
      .get("/products")
      .then((data) => {
        dispatch({ type: Products.GET_PRODUCTS, payload: data.data });
      })
      .catch((err) => alert(err.message));
  };
}

let ID = "60d8add9e49e43259871ef88";
export function getProfiles() {
  return async (dispatch) => {
    await axios
      .get(`/profiles`)
      .then((data) => {
        dispatch({ type: Profiles.GET_PROFILES, payload: data.data });
      })
      .catch((err) => alert(err.message));
  };
}
