import React from "react";
import { EatenFood } from "./EatenFood";

export const EatenFoods = ({ number, day, onXPress }) => {

	const arrayForMap = Array(number).fill(0);

	return (
		<>
			{
				arrayForMap.map((ele, i) =>
					<EatenFood key={i} food_name={day[i]} index={i} onXPress={onXPress}/>)
			}
		</>
	);
};