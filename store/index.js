import { fetchProducts } from "../store/actions/productActions";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { fetchShops } from "./actions/shopActions";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());


export default store;