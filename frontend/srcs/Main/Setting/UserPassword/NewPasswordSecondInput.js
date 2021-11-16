import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const NewPasswordSecondInput = ({ password, passwords, setPasswords, setsecondOpacity }) => {

	const checkSamePassword = (input) => {
		if (input == password) return true;
		else return false;
	};

	return (
		<TextInput
				secureTextEntry={true}
				style={styles.textinputstyle}
				placeholder="비밀번호 확인"
				onChangeText={(input) => {
					if (checkSamePassword(input)) {
						const copy = passwords.slice();
						copy.push(input);
						setPasswords(copy);
						setsecondOpacity(0);
					} else {
						const copy = passwords.slice();
						copy.splice(1, 1);
						setPasswords(copy);
						setsecondOpacity(100);
					}
				}}
			/>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "10%",
	},
	buttonalign: {
		flex: 0.1,
		flexDirection: "row",
		marginTop: "13%",
	},
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
	titlestyle: {
		textAlign: "center",
		fontSize: 25,
		color: "black",
		fontFamily: "BlackHanSans_400Regular",
		marginTop: "7%",
		marginBottom: "2%",
	},
	textstyle: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
	textinputstyle: {
		borderBottomWidth: 0.5,
		height: 35,
		width: 200,
		borderRadius: 5,
		paddingHorizontal: "2%",
		fontFamily: "BlackHanSans_400Regular",
	},
});