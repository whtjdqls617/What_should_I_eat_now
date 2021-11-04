import React, { useState } from "react";
import {
	Alert,
	Button,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { NewPasswordFirstInput } from "./NewPasswordFirstInput";
import { NewPasswordSecondInput } from "./NewPasswordSecondInput";
import { NotEqualError } from "./NotEqualError";
import { WrongFormatError } from "./WrongFormatError";

export const NewPassword = ({ passwords, setPasswords }) => {
	const [password, setPassword] = useState("");
	const [firstopacity, setfirstOpacity] = useState(0);
	const [secondopacity, setsecondOpacity] = useState(0);

	return (
		<>
			<Text style={styles.titlestyle}>새 비밀번호</Text>
			<NewPasswordFirstInput
				setPassword={setPassword}
				setfirstOpacity={setfirstOpacity}
				passwords={passwords}
				setPasswords={setPasswords} />
			<WrongFormatError firstopacity={firstopacity} />
			<Text style={styles.titlestyle}>새 비밀번호 확인</Text>
			<NewPasswordSecondInput
				password={password}
				passwords={passwords}
				setPasswords={setPasswords}
				setsecondOpacity={setsecondOpacity} />
			<NotEqualError secondopacity={secondopacity} />
		</>
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
