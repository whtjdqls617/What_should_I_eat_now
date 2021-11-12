import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const RecommendByRandomButton = ({ navigation, icon, SignInExpired }) => {

	return (
		<TouchableOpacity
            style={styles.container_RBR}
            onPress={() => navigation.navigate("RecommendByRandom", SignInExpired)}
          >
            <Image
              source={icon}
              resizeMode="contain"
              style={styles.img_RBR}
            ></Image>
          </TouchableOpacity>
	);
};

const styles = StyleSheet.create({

	container_RBR: {
		flex: 1,
		alignItems: "center"
	},
	img_RBR: {
	  width: 87,
	  height: 87,
	},

  });
