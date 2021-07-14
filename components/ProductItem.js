import React, { useState } from "react";
import { Image,Text } from "react-native";
import {  ProductItemStyled } from "../styles";
import {List} from "native-base";
import { useDispatch } from "react-redux";
import NumericInput from "react-native-numeric-input";
import { TouchableOpacity } from "react-native";
import { addItemToCart } from "../store/actions/cartActions";


 const ProductItem = ({ product, navigation }) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleAdd = () => {
      const newItem = { quantity, productId: product.id };
      dispatch(addItemToCart(newItem));
    };

    return (
      <List.Item>
     
          <Image
            style={{ width: 100, height: 100, borderRadius:50 }}
            source={{ uri: product.image }}
          />
     
          <ProductItemStyled>{product.name}</ProductItemStyled>
          <NumericInput
          onChange={setQuantity}
          type='up-down' 
          value={quantity}
          totalWidth={120} 
            totalHeight={50} 
            iconSize={25}
            initValue={quantity}
            step={1}
            rounded 
          />
          <TouchableOpacity
            full
            rounded
            style={{ backgroundColor: "#A9D8B6",width:50,height:40,borderRadius:10 }}
            onPress={handleAdd}
          >
            <Text style={{ color: "black",fontWeight:"bold",textAlign:"center",fontSize:20 }}>Add</Text>
          </TouchableOpacity>
   </List.Item>
    );
  };
  
export default ProductItem