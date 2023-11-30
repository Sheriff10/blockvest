import React from "react";
import Balance from "../../components/Balance";
import Menu from "../../components/Menu";

export default function UserBalance() {
   const balance = window.sessionStorage.getItem("balance");
   return (
      <Menu>
         <div className="container">
            <div className="bg-gray-900 rounded-xl my-16">
               <Balance balance={balance} />
            </div>
         </div>
      </Menu>
   );
}
