  
import { Icon } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
 
import {
  Title,
  TopStyling,
  HomeBackground,
  BottomStyling,
  ButtonStyled,
  Welcome,
  SignOutButtonStyle,
  UserTitle,
} from "../../styles";
import {signout} from "../../store/actions/authActions"
import CartList from "../CartList";
const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  return (
    <HomeBackground
      source={{ uri: "https://cdn.vox-cdn.com/thumbor/1S7mDgXKPLF7mww1c05QVjaon7w=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19661987/acastro_190807_3592_best_anime_2019_0001__1_.jpg" }}
    >
      <TopStyling>
        <Title>Anime Army </Title>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("ShopList")}>
          <Text>Shop List</Text>
        </ButtonStyled>
        <Welcome >
        {user && <UserTitle>{`Welcome ${user.username} 😍`}</UserTitle>}
        {user && (
          <Icon
            name="sign-out"
            as={FontAwesome}
            style={{ color: "black" }}
            onPress={() => dispatch(signout())
          }
           
          />
        )}
      </Welcome>
      {!user && (
        <SignOutButtonStyle style={{backgroundColor:"black",width:60 }} onPress={() => navigation.navigate("Signin")}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </SignOutButtonStyle>
      )}
        </BottomStyling>  
          
       </HomeBackground>
  );
};

export default Home;