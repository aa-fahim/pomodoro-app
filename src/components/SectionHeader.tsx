import React, { FC, ReactNode } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import HorizontalBreak from "../styles/HorizontalBreak";

type SectionHeaderProps = {
  header: ReactNode;
};
const SectionHeader: FC<SectionHeaderProps> = ({ header }) => {
  return (
    <Container>
      <HeaderText>{header}</HeaderText>
      <HorizontalBreak />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export default SectionHeader;
