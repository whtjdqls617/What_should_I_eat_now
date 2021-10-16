import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import axios from "axios";
import { ip } from "./data";

export const SignUp_Email = ({ userinfo, setUserinfo }) => {
  const [email, setEmail] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [isokmodalVisible, setokModalVisible] = useState(false);
  const [buttonColor, setbuttonColor] = useState("orange");

  const toggleokModal = () => {
    setokModalVisible(!isokmodalVisible);
  };

  const checkEmail = (input) => {
    if (input.includes("@") && input.includes(".")) return true;
    return false;
  };

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
            // axios
            //   .get(`${ip}/user/signup/check-email`)
            //   .then(function (response) {
            //     //response.dfd == "ok"
            //     setokModalVisible(true);
            //     //response.dfds == "fail"
            //     // Alert.alert("이미 가입이 된 이메일입니다")
            //   })
            //   .catch(function (error) {
            //     console.log("err: ");
            //     console.log(error);
            //     return 0;
            //   });
            setokModalVisible(true);
          }}
        >
          <Text style={{ color: "white" }}>중복 확인</Text>
        </TouchableOpacity>
        <Modal isVisible={isokmodalVisible} hasBackdrop={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ margin: 25, fontSize: 16 }}>
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
                <Text style={{ color: "white" }}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Text style={{ opacity: opacity, marginLeft: "3%", color: "red" }}>
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
    // padding: 10,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  textinput: {
    margin: 8,
    width: 200,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: "2%",
  },
  textinputcolumn: {
    flex: 0.4,
    justifyContent: "center",
  },
  buttonstyle: {
    height: 40,
    width: 110,
    backgroundColor: "orange",
    shadowColor: "black",
    borderRadius: 40,
    margin: 15,
    justifyContent: "center",
  },
  duplicatedbutton: {},
});
