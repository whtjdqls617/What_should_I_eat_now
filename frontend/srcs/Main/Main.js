import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { icons, info } from "../data/icons";
import { RecommendByAlgorithmButton } from "./RecommendByAlgorithmButton";
import { CalendarButton } from "./CalendarButton";
import { RecommendByRandomButton } from "./RecommendByRandomButton";
import { SettingButton } from "./SettingButton";
import { InfoButton } from "./InfoButton";

export const Main = ({ navigation, SignInExpired }) => {
  return (
    <>
			<InfoButton navigation={navigation} />
      <View style={styles.top}>
        <RecommendByAlgorithmButton
          navigation={navigation}
          SignInExpired={SignInExpired}
          icon={icons[3]}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomimg_align}>
          <CalendarButton
            navigation={navigation}
            SignInExpired={SignInExpired}
            icon={icons[0]}
          />
          <RecommendByRandomButton
            navigation={navigation}
            SignInExpired={SignInExpired}
            icon={icons[1]}
          />
          <SettingButton
            navigation={navigation}
            SignInExpired={SignInExpired}
            icon={icons[2]}
          />
        </View>
        <View style={styles.bottomtext_align}>
          <Text style={styles.text_calendar}>뭐 먹었지</Text>
          <Text style={styles.text_random}>랜덤 추천</Text>
          <Text style={styles.text_setting}>음식 리스트</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1.7,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    margin: "8%",
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
    marginTop: "35%",
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
