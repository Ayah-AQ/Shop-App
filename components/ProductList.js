import { List, Spinner } from "native-base";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { Txt } from "../styles";
import ProductItem from "./ProductItem";

const ProductList = ({ navigation,products }) => {
  const loading = useSelector((state) => state.products.loading);
  if (loading) return <Spinner color="#C9D8B6" />;
  // const products = useSelector((state) => state.products.products);
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} navigation={navigation} />
  ));
  return <List.Item>{productList}</List.Item>;
};

export default ProductList;