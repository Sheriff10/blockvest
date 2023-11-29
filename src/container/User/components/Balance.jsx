import React from "react";
import { FaSignOutAlt, FaWallet } from "react-icons/fa";

export default function Balance({ balance }) {
   return (
      <div className="container">
         <div className="rounded col-lg-6 py-5">
            <div className="text-wrap">
               <span className="text-xs text-gray-400 font-bold">Balance</span>{" "}
               <br />
               <span className="text-white text-4xl font-bold">
                  ${balance}.00
               </span>
            </div>
            <div className="btn-wrap mt-4 flex gap-4">
               <div className="col">
                  <button className="btn w-full bg-cyan-300 flex justify-center gap-2 items-center">
                     Deposit <FaWallet />{" "}
                  </button>
               </div>
               <div className="col">
                  <button className="btn w-full border-cyan-300 text-white flex justify-center gap-2 items-center hover:bg-cyan-300 hover:text-gray-900">
                     Withdraw <FaSignOutAlt />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
