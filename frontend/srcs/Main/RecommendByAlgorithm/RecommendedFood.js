import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Linking,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { HomeButton } from "../HomeButton";
import { FoodImage } from "./FoodImage";
import { FoodName } from "./FoodName";
import { TitleText } from "./TitleText";
import { YesButton } from "./YesButton";
import { icons } from "../../data/icons";
import { findLocation } from "../../func/func_find_userinfo";
import { GuideText } from "./GuideText";

export const RecommendedFood = ({ data, navigation }) => {
  const [foodName, setFoodName] = useState(data[0]);
  const [location, setLocation] = useState("");

  return (
    <>
      <HomeButton navigation={navigation} />
      <View style={styles.container}>
        <View style={{ flex: 0.2 }}>
          <TitleText />
          <GuideText />
        </View>
        <View style={{ flex: 0.51 }}>
          <FoodImage list={data} setName={setFoodName} />
        </View>
        <View style={{ flex: 0.25 }}>
          <FoodName name={foodName} />
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            paddingHorizontal: "25%",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                findLocation(setLocation);
                if (location)
                  Linking.openURL(
                    `https://map.naver.com/v5/search/${foodName}?c=${location.coords.latitude},${location.coords.longitude},15,0,0,0,dh`
                  );
              }}
            >
              <Image
                style={{ height: 35, width: 50 }}
                source={icons[5]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
              sytle={{ height: 10, width: 100 }}
              onPress={() =>
                Linking.openURL(
                  `https://www.youtube.com/results?search_query=${foodName}먹방`
                )
              }
            >
              <Image
                style={{ height: 35, width: 50 }}
                source={icons[4]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            paddingHorizontal: "25%",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontFamily: "BlackHanSans_400Regular" }}>
              식당 찾기!
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontFamily: "BlackHanSans_400Regular" }}>
              먹방 검색!
            </Text>
          </View>
        </View>
        <View style={styles.button_align}>
          <YesButton nav={navigation} name={foodName} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: "10%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  button_align: {
    flex: 0.3,
    justifyContent: "center",
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
});
