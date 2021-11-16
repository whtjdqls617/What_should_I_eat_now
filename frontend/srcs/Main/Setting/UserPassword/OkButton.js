import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { getTokenFromStorage, putDataToServer } from "../../../func/func_data_communication";
import { ip } from "../../../data/data";

export const OkButton = ({ navigation, passwords, SignInExpired }) => {

	return (
		<TouchableOpacity
			style={styles.buttonstyle}
			onPress={() => {
				if (passwords.length > 1 && passwords[1].length > 0) {

					const okFunc = (value) => {

						const resFunc = () => {
							Alert.alert("비밀번호가 변경되었습니다");
							navigation.navigate("Setting");
						};

						const params = {
							newPass: passwords[1],
							oldPass: passwords[0]
						};

						putDataToServer(`${ip}/user/info/pass`, params, value, resFunc, 0, SignInExpired);
					};

					getTokenFromStorage(okFunc, 0, 0);
				}

				else Alert.alert("비밀번호를 다시 입력해주세요.");
			}}
		>
			<Text style={styles.textstyle}>확인</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

	buttonstyle: {
		margin: "3%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	textstyle: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
});