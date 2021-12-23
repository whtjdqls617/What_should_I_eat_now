import React, { useState } from "react";
import { food_image } from "../../data/food";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export const EatenFood = ({ food_name, index, onXPress }) => {
  const [ismodalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };

  let food_name_without_space = food_name.slice();
  while (food_name_without_space.includes(" ")) {
    food_name_without_space = food_name_without_space.replace(" ", "");
  }

  if (ismodalVisible)
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagestyle}
          source={food_image[food_name_without_space]}
        />
        <Text style={styles.textstyle}>{food_name}</Text>
        <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleModal}>
          <Text style={styles.xButton}>x</Text>
        </TouchableOpacity>
        <Modal
          isVisible={true}
          animationOutTiming={400}
          onBackdropPress={toggleModal}
          onRequestClose={toggleModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.questionText}>진짜 지울꺼야?</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                    onXPress(index);
                  }}
                  style={styles.button2}
                >
                  <Text style={styles.buttonText}>응</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  title="선택"
                  onPress={toggleModal}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>아니</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagestyle}
          source={food_image[food_name_without_space]}
        />
        <Text style={styles.textstyle}>{food_name}</Text>
        <TouchableOpacity style={{ marginTop: 5 }} onPress={toggleModal}>
          <Text style={styles.xButton}>x</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
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
  buttons: {
    flexDirection: "row",
    marginTop: "5%",
  },
  questionText: {
    marginTop: "4%",
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
  imagestyle: {
    borderRadius: 130,
    borderWidth: 3,
    borderColor: "black",
    height: 90,
    width: 90,
  },
  textstyle: {
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    marginTop: 8,
  },
  xButton: {
    fontSize: 30,
    fontFamily: "BlackHanSans_400Regular",
    color: "red",
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
