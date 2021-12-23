import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { plus } from "../../data/icons";

export const AddEatenFoodSign = ({ toggleModal }) => {
  return (
    <TouchableOpacity onPress={toggleModal}>
      <Image style={styles.imagestyle} source={plus} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: "50%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  imagestyle: {
    borderRadius: 130,
    height: 90,
    width: 90,
  },
  textstyle: {
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    color: "white",
    marginTop: 8,
  },
  modalText: {
    marginTop: "15%",
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 35,
  },
  modal: {
    position: "absolute",
    width: "90%",
    height: 700,
  },
  area: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
});
