import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer"
import authReducer from "./authReducer"
const rootReducer = combineReducers({
  shops: shopReducer,
  products: productReducer,
carts:cartReducer,
users: authReducer});

export default rootReducer;