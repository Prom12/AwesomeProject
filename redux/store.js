import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/products";
import profilesReducer from "./reducers/profiles";

const rootReducer = combineReducers({
  productReducer,
  profilesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
