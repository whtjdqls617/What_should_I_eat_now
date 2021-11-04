import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { getTokenFromStorage, putDataToServer } from "../../../func/func_data_communication";
import { ip } from "../../../data/data";

export const OkButton = ({ navigation, passwords }) => {

	console.log("passwords: ", passwords);

	return (
		<TouchableOpacity
			style={styles.buttonstyle}
			onPress={() => {
				if (passwords[1].length > 0) {

					const okFunc = () => {

						const resFunc = () => {
							Alert.alert("비밀번호가 변경되었습니다");
							navigation.navigate("Setting");
						}
						
						const params = {
							newPass: passwords[1],
							oldPass: passwords[0]
						};

						putDataToServer(`${ip}/user​/info​/pass`, params, resFunc, 0, 0);

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
		height: 45,
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