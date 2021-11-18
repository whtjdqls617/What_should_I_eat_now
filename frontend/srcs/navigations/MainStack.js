import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecommendByRandom } from "../Main/RecommendByRandom/RecommendByRandom";
import { RecommendByAlgorithm } from "../Main/RecommendByAlgorithm/RecommendByAlgorithm";
import { CustomCalendar } from "../Main/Calendar/Calendar";
import { Main } from "../Main/Main";
import { Setting } from "../Main/Setting/Setting";
import { FoodList } from "../Main/Setting/FoodList";
import { UserInfo } from "../Main/Setting/UserInfo";
import { UserPassword } from "../Main/Setting/UserPassword/UserPassword";
import { CreditPage } from "../Main/Setting/CreditPage";

const MainStack = createStackNavigator();

export const MainStackNav = ({ SignInExpired }) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="Main"
        children={({ navigation }) => (
          <Main SignInExpired={SignInExpired} navigation={navigation} />
        )}
      />
      <MainStack.Screen name="RecommendByAlgorithm" component={RecommendByAlgorithm} />
      <MainStack.Screen name="CustomCalendar" component={CustomCalendar} />
      <MainStack.Screen name="RecommendByRandom" component={RecommendByRandom} />
      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="UserInfo" component={UserInfo} />
      <MainStack.Screen name="UserPassword" component={UserPassword} />
      <MainStack.Screen name="FoodList" component={FoodList} />
	  <MainStack.Screen name="CreditPage" component={CreditPage} />
    </MainStack.Navigator>
  );
};
