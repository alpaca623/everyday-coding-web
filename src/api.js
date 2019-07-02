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

export const requestAuthUserListApi = async () => {
  return await instance.get("/auth");
};
