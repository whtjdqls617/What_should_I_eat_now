import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { StyledImage } from "../../style";
import { checkNickname } from "../../func/func_check_userinfo";
import Modal from "react-native-modal";
import { HomeButton } from "../HomeButton";
import { UserEmail } from "./UserEmail";
import { putDataToServer } from "../../func/func_data_communication";
import { getTokenFromStorage } from "../../func/func_data_communication";
import { ip } from "../../data/data";

export const UserInfo = ({ navigation, route }) => {

	const [nickName, setNickName] = useState(route.params.data.nickName);
	const [modalVisible, setModalVisible] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");


	return (
		<>
			<HomeButton navigation={navigation} />
			<View style={{ flex: 1, marginTop: "10%" }}>
				<View style={{ marginTop: "25%", alignItems: "center" }}>
					<Text style={styles.head}>회원정보</Text>
				</View>
				<View style={styles.container}>
					<UserEmail email={route.params.data.email}/>
					<View style={{ flex: 1.2 }}>
						<Text style={styles.title}>닉네임</Text>
						<View style={styles.nicknamealign}>
							<TextInput
								style={styles.textinputstyle}
								onChangeText={(input) => {
									if (checkNickname(input) && input.length != 0)
										setNickName(input);
								}}
							>
								<Text>{nickName}</Text>
							</TextInput>
							<TouchableOpacity
								style={styles.changebutton}
								onPress={
									() => {
										setModalVisible(true);

										const okFunc = (value) => {
											const resFunc = () => {
												setAlertMessage("사용 가능한 닉네임입니다.");
												setModalVisible(true);
											}
											const noFunc = () => {
												setAlertMessage("중복된 닉네임입니다.");
												setModalVisible(true);
											}
											const errFunc = () => {
												Alert.alert("서버와 통신이 되지 않습니다.");
											}
											const params = nickName;
											putDataToServer(`${ip}/user/info/nickname`, params, value, resFunc, noFunc, errFunc);
										};
										getTokenFromStorage(okFunc, 0, 0);
									}
								}
							>
								<Text style={styles.buttonText}>변경</Text>
							</TouchableOpacity>

							{
								modalVisible ?
									<Modal isVisible={true}>
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
									: null
							}
						</View>
					</View>
				</View>
				<View style={{ marginBottom: "45%", alignItems: "center" }}>
					<TouchableOpacity
						style={styles.buttonstyle}
						onPress={() => navigation.navigate("UserPassword")}
					>
						<Text style={styles.buttonText}>비밀번호 변경</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);

};

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
		marginLeft: '25%',
		marginTop: "20%",
		justifyContent: "center",
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
		marginTop: "3%",
		fontSize: 15,
		fontFamily: "BlackHanSans_400Regular",
		opacity: 0.4,
	},
	nicknamealign: {
		marginTop: "3%",
		flexDirection: "row",
	},
	changebutton: {
		marginLeft: '15%',
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
	textinputstyle: {
		borderBottomWidth: 0.5,
		height: 35,
		width: 120,
		borderRadius: 5,
		paddingHorizontal: "2%",
		fontFamily: "BlackHanSans_400Regular",
		opacity: 0.4
	},
});
