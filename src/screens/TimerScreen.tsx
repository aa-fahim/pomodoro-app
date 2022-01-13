import React, { useState } from "react";
import styled from "styled-components/native";
import Container from "../styles/Container";
import Wrapper from "../styles/Wrapper";
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
      <Wrapper>
        <SwitchWrapper>
          <Switch option1="Focus" option2="Break" />
        </SwitchWrapper>
        <CountdownTimer duration={20} isPlaying={isPlaying} />
        <ButtonWrapper>
          <TimerButton label={"Start"} onPress={onStartHandler} />
          <TimerButton label={"Stop"} onPress={onStopHandler} />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const SwitchWrapper = styled.View`
  margin-bottom: 60px;
`;

const TimerButton = styled(Button)`
  width: 120px;
  height: 50px;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 40px;
`;
export default TimerScreen;
