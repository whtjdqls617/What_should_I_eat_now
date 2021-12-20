import React from "react";
import { Image, StyleSheet } from "react-native";
import { food_image } from "../../data/data";
import Carousel from "react-native-snap-carousel";

export const FoodImage = ({ name, setFunc }) => {
  let food_name_without_space = name.slice();
  while (food_name_without_space.includes(" ")) {
    food_name_without_space = food_name_without_space.replace(" ", "");
  }

  const renderItem = ({ item, index }) => {
    return (
      <Image
        source={food_image[item.title]}
        style={styles.img_recommend_food}
      />
    );
  };

  const items = [
    {
      title: "케이크",
      text: "Text 1",
    },
    {
      title: "토스트",
      text: "Text 2",
    },
    {
      title: "김밥",
      text: "Text 3",
    },
  ];

  return (
    <>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout={"stack"}
        onSnapToItem={(index) => setFunc(items[index].title)}
      />
    </>
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
