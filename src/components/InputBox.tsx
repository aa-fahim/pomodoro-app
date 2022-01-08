import React, { CSSProperties } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { themes } from "../styles/themes";

type InputBoxProps = {
  label: string;
  placeholder: string;
  value: string | number;
  onChangeText: () => {};
  style: StyleProp<ViewStyle>;
  secureTextEntry: boolean;
  className?: CSSProperties;
};

const InputBox = (props: InputBoxProps) => {
  const { label, className, style, ...restProps } = props;

  return (
    <View className={className}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput style={styles.textInput} {...restProps} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.secondary,
    height: "100%",
  },
  label: {
    color: themes.white,
    fontSize: 10,
    marginBottom: 2,
  },
  textInput: {
    color: themes.white,
    border: "1px solid white",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});

export default InputBox;
