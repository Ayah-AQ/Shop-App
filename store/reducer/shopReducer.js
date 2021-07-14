import * as types from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload.shops,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;