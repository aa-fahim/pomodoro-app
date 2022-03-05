import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Typography from "../components/Typography";
import { themes } from "../styles/themes";

type SwitchProps = {
  option1: string;
  option2: string;
  activeDefault: boolean;
  onSwitch?: () => void;
};

const Switch = ({
  activeDefault,
  option1,
  option2,
  onSwitch,
}: SwitchProps) => {
  const [isActive, setIsActive] = useState<boolean>(activeDefault);

  useEffect(() => {
    setIsActive(activeDefault)
  }, [activeDefault])

  const onChangeOptionHandler = () => {
    setIsActive(!isActive);
    if (onSwitch) onSwitch();
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
    props.isActive ? themes.fourth : themes.secondary};
  transition: background-color 0.4s ease;
  height: 80px;
  width: 120px;
`;

export default Switch;
