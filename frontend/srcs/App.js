import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StartStackNav from "./navigations/StartStack";
import MainStackNav from "./navigations/MainStack";
import { SignIn } from "./SignIn";
import { Text } from "react-native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const signIn = true;

  setTimeout(() => {
    setIsLoading(false);
  }, 10000);

  if (isLoading == true) {
    return (
      <>
        <Text style={{ width: 100, height: 100 }}>Loading...</Text>
      </>
    );
  } else if (signIn == true) {
    return (
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>
    );
  } else
    return (
      <NavigationContainer>
        <MainStackNav />
      </NavigationContainer>
    );
  //로그인 정보 받아오고
  //처음 앱 켜질 때 로딩 페이지

  //로그인 정보가 어떠냐에 따라서
  //if (로그인 상태일 때)
  // return MainStackNav
  // else if (로그아웃 상태일 때 )
  // return signinNav

  //서버에서 데이터를 Get하는 작업이 끝나면 로딩화면에서 로그인/메인 화면이 나타나게 해야 함
  // return (
  //   <NavigationContainer>
  //     <StartStackNav />
  //   </NavigationContainer>
  // );
}

/*
1. 로그아웃상태면 로그인 화면이 뜨게 하고
2. 로그인상태면 메인페이지가 뜨게 하기
*/
