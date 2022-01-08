import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/screens/LoginScreen";
import TimerScreen from "./src/screens/TimerScreen";

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';  

import { themes } from "./src/styles/themes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Timer"
      screenOptions={{
        tabBarActiveTintColor: themes.primary,
        headerShown: false,
      }}
    >
      <Tab.Screen name="Timer" component={TimerScreen} options={{ tabBarLabel: 'Timer', tabBarIcon: ({ color, size }) => <MaterialIcons name="timer" size={size} color={color} /> }}/>
      <Tab.Screen name="Timer1" component={TimerScreen} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} /> }}/>
      <Tab.Screen name="Timer2" component={TimerScreen} />
    </Tab.Navigator>
  )
}
