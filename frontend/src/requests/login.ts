import api from "../services/api";

type LoginBody = {
  username: string;
  password: string;
};

const loginRequest = (body: LoginBody) => {
  return api.post("/access/login", body);
};

export default loginRequest;
