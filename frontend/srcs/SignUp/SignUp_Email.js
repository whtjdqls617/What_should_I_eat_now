import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import axios from "axios";
import { ip } from "../data/data";
import { getDataFromServer, getTokenFromStorage } from "../func/func_data_communication";

export const SignUp_Email = ({ userinfo, setUserinfo }) => {
  const [email, setEmail] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [isokmodalVisible, setokModalVisible] = useState(false);
  const [buttonColor, setbuttonColor] = useState("orange");

  const toggleokModal = () => {
    setokModalVisible(!isokmodalVisible);
  };

  const checkEmail = (input) => {
    if ((input.includes("@") && input.includes(".")) || input.length == 0)
      return true;
    else return false;
  };
  if (isokmodalVisible)
    return (
      <>
        <View style={styles.emailrow}>
          <TextInput
            style={styles.textinput}
            placeholder="이메일"
            onChangeText={(input) => {
              let copy = userinfo.slice();
              copy.splice(1, 1, 0);
              setUserinfo(copy);
              setEmail(input);
              if (checkEmail(input)) {
                setOpacity(0);
              } else setOpacity(100);
              setbuttonColor("orange");
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: buttonColor,
              borderRadius: 4,
              height: 30,
              width: 60,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (!checkEmail(email)) {
                Alert.alert("잘못된 이메일 형식입니다.");
                return;
              } else setbuttonColor("gray");

			  const okFunc = () => setokModalVisible(true);
			  const noFunc = () => Alert.alert("이미 가입된 이메일입니다.");
              getDataFromServer(`${ip}/user/signup/available-email`, { params: email }, okFunc, noFunc, 0);
            }}
          >
            <Text
              style={{ color: "white", fontFamily: "BlackHanSans_400Regular" }}
            >
              중복 확인
            </Text>
          </TouchableOpacity>
          <Modal isVisible={true} hasBackdrop={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    margin: 25,
                    fontSize: 16,
                    fontFamily: "BlackHanSans_400Regular",
                  }}
                >
                  사용 가능한 이메일입니다.
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    let copy = userinfo.slice();
                    copy.splice(1, 1, email);
                    setUserinfo(copy);
                    toggleokModal();
                  }}
                  style={styles.button}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "BlackHanSans_400Regular",
                    }}
                  >
                    확인
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <Text
          style={{
            opacity: opacity,
            marginLeft: "3%",
            color: "red",
            fontFamily: "BlackHanSans_400Regular",
          }}
        >
          잘못된 이메일 형식입니다.
        </Text>
      </>
    );
  else
    return (
      <>
        <View style={styles.emailrow}>
          <TextInput
            style={styles.textinput}
            placeholder="이메일"
            onChangeText={(input) => {
              let copy = userinfo.slice();
              copy.splice(1, 1, 0);
              setUserinfo(copy);
              setEmail(input);
              if (checkEmail(input)) {
                setOpacity(0);
              } else setOpacity(100);
              setbuttonColor("orange");
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: buttonColor,
              borderRadius: 4,
              height: 30,
              width: 60,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (!checkEmail(email)) {
                Alert.alert("잘못된 이메일 형식입니다.");
                return;
              } else setbuttonColor("gray");
              const okFunc = () => setokModalVisible(true);
			  const noFunc = () => Alert.alert("이미 가입된 이메일입니다.");
              getDataFromServer(`${ip}/user/signup/available-email`, { params: {email: email}}, okFunc, noFunc, 0);
            }}
          >
            <Text
              style={{ color: "white", fontFamily: "BlackHanSans_400Regular" }}
            >
              중복 확인
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            opacity: opacity,
            marginLeft: "3%",
            color: "red",
            fontFamily: "BlackHanSans_400Regular",
          }}
        >
          잘못된 이메일 형식입니다.
        </Text>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emailrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  button: {
    height: 30,
    width: 60,
    borderRadius: 20,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    margin: 8,
    width: 200,
    height: 40,
    borderBottomWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: "2%",
    fontFamily: "BlackHanSans_400Regular",
  },
});
