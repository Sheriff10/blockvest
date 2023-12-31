import axios from "axios";
import logout from "./logout";

const getHandler = async (query, isAdmin) => {
   const token = window.sessionStorage.getItem("user-auth-token");

   if (!isAdmin) {
      if (!token) return logout();
   }
   const response = await axios.get(`${window.api}${query}`, {
      headers: {
         "user-auth-token": token,
         "Content-Type": "application/json",
      },
   });

   return response.data;
};
export default getHandler;
