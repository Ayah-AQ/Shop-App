import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer"
const rootReducer = combineReducers({
  shops: shopReducer,
  products: productReducer,
carts:cartReducer
});

export default rootReducer;