import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "../../styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
   const dispatch = useDispatch()
  const handleSubmit = async () => {
    await dispatch(signin(user, navigation));

   };

  return (
    <AuthContainer>
      <AuthTitle>Sign In</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Don't have an account? Sign up.
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;