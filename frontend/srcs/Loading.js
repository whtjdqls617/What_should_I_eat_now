import React from 'react';
import { Text, StyleSheet } from "react-native";
import { getData } from "./func_data_communication";
import { ip } from './data';

export const Loading = ({ setData }) => {
  getData(`${ip}/recommend-food`, setData);
  console.log("getData :");
  console.log(setData);

  return (
    <>
      <Text>Loading</Text>
    </>
  );
};

const styles = StyleSheet.create({
	container : {
		flex : 1
	}
})
