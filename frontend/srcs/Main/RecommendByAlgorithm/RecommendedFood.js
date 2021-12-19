import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { HomeButton } from "../HomeButton";
import { FoodImage } from "./FoodImage";
import { FoodName } from "./FoodName";
import { TitleText } from "./TitleText";
import { YesButton } from "./YesButton";

export const RecommendedFood = ({ data, navigation }) => {
  const [foodName, setFoodName] = useState(data[0]);

  return (
    <>
      <HomeButton navigation={navigation} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <TitleText />
          <FoodImage name={foodName} setFunc={setFoodName} />
          <FoodName name={foodName} />
          <View style={styles.button_align}>
            <YesButton nav={navigation} name={foodName} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: "10%",
  },
  container: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  button_align: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
});
