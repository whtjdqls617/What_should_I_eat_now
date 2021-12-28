import * as Font from "expo-font";

export const customFonts = async () =>
  await Font.loadAsync({
    BlackHanSans_Regular: require("../assets/fonts/BlackHanSans-Regular.ttf"),
  });
