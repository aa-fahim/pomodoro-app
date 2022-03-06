import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/screens/LoginScreen";
import TimerScreen from "./src/screens/TimerScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import InfoScreen from "./src/screens/InfoScreen";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { themes } from "./src/styles/themes";
import { StatsContextProvider } from "./src/context/statsContext";

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
  );
};

type TabBarIconProps = {
  color: string;
  size: number;
};

const BottomTabNavigator = () => {
  return (
    <StatsContextProvider>
      <Tab.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{
          tabBarActiveTintColor: themes.primary,
          headerShown: false,
        }}
        tabBarOptions={{ showLabel: false }}
      >
        <Tab.Screen
          name="TimerScreen"
          component={TimerScreen}
          options={{
            tabBarLabel: "Timer",
            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <MaterialIcons name="timer" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <Ionicons
                name="md-person-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{
            tabBarLabel: "Info",
            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <MaterialIcons name="info-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </StatsContextProvider>
  );
};
