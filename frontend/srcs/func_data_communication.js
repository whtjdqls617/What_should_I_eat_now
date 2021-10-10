import axios from "axios";
import { ip } from './data'

export const getData = (url, setData) => {

  axios
    .get(url)
    .then(function (response) {
	  console.log("response.data: ");
	  console.log(response.data);
      setData([response.data]);
	  return 0;
    //return response.data로 바꿈
    })
    .catch(function (error) {
	    console.log("err: ");
      console.log(error);
	  //3초 이내에 서버한테서 답이 안 오면 에러로 처리하게 설정
	  //유저한테 에러 메시지 창 띄우고
	  //메인으로 바로 이동
      return 0;
    });
};

export const postData = (url, object, func, val) =>  {
  const json = JSON.stringify(object);
  const api = axios.create({
    baseURL: ip,
  });
  api.defaults.headers.post['Content-Type'] = 'application/json';
  api
    .post(url, json)
    .then(function (response) {
      console.log("post_res: ");
      console.log(response);
      if (func != 0)
        func(val);
    })
    .catch(function (error) {
      console.log("post_err: ");
      console.log(error);
      //3초 이내에 서버한테서 답이 안 오면 에러로 처리하게 설정
      //유저한테 에러 메시지 창 띄우고
      //메인으로 바로 이동
    });
};

export const selectFood = (url, food_name, navigation) => {

  console.log("navigation: ");
  console.log(navigation);
  const object = { selectFood : food_name };
  postData(url, object, 0, 0);
  navigation.reset({ routes : [{name : 'Main'}]});
};