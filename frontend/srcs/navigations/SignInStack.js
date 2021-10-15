import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { MainStackNav } from "./MainStack";
import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";
import { AskLike } from "../AskLike";
import { AskDisLike } from "../AskDisLike";

const SignInStack = createStackNavigator();

export const SignInStackNav = ({ setSignIn }) => {

  return (
    <SignInStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      {/* <Drawer.Screen name={`Home`} children={({navigation})=><Home name={name} setName={setName} navigation={navigation}/>}/> */}

      <SignInStack.Screen name="SignIn" children={({navigation}) => <SignIn setSignIn={setSignIn} navigation={navigation} />} />
      <SignInStack.Screen name="SignUp" component={SignUp} />
      <SignInStack.Screen name="AskLike" component={AskLike} />
      <SignInStack.Screen name="AskDisLike" component={AskDisLike} />
      {/* <SignInStack.Screen name="MainStackNav" component={MainStackNav} /> */}
    </SignInStack.Navigator>
  );
};

/*
풀리퀘 어려워...
*/
