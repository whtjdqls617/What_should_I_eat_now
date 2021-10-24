import React from 'react';
import { OneOtherOption } from './OneOtherOption';

export const OtherOptions = ({ food_image, navigation }) => {



	return (
      <>
        <OneOtherOption
          image={food_image[0]}
          navigation={navigation}
        />
        <OneOtherOption
          image={food_image[1]}
          navigation={navigation}
        />
        <OneOtherOption
          image={food_image[2]}
          navigation={navigation}
        />
      </>
  );
}