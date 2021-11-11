import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { NextButtoninSignUp } from "./NextButtoninSignUp";
import { SignUp_Email } from "./SignUp_Email";
import { SignUp_NickName } from "./SignUp_NickName";
import { SignUp_PassWord } from "./SignUp_PassWord";

export const SignUp = ({ navigation }) => {
	const [userinfo, setUserinfo] = useState([0, 0, 0]);

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

			<View style={styles.container}>
				<Text style={styles.headerText}>회원가입</Text>
				<View style={styles.body}>
					<SignUp_NickName userinfo={userinfo} setUserinfo={setUserinfo} />
					<SignUp_Email userinfo={userinfo} setUserinfo={setUserinfo} />
					<SignUp_PassWord userinfo={userinfo} setUserinfo={setUserinfo} />
				</View>
				<View style={styles.buttonalign}>
					<NextButtoninSignUp navigation={navigation} userinfo={userinfo} />
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginTop: "20%",
	},
	buttonalign: {
		flex: 0.1,
		alignItems: "center",
		marginTop: "50%",
	},
	headerText: {
		fontSize: 45,
		flex: 0.2,
		fontFamily: "BlackHanSans_400Regular",
		marginLeft: "20%",
	},
	body: {
		flex: 0.3,
		marginLeft: "13%",
	},
});
