import { Alert } from "react-native";
import * as types from "../actions/types";

const initialState = {
  items: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const newItem = action.payload;
      const foundItem = state.items.find(
        (item) => item.productId === newItem.productId
      );
      if (foundItem)
      return {
        ...state,
        items: state.items.map((item) =>
          item === foundItem ? newItem : item
        ),
      };
      else
        return {
          ...state,
          items: [...state.items, newItem],
        };

        case types.REMOVE_ITEM:
          return {
            ...state,
            items: state.items.filter((item) => item.productId !== action.payload),
          };

    case types.CHECKOUT:
      Alert.alert(
        "Your order has been placed  ",
        [{ text: "Ok" }],
        { cancelable: false }
      );
      return {
        ...state,
        items: [],
      };
     
    default:
      return state;
  }
};

export default reducer;