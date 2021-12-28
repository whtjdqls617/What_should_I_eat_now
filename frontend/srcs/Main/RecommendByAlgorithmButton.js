import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const RecommendByAlgorithmButton = ({ navigation, icon }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecommendByAlgorithm")}
      >
        <Image source={icon} resizeMode="contain" style={styles.image}></Image>
      </TouchableOpacity>
      <Text style={styles.text}>뭐 먹지</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginTop: "35%",
  },
});
