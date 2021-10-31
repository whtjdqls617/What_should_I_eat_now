import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecommendByRandom } from "../Main/RecommendByRandom/RecommendByRandom";
import { RecommendByAlgorithm } from "../Main/RecommendByAlgorithm/RecommendByAlgorithm";
import { CustomCalendar } from "../Main/Calendar/Calendar";
import { Main } from "../Main/Main";
import { Setting } from "../Main/Setting/Setting";
import { CheckPassword } from "../Main/Setting/CheckPassword";
import { EditPassword } from "../Main/Setting/EditPassword";
import { FoodList } from "../Main/Setting/FoodList";

const MainStack = createStackNavigator();

export const MainStackNav = () => {
  return (
    <MainStack.Navigator
		screenOptions={{
			headerShown: false
	  }}>
      <MainStack.Screen name="Main" component={Main} />
	  <MainStack.Screen name="RecommendByAlgorithm" component={RecommendByAlgorithm} />
      <MainStack.Screen name="CustomCalendar" component={CustomCalendar} />
      <MainStack.Screen name="RecommendByRandom" component={RecommendByRandom} />
      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="CheckPassword" component={CheckPassword} />
      <MainStack.Screen name="EditPassword" component={EditPassword} />
      <MainStack.Screen name="FoodList" component={FoodList} />
    </MainStack.Navigator>
  );
};
