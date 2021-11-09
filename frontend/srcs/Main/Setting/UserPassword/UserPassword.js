import React, { useState } from "react";
import { NewPassword } from "./NewPassword";
import { CurrentPassword } from "./CurrentPassword";
import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";
import { CancelButton } from "./CancelButton";
import { OkButton } from "./OkButton";


export const UserPassword = ({ navigation }) => {

	const [passwords, setPasswords] = useState([]);
	return (
			<View style={styles.container}>
				<CurrentPassword
					setPasswords={setPasswords}
					passwords={passwords} />
				<NewPassword
					setPasswords={setPasswords}
					passwords={passwords} />
				<View style={styles.buttonalign}>
					<OkButton
						navigation={navigation}
						passwords={passwords} />
					<CancelButton navigation={navigation} />
				</View>
			</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop : '10%'
	},
	buttonalign: {
		flex: 0.1,
		flexDirection: "row",
		marginTop: "8%",
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
	textstyle: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
});