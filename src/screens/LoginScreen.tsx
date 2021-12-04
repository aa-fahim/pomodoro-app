import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Login</Text>
      <InputBox 
        label="Username"
        placeholder="Enter username"
        value={userName}
        onChangeText={setuserName}
        style={styles.inputBox}
      />
      <InputBox 
        label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.inputBox}
      />
      <Button label={loginLabel} onPress={onSubmitPress} />


    </View>
  );
}

LoginScreen.constants = {
  en: {
    loginLabel: "Login",
  },
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.secondary,
    height: "100%",
  },
  headerStyle: {
    fontSize: 20,
    color: themes.white,
    marginBottom: 20
  },
  inputBox: {
    width: 200,
    marginBottom: 40
  },
  submitButton: {
    width: 200,
    borderRadius: 4,
    backgroundColor: themes.primary
  }
});
