import React from "react";
import { FaChartLine, FaMoneyBillWave, FaPercentage, FaUserPlus } from "react-icons/fa";
export default function Start() {
   const cardFunc = (icon, title, text) => {
      return { icon, title, text };
   };
   const cardArr = [
      cardFunc(
         <FaUserPlus />,
         "Create Your Account",
         " Begin Your Financial Journey – Unleash the Power of Possibilities by Creating Your Account Today. Your Path to a Brighter Future Starts Here!"
      ),
      cardFunc(
         <FaMoneyBillWave />,
         "Fund Your Account",
         "  Fuel Your Aspirations – Seamlessly Fund Your Account and Unlock a World of Investment Opportunities. Your Wealth-Building Voyage Continues with Ease"
      ),
      cardFunc(
         <FaChartLine />,
         "Invest Deposited Funds",
         " Ignite Your Investment Journey – Transform Your Balance into Opportunities. Seize the Potential and Watch Your Wealth Grow as You Invest with Confidence."
      ),
      cardFunc(
         <FaPercentage />,
         "Get High ROI",
         " Elevate Your Returns – Experience the Thrill of High Returns on Your Investments. Maximize Your Gains and Achieve Financial Heights with Confidence."
      ),
   ];
   return (
      <div className="start py-24 bg-gray-900" id="start">
         <div className="container">
            <div className="heading text-center px-4 leading-8">
               <span className="font-semibold sm:text-4xl text-3xl text-white">
                  <span className="text-white font-bold">
                     Wealthify <span className="text-pri">Asset</span>
                  </span>{" "}
                  | Get started
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
                  {cardArr.map((card, index) => (
                     <div
                        className="wrap flex items-center gap-4 bg-white shadow p-4 rounded-lg mb-4"
                        key={index}
                     >
                        <div className="icon-wrap flex">
                           <span className="bg-pri text-white rounded-full p-3 shadow">
                              {card.icon}
                           </span>
                        </div>
                        <div className="text-wrap">
                           <span className="text-lg font-bold text-pri">
                              {card.title}
                           </span>{" "}
                           <br />
                           <span>
                              {card.text}
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
