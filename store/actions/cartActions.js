import * as types from "../actions/types";

export const addItemToCart = (newItem) => ({
  type: types.ADD_ITEM,
  payload: newItem,
});

export const removeItemFromCart = (productId) => ({
  type: types.REMOVE_ITEM,
  payload: productId,
});

export const checkout = () => ({
  type: types.CHECKOUT,
});