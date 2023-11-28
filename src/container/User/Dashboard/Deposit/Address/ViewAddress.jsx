import React from "react";
import { FaCopy } from "react-icons/fa";
import Menu from "../../../components/Menu";

export default function ViewAddress() {
   return (
      <Menu>
         <div className="container">
            <div className="row my-16">
               <div className="col-lg-6 mb-3">
                  <div className="wrap p-3">
                     <div className="heading text-white">
                        <span className="font-bold text-green-400">
                           How to Deposit
                        </span>
                     </div>
                     <ul className="list-disc list-inside text-sm leading-8 text-white">
                        <li>Scan the QRCode or Copy the wallet address</li>
                        <li>
                           Proceed to your digital crypto wallet and transfer
                           the amount to the crypto address
                        </li>
                        <li>
                           Proceed to verify your transaction by clicking on
                           Verify & provide the required prooves of transaction
                        </li>
                        <li>
                           Once approved your account will be credited
                           accordingly and funds will be available for making
                           investment
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6 mb-3">
                  <div className="wrap leading-9 bg-gray-900 text-white rounded-xl p-3 mb-5">
                     <div className="text-wrap">
                        <span>Total Amount:</span> <span>$ 10.00</span>
                     </div>
                     <div className="text-wrap">
                        <span>BTC Amount:</span> <span>$ 0.0003 BTC</span>
                     </div>
                  </div>

                  {/* Address section */}
                  <div className="wrap text-center leading-10  bg-gray-900 text-white rounded-xl p-3">
                     <span className=" font-bold">USDT Address</span> <br />
                     <span className=" font-bold text-xl text-cyan-300">bc1qsclzlu03fzy2yn9gh6l4xulngyhphajltlsu2m</span>
                     <div className="text-wrap flex items-center justify-center text-cyan-700">
                        <FaCopy /> <span>Copy Address</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Menu>
   );
}
