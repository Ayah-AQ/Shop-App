import React from "react";
import { Image } from "react-native";
import { ShopItemStyled, DeleteButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";

import { removeItemFromCart } from "../../store/actions/cartActions";
import { Center,  List } from "native-base";
import { Icon } from "react-native-elements/dist/icons/Icon";

const CartItem = ({ item}) => {
  const dispatch = useDispatch();
    const handleDelete= ()=>{
        dispatch(removeItemFromCart(item.id))
    }
    return (
        

      <List.Item>
         
          <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: item.image }}
        />
          <ShopItemStyled> {item.name}</ShopItemStyled>
          <ShopItemStyled>Quantity: {item.quantity}</ShopItemStyled>
          <ShopItemStyled>total price: {item.price * item.quantity} JD</ShopItemStyled>

          <Icon
      onPress={handleDelete}
      name="delete"
      type="antdesign"
      color="#f50"
      
      />
    
          
      </List.Item>
      
  )
}

export default CartItem