import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { food_name, food_image } from "../../data/data";
import { random } from "../../data/icons";
import { HomeButton } from "../HomeButton";
import { SlotMachine } from "./SlotMachine";

export const RecommendByRandom = ({ navigation }) => {
  const [foodName, setFoodName] = useState("");
  const [pushRandom, setpushRandom] = useState(false);
  const headerText = foodName.length > 0 ? "이건 어때?" : "랜덤 추천";

  let foodName_without_space = foodName.slice();
  while (foodName_without_space.includes(" ")) {
    foodName_without_space = foodName_without_space.replace(" ", "");
  }

  const randomFood = () => {
    const index = Math.floor(Math.random() * food_name.length);
    return food_name[index];
  };

  if (foodName.length > 0 && pushRandom) setpushRandom(false);

  if (pushRandom)
    return (
      <>
        <HomeButton navigation={navigation} />
        <View style={styles.container}>
          <Text>{headerText}</Text>
          <SlotMachine setFoodName={setFoodName} randomFood={randomFood} />
          <TouchableOpacity>
            <Image source={random} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /*
        axios.post()
        .then
        */
              navigation.navigate("Main");
            }}
          >
            <Text>결정</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  else if (foodName.length == 0)
    return (
      <>
        <HomeButton navigation={navigation} />
        <View style={styles.container}>
          <Text>{headerText}</Text>
          <Text>Hello</Text>
          <TouchableOpacity
            onPress={() => {
              setpushRandom(true);
            }}
          >
            <Image source={random} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /*
        axios.post()
        .then
        */
              navigation.navigate("Main");
            }}
          >
            <Text>결정</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  else
    return (
      <>
        <HomeButton navigation={navigation} />
        <View style={styles.container}>
          <Text>{headerText}</Text>
          <Image
            style={{ height: 200, width: 200 }}
            source={food_image[foodName_without_space]}
          />
          <Text>{foodName}</Text>
          <TouchableOpacity
            onPress={() => {
              setFoodName("");
              setpushRandom(true);
            }}
          >
            <Image source={random} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /*
        axios.post()
        .then
        */
              navigation.navigate("Main");
            }}
          >
            <Text>결정</Text>
          </TouchableOpacity>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
});
