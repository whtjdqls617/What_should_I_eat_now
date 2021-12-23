import React from "react";
import { TouchableOpacity, Image, Linking, StyleSheet } from "react-native";
import { findLocation } from "../../func/func_find_userinfo";

export const FindRestaurant = ({
  location,
  setLocation,
  iconImage,
  foodName,
}) => {
  const onPressMap = () => {
    findLocation(setLocation);
    if (location)
      Linking.openURL(
        `https://map.naver.com/v5/search/${foodName}?c=${location.coords.latitude},${location.coords.longitude},15,0,0,0,dh`
      );
  };

  return (
    <TouchableOpacity onPress={onPressMap}>
      <Image
        style={{ height: 35, width: 50 }}
        source={iconImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
