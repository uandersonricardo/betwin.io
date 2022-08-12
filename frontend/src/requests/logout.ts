import api from "../services/api";

const logoutRequest = () => {
  return api.post("/logout");
};

export default logoutRequest;
