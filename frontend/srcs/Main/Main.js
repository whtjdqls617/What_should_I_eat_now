import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import { icons } from "../data/icons";
import { getDataFromServer, getTokenFromStorage } from "../func/func_data_communication";
import { ip } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Main = ({ navigation, SignInExpired }) => {
  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecommendByAlgorithm", SignInExpired)}
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
            onPress={() => {
              const okFunc = (value) => {
                const now = new Date();
                const year = now.getFullYear().toString();
                const month = (now.getMonth() + 1).toString().padStart(2, "0");
                const day = "01";
                const date = year + "-" + month + "-" + day;
                const today =
                  year +
                  "-" +
                  month +
                  "-" +
                  now.getDate().toString().padStart(2, "0");

                const params = {
                  params: { month: date },
                  headers: {
                    "X-AUTH-TOKEN": value,
                  },
                };

                const resFunc = (data) => {
                  const object = {
                    data: data,
                    today: today,
                    SignInExpired: SignInExpired
                  };
                  navigation.navigate("CustomCalendar", object);
                };

                getDataFromServer(
                  `${ip}/calendar/food`,
                  params,
                  resFunc,
                  0,
                  SignInExpired
                );
              };

              getTokenFromStorage(okFunc, 0, 0);
            }}
          >
            <Image
              source={icons[0]}
              resizeMode="contain"
              style={styles.img_calendar}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => navigation.navigate("RecommendByRandom", SignInExpired)}
          >
            <Image
              source={icons[1]}
              resizeMode="contain"
              style={styles.img_RBR}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => navigation.navigate("Setting", SignInExpired)}
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
