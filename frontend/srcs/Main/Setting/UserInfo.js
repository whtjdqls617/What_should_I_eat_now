import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { StyledImage } from "../../style";
import { checkNickname } from "../../func/func_check_userinfo";
import Modal from "react-native-modal";

export const UserInfo = ({ navigation }) => {
  const [nickName, setNickName] = useState("기존닉네임");
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  if (modalVisible)
    return (
      <View style={styles.container}>
        <Text style={styles.head}>회원정보</Text>
        <Text style={styles.title}>이메일</Text>
        <Text style={styles.detail}>111@gmail.com</Text>
        <Text style={styles.title}>닉네임</Text>
        <View style={styles.nicknamealign}>
          <TextInput
            onChangeText={(input) => {
              if (checkNickname(input) && input.length != 0) setNickName(input);
            }}
          >
            <Text>기존닉네임</Text>
          </TextInput>
          <TouchableOpacity
            style={styles.changebutton}
            onPress={() => {
              setModalVisible(true);
              /*
         const okFunc = () => {
           const resFunc = () => {
             setAlertMessage("사용 가능한 닉네임입니다.");
             setModalVisible(true);
            }
           const noFunc = () => {
            setAlertMessage("중복된 닉네임입니다.");
            setModalVisible(true);
           const errFunc = () => {
             Alert.alert("서버와 통신이 되지 않습니다.");
           }
         }
           const params = 닉네임
           putDataToServer(url, params, resFunc, noFunc, errFunc)
         };

         getTokenFromStorage(okFunc, noFunc, 0);
        */
            }}
          >
            <Text style={styles.buttonText}>변경</Text>
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
                  {alertMessage}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
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
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate("UserPassword")}
        >
          <Text style={styles.buttonText}>비밀번호 변경</Text>
        </TouchableOpacity>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <Text style={styles.head}>회원정보</Text>
        <Text style={styles.title}>이메일</Text>
        <Text style={styles.detail}>111@gmail.com</Text>
        <Text style={styles.title}>닉네임</Text>
        <View style={styles.nicknamealign}>
          <TextInput
            onChangeText={(input) => {
              if (checkNickname(input) && input.length != 0) setNickName(input);
            }}
          >
            <Text>기존닉네임</Text>
          </TextInput>
          <TouchableOpacity
            style={styles.changebutton}
            onPress={() => {
              setModalVisible(true);
               /*
         const okFunc = () => {
           const resFunc = () => {
             setAlertMessage("사용 가능한 닉네임입니다.");
             setModalVisible(true);
            }
           const noFunc = () => {
            setAlertMessage("중복된 닉네임입니다.");
            setModalVisible(true);
           const errFunc = () => {
             Alert.alert("서버와 통신이 되지 않습니다.");
           }
         }
           const params = 닉네임
           putDataToServer(url, params, resFunc, noFunc, errFunc)
         };

         getTokenFromStorage(okFunc, noFunc, 0);
        */
            }}
          >
            <Text style={styles.buttonText}>변경</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate("UserPassword")}
        >
          <Text style={styles.buttonText}>비밀번호 변경</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  head: {
    fontSize: 50,
    fontFamily: "BlackHanSans_400Regular",
  },
  title: {
    fontSize: 20,
    fontFamily: "BlackHanSans_400Regular",
  },
  detail: {
    fontSize: 15,
    fontFamily: "BlackHanSans_400Regular",
    opacity: 0.4,
  },
  nicknamealign: {
    flexDirection: "row",
  },
  changebutton: {
    height: 30,
    width: 60,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonstyle: {
    height: 40,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
  button: {
    height: 30,
    width: 60,
    borderRadius: 20,
    backgroundColor: "orange",
    justifyContent: "center",
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
});
