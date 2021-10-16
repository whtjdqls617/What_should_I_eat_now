import React from "react";
import { FlatList, Text, Button, View, TouchableOpacity, StyleSheet } from "react-native";
import { ObjectsInArrayToArray, arrayToObjectsInArray } from "./func_change_var_type";

export const ShowSelectedFoodList = ({ foodList, setFoodList }) => {

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
                <Text style={{fontSize : 15}}>{item.food}</Text>
                <TouchableOpacity
                  onPress={() => {
                    const array = ObjectsInArrayToArray(foodList);
                    array.splice(array.indexOf(item.food), 1);
                    const newFoodList = arrayToObjectsInArray(array);
                    setFoodList(newFoodList);
                  }}
                >
					<Text style={{color : 'blue', margin : 10}}>X</Text>
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
  placeholderstyle: {},
  inputalign: {
    flexDirection: "row",
  },
  todolistalign: {
	flexDirection : 'row',
	justifyContent : 'center',
	alignItems : 'center'
  }
});
