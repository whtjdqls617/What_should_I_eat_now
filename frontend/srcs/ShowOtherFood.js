import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ShowOtherOptions } from "./ShowOtherOptions";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

export const ShowOtherFood = ({ navigation }) => {
  const data = [
    ["카레", "https://reactjs.org/logo-og.png"],
    ["덮밥", "https://reactjs.org/logo-og.png"],
    ["라면", "https://reactjs.org/logo-og.png"],
  ];

  //받아온 데이터 형식을 유용하게 바꿔주기

  return (
    <View style={styles.container}>
      <Text style={styles.select}>골라볼래?</Text>
      <View style={styles.image1Row}>
        <ShowOtherOptions data={data} navigation={navigation} />
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
    fontFamily: "Base",
    color: "#121212",
    height: 24,
    width: 88,
    textAlign: "center",
  },
  foodname2: {
    fontFamily: "Base",
    color: "#121212",
    height: 24,
    width: 88,
    marginLeft: 21,
    textAlign: "center",
  },
  foodname3: {
    fontFamily: "Base",
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
    fontFamily: "Base",
    color: "#121212",
    fontSize: 56,
    marginTop: 40,
    marginLeft: 9,
    fontWeight: "bold",
  },
  youtube: {
    fontFamily: "Base",
    color: "#121212",
    fontSize: 30,
    marginTop: "13%",
    marginLeft: 25,
    fontWeight: "bold",
  },
  image1: {
    width: 96,
    height: 96,
  },
  image2: {
    width: 96,
    height: 96,
    marginLeft: 18,
  },
  image3: {
    width: 96,
    height: 96,
    marginLeft: 19,
  },
  image1Row: {
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
