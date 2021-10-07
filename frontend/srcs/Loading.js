import React from 'react';
import { Text } from "react-native";
import { getData } from "./func_data_communication";
import { ip } from './data';

const Loading = ({setData}) => {

  getData(`${ip}/recommend-food`, setData);
  console.log('getData :');
	console.log(setData);

  return (
    <>
      <Text>Loading</Text>
    </>
  );
};

export default Loading;
