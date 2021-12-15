import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { food_image } from "../../data/data";
import { onPressSelectFood } from "../../func/func_on_press";
import { HomeButton } from "../HomeButton";

export const RecommendedFood = ({ data, updateIndex, navigation }) => {
  const food_name = data[0];
  let food_name_without_space = food_name.slice();
  while (food_name_without_space.includes(" ")) {
    food_name_without_space = food_name_without_space.replace(" ", "");
  }

  return (
    <>
      <HomeButton navigation={navigation} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>이걸로 결정?</Text>
          <Image
            source={food_image[food_name_without_space]}
            style={styles.img_recommend_food}
          />
          <Text style={styles.foodname}>{food_name}</Text>
          <View style={styles.button_align}>
            <TouchableOpacity
              style={styles.button_yes}
              onPress={() => onPressSelectFood(navigation, food_name)}
            >
              <Text style={styles.buttonText}>응!</Text>
            </TouchableOpacity>
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
  title: {
    flex: 0.6,
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 40,
  },
  foodname: {
    flex: 0.3,
    fontSize: 25,
    fontFamily: "BlackHanSans_400Regular",
    marginTop: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  button_align: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
  button_yes: {
    margin: "10%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 55,
    width: 100,
    justifyContent: "center",
    borderRadius: 30,
  },
  button_no: {
    margin: "10%",
    backgroundColor: "gray",
    alignItems: "center",
    height: 55,
    width: 100,
    justifyContent: "center",
    borderRadius: 30,
  },
  img_recommend_food: {
    borderWidth: 3,
    borderRadius: 140,
    borderColor: "black",
    width: 242,
    height: 242,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
