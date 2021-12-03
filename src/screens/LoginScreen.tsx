import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { registerUser } from "../api/api";

export default function LoginScreen() {
  const { signupLabel } = LoginScreen.constants.en;
  const [userName, setuserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitPress = () => {
    registerUser(userName, password);
    console.log("userName password:", userName, password);
  };

  return (
    <View style={styles.container}>
      <Text>Helo world</Text>
      <TextInput
        value={userName}
        onChangeText={setuserName}
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.textInput}
      />
      <Button title={signupLabel} onPress={onSubmitPress} />
    </View>
  );
}

LoginScreen.constants = {
  en: {
    signupLabel: "Sign Up",
  },
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    height: "100%",
  },
  textInput: {
    color: "white",
    border: "1px solid white",
  },
});
