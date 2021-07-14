// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/products");
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: { products: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};