import React from 'react';
import { OneOtherOption } from './OneOtherOption';

export const OtherOptions = ({ food_name, food_image, navigation }) => {



	return (
      <>
        <OneOtherOption
		  name={food_name[0]}
          image={food_image[0]}
          navigation={navigation}
        />
        <OneOtherOption
		  name={food_name[1]}
          image={food_image[1]}
          navigation={navigation}
        />
        <OneOtherOption
		  name={food_name[2]}
          image={food_image[2]}
          navigation={navigation}
        />
      </>
  );
}