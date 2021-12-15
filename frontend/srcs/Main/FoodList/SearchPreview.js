import React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";

export const SearchPreview = ({ input, previewFood, onPress }) => {

	if (input.length > 0 && previewFood.length > 0)
		return (
			<>
				<FlatList
					data={previewFood}
					initialNumToRender={5}
					style={styles.flatlist}
					keyExtractor={( item, index ) => index.toString() }
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={{ margin: 5 }}
								onPress={() => onPress(item)}
							>
								<Text style={styles.text}>{item}</Text>
							</TouchableOpacity>
						);
					}}
				/>
			</>
		);
	return null;
}


const styles = StyleSheet.create({
	flatlist: {
		width: '80%',
		maxHeight: 135,
		borderWidth: 1,
		borderColor: 'gray',
		marginStart: -2,
	},
	text: {
		fontSize: 16,
		fontFamily: "BlackHanSans_400Regular",
	},
});
