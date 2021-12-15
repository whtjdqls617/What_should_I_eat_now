import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { OtherOptions } from "./OtherOptions";
import { food_image } from "../../data/data";
import { HomeButton } from "../HomeButton";

export const OtherFood = ({ data, navigation }) => {
  const other_food_name = [
    data.list[1].name,
    data.list[2].name,
    data.list[3].name,
  ];
  const other_food_name_without_space = other_food_name.map((foodName) => {
    let foodName_without_space = foodName.slice();
    while (foodName_without_space.includes(" ")) {
      foodName_without_space = foodName_without_space.replace(" ", "");
    }
    return foodName_without_space;
  });
  const other_food_image = other_food_name_without_space.map(
    (ele) => food_image[ele]
  );
  const arrayForMap = Array(3).fill(0);

  return (
    <ScrollView>
      <HomeButton navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.select}>골라볼래?</Text>
        <View style={styles.img_food_align}>
          <OtherOptions
            food_name={other_food_name}
            food_image={other_food_image}
            navigation={navigation}
          />
        </View>
        <View style={styles.foodnameRow}>
          {arrayForMap.map((ele, i) => {
            return (
              <Text style={styles.foodname} key={i}>
                {other_food_name[i]}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foodname: {
    flex: 1,
    fontFamily: "BlackHanSans_400Regular",
    textAlign: "center",
  },
  foodnameRow: {
    flexDirection: "row",
    marginTop: "5%",
  },
  select: {
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 56,
    marginLeft: "5%",
  },
  img_food_align: {
    height: 96,
    flexDirection: "row",
    marginTop: "8%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
