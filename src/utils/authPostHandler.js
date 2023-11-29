import axios from "axios";

const loginPostHandler = async (query, data) => {
   const response = await axios.post(`${window.api}${query}`, data);

   const token = response.headers["user-auth-token"];
   if (token) window.sessionStorage.setItem("user-auth-token", token);
   return response.data;
};
export default loginPostHandler;
