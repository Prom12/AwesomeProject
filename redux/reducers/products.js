import { Products } from "../actions/product";

function productReducer(
  state = { count: (value = 0), carts: (cart = []) },
  action
) {
  switch (action.type) {
    case Products.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case Products.CREATE:
      return {};
    case Products.UPDATE:
      return {};
    case Products.DELETE:
      return {};
    case Products.CART:
      if (value == 0) {
        cart[0] = action.payload;
        value++;
      } else {
        cart[value] = action.payload;
        value++;
      }
      return { ...state, cart, value };
    default:
      return state;
  }
}
export default productReducer;
