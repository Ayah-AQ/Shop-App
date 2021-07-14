  
import React from "react";
import {
  Title,
  TopStyling,
  HomeBackground,
  BottomStyling,
  ButtonStyled,
} from "../../styles";


const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{ uri: "https://cdn.vox-cdn.com/thumbor/1S7mDgXKPLF7mww1c05QVjaon7w=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19661987/acastro_190807_3592_best_anime_2019_0001__1_.jpg" }}
    >
      <TopStyling>
        <Title>Anime Army </Title>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("ShopList")}>
          Shop List
        </ButtonStyled>
      </BottomStyling>
  
      
    </HomeBackground>
  );
};

export default Home;