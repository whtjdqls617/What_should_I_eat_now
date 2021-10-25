import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Setting } from "../Setting";
import { CheckPassword } from "../CheckPassword";
import { EditPassword } from "../EditPassword";
import { FoodList } from "../FoodList";
import { MainStackNav } from "./MainStack";

const SettingStack = createStackNavigator();

const SettingStackNav = () => {

  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingStack.Screen name="Setting" component={Setting} />
      <SettingStack.Screen name="CheckPassword" component={CheckPassword} />
      <SettingStack.Screen name="EditPassword" component={EditPassword} />
      <SettingStack.Screen name="FoodList" component={FoodList} />
      <SettingStack.Screen name="MainStack" component={MainStackNav} />
    </SettingStack.Navigator>
  );
};

export default SettingStackNav;

/*
FoodList



*/