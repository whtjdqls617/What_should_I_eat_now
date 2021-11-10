import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeButton } from "../HomeButton";
import { FoodListButton } from "./FoodListButton";
import { SignOutButton } from "./SignOutButton";
import { UserInfoButton } from "./UserInfoButton";
import { LogBox } from 'react-native';


export const Setting = ({ navigation, route }) => {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
   ]);

	const SignInExpired = route.params;

  return (
    <>
      <HomeButton navigation={navigation} />
      <View style={styles.container}>
         <UserInfoButton navigation={navigation} SignInExpired={SignInExpired}/>
         <FoodListButton navigation={navigation} SignInExpired={SignInExpired}/>
         <SignOutButton SignInExpired={SignInExpired}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15%",
  },
  buttonalign: {
    justifyContent: "center",
    margin: "8%",
  },
  buttonstyle: {
    height: 55,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
  },
  textstyle: {
    fontSize: 20,
    fontFamily: "BlackHanSans_400Regular",
    color: "white",
    textAlign: "center",
  },
});
