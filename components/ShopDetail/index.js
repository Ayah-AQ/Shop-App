import React from "react";
// import { useSelector } from "react-redux";
// import { Image } from "react-native";
// import { Card, CardItem, Text, Body } from "native-base";
// import ProductList from "./ProductList";

import { Spinner } from "native-base";
import { useSelector } from "react-redux";
import ProductList from "../ProductList";
import { ShopDetailImage, ShopDetailTitle, ShopDetailWrapper } from "../../styles";

export const ShopDetail = ({ route, navigation }) => {
  const shops = useSelector((state) => state.shops.shops);
  const products = useSelector(
    (state) => state.products.products
  );
  const {shop}=route.params

const shopProducts= shop.products.map(product=>products.find((_product)=>product.id===_product.id))
console.log(shopProducts);
  return (

      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shop.image }} />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
        <ProductList products={shopProducts} navigation={navigation} />
      </ShopDetailWrapper>

  );

};