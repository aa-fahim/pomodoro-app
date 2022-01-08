import React, { useState } from "react";
import styled from "styled-components/native";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { registerUser } from "../api/api";
import { themes } from "../styles/themes";

type ILoginScreen = {
  navigation: any 
}

export default function LoginScreen({ navigation }: ILoginScreen) {
  const { loginLabel } = LoginScreen.constants.en;
  const [userName, setuserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitPress = () => {
    // registerUser(userName, password);
    console.log("userName password:", userName, password);
    navigation.navigate("MainScreen");
  };

  return (
    <Container>
      <Header>Login</Header>
      <StyledInputBox
        label="Username"
        placeholder="Enter username"
        value={userName}
        onChangeText={(value) => setuserName(value)}
      />
      <StyledInputBox
        label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
      <Button label={loginLabel} onPress={onSubmitPress} />
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
  width: 200;
  margin-bottom: 20;
`;
