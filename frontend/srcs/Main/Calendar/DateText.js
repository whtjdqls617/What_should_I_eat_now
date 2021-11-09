import React from "react";
import { Text, StyleSheet } from "react-native"; 

export const DateText = ({ date }) => {

	const dateArr = date.split('-');
	const unitArr = ['년', '월', '일'];
	let dateText = '';

	dateArr.map((ele, i) => {
		dateText += ele + unitArr[i];
		if (i < 2)
			dateText += ' ';
	});
		
	return (
		<Text style={styles.date}>{dateText}</Text>
	);
};

const styles = StyleSheet.create({
	
	date: {
	  marginTop : '2%',
	  fontSize: 23,
	  color: "black",
	  fontFamily: "BlackHanSans_400Regular",
	  textAlign : 'center'
	},
  });