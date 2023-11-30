import React, { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import getHandler from "../../../utils/getHandler";
import logout from "../../../utils/logout";
import Balance from "../components/Balance";
import Menu from "../components/Menu";

export default function Dashboard() {
   const dum = [1, 2, 3];

   const [stats, setStats] = useState({
      balance: "0",
      deposit: "0",
      invested: "0",
      withdrawal: "0",
   });
   const [investments, setInvestments] = useState([]);

   useEffect(() => {
      getStats();
      getInvestments();
   }, []);

   const getStats = async () => {
      try {
         const response = await getHandler("/user/dashboard");
         console.log(response);
         window.sessionStorage.setItem("balance", response.stats.balance);
         window.sessionStorage.setItem("username", response.stats.username);
         window.sessionStorage.setItem("email", response.stats.email);
         setStats(response.stats);
      } catch (error) {
         console.log(error);
         if (error) logout();
      }
   };

   const getInvestments = async () => {
      try {
         const response = await getHandler("/user/get-investment");
         console.log(response);
         setInvestments(response);
      } catch (error) {
         console.log(error);
         if (error) logout();
      }
   };

   const cardFunc = (heading, value) => {
      return { heading, value };
   };
   const cardArr = [
      cardFunc("Balance", stats.balance),
      cardFunc("Withdrawal", stats.withdrawal),
      cardFunc("Invested", stats.invested),
      cardFunc("Deposited", stats.deposit),
   ];
   return (
      <Menu>
         {/* Balance Display */}
         <Balance balance={stats.balance} />

         {/* User Stats */}
         <div className="container">
            <div className="row my-5">
               {cardArr.map((cards, index) => (
                  <div className="col-md-4" key={index}>
                     <div className="card rounded-lg my-2 p-4 bg-gray-900">
                        <div className="heading mb-3">
                           <span className="font-semibold text-lg text-white">
                              {cards.heading}
                           </span>
                        </div>
                        <div className="text-wrap text-cyan-400">
                           <span className="text-3xl font-bold">
                              ${cards.value}
                           </span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Investments */}
         <div className="container mb-5">
            {investments.length === 0 && (
               <>
                  <div className="text-head text-white text-2xl font-bold mb-4 px-3">
                     <span>Your Investments</span>
                  </div>
                  {/* No Investments */}
                  <div className="wrap text-center col-lg-4 col-md-6 rounded-lg bg-gray-900 p-5">
                     <div className="icon-wrap text-white text-3xl flex justify-center">
                        <FaWallet />
                     </div>
                     <div className="text-wrap text-gray-400 font-medium my-3">
                        No Investment Found
                     </div>
                     <div className="btn-wrap">
                        <button className="bg-cyan-300 w-full p-2 rounded-pill font-bold ">
                           Invest Now
                        </button>
                     </div>
                  </div>
               </>
            )}

            {/* Investments */}
            {investments.length !== 0 && (
               <div className="table-responsive bg">
                  <table className="w-full text-gray-400">
                     <thead>
                        <tr className="bg-gray-900 rounded-lg">
                           <th>Investment</th>
                           <th>Amount Invested</th>
                           <th>Expected Return</th>
                           <th>Date Invested</th>
                           <th>Maturity Date</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {investments.map((i, index) => (
                           <tr className="text-sm" key={index}>
                              <td>{i.plan}</td>
                              <td>{i.amount}$</td>
                              <td>${i.expected}</td>
                              <td>{i.invested_date}</td>
                              <td>{i.maturity_date}</td>
                              <td>{i.status}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </Menu>
   );
}
