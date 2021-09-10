import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/products";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  productReducer,
  authReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
