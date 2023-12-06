import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Auth/login";

export default function AdminHeader() {
   return (
      <>
        <Login />
         <span className="text-xl font-bold">Menu</span>
         <nav className=" bg-gray-200 rounded-lg p-3">
            <ul className="flex">
               <li className="mr-6 text-lg font-bold">
                  <NavLink
                     to="/dashboard/admin/"
                     className="text-pri p-2 hover:text-blue-800"
                  >
                     Deposits
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/dashboard/add-balance/"
                     className="text-pri p-2 hover:text-blue-800 text-lg font-bold"
                  >
                     Add Balance
                  </NavLink>
               </li>
            </ul>
         </nav>
      </>
   );
}
