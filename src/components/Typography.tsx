import React, { FC, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { themes } from "../styles/themes";

type TypographyProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
};

const Typography: FC<TypographyProps> = ({ children, style, size = 14, color = themes.white }) => {
  return (
    <Label size={size} color={color} style={style}>
      {children}
    </Label>
  );
};

type TextProps = {
  size: number;
  color: string;
};

const Label = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${(props) => props.size};
`;

export default Typography;
