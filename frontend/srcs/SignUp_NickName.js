import React, {useState} from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

export const SignUp_NickName = ({userinfo, setUserinfo}) => {

	const [opacity, setOpacity] = useState(0);

	const checkNickname = (nickname) => {
		if (nickname.length > 1)
			return true;
		else
			return false;
	};

	return (
		<>
			<View style={styles.nicknamerow}>
				<TextInput placeholder="닉네임" onChangeText={(input) => {
					if (checkNickname(input)){
						let copy = userinfo.slice();
						copy.splice(0, 1, input);
						setUserinfo(copy);
						setOpacity(0);
					}
					else{
						let copy = userinfo.slice();
						copy.splice(0, 1, 0);
						setUserinfo(copy);
						setOpacity(100);
					}
				}}/>

			</View>
			<Text style={{ opacity : opacity }}>닉네임은 두 글자 이상 적어주세요.</Text>
		</>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nicknamerow: {
    flexDirection: "row",
  }
});

/*
1. 중복확인했을 때 입력값 == 최종적으로 입력되어 있는 값 ->

*/