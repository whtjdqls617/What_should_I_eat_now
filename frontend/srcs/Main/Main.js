import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import { icons } from "../data/icons";

export const Main = ({ navigation }) => {
  return (
    <>
      <View style={styles.top}>
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
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomimg_align}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => 
				/*
				axios.get() -> 이번 달 먹은 내역 [{날짜: 9/1, 먹은음식:[고기, 라면, 밥]}, {날짜: 9/2}..]
					.then
						navigation.navigate("CustomCalendar", 이번 달 먹은 내역);
				*/
				
				navigation.navigate("CustomCalendar")}
          >
            <Image
              source={icons[0]}
              resizeMode="contain"
              style={styles.img_calendar}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => navigation.navigate("RecommendByRandom")}
          >
            <Image
              source={icons[1]}
              resizeMode="contain"
              style={styles.img_RBR}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => navigation.navigate("Setting")}
          >
            <Image
              source={icons[2]}
              resizeMode="contain"
              style={styles.img_setting}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomtext_align}>
          <Text style={styles.text_calendar}>뭐 먹었지</Text>
          <Text style={styles.text_random}>랜덤 추천</Text>
          <Text style={styles.text_setting}>설정</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1.8,
    justifyContent: "center",
    alignItems: "center",
	marginTop : '12%'
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
	margin : '8%'
  },
  text_RBA: {
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
  },
  img_calendar: {
    width: 88,
    height: 88,
  },
  img_RBR: {
    width: 87,
    height: 87,
  },
  img_setting: {
    width: 88,
    height: 88,
  },
  bottomimg_align: {
    height: 93,
    flexDirection: "row",
    alignItems: "center",
  },
  image_RBA: {
    width: 250,
    height: 250,
    marginTop: '35%',
  },
  text_calendar: {
    flex: 1,
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
  text_random: {
    flex: 1,
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
  text_setting: {
    flex: 1,
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
  bottomtext_align: {
    flexDirection: "row",
    marginTop: 10,
  },
});
