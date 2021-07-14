import * as types from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;