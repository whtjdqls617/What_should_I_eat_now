import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { food_name, food_image } from '../../data/data';
import { loading } from '../../data/icons';

export const SlotMachine = ({setFoodName, randomFood}) => {

    const [index, setIndex] = useState(0);
    const [second, setSecond] = useState(100);

    setTimeout(() => {
        if (index == 4 && second == 500){
            let food = randomFood();
            setFoodName(food);
            return (0);
        }
        else if (index == 4 && second == 100) {
            setSecond(second + 100);
        }
        else{
            const newIndex = index == 4 ? 0 : (index % 4) + 1;
            setIndex(newIndex);
        }
    }, second);

    return (
        <Image style={{height: 50, width: 50}} source={loading[index]}/>
    );
};

//100, -> loading[0] 100, -> loading[1] -> 100 -> loading[2] -> [3] -> [4]