// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");
      dispatch({
        type: types.FETCH_SHOPS,
        payload: { shops: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};