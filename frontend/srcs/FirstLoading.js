import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FirstLoading = () => {
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "BlackHanSans_400Regular",
            fontSize: 55,
            fontWeight: "bold",
          }}
        >
          지금 뭐먹지
        </Text>
      </View>
      <View style={styles.editor}>
        <Text style={{ fontSize: 18, fontFamily: "BlackHanSans_400Regular" }}>
          2S2H
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  editor: {
    flex: 0.1,
    alignItems: "center",
  },
});
