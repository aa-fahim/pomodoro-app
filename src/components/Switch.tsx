import React, { useState } from "react";
import styled from "styled-components/native";
import Typography from "../components/Typography";
import { themes } from "../styles/themes";

type SwitchProps = {
  defaultActive?: boolean;
  option1: string;
  option2: string;
};

const Switch = ({
  defaultActive = false,
  option1 = "Yes",
  option2 = "No",
}: SwitchProps) => {
  const [isActive, setIsActive] = useState<boolean>(defaultActive);

  const onChangeOptionHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <Container onPress={onChangeOptionHandler}>
      <Option isActive={isActive}>
        <Typography size={16}>{option1}</Typography>
      </Option>
      <Option isActive={!isActive}>
        <Typography size={16}>{option2}</Typography>
      </Option>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
`;

type OptionProps = {
  isActive: boolean;
};

const Option = styled.View<OptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? themes.secondary : themes.fourth};
  transition: background-color 0.4s ease;
  height: 80px;
  width: 120px;
`;

export default Switch;
