import api from "../services/api";

const logoutRequest = () => {
  return api.post("/access/logout");
};

export default logoutRequest;
