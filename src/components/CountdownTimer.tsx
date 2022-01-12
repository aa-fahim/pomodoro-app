import React from "react";
import { Animated, Dimensions } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { formatTime } from "../util/formatTime";

const screenWidth = Dimensions.get("window").width;

type ICountdownTimer = {
  duration: number;
  isPlaying: boolean;
};

const CountdownTimer = ({ duration, isPlaying }: ICountdownTimer) => {
  const CountdownCircleTimerWidth = screenWidth * 0.65;

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={duration}
      colors={[
        ["#004777", 0.4],
        ["#F7B801", 0.4],
        ["#A30000", 0.2],
      ]}
      size={CountdownCircleTimerWidth}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
          {formatTime(remainingTime)}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  );
};

export default CountdownTimer;
