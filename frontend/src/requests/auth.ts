import api from "../services/api";

type RegisterBody = {
  username: string;
  password: string;
  email: string;
  cpf: string;
};

export const registerRequest = (body: RegisterBody) => {
  return api.post("/register", body);
};
