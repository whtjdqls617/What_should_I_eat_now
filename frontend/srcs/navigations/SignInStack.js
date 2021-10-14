import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackNav } from "./MainStack";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import AskLike from "../AskLike";
import AskDisLike from "../AskDisLike";

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
      <SignInStack.Screen name="MainStackNav" component={MainStackNav} />
    </SignInStack.Navigator>
  );
};

/*
풀리퀘 어려워...
*/
export default SignInStackNav;
