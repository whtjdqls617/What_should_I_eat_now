import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { HomeButton } from "../HomeButton";
import { FoodImage } from "./FoodImage";
import { FoodName } from "./FoodName";
import { TitleText } from "./TitleText";
import { YesButton } from "./YesButton";
import { icons } from "../../data/icons";
import { GuideText } from "./GuideText";
import { FindRestaurant } from "./FindRestaurant";
import { SearchMukbang } from "./SearchMukbang";
import { FindAndSearchText } from "./FindAndSearchText";

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
        <View style={styles.map_and_youtube_icon_align}>
          <View style={styles.map_and_youtube_icon_or_text}>
            <FindRestaurant
              location={location}
              setLocation={setLocation}
              iconImage={icons[5]}
              foodName={foodName}
            />
          </View>
          <View style={styles.map_and_youtube_icon_or_text}>
            <SearchMukbang foodName={foodName} iconImage={icons[4]} />
          </View>
        </View>
        <View style={styles.map_and_youtube_text_align}>
          <FindAndSearchText />
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
  map_and_youtube_icon_align: {
    flex: 0.1,
    flexDirection: "row",
    paddingHorizontal: "25%",
  },
  map_and_youtube_text_align: {
    flex: 0.1,
    flexDirection: "row",
    paddingHorizontal: "25%",
  },
});
