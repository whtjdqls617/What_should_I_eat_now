import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View, LogBox } from "react-native";
import { SearchBar } from "./SearchBar";
import { SelectedFoodList } from "./SelectedFoodList";
import { HomeButton } from "../HomeButton";
import {
  onPressInLikeSearchPreview,
  onPressInDisLikeSearchPreview,
} from "../../func/func_on_press";
import { setDataToStorage } from "../../func/func_data_communication";

export const FoodList = ({ navigation, route }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const initialLikeFood = route.params.likeFood;
  const initialDisLikeFood = route.params.disLikeFood;

  const [signal, setSignal] = useState(0);
  const [likeFoodList, setLikeFoodList] = useState(initialLikeFood);
  const [disLikeFoodList, setDisLikeFoodList] = useState(initialDisLikeFood);

  const onPressApplyButton = () => {
    const keyName = "@food_list";
    const data = {
      likeFood: likeFoodList,
      disLikeFood: disLikeFoodList,
    };
    const nextStep = () => navigation.navigate("Main");
    setDataToStorage(keyName, data, nextStep);
  };

  const onPressInLSP = (item) => {
    onPressInLikeSearchPreview(
      item,
      likeFoodList,
      disLikeFoodList,
      setLikeFoodList
    );
  };

  const onPressInDLSP = (item) => {
    onPressInDisLikeSearchPreview(
      item,
      likeFoodList,
      disLikeFoodList,
      setDisLikeFoodList
    );
  };

  const [onPress, foodList, setFoodList] =
    signal == 0
      ? [onPressInLSP, likeFoodList, setLikeFoodList]
      : [onPressInDLSP, disLikeFoodList, setDisLikeFoodList];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <HomeButton navigation={navigation} />
      <View style={styles.titlealign}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => setSignal(0)}>
          <Text
            style={{
              fontSize: 70,
              textAlign: "center",
              fontFamily: "BlackHanSans_400Regular",
              color: signal == 0 ? "black" : "gray",
              opacity: signal == 0 ? 1 : 0.3,
            }}
          >
            좋아
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => setSignal(1)}>
          <Text
            style={{
              fontSize: 70,
              textAlign: "center",
              fontFamily: "BlackHanSans_400Regular",
              color: signal != 0 ? "black" : "gray",
              opacity: signal != 0 ? 1 : 0.3,
            }}
          >
            싫어
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <SearchBar onPress={onPress} />
        <SelectedFoodList foodList={foodList} setFoodList={setFoodList} />
      </View>
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={onPressApplyButton}
        >
          <Text style={styles.textstyle}>적용</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlealign: {
    flex: 0.13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
    textAlign: "center",
  },
  buttonstyle: {
    height: 55,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
  },
  buttonalign: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "9%",
  },
});
