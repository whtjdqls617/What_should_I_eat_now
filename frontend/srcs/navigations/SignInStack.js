import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./MainStack";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import AskLike from "../AskLike";
import AskDisLike from "../AskDisLike";


/*
1. Stack1: 로그인화면, 메인화면
2. 로그인화면: 회원가입 페이지,
3. 메인화면: 뭐 먹지? 뭐 먹었지?

*/

const SignInStack = createStackNavigator();

const SignInStackNav = () => {
  return (
    <SignInStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <SignInStack.Screen name="SignIn" component={SignIn} />
      <SignInStack.Screen name="SignUp" component={SignUp} />
      <SignInStack.Screen name="AskLike" component={AskLike} />
      <SignInStack.Screen name="AskDisLike" component={AskDisLike} />
      <SignInStack.Screen name="MainStack" component={MainStack} />
    </SignInStack.Navigator>
  );
};

export default SignInStackNav;

/*

screen의 options 속성으로 prop 넘김
*/
