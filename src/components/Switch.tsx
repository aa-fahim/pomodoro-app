import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

type SwitchProps = {
  option1: string;
  option2: string;
};

const Switch = ({ option1 = "Yes", option2 = "No" }: SwitchProps) => {
  const onChangeOptionHandler = () => {};

  return (
    <Container onPress={onChangeOptionHandler}>
      <Option>{option1}</Option>
      <Option>{option2}</Option>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

const Option = styled.TouchableOpacity`
  background-color: blue;
`;

export default Switch;
