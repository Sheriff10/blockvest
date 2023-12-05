import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logout from "../../../../utils/logout";
import postHandler from "../../../../utils/postHandler";
import Menu from "../../components/Menu";

export default function Withdraw() {
   const [amount, setAmount] = useState("");
   const [address, setAddress] = useState("");
   
   const navi = useNavigate()

   const balance = window.sessionStorage.getItem('balance')

   const handleSubmit = async (e) => {
      e.preventDefault();

      const data = { amount, address };

      try {
         const response = await postHandler("/user/witdrawal", data);
         console.log(response);
         navi('/user/dashboard')
      } catch (error) {
         console.log(error);
         if (error.response.status === 401) return logout()
      }
   };
   return (
      <Menu>
         <div className="container py-16">
            <div className="col-lg-4 col-md-6 p-3 rounded-xl mx-auto border-gray-500 border-2 text-black">
               <div className="heading mb-4 border-b-2 border-gray-400 py-2">
                  <span className="text-sm text-gray-900">Spot Balance</span>{" "}
                  <br />
                  <span className="text-xl font-bold">${balance}.00</span>
               </div>

               {/* Withdrawal Form */}
               <div className="wrap">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group mb-3">
                        <span>Amount</span>
                        <input
                           type="number"
                           className="form-control bg-gray-200 border-0 focus:bg-gray-50 text-gray-900 focus:text-black"
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                           min="10"
                           required
                        />
                        <span className="text-xs text-gray-400">
                           Minimum $10.00
                        </span>
                     </div>

                     <div className="form-group mb-3">
                        <span>Address</span>
                        <input
                           type="text"
                           className="form-control bg-gray-200 border-0 focus:bg-gray-50 text-gray-900 focus:text-black"
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}
                           required
                        />
                     </div>

                     <div className="btn-wrap my-4">
                        <button className="btn bg-pri text-white w-full">
                           Withdraw
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </Menu>
   );
}
