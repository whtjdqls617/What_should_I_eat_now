import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { StyledImage, StyledImage2 } from "../../style";

export const OptionImage = ({ tag, image, selectOption, lightEffect }) => {
  const onPress = () => {
    selectOption(tag);
  };
  if (lightEffect) {
    return (
      <>
        <TouchableOpacity onPress={onPress}>
          <StyledImage source={image} style={styles.optImage} />
        </TouchableOpacity>
      </>
    );
  } else {
    return (
      <>
        <TouchableOpacity onPress={onPress}>
          <StyledImage2 source={image} style={styles.optImage} />
        </TouchableOpacity>
      </>
    );
  }
};

const styles = StyleSheet.create({
  optImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderWidth: 5.5,
    borderRadius: 20,
    marginTop: 10,
  },
});
