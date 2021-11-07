import React, { useState } from "react";
import { food_image } from "../../data/data";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export const EatenFood = ({ food_name, index, onXPress }) => {
  const [ismodalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };

  if (ismodalVisible)
    return (
      <View
        style={{ flexDirection: "column", alignItems: "center", margin: 10 }}
      >
        <Image style={styles.imagestyle} source={food_image[food_name]} />
        <Text style={styles.textstyle}>{food_name}</Text>
        <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleModal}>
          <Text style={{ fontSize : 30, fontFamily: "BlackHanSans_400Regular", color: "red" }}>
            x
          </Text>
        </TouchableOpacity>
        <Modal isVisible={true} animationOutTiming={400}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  marginTop: "4%",
                  textAlign: "center",
                  fontFamily: "BlackHanSans_400Regular",
                  fontSize: 20,
                }}
              >
                진짜 지울꺼야?
              </Text>
              <View style={{ flexDirection: "row", marginTop: "5%" }}>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                    onXPress(index);
                  }}
                  style={styles.button2}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "BlackHanSans_400Regular",
                    }}
                  >
                    응
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  title="선택"
                  onPress={toggleModal}
                  style={styles.button}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "BlackHanSans_400Regular",
                    }}
                  >
                    아니
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  else
    return (
      <View
        style={{ flexDirection: "column", alignItems: "center", margin: 10 }}
      >
        <Image style={styles.imagestyle} source={food_image[food_name]} />
        <Text style={styles.textstyle}>{food_name}</Text>
        <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleModal}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "BlackHanSans_400Regular",
              color: "red",
            }}
          >
            x
          </Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
  },
  imagestyle: {
    borderRadius: 130,
    borderWidth: 3,
	borderColor : 'black',
    height: 90,
    width: 90,
  },
  textstyle: {
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    marginTop: 8,
  },
  xbuttonstyles: {
    flex: 1,
  },
  button: {
    margin: 10,
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    margin: 10,
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
