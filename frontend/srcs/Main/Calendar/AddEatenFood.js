import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { SearchBar } from "../FoodList/SearchBar";
import { AddEatenFoodSign } from "./AddEatenFoodSign";
import { BlankSpace } from "./BlankSpace";
import {
  getDataFromStorage,
  setDataToStorage,
} from "../../func/func_data_communication";

export const AddEatenFood = ({ day, setDay, month, setMonth, date }) => {
  const [ismodalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };

  const onPress = (newFood) => {
    const newDay = day.slice();
    newDay.push(newFood);
    let newMonth = JSON.parse(JSON.stringify(month));
    newMonth[date] = newDay;
    setMonth(newMonth);
    setDay(newDay);

    const firstKeyName = "@" + date;
    const secondKeyName = firstKeyName.substring(0, 8);

    const existenceFunc = (keyName, data) => {
      if (keyName.length > 8) {
        setDataToStorage(keyName, newDay, 0);
      } else {
        const key = firstKeyName.substring(1);
        data[key] = newDay;
        setDataToStorage(keyName, data, 0);
      }
    };

    getDataFromStorage(firstKeyName, existenceFunc, 0, 0);
    getDataFromStorage(secondKeyName, existenceFunc, 0, 0);
    toggleModal();
  };

  return (
    <>
      <View
        style={{ flexDirection: "column", alignItems: "center", margin: 10 }}
      >
        <AddEatenFoodSign toggleModal={toggleModal} />
        <BlankSpace />
        {ismodalVisible ? (
          <Modal
            style={{ position: "absolute", width: "90%", height: 700 }}
            isVisible={true}
            animationOutTiming={400}
            onBackdropPress={toggleModal}
            onRequestClose={toggleModal}
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
        ) : null}
      </View>
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
    height: "50%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  imagestyle: {
    borderRadius: 130,
    // borderWidth: 3,
    // borderColor: "black",
    height: 90,
    width: 90,
  },
  textstyle: {
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    color: "white",
    marginTop: 8,
  },
});
