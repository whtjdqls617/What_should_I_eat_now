import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const SelectedFoodList = ({ foodList, setFoodList }) => {
  return (
    <>
      <FlatList
        style={{ marginTop: "3%", height: 200 }}
        data={foodList}
        initialNumToRender={10}
        keyExtractor={(item, index) => index.toString()}
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
  todolistalign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
