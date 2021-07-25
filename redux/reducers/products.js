import { Products } from "../actions/product";
const initialState = {
  products: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case Products.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case Products.CREATE:
      return {};
    case Products.UPDATE:
      return {};
    case Products.DELETE:
      return {};
    default:
      return state;
  }
}
export default productReducer;
