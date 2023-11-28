import React from "react";
import Menu from "../../components/Menu";

export default function Withdraw() {
   return (
      <Menu>
         <div className="container py-16">
            <div className="col-lg-4 col-md-6 p-3 rounded-xl mx-auto bg-gray-900 text-white">
               <div className="heading mb-4 border-b-2 border-gray-700 py-2">
                  <span className="text-sm text-gray-400">Spot Balance</span> <br />
                  <span className="text-xl font-bold">$ 0.00</span>
               </div>

               {/* Withdrawal Form */}
               <div className="wrap">
                  <div className="form-group mb-3">
                     <span>Amount</span>
                     <input type="number" className="form-control" />
                     <span className="text-xs text-gray-400">Minimum $10.00</span>
                  </div>

                  <div className="form-group mb-3">
                     <span>Address</span>
                     <input type="text" className="form-control" />
                  </div>

                  <div className="btn-wrap my-4">
                     <button className="btn bg-cyan-300 w-full">
                        Withdraw
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </Menu>
   );
}
