import React from "react";
import { StyleSheet, View } from "react-native";
import { OptionText } from "./OptionText";

export const OptionTextRow = ({ add, lightEffect, qna }) => {
  const arrayForMap = Array(3).fill(0);

  return (
    <View style={styles.textRow}>
      {arrayForMap.map((ele, i) => (
        <OptionText
          key={i + add}
          lightEffect={lightEffect[i + add]}
          text={qna[i + 1 + add]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textRow: {
    flexDirection: "row",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
