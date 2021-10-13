import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { ObjectsInArrayToArray, arrayToObjectsInArray } from "./func_change_var_type";
const ShowSearchPreview = ({ input, previewFood, foodList, setFoodList }) => {

	if (input.length > 0)
		return (
			<>
				<FlatList
					data={previewFood}
					initialNumToRender={5}
					// initialScrollIndex={3}
					// getItemLayout={(data, index) => (
					// 	{ length: 200, offset: 200 * index, index }
					// )}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity onPress={() => {
								const array = ObjectsInArrayToArray(foodList);
								if (!array.includes(item.food)) {
									array.push(item.food);
									const newFoodList = arrayToObjectsInArray(array);
									setFoodList(newFoodList);
								}
							}}>
								<Text>{item.food}</Text>
							</TouchableOpacity>
						);
					}} />
			</>
		);
	return null;
}

export default ShowSearchPreview;

