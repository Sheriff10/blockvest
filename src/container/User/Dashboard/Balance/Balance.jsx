import React from "react";
import Balance from "../../components/Balance";
import Menu from "../../components/Menu";

export default function UserBalance() {
   return (
      <Menu>
         <div className="container">
         <div className="bg-gray-900 rounded-xl my-16">
            <Balance />
         </div>
         </div>
      </Menu>
   );
}
