import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { info } from "../data/icons";

export const InfoButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.info}
      onPress={() => navigation.navigate("CreditPage")}
    >
      <Image source={info} style={{ width: 25, height: 25 }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  info: {
    marginTop: "10%",
    marginRight: "5.5%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
