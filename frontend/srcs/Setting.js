import React from 'react';
import { SectionList, Text, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Setting = ({ navigation }) => {

	const sections = [
		{
			title: "회원 정보",
			data: [{ title: "비밀 번호 수정", destination: "EditUserInfo" }]
		},
		{
			title: "음식 리스트",
			data: [{ title: "좋아하는 음식 관리", destination: "ShowLikeFoodList" }, { title: "싫어하는 음식 관리", destination: "ShowDisLikeFoodList" }]
		}
	];

	return (
		<>
			<SectionList
				sections={sections}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => {

					return (
						<>
							<TouchableOpacity onPress={() => navigation.navigate(item.destination)}>
								<Button title={item.title} />
							</TouchableOpacity>
						</>
					);
				}}
				renderSectionHeader={({ section: { title } }) => (
					<Text>{title}</Text>
				)}
			/>
		</>
	)
}

export default Setting;