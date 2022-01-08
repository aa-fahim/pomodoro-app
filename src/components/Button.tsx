import React from "react";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import { themes } from "../styles/themes";

type ButtonProps = {
  label: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

const Button = (props: ButtonProps) => {
  const { label, onPress, labelStyle, style } = props;

  return (
    <Container
      style={style}
      onPress={onPress}
    >
      <Label style={labelStyle}>{label}</Label>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themes.primary};
  width: 200;
  height: 36;
  border-radius: 4;
`;

const Label = styled.Text`
  color: ${themes.white};
  font-size: 12;
`;

export default Button;
