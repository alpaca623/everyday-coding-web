import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4003"
});

// 인증 유저 리스트 조회 - 조건 입력시 파라미터 추가
export const certificationListApi = async date => {
  return await instance.get("/certification", { params: { date } });
};

// 인증 생성
export const certificationCreateApi = async data => {
  const { certification_content, certification_type } = data;
  const result = await instance.post("/certification/create", {
    certification_content,
    certification_type
  });
  return result;
};

// 인증 상세 조회
export const certificationDetailApi = async id => {
  const result = await instance.get("/certification/detail", {
    params: { id }
  });
  return result;
};

// 회원 가입
export const requestJoin = async data => {
  return await instance.post("/join", data);
};

// 로그인
export const requestLogin = async data => {
  return await instance.post("/login", data);
};
