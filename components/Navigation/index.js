import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import {ShopDetail} from "../ShopDetail";
import ProductList from "../ProductList";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";


const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#C9D8B6",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{
          headerTitle: "Shops",
          headerRight: () => <CartButton style={{backgroundColor: "#C9D8B6"}}/>,
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton style={{backgroundColor: "#C9D8B6"}}/>,
          };
        }}
      />
      <Screen
        name="ProductList"
        component={ProductList}
        options={({ route }) => {
          const { product } = route.params;
          return {
            title: product.name,
          };
        }}
      />
      <Screen
        options={{ title: "Cart" }}
        name="CartList"
        component={CartList}
      />
 
    </Navigator>
  );
};

export default RootNavigator;