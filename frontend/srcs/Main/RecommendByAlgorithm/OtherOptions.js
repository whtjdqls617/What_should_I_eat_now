import React from 'react';
import { OneOtherOption } from './OneOtherOption';

export const OtherOptions = ({ data, navigation }) => {



	return (
      <>
        <OneOtherOption
          image={data[0][1]}
          navigation={navigation}
          imgStyle={"image1"}
        />
        <OneOtherOption
          image={data[1][1]}
          navigation={navigation}
          imgStyle={"image2"}
        />
        <OneOtherOption
          image={data[2][1]}
          navigation={navigation}
          imgStyle={"image3"}
        />
      </>
  );
}