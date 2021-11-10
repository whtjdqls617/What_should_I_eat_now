import React, { useState } from "react";
import { AskQuestion } from "./AskQuestion";
import { RecommendedFood } from "./RecommendedFood";
import { OtherFood } from "./OtherFood";
import { Loading } from "./Loading";
import { LogBox } from 'react-native';


export const RecommendByAlgorithm = ({ navigation, route }) => {

	const SignInExpired = route.params;

	LogBox.ignoreLogs([
		'Non-serializable values were found in the navigation state',
	   ]);

	const [index, setIndex] = useState(0);
	const [data, setData] = useState([]);

	function updateIndex(flag) {
		if (flag === true) setIndex(index + 1);
		else setIndex(index - 1);
	}

	if (index < 3 && data.length == 0) {
		return (
			<AskQuestion SignInExpired={SignInExpired} index={index} updateIndex={updateIndex} setData={setData} navigation={navigation} />
		);
	} else if (index == 2 && data.length != 0) {
		return (
			<Loading updateIndex={updateIndex} />
		);
	} else if (index == 3 && data.length != 0) {
		return (
			<RecommendedFood
				SignInExpired={SignInExpired}
				data={data}
				updateIndex={updateIndex}
				navigation={navigation}
			/>
		);
	} else {
		return (
			<OtherFood
				data={data}
				navigation={navigation}
				SignInExpired={SignInExpired}
			/>
		);
	}
};
