import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { food_name } from "../data/data";
import { SearchPreview } from "./SearchPreview";
import { arrayToObjectsInArray } from "../func/func_change_var_type";

export const SearchBar = ({ onPress }) => {
  const [previewFood, setPreviewFood] = useState([]);
  const [value, setValue] = useState("");

  const matchFoodName = (input) => {
    let foodObject = [];
    if (input.length > 0) {
      const food = food_name.filter((food) => food.includes(input));
      foodObject = arrayToObjectsInArray(food);
    }
    setPreviewFood(foodObject);
  };

  return (
    <>
      <TextInput
        style={{
          marginTop: "5%",
          height: 40,
          width: "90%",
          backgroundColor: "gray",
          borderRadius: 30,
          color: "white",
          paddingHorizontal: "4%",
          fontFamily: "BlackHanSans_400Regular",
          opacity: 0.8,
        }}
        placeholder="음식 검색!"
        placeholderTextColor="white"
        value={value}
        onChangeText={(input) => {
          setValue(input);
          matchFoodName(input);
        }}
      />
      <SearchPreview
        input={value}
        previewFood={previewFood}
        onPress={onPress}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
