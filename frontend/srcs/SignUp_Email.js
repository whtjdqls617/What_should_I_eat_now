import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import axios from "axios";
import { ip } from "./data";

const SignUp_Email = ({ userinfo, setUserinfo }) => {

  const [email, setEmail] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [isokmodalVisible, setokModalVisible] = useState(false);

  const toggleokModal = () => {
    setokModalVisible(!isokmodalVisible);
  };

  const checkEmail = (input) => {
    if (input.includes("@") && input.includes("."))
		return true;
    return false;
  };

  return (
    <>
      <View style={styles.emailrow}>
        <TextInput
          placeholder="이메일"
          onChangeText={(input) => {
            let copy = userinfo.slice();
            copy.splice(1, 1, 0);
            setUserinfo(copy);
            setEmail(input);
            if (checkEmail(input)) {
              setOpacity(0);
            } else setOpacity(100);
          }}
        />
        <Button
          title="중복확인"
          onPress={() => {
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
        />
        <Modal isVisible={isokmodalVisible} hasBackdrop={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>사용 가능한 이메일입니다.</Text>
              <Button
                title="확인"
                onPress={() => {
                  let copy = userinfo.slice();
                  copy.splice(1, 1, email);
                  setUserinfo(copy);
                  toggleokModal();
                }}
                style={styles.button}
              />
            </View>
          </View>
        </Modal>
      </View>
      <Text style={{ opacity: opacity }}>잘못된 이메일 형식입니다.</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emailrow: {
    flexDirection: "row",
  },
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
});

export default SignUp_Email;
