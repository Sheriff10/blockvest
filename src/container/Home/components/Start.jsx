import React from "react";
import { FaUser } from "react-icons/fa";
export default function Start() {
   const dum = [1, 2, 3, 4];
   return (
      <div className="start py-24 bg-gray-900">
         <div className="container">
            <div className="heading text-center px-4 leading-8">
               <span className="font-semibold sm:text-4xl text-3xl text-white">
               <span className="text-white font-bold">Block<span className="text-cyan-300">vest</span></span> | Get started
                  
               </span>{" "}
               <br />
               <span className="text-gray-400">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
               </span>
            </div>
            <div className="row mt-8">
               <div className="col-lg-6">
                <img src="/invest.png" alt="Invest" />
               </div>
               <div className="col-lg-6">
                  {dum.map((card, index) => (
                     <div
                        className="wrap flex items-center gap-4 bg-white shadow p-4 rounded-lg mb-4"
                        key={index}
                     >
                        <div className="icon-wrap flex">
                           <span className="bg-cyan-300 rounded-full p-3 shadow">
                              <FaUser />
                           </span>
                        </div>
                        <div className="text-wrap">
                           <span className="text-lg font-bold">
                              Create Your Account
                           </span>{" "}
                           <br />
                           <span>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sequi, omnis?
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
