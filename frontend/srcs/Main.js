import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecommendByAlgorithm } from "./RecommendByAlgorithm";
import { Calendar } from "./Calendar";
import { RecommendByRandom } from "./RecommendByRandom";
import { Setting } from "./Setting";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, TouchableOpacity, Image } from "react-native";
import { icons } from "./icons";

export const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecommendByAlgorithm")}
      >
        <Image
          source={icons[3]}
          resizeMode="contain"
          style={styles.image9}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.eat}>뭐 먹지</Text>
      <View style={styles.image6Row}>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image
            source={icons[0]}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecommendByRandom")}
        >
          <Image
            source={icons[1]}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
          <Image
            source={icons[2]}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.calendarRow}>
        <Text style={styles.calendar}>뭐 먹었지</Text>
        <Text style={styles.random}>랜덤 추천</Text>
        <Text style={styles.settings}>설정</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eat: {
    fontFamily: "Base",
    color: "#121212",
    height: 50,
    width: 75,
    fontSize: 25,
    marginTop: 10,
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  image6: {
    width: 88,
    height: 88,
    marginTop: 5,
  },
  image7: {
    width: 87,
    height: 87,
    marginLeft: 27,
    marginTop: 6,
  },
  image8: {
    width: 88,
    height: 88,
    marginLeft: 30,
  },
  image6Row: {
    height: 93,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 38,
    marginRight: 37,
  },
  image9: {
    width: 250,
    height: 250,
    marginTop: 150,
    marginLeft: 62,
  },
  calendar: {
    fontFamily: "Base",
    color: "#121212",
    height: 22,
    width: 62,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  random: {
    fontFamily: "Base",
    color: "#121212",
    height: 22,
    width: 62,
    fontSize: 16,
    marginLeft: 52,
    fontWeight: "bold",
    textAlign: "center",
  },
  settings: {
    fontFamily: "Base",
    color: "#121212",
    height: 22,
    width: 34,
    fontSize: 16,
    marginLeft: 70,
    fontWeight: "bold",
    textAlign: "center",
  },
  calendarRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 51,
    marginRight: 64,
  },
});
