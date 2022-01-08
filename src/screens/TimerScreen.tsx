import React from "react";
import { View } from "react-native";
import CountdownTimer from "../components/CountdownTimer";

const TimerScreen = () => {
  return (
    <View>
      <CountdownTimer duration={100} isPlaying={true}/>
    </View>
  )
}

export default TimerScreen;
