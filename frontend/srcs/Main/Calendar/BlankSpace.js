import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const BlankSpace = () => {

	return (
		<>
			<Text style={styles.textstyle}>no</Text>
			<TouchableOpacity style={{ marginTop: 5 }}>
				<Text style={styles.textstyle2}>x</Text>
			</TouchableOpacity></>
	);
};

const styles = StyleSheet.create({

	textstyle: {
		textAlign: "center",
		fontFamily: "BlackHanSans_400Regular",
		color: "white",
		marginTop: 8,
	},
	textstyle2: {
		fontSize: 30,
		fontFamily: "BlackHanSans_400Regular",
		color: "white",
	}
});