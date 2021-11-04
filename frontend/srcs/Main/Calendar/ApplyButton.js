import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const ApplyButton = () => {

	return (
		<TouchableOpacity style={styles.button_1}>
			<Text style={styles.buttontextstyle}>적용</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button_1: {
		margin: "8%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	buttontextstyle: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
});
