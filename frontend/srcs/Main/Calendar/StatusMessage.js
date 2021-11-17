import React, {useState} from "react";
import { Text, StyleSheet } from "react-native";

export const StatusMessage = ({ day }) => {

	const foodNumber = day.length;
	let message = "";

	switch (foodNumber) {
		case 0:
			message = "\"밥은 먹고 다니냐?\"";
			break;
		case 1:
			message = "\"괜찮아? 어디 아픈 거야?\"";
			break;
		case 2:
			message = "\"한 끼만 더 챙겨먹을까?\"";
			break;
		case 3:
			message = "\"참 잘했어요~\"";
			break;
		case 20:
			message = "\"폭식은 안 좋아. 줄이도록 하자\"";
			break;
		default:
			message = "\"오늘도 좋은 하루 보내!\"";
			break;
	}

	return (
		<Text style={styles.text}>{message}</Text>
	);

};

const styles=StyleSheet.create({
	text : {
		textAlign : 'center',
		fontFamily : "BlackHanSans_400Regular",
		fontSize : 25
	}
});