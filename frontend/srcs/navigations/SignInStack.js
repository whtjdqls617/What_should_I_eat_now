import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { AskLike } from "../SignUp/AskLike";
import { AskDisLike } from "../SignUp/AskDisLike";

const SignInStack = createStackNavigator();

export const SignInStackNav = ({ setSignIn }) => {

  return (
    <SignInStack.Navigator
      screenOptions={{
        headern: true,
      }}
    >
      <SignInStack.Screen name="SignIn" children={({navigation}) => <SignIn setSignIn={setSignIn} navigation={navigation} />} />
      <SignInStack.Screen name="SignUp" component={SignUp} />
      <SignInStack.Screen name="AskLike" component={AskLike} />
      <SignInStack.Screen name="AskDisLike" component={AskDisLike} />
    </SignInStack.Navigator>
  );
};

/*
풀리퀘 어려워...
*/
