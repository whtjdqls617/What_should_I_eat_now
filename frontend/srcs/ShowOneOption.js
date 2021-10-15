import { Styles ,Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { opts } from "./icons";
import { StyledView, StyledImage, StyledOptionText } from "./style";

export const ShowOneOption = ({ array, image, selectOption, lightEffect, imgStyle }) => {

  const onPress = () => {
    selectOption(array);

  };

  return (
		<>
			<TouchableOpacity onPress={onPress} styled={{padding : 10}}>
				<StyledImage source={image} lightEffect={lightEffect} style={imgStyle}/>
			</TouchableOpacity>
		</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#121212",
    fontSize: 15,
  },
  a23Row: {
    height: 22,
    flexDirection: "row",
    marginTop: -232,
    marginLeft: 63,
    marginRight: 62
  },
  image1Row: {
    height: 87,
    flexDirection: "row",
	justifyContent: 'center',
    marginTop: 131,
  }
});