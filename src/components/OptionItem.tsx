import React, { FC, ReactNode } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

type OptionItemProps = {
  optionLabel: string;
  option: ReactNode;
};

const OptionItem: FC<OptionItemProps> = ({ optionLabel, option }) => {
  return (
    <Container>
      <Text>{optionLabel}</Text>
      <View>{option}</View>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export default OptionItem;
