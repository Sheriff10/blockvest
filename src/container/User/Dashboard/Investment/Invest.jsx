import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";

export default function Invest() {
   const dum = [1, 2, 3];
   const navi = useNavigate();

   const cardFunc = (title, ROI, min, max, img) => {
      return { title, ROI, min, max, img };
   };
   const cardArr = [
      cardFunc(
         "Basic Plan",
         21,
         100,
         999.99,
         "https://cloudtradingx.com/static/assets/images/btc_icon.png"
      ),
      cardFunc(
         "Primary Plan",
         25,
         1000,
         4999.99,
         "https://cloudtradingx.com/static/assets/images/invest-icons/eth_icon.png"
      ),
      cardFunc(
         "Secondary Plan",
         26,
         5000,
         "infinity",
         "https://cloudtradingx.com/static/assets/images/invest-icons/bitcoin-cash-icon.png"
      ),
   ];

   return (
      <Menu>
         <div className="container">
            <div className="row py-16">
               {cardArr.map((card, index) => (
                  <div className="col-lg-4 col-md-6 mb-3" key={index}>
                     <div className="card rounded-lg p-3 bg-gray-200 shadow-sm my-3">
                        <div className="heading flex gap-3 items-center mb-3">
                           <img src={card.img} alt="BTC" className="w-[30px]" />
                           <span className="text-black text-xl font-bold">
                              {card.title}
                           </span>
                        </div>

                        <div className="wrap flex justify-between">
                           <div className="text-wrap text-black">
                              <span className="text-xs text-gray-900">
                                 Profitability returns
                              </span>{" "}
                              <br />
                              <span className="text-2xl font-bold text-green-400">
                                 {card.ROI}.00%
                              </span>
                           </div>

                           <div className="text-wrap text-black">
                              <span className="text-xs text-gray-900">
                                 Duration
                              </span>{" "}
                              <br />
                              <span className="text-xl font-bold">7 Days</span>
                           </div>
                        </div>
                        <div className="wrap flex justify-between my-4">
                           <div className="text-wrap text-black">
                              <span className="text-xs text-gray-900">
                                 Minimum Amount
                              </span>{" "}
                              <br />
                              <span className="text-xl font-bold ">
                                 ${card.min}.00
                              </span>
                           </div>

                           <div className="text-wrap text-black">
                              <span className="text-xs text-gray-900">
                                 Referral Bonus
                              </span>{" "}
                              <br />
                              <span className="text-xl font-bold">10.00%</span>
                           </div>
                        </div>
                        <div className="btn-wrap">
                           <button
                              className="btn w-full bg-pri text-white"
                              onClick={() =>
                                 navi(
                                    `/user/investment/option?min=${card.min}&max=${card.max}&name=${card.title}&ROI=${card.ROI}&img=${card.img}`
                                 )
                              }
                           >
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
