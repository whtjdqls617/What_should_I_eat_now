import React from "react";
import { EatenFood } from "./EatenFood";

export const EatenFoods = ({ number, foods }) => {

	const arrayForMap = Array(number).fill(0);

	return (
		<>
			{
				arrayForMap.map((ele, i) =>
					<EatenFood key={i} food_name={foods[i]} />)
			}
		</>
	);
};