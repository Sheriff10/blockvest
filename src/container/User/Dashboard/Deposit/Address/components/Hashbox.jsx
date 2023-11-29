import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logout from "../../../../../../utils/logout";
import postHandler from "../../../../../../utils/postHandler";

export default function Hashbox({ toggle, amount }) {
   const [hash, setHash] = useState("");
   const navi = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (hash === "") return alert("please input hash");
      try {
         const data = { amount, hash };
         const response = await postHandler("/user/deposit", data);
         navi("/user/deposit");
         console.log(response);
      } catch (error) {
         console.log(error);
         if (error.response.status === 401) return logout();
         if (error.response.data.error) alert("Invalid hash");
      }
   };
   return (
      <div className="container">
         <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center backdrop-blur-lg">
            <div className="col-lg-6 col-md-8">
               {/* Deposit Box  */}
               <div className="card bg-gray-900 text-white p-5 rounded-lg mb-10">
                  <div className="heading border-b-1 border-gray-500 mb-3 text-center">
                     <div className="wrap text-right text-lg">
                        <FaTimesCircle onClick={toggle} />
                     </div>
                     <span className="text-bold text-xl">
                        Verify Transaction
                     </span>
                  </div>
                  <form onSubmit={handleSubmit}>
                     <div className="form-group mb-10">
                        <div className="span text-sm mb-2">
                           Upload payment reciept (optional)
                        </div>
                        <input
                           type="file"
                           name="IMG"
                           className="form-control bg-gray-950 border-0 focus:bg-gray-950 text-gray-300 focus:text-white"
                        />
                     </div>
                     <div className="form-group mb-10">
                        <div className="span text-sm mb-2">Paste TxnHash</div>
                        <input
                           type="text"
                           className="form-control bg-gray-950 border-0 focus:bg-gray-950 text-gray-300 focus:text-white"
                           value={hash}
                           onChange={(e) => setHash(e.target.value)}
                        />
                     </div>

                     <div className="btn-wrap">
                        <button
                           className="btn bg-cyan-300 w-full"
                           // onClick={() => navi("/user/deposit/address")}
                        >
                           Continue
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
