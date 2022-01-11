import React, { useState } from "react";
import styled from "styled-components/native";
import Button from "../components/Button";
import Switch from "../components/Switch";
import CountdownTimer from "../components/CountdownTimer";

const TimerScreen = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const onStartHandler = () => {
    setIsPlaying(true);
  };

  const onStopHandler = () => {
    setIsPlaying(false);
  };

  return (
    <Container>
      <Switch />
      <CountdownTimer duration={100} isPlaying={isPlaying} />
      <ButtonWrapper>
        <Button label={"Start"} onPress={onStartHandler} />
        <Button label={"Stop"} onPress={onStopHandler} />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;
export default TimerScreen;
