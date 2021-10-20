import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { ObjectsInArrayToArray, arrayToObjectsInArray } from "../func/func_change_var_type";

export const SearchPreview = ({ input, previewFood, foodList, setFoodList }) => {

	if (input.length > 0  && previewFood.length > 0)
		return (
			<>
				<FlatList
					data={previewFood}
					initialNumToRender={5}
					style={{ width : '80%', borderWidth: 1, borderColor: 'gray', marginStart : -2}}
					// initialScrollIndex={3}
					// getItemLayout={(data, index) => (
					// 	{ length: 200, offset: 200 * index, index }
					// )}
					renderItem={({ item }) => {
						return (
              <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => {
                  const array = ObjectsInArrayToArray(foodList);
                  if (!array.includes(item.food)) {
                    array.push(item.food);
                    const newFoodList = arrayToObjectsInArray(array);
                    setFoodList(newFoodList);
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "BlackHanSans_400Regular",
                  }}
                >
                  {item.food}
                </Text>
              </TouchableOpacity>
            );
					}} />
			</>
		);
	return null;
}
