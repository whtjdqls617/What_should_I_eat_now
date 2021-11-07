import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const UserEmail = ({ email }) => {

	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.title}>이메일</Text>
			<Text style={styles.detail}>{email}</Text>
		</View>
	);
};

const styles = StyleSheet.create({

	title: {
		fontSize: 20,
		fontFamily: "BlackHanSans_400Regular",
	},
	detail: {
		marginTop: "3%",
		fontSize: 15,
		fontFamily: "BlackHanSans_400Regular",
		opacity: 0.4,
	},
});
