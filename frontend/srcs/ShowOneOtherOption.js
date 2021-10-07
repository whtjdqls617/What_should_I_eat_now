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
              <Button
                title="선택"
                onPress={() => {
                  selectFood(`${ip}/question`, "덮밥", navigation);
                }}
                style={styles.button}
              />
              <Button
                title="취소"
                onPress={toggleModal}
                style={styles.button}
              />
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
    padding: 70,
    shadowColor: "black",
    shadowOffset: {
      width: 20,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    justifyContent: "space-around",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#F194FF",
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
