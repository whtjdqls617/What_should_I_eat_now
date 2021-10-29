import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const PrevButtoninAskDisLike = ({ navigation, params}) => {

	return (
		<TouchableOpacity
			style={styles.buttonstyle}
			onPress={() => navigation.navigate("AskLike", params)}
		>
			<Text style={styles.buttonText}>이전</Text>
		</TouchableOpacity>
	);

};

const styles = StyleSheet.create({
	buttonstyle: {
		margin: "10%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	}
});
