import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { home } from '../data/icons';

export const HomeButton = ({ navigation }) => {

    return (
        <>
			<TouchableOpacity 
			style={styles.home}
			onPress={() => navigation.navigate("Main")}>
				<Image style={{	width : 40, height : 40 }} source={home}/>
      	 	</TouchableOpacity>
		</>
    );
};

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	home : {
		marginTop : '13%',
		marginEnd : '6%',
		justifyContent: 'flex-end',
		alignItems : 'flex-end'
	}
  });
  