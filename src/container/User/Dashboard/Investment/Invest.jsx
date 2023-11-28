import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";

export default function Invest() {
   const dum = [1, 2, 3];
   const navi = useNavigate()

   return (
      <Menu>
         <div className="container">
            <div className="row py-16">
               {dum.map((card, index) => (
                  <div className="col-lg-4 col-md-6 mb-3" key={index}>
                     <div className="card rounded-lg p-3 bg-gray-900 my-3">
                        <div className="heading flex gap-3 items-center mb-3">
                           <img
                              src="https://cloudtradingx.com/static/assets/images/btc_icon.png"
                              alt="BTC"
                              className="w-[30px]"
                           />
                           <span className="text-white text-xl font-bold">
                              Basic Plan
                           </span>
                        </div>

                        <div className="wrap flex justify-between">
                           <div className="text-wrap text-white">
                              <span className="text-xs text-gray-400">
                                 Profitability returns
                              </span>{" "}
                              <br />
                              <span className="text-2xl font-bold text-green-400">
                                 14.00%
                              </span>
                           </div>

                           <div className="text-wrap text-white">
                              <span className="text-xs text-gray-400">
                                 Duration
                              </span>{" "}
                              <br />
                              <span className="text-xl font-bold">7 Days</span>
                           </div>
                        </div>
                        <div className="wrap flex justify-between my-4">
                           <div className="text-wrap text-white">
                              <span className="text-xs text-gray-400">
                                 Minimum Amount
                              </span>{" "}
                              <br />
                              <span className="text-xl font-bold ">
                                 $300.00
                              </span>
                           </div>

                           <div className="text-wrap text-white">
                              <span className="text-xs text-gray-400">
                                 Referral Bonus
                              </span>{" "}
                              <br />
                              <span className="text-xl font-bold">10.00%</span>
                           </div>
                        </div>
                        <div className="btn-wrap">
                           <button className="btn w-full bg-cyan-300" onClick={() => navi('/user/investment/option')}>
                              Invest
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Menu>
   );
}
