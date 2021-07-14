import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome5   } from "@expo/vector-icons";

const CartButton = () => {
  const navigation = useNavigation();
  const items = useSelector(state=> state.carts.items)
  let total =0;
   items.forEach((item) => (total += item.quantity));
  return (
    <Button style={{backgroundColor:"transperent", }} onPress={() => navigation.navigate("CartList")}>
      <Text style={{ color: "black" }}>{total}</Text>
      <Icon

as={FontAwesome5  }
 name="opencart"
  size={8} 
  color="black"
  
  // style={{backgroundColor: "#C9D8B6"}}
        onPress={() => navigation.navigate("CartList")}
      />
    </Button>
  );
};

export default CartButton;