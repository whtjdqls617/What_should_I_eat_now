import { StyledImage, StyledImage2 } from "../../style";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { getTokenFromStorage, postDataToServer } from "../../func/func_data_communication";
import { ip } from "../../data/data";

export const OneOtherOption = ({ image, navigation, name }) => {
  const [ismodalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };

  if (ismodalVisible)
    return (
    <>
      <TouchableOpacity onPress={toggleModal}>
        <StyledImage source={image} style={{ borderRadius: 120 }} />
      </TouchableOpacity>
      <Modal isVisible={true} hasBackdrop={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              title="선택"
              onPress={() => {
				const okFunc = (value) => {

					postDataToServer(`${ip}/recommend-food/select`, name, value, 0, 0);
					navigation.reset({ routes : [{name : 'Main'}]});
				};

				getTokenFromStorage(okFunc, 0, 0);
              }}
              style={styles.button}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "BlackHanSans_400Regular",
                }}
              >
                결정
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.button2}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "BlackHanSans_400Regular",
                }}
              >
                취소
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
  else
    return (
      <>
      <TouchableOpacity onPress={toggleModal}>
        <StyledImage2 source={image} style={{ borderRadius: 120 }} />
      </TouchableOpacity>
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
});
