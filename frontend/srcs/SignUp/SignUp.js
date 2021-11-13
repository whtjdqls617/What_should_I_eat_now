import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { NextButtoninSignUp } from "./NextButtoninSignUp";
import { SignUp_Email } from "./SignUp_Email";
import { SignUp_NickName } from "./SignUp_NickName";
import { SignUp_PassWord } from "./SignUp_PassWord";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export const SignUp = ({ navigation }) => {
	const [userinfo, setUserinfo] = useState([0, 0, 0]);

	console.log("userInfo: ", userinfo);
	return (
    <KeyboardAwareScrollView style={{marginTop : '45%'}}>
		<View style={{flex : 1, justifyContent : 'center'}}>
        	<Text style={styles.headerText}>회원가입</Text>
		</View>
        <View style={styles.body}>
          <SignUp_NickName userinfo={userinfo} setUserinfo={setUserinfo} />
          <SignUp_Email userinfo={userinfo} setUserinfo={setUserinfo} />
          <SignUp_PassWord userinfo={userinfo} setUserinfo={setUserinfo} />
        </View>
        <View style={styles.buttonalign}>
          <NextButtoninSignUp navigation={navigation} userinfo={userinfo} />
        </View>
	</KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
	buttonalign: {
		flex: 1,
		marginTop : '15%',
		alignItems: "center",
		justifyContent : 'center'
	},
	headerText: {
		textAlign : 'center',
		fontSize: 45,
		fontFamily: "BlackHanSans_400Regular",
	},
	body: {
		flex: 1,
		marginTop : '15%',
		justifyContent : 'flex-end',
		marginLeft: "13%",
	},
});
