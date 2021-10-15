import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Setting } from "../Setting";
import { CheckPassword } from "../CheckPassword";
import { EditPassword } from "../EditPassword";
import { ShowFoodList } from "../ShowFoodList";
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
      <SettingStack.Screen name="CheckPassword" component={CheckPassword} />
      <SettingStack.Screen name="EditPassword" component={EditPassword} />
      <SettingStack.Screen name="ShowFoodList" component={ShowFoodList} />
      <SettingStack.Screen name="MainStack" component={MainStackNav} />
    </SettingStack.Navigator>
  );
};

export default SettingStackNav;

/*
ShowFoodList



*/