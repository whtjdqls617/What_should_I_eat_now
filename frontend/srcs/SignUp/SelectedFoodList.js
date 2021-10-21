import React from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { ObjectsInArrayToArray, arrayToObjectsInArray } from "../func/func_change_var_type";

export const SelectedFoodList = ({ foodList, setFoodList }) => {

	return (
		<>
			<FlatList
				style={{flex : 1}}
				data={foodList}
				initialNumToRender={10}
				renderItem={({ item }) => {
					return (
            <>
              <View style={styles.todolistalign}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "BlackHanSans_400Regular",
                  }}
                >
                  {item.food}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    const array = ObjectsInArrayToArray(foodList);
                    array.splice(array.indexOf(item.food), 1);
                    const newFoodList = arrayToObjectsInArray(array);
                    setFoodList(newFoodList);
                  }}
                >
                  <Text
                    style={{
                      color: "blue",
                      margin: 10,
                      fontFamily: "BlackHanSans_400Regular",
                    }}
                  >
                    X
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          );
				}} />
		</>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todolistalign: {
	flexDirection : 'row',
	justifyContent : 'center',
	alignItems : 'center'
  }
});
