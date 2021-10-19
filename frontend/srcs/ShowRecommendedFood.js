import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { getData, selectFood } from "./func_data_communication";
import { ip } from "./data";
import { StyledImage } from "./style";

export const ShowRecommendedFood = ({ data, updateIndex, navigation }) => {
  const imgUrl = "https://reactjs.org/logo-og.png";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이걸로 결정?</Text>
      <Image
        source={{ uri: imgUrl }}
        resizeMode="contain"
        style={styles.image1}
      />
      <Text style={styles.foodname}>{data[0].pickFoodName1}</Text>
      <View style={styles.buttonarray}>
        <TouchableOpacity
          style={{
            margin: "10%",
            backgroundColor: "orange",
            alignItems: "center",
            height: 55,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
          onPress={() => {
            selectFood(`${ip}/question`, "덮밥", navigation);
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontFamily: "Base" }}>
            응!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: "10%",
            backgroundColor: "orange",
            alignItems: "center",
            height: 55,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
          onPress={() => {
            updateIndex(true);
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontFamily: "Base" }}>
            고민좀...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
	fontFamily: 'Base',
    color: "#121212",
    height: 49,
    width: 207,
    fontSize: 40,
    marginTop: 92,
    fontWeight: "bold",
  },
  foodname: {
    color: "#121212",
    height: 22,
    width: 126,
    marginTop: 30,
	justifyContent : 'center',
	textAlign: 'center'
  },
  buttonarray: {
    marginTop: 80,
    width: 100,
    alignItems: "center",
  },
  image1: {
    width: 242,
    height: 242,
    marginTop: 30,
  },
});
