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
      //Currently Under Maintenance
      product = state.products.filter((post) => post._id == action.payload._id);
      product = action.payload;
      state.products.push(product);
      return { ...state, products };
    case Products.DELETE:
      const product = state.products.filter(
        (post) => post._id !== action.payload
      );

      return { ...state, products: product };
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
