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
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export const SearchBar = ({ onPress }) => {
  const [previewFood, setPreviewFood] = useState([]);
  const [value, setValue] = useState("");

  const matchFoodName = (input) => {
    let food = [];
	if (input.length > 0) {
      food = food_name.filter((food) => food.includes(input));
    }
    setPreviewFood(food);
  };

  const searchFoodName = (input) => {
	setValue(input);
	matchFoodName(input);
  };

  return (
    <>
      <TextInput
        style={styles.textInputStyle}
        placeholder="음식 검색!"
        placeholderTextColor="white"
        value={value}
        onChangeText={(input) => searchFoodName(input)}
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
  textInputStyle: {
	marginTop: "5%",
	height: 40,
	width: "90%",
	backgroundColor: "gray",
	borderRadius: 30,
	color: "white",
	paddingHorizontal: "4%",
	fontFamily: "BlackHanSans_400Regular",
	opacity: 0.8,
  },
});
