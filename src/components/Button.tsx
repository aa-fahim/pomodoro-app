import React, { CSSProperties } from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { themes } from "../styles/themes";

type ButtonProps = {
  label: string;
  onPress: () => {};
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  className?: CSSProperties;
};

const Button = (props: ButtonProps) => {
  const { label, onPress, containerStyle, labelStyle, className } = props;

  return (
    <TouchableOpacity
      className={className}
      onPress={onPress}
      style={containerStyle}
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
