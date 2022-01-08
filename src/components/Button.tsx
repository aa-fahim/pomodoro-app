import React, { CSSProperties } from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { themes } from "../styles/themes";

type ButtonProps = {
  label: string;
  onPress: () => {};
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

const Button = (props: ButtonProps) => {
  const { label, onPress, containerStyle, labelStyle, style } = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
    >
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.primary,
    width: 200,
    height: 36,
    borderRadius: 4,
  },
  labelStyle: {
    color: themes.white,
    fontSize: 12,
  },
};

export default Button;
