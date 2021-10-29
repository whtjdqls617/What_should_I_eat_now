import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const NextButtoninAskLike = ({ navigation, params }) => {

	const onPress = () => {
		navigation.navigate("AskDisLike", params);
	}

	return (
		<TouchableOpacity
			style={styles.buttonstyle}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>다음</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonstyle: {
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
	},
});
