import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const PushButton = ({ setFoodName }) => {

	return (
		<TouchableOpacity
			style={{ marginTop: '7%', backgroundColor: 'orange'}}
			onPress={() => {
				setFoodName("");
			}}
		>
			<Text
				style={{
					borderWidth: 2,
					borderRadius: 100,
					textShadowColor: 'rgba(0, 0, 0, 0.2)',
					textShadowOffset: { height: 1.3, width: 1.3 },
					textShadowRadius: 0.5,
					fontFamily: "BlackHanSans_400Regular",
					color: '#0099FF',
					fontSize: 25,
					textAlign: 'center'
				}}>다른거!</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

});