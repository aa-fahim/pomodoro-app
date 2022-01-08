import React, { CSSProperties } from "react";
import styled from "styled-components/native";
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
  value: string;
  onChangeText: () => {};
  style?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
};

const InputBox:React.FC<InputBoxProps> = (props: InputBoxProps) => {
  const { label, style, ...restProps } = props;

  return (
    <View style={style}>
      <Label>{label}</Label>
      <View>
        <StyledTextInput {...restProps} />
      </View>
    </View>
  );
};

const Label = styled.Text`
  color: ${themes.white};
  font-size: 10;
  margin-bottom: 2;
`;

const StyledTextInput = styled.TextInput`
  color: ${themes.white};
  border: 1px solid white;
  border-radius: 4;
  padding-horizontal: 10;
  padding-vertical: 4;
`

export default InputBox;
