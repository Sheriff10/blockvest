import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logout from "../../../../../utils/logout";
import postHandler from "../../../../../utils/postHandler";
import Menu from "../../../components/Menu";

export default function Option() {
   const dum = [1, 2, 4, 5, 6];
   const [amount, setAmount] = useState("");
   const url = window.location.href;
   const getUrl = new URL(url);
   const name = getUrl.searchParams.getAll("name");
   const min = getUrl.searchParams.getAll("min");
   const max = getUrl.searchParams.getAll("max");
   const img = getUrl.searchParams.getAll("img");
   const ROI = getUrl.searchParams.getAll("ROI");

   console.log(name[0]);
   const navi = useNavigate();
   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const roiVal = (parseInt(ROI) / 100) * parseInt(amount);
         const expected = roiVal + parseInt(amount);

         const data = { amount, plan: name[0], expected };
         const response = await postHandler("/user/investment", data);
         navi("/user/dashboard");

         alert("Invested Sucessfully");
         console.log(response);
      } catch (error) {
         console.log(error);
         if (error.response.status === 401) return logout();
         if (error.response.status === 400) {
            alert("Insufficient Funds");
            navi("/user/deposit");
         }
      }
   };
   return (
      <Menu>
         <div className="container">
            <div className="row py-16">
               <div className="col-lg-6">
                  <div className="heading mb-3">
                     <span className="font-semibold text-white text-xl">
                        {name}
                     </span>
                  </div>
                  <div className="card p-3 bg-gray-900">
                     <div className="heading flex  p-3 gap-3 items-center mb-3 border-b-2 border-gray-700">
                        <img src={img} alt="BTC" className="w-[30px]" />
                        <span className="text-white text-xl font-bold">
                           {name}
                        </span>
                     </div>

                     <form onSubmit={handleSubmit}>
                        <div className="wrap">
                           <div className="form-group">
                              <span className="text-sm text-gray-300">
                                 I wan to Invest
                              </span>
                              <input
                                 type="number"
                                 className="form-control bg-gray-950 border-0 focus:bg-gray-950 text-gray-300 focus:text-white"
                                 placeholder="$ Enter Amount."
                                 min={min}
                                 max={max}
                                 value={amount}
                                 onChange={(e) => setAmount(e.target.value)}
                                 required
                              />
                           </div>

                           <div className="wrap mt-4 flex justify-between">
                              <div className="text-wrap text-white">
                                 <span className="text-xs text-gray-400">
                                    Minimum Amount
                                 </span>{" "}
                                 <br />
                                 <span className="text-xl">${min}.00</span>
                              </div>

                              <div className="text-wrap text-white">
                                 <span className="text-xs text-gray-400">
                                    Maximum Amount
                                 </span>{" "}
                                 <br />
                                 <span className="text-xl font-bold">
                                    ${max}
                                 </span>
                              </div>
                           </div>

                           <div className="btn-wrap mt-4">
                              <button className="btn w-full bg-cyan-300">
                                 Invest
                              </button>
                           </div>
                        </div>
                     </form>
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
