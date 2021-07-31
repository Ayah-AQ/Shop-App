import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as types from "./types"

const setUser = (token) => {
  AsyncStorage.setItem("Token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      AsyncStorage.setItem("Token", res.data.token);
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (userData,navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      AsyncStorage.setItem("Token", res.data.token);
      dispatch(setUser(res.data.token));
      navigation.navigate("Home")
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  AsyncStorage.removeItem("Token");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("Token");

  if (token) {
    const user = decode(token);

    if (Date.now() < user.exp) {
      dispatch(setUser(token));
    } else {
      AsyncStorage.removeItem("Token");
      dispatch(signout());
    }
  }
};