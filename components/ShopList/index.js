import {List, Spinner } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import  ShopItem from "../ShopItem";

const ShopList = ({ navigation }) => {
  const loading = useSelector((state) => state.shops.loading);
  const shops = useSelector((state) => state.shops.shops 

  );
  const shopList= shops.map((shop) => <ShopItem navigation={navigation} key={shop.id} shop={shop} />);

  console.log(shops);
  return ( 
    <>
    {loading &&  <Spinner color="#C9D8B6" /> }
    <List>{shopList}</List>;
    </>)

};

export default ShopList;

