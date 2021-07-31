import AsyncStorage from "@react-native-async-storage/async-storage";
import * as types from "../actions/types";
import instance from "../actions/instance"

export const addItemToCart = (newItem) => ({
  type: types.ADD_ITEM,
  payload: newItem,
});

export const removeItemFromCart = (productId) => ({
  type: types.REMOVE_ITEM,
  payload: productId,
});

export const checkout = (items) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/checkout", items);
      dispatch({
        type: types.CHECKOUT,
        payload:[]
      });
      AsyncStorage.removeItem(items);
    } catch (error) {
      console.error(error);
    }
  };
};