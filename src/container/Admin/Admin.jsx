// Dashboard.js
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getHandler from "../../utils/getHandler";
import logout from "../../utils/logout";
import postHandler from "../../utils/postHandler";
import Login from "./Auth/login";
import AdminHeader from "./components/AdminHeader";

const AdminDashboard = () => {
   const [deposits, setDeposits] = useState([]);

   useEffect(() => {
      getDeposit();
   }, []);

   const getDeposit = async () => {
      try {
         const response = await getHandler("/admin/get-deposit", true);
         setDeposits(response);
         console.log(response);
      } catch (error) {
         console.log(error);
        //  if (error.response.status === 401) return logout();
      }
   };

   const handleAction = async (_id, amount, status, username) => {
      try {
         const data = { _id, amount, status, username };
         const response = await postHandler("/admin/update-deposit", data, true);
         getDeposit();
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="bg-gray-50 min-h-[100vh]">
         {" "}
         <br />
         <br />
         <div className="container">
            <AdminHeader />

            <div className="table-responsive shadow-md rounded my-6">
               <table className="min-w-max w-full table-auto">
                  <thead>
                     <tr className="bg-gray-200 text-gray-300 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">User</th>
                        <th className="py-3 px-6 text-left">Amount</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Hash</th>
                        <th className="py-3 px-6 text-left">status</th>
                        <th className="py-3 px-6 text-left">Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                     {/* Map through your deposit data and render rows */}
                     {deposits.map((i, index) => (
                        <tr className="border-b text-gray-300 border-gray-200 hover:bg-gray-100">
                           <td className="py-3 px-6 text-left whitespace-nowrap">
                              {i.user}
                           </td>
                           <td className="py-3 px-6 text-left whitespace-nowrap">
                              {i.amount}
                           </td>
                           <td className="py-3 px-6 text-left whitespace-nowrap">
                              {i.date}
                           </td>
                           <td className="py-3 px-6 text-left whitespace-nowrap">
                              {i.hash}
                           </td>
                           <td className="py-3 px-6 text-left whitespace-nowrap">
                              {i.status}
                           </td>
                           <td className="py-3 px-6 text-left">
                              <button
                                 className=" btn btn-success"
                                 onClick={() =>
                                    handleAction(
                                       i._id,
                                       i.amount,
                                       "confirmed",
                                       i.user
                                    )
                                 }
                              >
                                 Confirm
                              </button>
                              <button
                                 className="ml-4 btn btn-danger"
                                 onClick={() =>
                                    handleAction(
                                       i._id,
                                       i.amount,
                                       "delete",
                                       i.user
                                    )
                                 }
                              >
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))}
                     {/* Add more rows as needed */}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AdminDashboard;
