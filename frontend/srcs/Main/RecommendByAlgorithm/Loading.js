import React from 'react';
import { Text } from "react-native";
import { getData } from "../../func/func_data_communication";
import { ip } from '../../data/data';

export const Loading = ({ updateIndex }) => {

  setTimeout(() => {
		updateIndex(true);
	}, 2000);

  return (
    <>
      <Text>Loading</Text>
    </>
  );
};
