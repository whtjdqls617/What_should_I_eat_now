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
          <Text style={styles.title}>{headerText}</Text>
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
          <Text style={styles.title}>{headerText}</Text>
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
          <Text style={styles.title}>{headerText}</Text>
          <Image
            style={styles.img_recommend_food}
            source={food_image[foodName_without_space]}
          />
          <Text style={styles.foodname}>{foodName}</Text>
          <TouchableOpacity
		  	style={{borderWidth : 2, borderColor : 'black', borderRadius : 130, backgroundColor : 'orange'}}
            onPress={() => {
              setFoodName("");
              setpushRandom(true);
            }}
          >
            {/* <Image source={random} /> */}
			<Text style={{height : 40, width : 40, textAlign : 'center'}}>PUSH</Text>
          </TouchableOpacity>
          <TouchableOpacity
		  style={styles.button}
            onPress={() => {
              /*
        axios.post()
        .then
        */
              navigation.navigate("Main");
            }}
          >
            <Text style={styles.buttonText}>결정</Text>
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
    marginBottom: "15%",
  },
  img_recommend_food: {
    borderWidth: 3,
    borderRadius: 140,
	borderColor : 'black',
    width: 242,
    height: 242,
    marginTop: "14%",
  },
  title: {
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 45,
    marginTop: 92,
  },
  foodname: {
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    height: 49,
    width: 207,
    fontSize: 25,
    marginTop: '5%',
  },
  button: {
    margin: "10%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 55,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
