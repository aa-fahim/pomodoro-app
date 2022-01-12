import React, { FC, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { themes } from "../styles/themes";

type TypographyProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  size?: number;
};

const Typography: FC<TypographyProps> = ({ children, style, size = 14 }) => {
  return (
    <Label size={size} style={style}>
      {children}
    </Label>
  );
};

type TextProps = {
  size: number;
};

const Label = styled.Text<TextProps>`
  color: ${themes.white};
  font-size: ${(props) => props.size};
`;

export default Typography;
