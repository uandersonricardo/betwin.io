import api from "../services/api";

type DepositBody = {
  method: string;
  value: number;
};

const depositRequest = (body: DepositBody) => {
  return api.post("/deposit", body);
};

export default depositRequest;
