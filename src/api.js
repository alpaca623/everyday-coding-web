import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4003"
});

export const requestAuthApi = async data => {
  const { auth_type, auth_content } = data;
  const result = await instance.post("/auth/request", {
    auth_type,
    auth_content
  });
  return result;
};

export const requestAuthDetailApi = async id => {
  const result = await instance.get("/auth/detail", { params: { id } });
  return result;
};

export const requestAuthUserListApi = async () => {
  return await instance.get("/auth");
};

export const requestJoin = async data => {
  return await instance.post("/join", data);
};

export const requestLogin = async data => {
  return await instance.post("/login", data);
};
