import { StyleSheet} from 'react-native';
  
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import  RootNavigator  from "./components/Navigation/index";
import { NativeBaseProvider } from 'native-base';



export default function App() {

  return (
    <Provider store={store}>
      <NativeBaseProvider >
     <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
