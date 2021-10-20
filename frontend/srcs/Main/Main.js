import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import { icons } from "../data/icons";

export const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecommendByAlgorithm")}
      >
        <Image
          source={icons[3]}
          resizeMode="contain"
          style={styles.image_RBA}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.text_RBA}>뭐 먹지</Text>
      <View style={styles.bottomimg_align}>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image
            source={icons[0]}
            resizeMode="contain"
            style={styles.img_calendar}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecommendByRandom")}
        >
          <Image
            source={icons[1]}
            resizeMode="contain"
            style={styles.img_RBR}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
          <Image
            source={icons[2]}
            resizeMode="contain"
            style={styles.img_setting}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomtext_align}>
        <Text style={styles.text_calendar}>뭐 먹었지</Text>
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
  text_RBA: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    height: 50,
    width: 75,
    fontSize: 25,
    marginTop: 10,
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  img_calendar: {
    width: 88,
    height: 88,
    marginTop: 5,
  },
  img_RBR: {
    width: 87,
    height: 87,
    marginLeft: 27,
    marginTop: 6,
  },
  img_setting: {
    width: 88,
    height: 88,
    marginLeft: 30,
  },
  bottomimg_align: {
    height: 93,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 38,
    marginRight: 37,
  },
  image_RBA: {
    width: 250,
    height: 250,
    marginTop: 150,
    marginLeft: 62,
  },
  text_calendar: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    height: 22,
    width: 62,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  random: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    height: 22,
    width: 62,
    fontSize: 16,
    marginLeft: 52,
    fontWeight: "bold",
    textAlign: "center",
  },
  settings: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    height: 22,
    width: 34,
    fontSize: 16,
    marginLeft: 70,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomtext_align: {
    height: 22,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 51,
    marginRight: 64,
  },
});
