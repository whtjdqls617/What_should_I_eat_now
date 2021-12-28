import { Alert } from "react-native";
import * as Location from "expo-location";

export const findLocation = (setLocation) => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync(); // 권한 설정
    if (status == "denied") {
      Alert.alert("위치 정보 액세스 권한 설정을 해주세요!");
      return;
    }
    if (status !== "granted") {
      Alert.alert("권한 설정이 되어있지 않습니다!");
      return;
    }
    let location = await Location.getCurrentPositionAsync({}); // 현재 위치 받아오기
    setLocation(location);
  })();
};
