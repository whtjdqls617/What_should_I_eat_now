import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNav } from "./navigations/MainStack";
import { StyleSheet, Alert } from "react-native";
import { FirstLoading } from "./FirstLoading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlackHanSans_400Regular } from "@expo-google-fonts/black-han-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [isLoading, setIsLoading] = useState(true);
	let [fontsLoaded] = useFonts({
		BlackHanSans_400Regular,
	});

	const MyTheme = {
		dark: false,
		colors: {
			background: "white",
		},
	};

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('@storage_Key')
			if (value !== null) {
				setSignIn(true);
			}
		} catch (e) {
			// console.log(error);
		}
	}

	getData();

	setTimeout(() => {
		setIsLoading(false);
	}, 1400);


	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		if (isLoading == true) {
			return (
				<>
					<FirstLoading />
				</>
			);
		} else
			return (
				<NavigationContainer theme={MyTheme}>
					<MainStackNav />
				</NavigationContainer>
			);
	}
}

/*

0. 서버에서 음식 이름 데이터 전부 받아오기 -> 데이터 받아왔으면 로딩페이지 끝!
  - 서버에서 받아와야 하는 것: 음식 이름 데이터, 로그인 여부(한번에 받아오고),
  - {"로그인 여부": true, "음식 이름": ["카레", "짜장", ...]}
	- 받아온 내용을 분류하는 함수를 만들어야 함 (App.js)
	- 초기 데이터 받아오는 함수를 따로 만들어야 함 (func_data_communication.js)
	- const data = getData();
	- 주소값을 넘겨서 받아오는 방법도 되는지 나중에 확인해보기
  - 서버에서 받은 데이터를 SignInStackNav에 prop으로 넘김

1. 로그아웃상태면 로그인 화면이 뜨게 하고
2. 로그인상태면 메인페이지가 뜨게 하기
*/

const sytles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
