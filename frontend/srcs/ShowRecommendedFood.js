import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { getData, selectFood } from "./func_data_communication";
import { ip } from "./data";
import { StyledImage } from "./style";


export const ShowRecommendedFood = ( {data, updateIndex, navigation} ) => {

  const imgUrl = "https://reactjs.org/logo-og.png";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이걸로 결정?</Text>
      <StyledImage
        source={{ uri: imgUrl }}
        resizeMode="contain"
        style={styles.image1}
      />
      <Text style={styles.foodname}>{data[0].pickFoodName1}</Text>
      <View style={styles.buttonarray}>
        <Button
          title="응!"
          onPress={() => {
            selectFood(`${ip}/question`, "덮밥", navigation);
          }}
          style={styles.materialButtonDanger1}
        />
        <Button
          title="고민좀..."
          onPress={() => {
            updateIndex(true);
          }}
          style={styles.materialButtonDanger2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#121212",
    height: 49,
    width: 207,
    fontSize: 40,
    marginTop: 92,
    marginLeft: 84,
  },
  foodname: {
    color: "#121212",
    height: 22,
    width: 126,
    marginTop: 30,
    marginLeft: 144,
  },
  buttonarray: {
	marginTop : 80,
	width : 100,
	marginLeft : 150
  },
  materialButtonDanger1: {
    height: 50,
    width: 127,
    marginLeft: 124,
  },
  materialButtonDanger2: {
    height: 50,
    width: 127,
    marginLeft: 124,
  },
  image1: {
    width: 242,
    height: 242,
    marginTop: 30,
    marginLeft: 66,
  },
});
