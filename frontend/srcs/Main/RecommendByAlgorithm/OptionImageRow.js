import React from "react";
import { StyleSheet, View } from "react-native";
import { OptionImage } from "./OptionImage";

export const OptionImageRow = ({ add, image, qna, selectOption, lightEffect}) => {

	const arrayForMap = Array(3).fill(0);

	return (
		<View style={styles.imageRow}>{
			arrayForMap.map((ele, i) =>
				<OptionImage
					key={i + add}
					image={image[i + add]}
					tag={qna[i + 1 + add]}
					selectOption={selectOption}
					lightEffect={lightEffect[i + add]}
				/>)}
		</View>
	);
};

const styles = StyleSheet.create({
	imageRow: {
		marginTop: "3%",
		flexDirection: "row",
		justifyContent: "space-around",
	},
});