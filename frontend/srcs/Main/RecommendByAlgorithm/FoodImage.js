import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { icons } from "../../data/icons";
import Carousel from "react-native-snap-carousel";

export const FoodImage = ({ name, list, setName }) => {
  const renderItem = ({ item, index }) => {
    const foodNameWithoutSpace = item.title.replace(/' '/, "");
    return (
      <Image source={icons[1]} style={styles.img_recommend_food} />
      // <Image
      //   source={food_image[foodNameWithoutSpace]}
      //   style={styles.img_recommend_food}
      // />
    );
  };

  const items = list.map((food, i) => {
    const text = "Text " + i;
    return { title: food, text: text };
  });

  return (
    <View style={{ flex: 1.5, marginLeft: "15%" }}>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout={"stack"}
        onSnapToItem={(index) => setName(items[index].title)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img_recommend_food: {
    borderWidth: 3,
    borderRadius: 140,
    borderColor: "black",
    width: 242,
    height: 242,
  },
});
