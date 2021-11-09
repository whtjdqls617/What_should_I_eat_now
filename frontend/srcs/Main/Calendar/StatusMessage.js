import React, {useState} from "react";
import { Text, StyleSheet } from "react-native";

export const StatusMessage = ({ day }) => {

	const foodNumber = day.length;
	let message = "";

	switch (foodNumber) {
		case 0:
			message = "\"힘들어도 밥은 먹자!\"";
			break;
		case 1:
			message = "\"하루에 세 끼는 먹어야지!\"";
			break;
		case 2:
			message = "\" 그만하면 됐지... \"";
			break;
		case 3:
			message = "\"잘했어 아주 잘했어!\"";
			break;
		case 20:
			message = "\"위는 무사한 거지?\"";
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