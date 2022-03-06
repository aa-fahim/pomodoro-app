import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import ScreenContainer from "../styles/ScreenContainer";
import Wrapper from "../styles/Wrapper";
import Button from "../components/Button";
import Switch from "../components/Switch";
import CountdownTimer from "../components/CountdownTimer";
import { StatsContext } from "../context/statsContext";

const studyTime = 2;
const breakTime = 1;

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
    const timeSpentStudying = Date.now() - startTime;
    context.updateTotalTimeSpentStudying(timeSpentStudying);
    setStartTime(0);
    setIsPlaying(false);
  };

  const onCompleteHandler = () => {
    onStopHandler();
    const timeToReset = isFocus ? breakTime : studyTime;
    setIsFocus(!isFocus);
    setCountdownDuration(timeToReset);
    setCountdownTimerKey(countdownTimerKey + 1);
  }

  const resetTimer = () => {
    onStopHandler();
    setCountdownTimerKey(countdownTimerKey + 1);
  }

  const onSwitch = () => {
    const timeToReset = isFocus ? breakTime : studyTime;
    setIsFocus(!isFocus);
    setCountdownDuration(timeToReset);
    setCountdownTimerKey(countdownTimerKey + 1);
  }

  return (
    <ScreenContainer>
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
    </ScreenContainer>
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
