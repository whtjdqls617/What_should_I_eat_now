import React from "react";
import { TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import { getTokenFromStorage, postDataToServer } from "../func/func_data_communication";
import { ip } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const SigninButton = ({ json, setSignIn }) => {


	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem('@storage_Key', value);
			setSignIn(true);
		} catch (e) {
			console.log("error: ", e);
		}
	};

	const resFunc = (data) => {
		if (data.msg == "ok") {
			storeData(data.data);
		}
		else
			Alert.alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
	};

	const errFunc = () => {
		// Alert.alert("서버와 통신이 바르지 않습니다.");
		Alert.alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
	}


	return (
		<TouchableOpacity
			style={styles.buttonstyle}
			onPress={() => postDataToServer(`${ip}/user/signin`, json, 0, resFunc, errFunc)}
		>
			<Text style={styles.textstyle}>로그인</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({

	buttonstyle: {
		height: 40,
		width: 110,
		backgroundColor: "orange",
		borderRadius: 40,
		margin: 8,
		justifyContent: "center",
	},
	textstyle: {
		fontSize: 15,
		textAlign: "center",
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	}
});
