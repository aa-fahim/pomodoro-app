import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import Container from "../styles/Container";
import Wrapper from "../styles/Wrapper";
import Button from "../components/Button";
import Switch from "../components/Switch";
import CountdownTimer from "../components/CountdownTimer";
import { StatsContext } from "../context/statsContext";

const studyTime = 20;
const breakTime = 10;

const TimerScreen = () => {
  const context = useContext(StatsContext);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [countdownDuration, setCountdownDuration] = useState<number>(studyTime);
  const [countdownTimerKey, setCountdownTimerKey] = useState<number>(0);

  const onStartHandler = () => {
    setIsPlaying(true);
    setStartTime(Date.now());
  };

  const onStopHandler = () => {
    setIsPlaying(false);
    const timeSpentStudying = Date.now() - startTime;
    context.updateTotalTimeSpentStudying(timeSpentStudying);
    setStartTime(0);
  };

  const onCompleteHandler = () => {
    onStopHandler();
    setIsFocus(!isFocus);
    const timeToReset = isFocus ? studyTime : breakTime;

    setCountdownTimerKey(countdownTimerKey + 1);
    setCountdownDuration(timeToReset);
  }

  const resetTimer = () => {
    onStopHandler();
    const timeToReset = isFocus ? studyTime : breakTime;
    
    setCountdownTimerKey(countdownTimerKey + 1);
    setCountdownDuration(timeToReset);
  }

  const onSwitch = () => {
    const timeToReset = isFocus ? breakTime : studyTime;
    setIsFocus(!isFocus);
    setCountdownTimerKey(countdownTimerKey + 1);
    setCountdownDuration(timeToReset);
  }

  return (
    <Container>
      <Wrapper>
        <SwitchWrapper>
          <Switch activeDefault={isFocus} option1="Focus" option2="Break" onSwitch={onSwitch} />
        </SwitchWrapper>
        <CountdownTimer
          key={countdownTimerKey}
          duration={countdownDuration} 
          isPlaying={isPlaying}
          onComplete={onCompleteHandler}
        />
        <ButtonWrapper>
          <StartAndStopButton
            isPlaying={isPlaying}
            onStartHandler={onStartHandler}
            onStopHandler={onStopHandler}
          />
          <TimerButton label="Reset" onPress={resetTimer} />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

interface IStartAndStopButtonProps {
  isPlaying: boolean
  onStartHandler: () => void
  onStopHandler: () => void
}

const StartAndStopButton = ({
  isPlaying,
  onStartHandler,
  onStopHandler,
}: IStartAndStopButtonProps ) => {
  const label = isPlaying ? "Stop" : "Start";
  const eventHandler = isPlaying ? onStopHandler : onStartHandler;

  return (
    <TimerButton label={label} onPress={eventHandler} />
  )
}

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
