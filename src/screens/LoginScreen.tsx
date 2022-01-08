import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { registerUser } from "../api/api";
import { themes } from "../styles/themes";

export default function LoginScreen() {
  const { loginLabel } = LoginScreen.constants.en;
  const [userName, setuserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitPress = () => {
    registerUser(userName, password);
    console.log("userName password:", userName, password);
  };

  return (
    <Container>
      <Header>Login</Header>
      <StyledInputBox
        label="Username"
        placeholder="Enter username"
        value={userName}
        onChangeText={() => setuserName}
      />
      <StyledInputBox
        label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={() => setPassword}
        secureTextEntry={true}
      />
      <Button label={loginLabel} onPress={() => onSubmitPress} />
    </Container>
  );
}

LoginScreen.constants = {
  en: {
    loginLabel: "Login",
  },
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themes.secondary};
  height: 100%;
`;

const Header = styled.Text`
  color: ${themes.white};
  font-size: 20px;
  margin-bottom: 20;
`;

const StyledInputBox = styled(InputBox)`
  width: 200,
  margin-bottom: 40,
`;
