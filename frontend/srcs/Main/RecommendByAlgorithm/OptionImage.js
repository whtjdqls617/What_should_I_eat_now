import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { StyledImage } from "../../style";

export const OptionImage = ({ array, image, selectOption, lightEffect }) => {

	const onPress = () => {
		selectOption(array);
	};

	return (
		<>
			<TouchableOpacity onPress={onPress}>
				<StyledImage source={image} lightEffect={lightEffect} style={styles.optImage} />
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	optImage: {
		alignItems: "center",
		justifyContent: "center",
	},
});