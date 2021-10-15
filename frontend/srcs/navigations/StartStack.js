import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStack } from './MainStack';
import { SignIn } from '../SignIn';


/*
1. Stack1: 로그인화면, 메인화면
  2. 로그인화면: 회원가입 페이지, 좋아하는 음식 묻는 페이지 , 싫어하는 음식 묻는 페이지
  3. 메인화면: 뭐 먹지? 뭐 먹었지? random, settings
    4. 뭐 먹지?: 질문 페이지 3개, 음식 추천 페이지, 골라볼래 페이지
    5. settings: 1, 2, 3

*/




const StartStack = createStackNavigator();

export const StartStackNav = () => {
  return (
    <StartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StartStack.Screen name="MainStack" component={MainStack} />
      <StartStack.Screen name="SignIn" component={SignIn} />
    </StartStack.Navigator>
  );
};
