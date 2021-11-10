import React from "react";
import { Alert, TouchableOpacity, Text, StyleSheet } from "react-native";
import { arrayToObject } from "../func/func_change_var_type";

export const NextButtoninSignUp = ({ navigation, userinfo }) => {

	const alertMessage = [
		"닉네임을 다시 입력해주세요",
		"이메일을 다시 입력해주세요",
		"비밀번호를 다시 입력해주세요",
	];

	const params = {
		userinfo: arrayToObject(userinfo),
		disLikeFoodList: [],
		likeFoodList: []
	};

	const onPress = () => {
		for (let i = 0; i < 3; i++) {
			if (userinfo[i] == 0) {
				Alert.alert(alertMessage[i]);
				return (0);
			}
		}
		navigation.navigate("AskLike", params);
	};

	return (
		<TouchableOpacity
			style={styles.buttonstyle}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>다음</Text>
		</TouchableOpacity>
	);

}

const styles = StyleSheet.create({
	buttonstyle: {
		height: 55,
		width: 100,
		backgroundColor: "orange",
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "BlackHanSans_400Regular",
	},
	buttonText: {
		fontSize : 18,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
});