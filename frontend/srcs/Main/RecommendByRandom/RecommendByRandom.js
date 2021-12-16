import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { food_image } from "../../data/data";
import { HomeButton } from "../HomeButton";
import { DecisionButton } from "./DecisionButton";
import { PushButton } from "./PushButton";
import { SlotMachine } from "./SlotMachine";
import { icons } from "../../data/icons";
import * as Location from "expo-location";

export const RecommendByRandom = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [foodName, setFoodName] = useState("");
  const headerText = foodName.length > 0 ? "이건 어때?" : "랜덤 추천";

  let foodName_without_space = foodName.slice();
  while (foodName_without_space.includes(" ")) {
    foodName_without_space = foodName_without_space.replace(" ", "");
  }

  const findLocation = () => {
	  (async () => {
		  let { status } = await Location.requestForegroundPermissionsAsync(); // 권한 설정
		  console.log(status);
		  if (status !== "granted") {
			Alert.alert("Permission to access location was denied");
			return;
		  }
		let location = await Location.getCurrentPositionAsync({}); // 현재 위치 받아오기
		setLocation(location);
	  })();
    }

  return (
    <>
      <HomeButton navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>{headerText}</Text>
        {foodName.length > 0 ? (
          <>
            <Image
              style={styles.img_recommend_food}
              source={food_image[foodName_without_space]}
            />
            <Text style={styles.foodname}>{foodName}</Text>
            <View
              style={{
                flex: 0.3,
                flexDirection: "column",
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    findLocation();
                    console.log("in?");
					console.log(location);
					if (location)
                      Linking.openURL(
                        `https://map.naver.com/v5/search/${foodName_without_space}?c=${location.coords.latitude},${location.coords.longitude},15,0,0,0,dh`
                      );
                  }}
                >
                  <Image
                    style={{ height: 30 }}
                    source={icons[5]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      `https://www.youtube.com/results?search_query=${foodName_without_space}먹방`
                    )
                  }
                >
                  <Image
                    style={{ height: 30 }}
                    source={icons[4]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <PushButton setFoodName={setFoodName} />
            <View style={{ flex: 0.5 }}>
              <DecisionButton navigation={navigation} foodName={foodName} />
            </View>
          </>
        ) : (
          <>
            <View style={{ flex: 0.2 }}>
              <SlotMachine setFoodName={setFoodName} />
            </View>
            <Text style={styles.invisibleFoodname}>{foodName}</Text>
            <TouchableOpacity style={styles.invisibleButton}></TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  img_recommend_food: {
    borderWidth: 3,
    borderRadius: 140,
    borderColor: "black",
    width: 242,
    height: 242,
  },
  title: {
    flex: 0.3,
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 45,
  },
  invisibleFoodname: {
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    height: 49,
    width: 207,
    fontSize: 25,
    marginTop: "5%",
    color: "white",
  },
  foodname: {
    flex: 0.2,
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 25,
    color: "black",
    justifyContent: "center",
    marginTop: "5%",
  },
  invisibleButton: {
    marginTop: "7%",
    borderRadius: 130,
    backgroundColor: "white",
  },
  button: {
    margin: "10%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 55,
    width: 100,
    justifyContent: "center",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
