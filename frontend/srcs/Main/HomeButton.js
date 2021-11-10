import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { home } from '../data/icons';

export const HomeButton = ({ navigation }) => {

    return (
        <>
			<TouchableOpacity
			style={styles.home}
			onPress={() => navigation.navigate("Main")}>
				<Image style={{	width : 30, height : 30 }} source={home}/>
      	 	</TouchableOpacity>
		</>
    );
};

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	home : {
		marginTop : '12%',
		marginEnd : '5%',
		justifyContent: 'flex-end',
		alignItems : 'flex-end'
	}
  });
