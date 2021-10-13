import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../Setting";
import EditUserInfo from "../EditUserInfo";
import ShowLikeFoodList from "../ShowLikeFoodList";
import ShowDisLikeFoodList from "../ShowDisLikeFoodList";
import { MainStackNav } from "./MainStack";
import { Text } from "react-native";

const SettingStack = createStackNavigator();

const SettingStackNav = () => {
	
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <SettingStack.Screen name="Setting" component={Setting} />
      <SettingStack.Screen name="EditUserInfo" component={EditUserInfo} />
      <SettingStack.Screen name="ShowLikeFoodList" component={ShowLikeFoodList} />
      <SettingStack.Screen name="ShowDisLikeFoodList" component={ShowDisLikeFoodList} />
      <SettingStack.Screen name="MainStack" component={MainStackNav} />
    </SettingStack.Navigator>
  );
};

export default SettingStackNav;
