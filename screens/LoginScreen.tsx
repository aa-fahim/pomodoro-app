import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';

export default function LoginScreen() {
  const { signupLabel } = LoginScreen.constants.en;
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('');

  const onSubmitPress = () => {
    console.log('username password:', username, password)
  }

  return (
    <View style={styles.container}>
      <Text>Helo world</Text>
      <TextInput value={username} onChangeText={setUsername} style={styles.textInput} />
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.textInput} />
      <Button title={signupLabel} onPress={onSubmitPress} />
    </View>
  )
}

LoginScreen.constants = {
  en: {
    signupLabel: "Sign Up"
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    height: "100%"
  },
  textInput: {
    color: "white",
    border: "1px solid white"
  }
})
