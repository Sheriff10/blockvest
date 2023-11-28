import React from "react";
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";

export default function Deposit() {
    const navi = useNavigate()
   return (
      <Menu>
         <div className="container">
            <div className="row py-16">
               <div className="col-md-6">
                  {/* Deposit Box  */}
                  <div className="card bg-gray-900 text-white p-5 rounded-lg mb-10">
                     <div className="form-group mb-3">
                        <div className="span text-sm">Currency</div>
                        <select className="form-select bg-gray-950 border-0 focus:bg-gray-950 text-gray-300">
                           <option value="">Test Stuf</option>
                           <option value="">Test Stuf</option>
                           <option value="">Test Stuf</option>
                        </select>
                     </div>
                     <div className="form-group mb-3">
                        <div className="span text-sm">Amount</div>
                        <input type="number" className="form-control bg-gray-950 border-0 focus:bg-gray-950 text-gray-300 focus:text-white" />
                     </div>
                  </div>

                  {/* Crypto Box  */}
                  <div className="card bg-gray-900 text-white p-5 rounded-lg mb-10">
                     <div className="heading">
                        <span>Pay with</span> <br />
                        <small className="text-xs text-gray-400">
                           Bitcoinis selected the default payment method
                        </small>
                     </div>
                     <div className="coins">
                        <div className="wrap flex gap-3 items-center my-3">
                           <input type="radio" name="coin" />
                           <img
                              src="https://cloudtradingx.com/static/assets/images/btc_icon.png"
                              alt="BTC"
                              className="w-[30px]"
                           />
                           <span>Bitcoin (BTC)</span>
                        </div>
                     </div>

                     <div className="btn-wrap">
                        <button className="btn bg-cyan-300 w-full" onClick={() => navi('/user/deposit/address')}>
                           Continue
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="wrap">
                     <div className="heading mb-4">
                        <span className="text-xl font-bold text-white">Pending Orders</span>
                     </div>

                     {/* No Deposits */}
                     <div className="wrap text-center rounded-lg bg-gray-900 p-5 mb-5">
                        <div className="icon-wrap text-white text-3xl flex justify-center">
                           <FaWallet />
                        </div>
                        <div className="text-wrap text-gray-400 font-medium my-3">
                           No Deposit Found
                        </div>
                        {/* <div className="btn-wrap">
                        <button className="bg-cyan-300 w-full p-2 rounded-pill font-bold ">
                           Invest Now
                        </button>
                     </div> */}
                     </div>

                     <div className="table-responsive bg">
                        <table className="w-full text-gray-400">
                           <thead>
                              <tr className="bg-gray-900 rounded-lg">
                                 <th>Deposited</th>
                                 <th>Amount</th>
                                 <th>Date</th>
                                 <th>Status</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr className="text-sm">
                                 <td>Gold Investent</td>
                                 <td>300$</td>
                                 <td>9th Aug. 2023</td>
                                 <td>Pending</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Menu>
   );
}
