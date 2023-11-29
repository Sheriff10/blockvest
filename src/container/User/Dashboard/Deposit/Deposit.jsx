import React, { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import getHandler from "../../../../utils/getHandler";
import logout from "../../../../utils/logout";
import Menu from "../../components/Menu";

export default function Deposit() {
   const navi = useNavigate();
   const [amount, setAmount] = useState("");
   const [deposits, setDeposits] = useState([]);
   const [btn, setBtn] = useState(true);

   useEffect(() => {
      getDeposit();
   }, []);
   useEffect(() => {
      if (amount !== "") setBtn(false);
      else setBtn(true);
   }, [amount]);

   const getDeposit = async () => {
      try {
         const response = await getHandler("/user/get-deposit");
         setDeposits(response);
         console.log(response);
      } catch (error) {
         console.log(error);
         if (error.response.status === 401) return logout();
      }
   };

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
                           <option value="USD">USD</option>
                        </select>
                     </div>
                     <div className="form-group mb-3">
                        <div className="span text-sm">Amount</div>
                        <input
                           type="number"
                           className="form-control bg-gray-950 border-0 focus:bg-gray-950 text-gray-300 focus:text-white"
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                        />
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
                              src="https://cloudtradingx.com/static/assets/images/usdt_icon.png"
                              alt="USDT"
                              className="w-[30px]"
                           />
                           <span>Tether (USDT)</span>
                        </div>
                     </div>

                     <div className="btn-wrap">
                        <button
                           className="btn bg-cyan-300 w-full"
                           disabled={btn}
                           onClick={() =>
                              navi(`/user/deposit/address?amount=${amount}`)
                           }
                        >
                           Continue
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="wrap">
                     <div className="heading mb-4">
                        <span className="text-xl font-bold text-white">
                           Pending Orders
                        </span>
                     </div>

                     {/* No Deposits */}
                     {deposits.length === 0 && (
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
                     )}

                     {deposits !== 0 && (
                        <div className="table-responsive bg">
                           <table className="w-full text-gray-400">
                              <thead>
                                 <tr className="bg-gray-900 rounded-lg">
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {deposits.map((dep, index) => (
                                    <tr className="text-sm" key={index}>
                                       <td>{dep.amount}$</td>
                                       <td>{dep.date}</td>
                                       <td>{dep.status}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </Menu>
   );
}
