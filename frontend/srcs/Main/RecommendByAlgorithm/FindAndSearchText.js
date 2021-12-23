import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export const FindAndSearchText = () => {
  const textArray = ["식당 찾기!", "먹방 검색!"];

  return (
    <>
      {textArray.map((ele, i) => {
        return (
          <View style={styles.map_and_youtube_icon_or_text}>
            <Text key={i} style={styles.text}>
              {ele}
            </Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  map_and_youtube_icon_or_text: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontFamily: "BlackHanSans_400Regular",
  },
});
