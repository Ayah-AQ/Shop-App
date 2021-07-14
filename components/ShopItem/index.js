import React from "react";
import { List } from "native-base";
import { Image } from "react-native";
import { ShopItemStyled } from "../../styles";

const ShopItem = ({ shop, navigation }) => {
  return (
   
  <List.Item onPress={() => navigation.navigate("ShopDetail", { shop })}>
      <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{ uri: shop.image }}
      />
      <ShopItemStyled>{shop.name}</ShopItemStyled>
 </List.Item>
  );
};
export default ShopItem