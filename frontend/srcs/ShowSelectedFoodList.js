import React from "react";
import { FlatList, Text, Button } from "react-native";
import { ObjectsInArrayToArray, arrayToObjectsInArray } from "./func_change_var_type";

const ShowSelectedFoodList = ({ foodList, setFoodList }) => {

	return (
		<>
			<FlatList
				data={foodList}
				initialNumToRender={10}
				renderItem={({ item }) => {
					return (
						<>
							<Text>{item.food}</Text>
							<Button
								title="X"
								onPress={() => {
									const array = ObjectsInArrayToArray(foodList);
									foodList.forEach(food => console.log(food.food));
									array.splice(array.indexOf(item.food), 1);
									const newFoodList = arrayToObjectsInArray(array);
									setFoodList(newFoodList);
								}} />
						</>
					);
				}} />
		</>
	);
}

export default ShowSelectedFoodList;