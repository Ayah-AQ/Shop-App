import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import { Center, List, Box, Button } from "native-base";
import { checkout } from "../../store/actions/cartActions";

const CartList = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.carts.items);
  const products = useSelector((state) => state.products.products);

  const cartItems = items
    .map((item) => ({
      ...products.find((product) => product.id === item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
    
    const handleCheckOut=() => {
      dispatch(checkout())
      alert("Done successfully")
  }
  return (
    <Center flex={1}>
      <Box w="50%">
        <Text>List</Text>
        <List space={2} my={2}>
          {cartItems}
          <Button style={{backgroundColor:"#A9D8B6" }} onPress={handleCheckOut}> Check out</Button>
        </List>
      </Box>
    </Center>
  );
};

export default CartList;

const styles = StyleSheet.create({});