import api from "../services/api";

type RegisterBody = {
  username: string;
  password: string;
  email: string;
  cpf: string;
};

const registerRequest = (body: RegisterBody) => {
  return api.post("/access/register", body);
};

export default registerRequest;
