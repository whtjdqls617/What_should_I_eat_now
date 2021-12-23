import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { HomeButton } from "./HomeButton";
import { icon_source, food_image_source } from "../data/data";

export const CreditPage = ({ navigation }) => {
  const food_data = icon_source.concat(food_image_source);
  const person_data = [
	  "seocho, hayelee",
	  "프론트엔드 구현",
    "suhong",
    "추천 알고리즘 구현",
    "hyahn",
    "백엔드 구현",
  ];

  return (
    <>
      <HomeButton navigation={navigation} />
      <Text style={styles.text0}>Created By</Text>
      <FlatList
        data={person_data}
        initialNumToRender={5}
        style={styles.flatlist1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          if (index % 2 == 0) return <Text style={styles.text3}>{item}</Text>;
          else return <Text style={styles.text2}>{item}</Text>;
        }}
      />
      <Text style={styles.text0}>이미지 출처</Text>
      <FlatList
        data={food_data}
        initialNumToRender={5}
        style={styles.flatlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          if (index % 2 == 0) return <Text style={styles.text1}>{item}</Text>;
          else return <Text style={styles.text2}>{item}</Text>;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginStart: "5%",
    marginTop: "10%",
  },
  flatlist1: {
    marginStart: "5%",
    marginTop: "7%",
    height: 300,
  },
  text0: {
    marginStart: "5%",
    marginTop: "3%",
    fontSize: 30,
    fontFamily: "BlackHanSans_400Regular",
  },
  text1: {
    marginTop: "3%",
    fontSize: 15,
    fontFamily: "BlackHanSans_400Regular",
  },
  text2: {
    fontSize: 13,
  },
  text3: {
    marginTop: "3%",
    fontSize: 20,
    fontFamily: "BlackHanSans_400Regular",
  },
});
