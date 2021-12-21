import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { recommendFood } from "../../func/func_recommend_food";

export const NextButton = ({ updateIndex, answer, index, setData, navigation }) => {
  const nextPressEvent = () => {
    if (index == 2) {
      const chosenFood = recommendFood(answer);
      setData(chosenFood);
    }
    else updateIndex(true);
  };

  const prevPressEvent = () => {
    if (index == 0) navigation.reset({ routes: [{ name: "Main" }] });
    else updateIndex(false);
  };

  return (
    <>
      <View style={styles.buttonalign}>
        <TouchableOpacity style={styles.button_prev} onPress={prevPressEvent}>
          <Text style={styles.textstyle}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_next} onPress={nextPressEvent}>
          <Text style={styles.textstyle}>다음</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonalign: {
    flexDirection: "row",
    flex: 0.4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button_prev: {
    margin: "25%",
    backgroundColor: "gray",
    alignItems: "center",
    height: 55,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  button_next: {
    margin: "25%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 55,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
