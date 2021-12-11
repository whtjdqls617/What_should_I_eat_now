import React, {useState} from "react";
import { Text, StyleSheet } from "react-native";

export const StatusMessage = ({ day }) => {

	const foodNumber = day.length;
	let message = "";

	switch (foodNumber) {
		case 0:
			message = "\"단식 투쟁 중이야?\"";
			break;
		case 1:
			message = "\"원푸드 다이어트해?\"";
			break;
		case 2:
			message = "\"사는데 두 끼면 충분하지\"";
			break;
		case 3:
			message = "\"훌륭해!\"";
			break;
		case 6:
			message = "\"신종자살법?\"";
			break;
		default:
			message = "\"오늘 하루도 힘내자!\"";
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