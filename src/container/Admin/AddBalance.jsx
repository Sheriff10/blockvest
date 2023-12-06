import React, { useState } from "react";
import AdminHeader from "./components/AdminHeader";
import postHandler from "../../utils/postHandler";

export default function AddBalance() {
   const [username, setUsername] = useState("");
   const [amount, setAmount] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const postData = { username, amount };

      try {
         setIsLoading(true); // Set loading to true when the request is initiated
         const response = await postHandler(
            "/admin/update-balance",
            postData,
            true
         );
         alert("balance added successfully")
         console.log(response);
      } catch (error) {
         alert("Username does not exist")
         console.log(error);
      } finally {
         setIsLoading(false); // Set loading back to false after the request is complete
      }
   };

   return (
      <div className="bg-gray-50 min-h-[100vh]">
         <br />
         <br />
         <div className="container">
            <AdminHeader />
         </div>
         <div className="container py-16">
            <div className="col-lg-4 col-md-6 p-3 rounded-xl mx-auto border-gray-500 border-2 text-black">
               <div className="heading mb-4 border-b-2 border-gray-400 py-2">
                  <span className="text-sm text-gray-900">
                     Add User Balance
                  </span>{" "}
                  <br />
               </div>

               <div className="wrap">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group mb-3">
                        <span>Username</span>
                        <input
                           type="text"
                           className="form-control bg-gray-200 border-0 focus:bg-gray-50 text-gray-900 focus:text-black"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           min="10"
                           required
                        />
                     </div>

                     <div className="form-group mb-3">
                        <span>Amount</span>
                        <input
                           type="number"
                           className="form-control bg-gray-200 border-0 focus:bg-gray-50 text-gray-900 focus:text-black"
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                           required
                        />
                     </div>

                     <div className="btn-wrap my-4">
                        <button
                           className="btn bg-pri text-white w-full"
                           disabled={isLoading}
                        >
                           {isLoading ? "Adding Balance..." : "Add Balance"}
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
