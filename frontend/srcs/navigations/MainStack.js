import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingStackNav from "./SettingStack";
import RecommendByRandom from "../RecommendByRandom";
import RecommendByAlgorithm from "../RecommendByAlgorithm";
import Calendar from "../Calendar";
import Main from "../Main";

const MainStack = createStackNavigator();

export const MainStackNav = () => {
  return (
    <MainStack.Navigator
		screenOptions={{
			headerShown: true
	  }}>
      <MainStack.Screen name="Main" component={Main} />
      <MainStack.Screen name="SettingStackNav" component={SettingStackNav} />
	  <MainStack.Screen name="RecommendByAlgorithm" component={RecommendByAlgorithm} />
      <MainStack.Screen name="RecommendByRandom" component={RecommendByRandom} />
      <MainStack.Screen name="Calendar" component={Calendar} />
    </MainStack.Navigator>
  );
};

