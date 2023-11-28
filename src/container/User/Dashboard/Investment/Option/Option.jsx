import React from "react";
import Menu from "../../../components/Menu";

export default function Option() {
   const dum = [1, 2, 4, 5, 6];
   return (
      <Menu>
         <div className="container">
            <div className="row py-16">
               <div className="col-lg-6">
                  <div className="heading mb-3">
                     <span className="font-semibold text-white text-xl">
                        Basic Plan
                     </span>
                  </div>
                  <div className="card p-3 bg-gray-900">
                     <div className="heading flex  p-3 gap-3 items-center mb-3 border-b-2 border-gray-700">
                        <img
                           src="https://cloudtradingx.com/static/assets/images/btc_icon.png"
                           alt="BTC"
                           className="w-[30px]"
                        />
                        <span className="text-white text-xl font-bold">
                           Basic Plan
                        </span>
                     </div>

                     <div className="wrap">
                        <div className="form-group">
                           <span className="text-sm text-gray-300">
                              I wan to Invest
                           </span>
                           <input
                              type="text"
                              className="form-control bg-gray-950 border-0 focus:bg-gray-950 text-gray-300 focus:text-white"
                              placeholder="$ Enter Amount."
                           />
                        </div>

                        <div className="wrap mt-4 flex justify-between">
                           <div className="text-wrap text-white">
                              <span className="text-xs text-gray-400">
                                 Minimum Amount
                              </span>{" "}
                              <br />
                              <span className="text-xl">$300.00</span>
                           </div>

                           <div className="text-wrap text-white">
                              <span className="text-xs text-gray-400">
                                 Maximum Amount
                              </span>{" "}
                              <br />
                              <span className="text-xl font-bold">
                                 $1999.00
                              </span>
                           </div>
                        </div>

                        <div className="btn-wrap mt-4">
                           <button className="btn w-full bg-cyan-300">
                              Invest
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="heading mb-3">
                     <span className="font-semibold text-white text-xl">
                        Investment Summary
                     </span>
                  </div>
                  <div className="card p-3 bg-gray-900 leading-9">
                     {dum.map((i, index) => (
                        <div
                           className="text-wrap flex justify-between text-bold"
                           key={index}
                        >
                           <span className="font-medium text-white">
                              Date Created
                           </span>
                           <span className="text-gray-400">2023-11-28</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Menu>
   );
}
