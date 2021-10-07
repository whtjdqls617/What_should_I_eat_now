import React from 'react';
import {ShowOneOtherOption} from './ShowOneOtherOption';
import { Text } from 'react-native';
import { Pcontainer } from './style';
// import { WebView } from "react-native-webview";

export const ShowOtherOptions = ({ data, navigation }) => {



	return (
      <>
        <ShowOneOtherOption
          image={data[0][1]}
          navigation={navigation}
          imgStyle={"image1"}
        />
        <ShowOneOtherOption
          image={data[1][1]}
          navigation={navigation}
          imgStyle={"image2"}
        />
        <ShowOneOtherOption
          image={data[2][1]}
          navigation={navigation}
          imgStyle={"image3"}
        />
      </>
  );
}