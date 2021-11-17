import axios from "axios";
import { ip } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const putDataToServer = (url, object, token, okFunc, noFunc, errFunc) => {

	let json = "";
	if (typeof (object) == "object")
		json = JSON.stringify(object);
	else
		json = object.slice();
	const api = axios.create({
		baseURL: ip,
	});
	api.defaults.headers.put['Content-Type'] = 'application/json';
	if (token != 0)
		api.defaults.headers.put['X-AUTH-TOKEN'] = token;

	api
		.put(url, json)
		.then(function (response) {
			// console.log("put_res: ");
			// console.log(response);
			const success = response.data.success;
			if (success && okFunc)
				okFunc(response.data);
			else if (!success && noFunc)
				noFunc();
		})
		.catch(function (error) {
			// console.log("put_err: ");
			// console.log(error);
			const status = error.response.status;
			if (status == 403 && errFunc != 0)
				errFunc();
			else if (status == 500)
				Alert.alert(error.response.data.msg);
			//3초 이내에 서버한테서 답이 안 오면 에러로 처리하게 설정
			//유저한테 에러 메시지 창 띄우고
			//메인으로 바로 이동
		});
};

export const getDataFromServer = (url, params, okFunc, noFunc, errFunc) => {

	axios
		.get(url, params)
		.then(function (response) {
			// console.log("response: ");
			// console.log(response);
			const success = response.data.success;
			if (success && okFunc)
				okFunc(response.data);
			else if (!success && noFunc)
				noFunc();
			return 0;
		})
		.catch(function (error) {
			// console.log("err: ");
			// console.log(error);
			const status = error.response.status;
			if (status == 403 && errFunc != 0)
				errFunc();
			else if (status == 500)
				Alert.alert("서버와의 연결이 끊어졌습니다");
			//3초 이내에 서버한테서 답이 안 오면 에러로 처리하게 설정
			//유저한테 에러 메시지 창 띄우고
			//메인으로 바로 이동
			return 0;
		});
};

export const postDataToServer = (url, object, token, resFunc, errFunc) => {

	let json = "";
	if (typeof (object) == "object")
		json = JSON.stringify(object);
	else
		json = object.slice();
	const api = axios.create({
		baseURL: ip,
	});
	api.defaults.headers.post['Content-Type'] = 'application/json';
	if (token != 0)
		api.defaults.headers.post['X-AUTH-TOKEN'] = token;

	api
		.post(url, json)
		.then(function (response) {
			// console.log("post_res: ");
			// console.log(response);
			if (resFunc != 0)
				resFunc(response.data);
		})
		.catch(function (error) {
			// console.log("post_err: ");
			// console.log(error.response);
			const status = error.response.status;
			if (status == 403 && errFunc != 0)
				errFunc();
			else if (status == 500)
				Alert.alert(error.response.data.msg);
			//3초 이내에 서버한테서 답이 안 오면 에러로 처리하게 설정
			//유저한테 에러 메시지 창 띄우고
			//메인으로 바로 이동
		});
};

export const getTokenFromStorage = async (okFunc, noFunc, errFunc) => {
	try {
		const token = await AsyncStorage.getItem('@storage_Key')
		if (token !== null && okFunc != 0)
			okFunc(token);
		else if (token == null && noFunc != 0)
			noFunc();
	} catch (e) {
		// console.log("error: ", e);
		if (errFunc)
			errFunc();
	}
}

export const deleteDataFromServer = (url, params, okFunc, noFunc, errFunc) => {

	axios
		.delete(url, params)
		.then(function (response) {
			// console.log("response: ");
			// console.log(response);
			const success = response.data.success;
			if (success && okFunc)
				okFunc(response.data);
			else if (!success && noFunc)
				noFunc();
			return 0;
		})
		.catch(function (error) {
			// console.log("delete err: ");
			// console.log(error.response);
			const status = error.response.status;
			if (status == 403 && errFunc != 0)
				errFunc();
			else if (status == 500)
				Alert.alert("서버와의 연결이 끊어졌습니다");
			//3초 이내에 서버한테서 답이 안 오면 에러로 처리하게 설정
			//유저한테 에러 메시지 창 띄우고
			//메인으로 바로 이동
			return 0;
		});
};