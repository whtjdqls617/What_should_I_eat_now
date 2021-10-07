import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StartStackNav from './navigations/StartStack';
import MainStackNav from "./navigations/MainStack";

export default function App() {

  //처음 앱 켜질 때 로딩 페이지
  //서버에서 데이터를 Get하는 작업이 끝나면 로딩화면에서 로그인/메인 화면이 나타나게 해야 함
  return (
      <NavigationContainer>
        <StartStackNav/>
      </NavigationContainer>
  );
}

/*
1. 로그아웃상태면 로그인 화면이 뜨게 하고
2. 로그인상태면 메인페이지가 뜨게 하기
*/