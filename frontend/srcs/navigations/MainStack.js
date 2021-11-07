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

const MainStack = createStackNavigator();

export const MainStackNav = ({ setSignIn, SignInExpired }) => {
  return (
    <MainStack.Navigator
		screenOptions={{
			headerShown: false
	  }}>
      <MainStack.Screen name="Main" component={Main} />
	  <MainStack.Screen name="RecommendByAlgorithm" children={({ navigation }) => (
		<RecommendByAlgorithm SignInExpired={SignInExpired} navigation={navigation} />
	  )} />
      <MainStack.Screen name="CustomCalendar" component={CustomCalendar} />
      <MainStack.Screen name="RecommendByRandom" children={({ navigation }) => (
		<RecommendByRandom SignInExpired={SignInExpired} navigation={navigation} />
	  )} />
      <MainStack.Screen name="Setting" children={({ navigation }) => (
          <Setting setSignIn={setSignIn} SignInExpired={SignInExpired} navigation={navigation} />
        )}/>
	  <MainStack.Screen name="UserInfo" component={UserInfo} />
	  <MainStack.Screen name="UserPassword" component={UserPassword} />
      <MainStack.Screen name="FoodList" component={FoodList} />
    </MainStack.Navigator>
  );
};
