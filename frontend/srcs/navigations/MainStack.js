import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecommendByRandom } from "../Main/RecommendByRandom/RecommendByRandom";
import { RecommendByAlgorithm } from "../Main/RecommendByAlgorithm/RecommendByAlgorithm";
import { CustomCalendar } from "../Main/Calendar/Calendar";
import { Main } from "../Main/Main";
import { FoodList } from "../Main/FoodList/FoodList";
import { CreditPage } from "../Main/CreditPage";

const MainStack = createStackNavigator();

export const MainStackNav = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Main" component={Main} />
      <MainStack.Screen
        name="RecommendByAlgorithm"
        component={RecommendByAlgorithm}
      />
      <MainStack.Screen name="CustomCalendar" component={CustomCalendar} />
      <MainStack.Screen
        name="RecommendByRandom"
        component={RecommendByRandom}
      />
      <MainStack.Screen name="FoodList" component={FoodList} />
      <MainStack.Screen name="CreditPage" component={CreditPage} />
    </MainStack.Navigator>
  );
};
