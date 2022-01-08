import React from 'react';
import { Animated } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { formatTime } from '../util/formatTime';

type ICountdownTimer = {
  duration: number
  isPlaying: boolean
}

const CountdownTimer = ({ duration, isPlaying }: ICountdownTimer) => {
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={duration}
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2],
      ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
          {formatTime(remainingTime)}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  )
}

export default CountdownTimer;
