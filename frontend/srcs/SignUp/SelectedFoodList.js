import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  ObjectsInArrayToArray,
  arrayToObjectsInArray,
} from "../func/func_change_var_type";

export const SelectedFoodList = ({ foodList, setFoodList }) => {
  return (
    <>
      <FlatList
        style={{ flex: 1, marginTop: "8%" }}
        data={foodList}
        initialNumToRender={10}
		keyExtractor={( item, index ) => index.toString() }
        renderItem={({ item }) => {

          return (
            <>
              <View style={styles.todolistalign}>
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: "BlackHanSans_400Regular",
                  }}
                >
                  {item}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    const newFoodList = foodList.slice();
                    newFoodList.splice(newFoodList.indexOf(item), 1);
                    setFoodList(newFoodList);
                  }}
                >
                  <Text
                    style={{
                      color: "red",
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
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todolistalign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
