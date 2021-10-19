import { StyledView, StyledImage, StyledOptionText } from "./style";
import {
  Styles,
  Text,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { opts } from "./icons";
import { selectFood } from "./func_data_communication";
import { ip } from "./data";

export const ShowOneOtherOption = ({ image, navigation, imgStyle }) => {
  const [ismodalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={toggleModal} styled={{ padding: 10 }}>
          <StyledImage source={image} style={imgStyle} />
        </TouchableOpacity>
        <Modal isVisible={ismodalVisible} hasBackdrop={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={toggleModal} style={styles.button2}>
                <Text style={{ color: "white", fontFamily: "Base" }}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                title="선택"
                onPress={() => {
                  selectFood(`${ip}/question`, "덮밥", navigation);
                }}
                style={styles.button}
              >
                <Text style={{ color: "white", fontFamily: "Base" }}>결정</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
  },
  button: {
    margin: 10,
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    margin: 10,
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
