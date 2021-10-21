import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OtherOptions } from "./OtherOptions";
import YoutubePlayer from "react-native-youtube-iframe";

export const OtherFood = ({ navigation }) => {
  const data = [
    ["카레", "https://reactjs.org/logo-og.png"],
    ["덮밥", "https://reactjs.org/logo-og.png"],
    ["라면", "https://reactjs.org/logo-og.png"],
  ];

  //받아온 데이터 형식을 유용하게 바꿔주기

  return (
    <View style={styles.container}>
      <Text style={styles.select}>골라볼래?</Text>
      <View style={styles.img_food_algin}>
        <OtherOptions data={data} navigation={navigation} />
      </View>
      <View style={styles.foodnameRow}>
        <Text style={styles.foodname1}>{data[0][0]}</Text>
        <Text style={styles.foodname2}>{data[1][0]}</Text>
        <Text style={styles.foodname3}>{data[2][0]}</Text>
      </View>
      <Text style={styles.youtube}>유튜브 먹방</Text>
      <View style={styles.youtubealign}>
        <YoutubePlayer height={400} videoId={"VyAvn29ViY8"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foodname1: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    height: 24,
    width: 88,
    textAlign: "center",
  },
  foodname2: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    height: 24,
    width: 88,
    marginLeft: 21,
    textAlign: "center",
  },
  foodname3: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    height: 24,
    width: 88,
    marginLeft: 23,
    textAlign: "center",
  },
  foodnameRow: {
    height: 24,
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-around",
  },
  select: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    fontSize: 56,
    marginTop: 40,
    marginLeft: 9,
    fontWeight: "bold",
  },
  youtube: {
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
    fontSize: 30,
    marginTop: "13%",
    marginLeft: 25,
    fontWeight: "bold",
  },
  img_food_algin: {
    height: 96,
    flexDirection: "row",
    marginTop: "15%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  youtubealign: {
    marginTop: "6%",
  },
});
