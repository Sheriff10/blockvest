import React from "react";
import { FaSignOutAlt, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Balance({ balance }) {
   const navi = useNavigate()
   return (
      <div className="container shadow">
         <div className="rounded col-lg-6 py-5">
            <div className="text-wrap">
               <span className="text-xs text-gray-400 font-bold">Balance</span>{" "}
               <br />
               <span className="text-gray-900 text-3xl font-bold">
                  ${balance}.00
               </span>
            </div>
            <div className="btn-wrap mt-4 flex gap-4">
               <div className="col">
                  <button className="btn w-full bg-pri text-white flex justify-center gap-2 items-center" onClick={() => navi('/user/deposit')}>
                     Deposit <FaWallet />{" "}
                  </button>
               </div>
               <div className="col">
                  <button className="btn w-full bg-gray-300 text-gray-900 flex justify-center gap-2 items-center hover:bg-cyan-300 hover:text-gray-900" onClick={() => navi('/user/withdrawal')}>
                     Withdraw <FaSignOutAlt />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
