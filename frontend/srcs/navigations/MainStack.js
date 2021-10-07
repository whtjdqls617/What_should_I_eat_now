import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Setting } from "../Setting";
import { RecommendByRandom } from "../RecommendByRandom";
import { RecommendByAlgorithm } from "../RecommendByAlgorithm";
import { Calendar } from "../Calendar";
import Main from "../Main";

/*
1. Stack1: 로그인화면, 메인화면
2. 로그인화면: 회원가입 페이지,
3. 메인화면: 뭐 먹지? 뭐 먹었지?

*/

const MainStack = createStackNavigator();

const MainStackNav = () => {
  return (
    <MainStack.Navigator
		screenOptions={{
			headerShown: true
	  }}>
      <MainStack.Screen name="Main" component={Main} />
      <MainStack.Screen name="Setting" component={Setting} />
	  <MainStack.Screen name="RecommendByAlgorithm" component={RecommendByAlgorithm} />
      <MainStack.Screen name="RecommendByRandom" component={RecommendByRandom} />
      <MainStack.Screen name="Calendar" component={Calendar} />
    </MainStack.Navigator>
  );
};

export default MainStackNav;
