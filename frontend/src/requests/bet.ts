import api from "../services/api";

type BetBody = {
  matchId: string;
  value: number;
  oddValue: number;
  oddId: string;
};

const betRequest = (body: BetBody) => {
  return api.post("/bet", body);
};

export default betRequest;
