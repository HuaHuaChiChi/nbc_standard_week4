import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

// 요청 인터셉터 추가
api.interceptors.request.use(function (config) {
  console.log("요청합니다");
  return config;
});

// 응답 인터셉터 추가
api.interceptors.response.use(function (response) {
  console.log("응답합니다");
  return response;
});

export default api;
