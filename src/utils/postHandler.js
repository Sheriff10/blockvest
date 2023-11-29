import axios from "axios";
import logout from "./logout";

const postHandler = async (query, data) => {
   const token = window.sessionStorage.getItem("user-auth-token");
   if (!token) return logout();
   const response = await axios.post(`${window.api}${query}`, data, {
      headers: {
         "user-auth-token": token,
         "Content-Type": "application/json",
      },
   });

   return response.data;
};
export default postHandler;
