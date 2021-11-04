import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const DecisionButton = ({ navigation, SignInExpired }) => {

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => {
				/*
			axios.post()
			.then
			*/
				navigation.navigate("Main");
			}}
		>
			<Text style={styles.buttonText}>결정</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

	button: {
		margin: "10%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		justifyContent: "center",
		borderRadius: 30,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
});
