import React from "react";
import { TouchableOpacity, Image, Linking, StyleSheet } from "react-native";

export const SearchMukbang = ({ foodName, iconImage }) => {
  const onPressYoutube = () =>
    Linking.openURL(
      `https://www.youtube.com/results?search_query=${foodName}먹방`
    );

  return (
    <TouchableOpacity onPress={onPressYoutube}>
      <Image
        style={{ height: 35, width: 50 }}
        source={iconImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
