import React, { useState } from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet, Alert } from "react-native";
import { plus } from "../../data/icons"
import Modal from "react-native-modal";
import { SearchBar } from "../../SignUp/SearchBar"
export const AddEatenFood = ({ day, setDay, eatingHistory, setEatingHistory }) => {
    const [ismodalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!ismodalVisible);
    };

	const onPress = (newFood) => {
		const array = day.slice();
		array.push(newFood.food);
		toggleModal();
		setDay(array);
	}

	const onBackdropPress = () => {
		toggleModal();

	}

  if (ismodalVisible)
    return (
      <>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            style={{
              borderRadius: 130,
              height: 100,
              width: 100,
              margin: 10,
            }}
            source={plus}
          />
        </TouchableOpacity>
        <Modal
          isVisible={true}
          animationOutTiming={400}
          onBackdropPress={() => toggleModal()}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  marginTop: "15%",
                  textAlign: "center",
                  fontFamily: "BlackHanSans_400Regular",
                  fontSize: 35,
                }}
              >
                음식 검색!
              </Text>
              <SearchBar onPress={onPress} />
            </View>
          </View>
        </Modal>
      </>
    );
  else
    return (
      <>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            style={{
              borderRadius: 130,
              height: 100,
              width: 100,
              margin: 10,
            }}
            source={plus}
          />
        </TouchableOpacity>
      </>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height : '50%',
        width : '90%',
        backgroundColor: "white",
        borderRadius: 20,
        alignItems : 'center'
    },
})