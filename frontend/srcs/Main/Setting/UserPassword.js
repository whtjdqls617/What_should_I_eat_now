import React, {useState} from "react";
import { EditPassword } from "./EditPassword";
import { CheckPassword } from "./CheckPassword";
import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";

export const UserPassword = ({ navigation }) => {

	const [passwords, setPasswords] = useState([]);
	return (
		<>
			<CheckPassword setPasswords={setPasswords} passwords={passwords}/>
			<EditPassword setPasswords={setPasswords} passwords={passwords}/>
			<View style={styles.buttonalign}>
        		<TouchableOpacity
          			style={styles.buttonstyle}
          			onPress={() => {
            			navigation.navigate("Setting");
          			}}
        		>
         			<Text style={styles.textstyle}>취소</Text>
       			</TouchableOpacity>
       			<TouchableOpacity
       	   			style={styles.buttonstyle}
          			onPress={() => {
            			// if (samePassword.length > 0)
						// 	/*
						// 	axios.put(url, password)
						// 	.then
						// 		navigation.navigate("EditPassword");
						// 	.error
						// 		Alert.alert("잘못된 비밀번호입니다.")
						// 	*/
             			//  navigation.navigate("Setting");
            			// else Alert.alert("비밀번호를 다시 입력해주세요.");
          			}}
        		>
          			<Text style={styles.textstyle}>확인</Text>
        		</TouchableOpacity>
     		 </View>
  		</>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  buttonalign: {
    flex: 0.1,
    flexDirection: "row",
    marginTop: "13%",
  },
  buttonstyle: {
    margin: "3%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 45,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});