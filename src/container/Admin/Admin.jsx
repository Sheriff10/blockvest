// Dashboard.js
import React, { useEffect, useState } from "react";
import getHandler from "../../utils/getHandler";
import logout from "../../utils/logout";
import postHandler from "../../utils/postHandler";
import Login from "./Auth/login";

const AdminDashboard = () => {
   const [deposits, setDeposits] = useState([]);

   useEffect(() => {
      getDeposit();
   }, []);

   const getDeposit = async () => {
      try {
         const response = await getHandler("/admin/get-deposit");
         setDeposits(response);
         console.log(response);
      } catch (error) {
         console.log(error);
         if (error.response.status === 401) return logout();
      }
   };

   const handleAction = async (_id, amount, status, username) => {
      try {
         const data = { _id, amount, status, username };
         const response = await postHandler("/admin/update-deposit", data);
         getDeposit();
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="bg-gray-950 min-h-[100vh]">
        <Login />
         {" "}
         <br />
         <br />
         <div className="container">
            <nav className=" bg-gray-900 p-3">
               <ul className="flex">
                  <li className="mr-6">
                     <a href="#" className="text-blue-500 hover:text-blue-800">
                        Link 1
                     </a>
                  </li>
                  <li>
                     <a href="#" className="text-blue-500 hover:text-blue-800">
                        Link 2
                     </a>
                  </li>
               </ul>
            </nav>

            <div className="table-responsive shadow-md rounded my-6">
               <table className="min-w-max w-full table-auto">
                  <thead>
                     <tr className="bg-gray-900 text-gray-300 uppercase text-sm leading-normal">
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
