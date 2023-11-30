import React, { useState } from "react";
import { FaArrowAltCircleUp, FaBars, FaChartLine, FaHome, FaMoneyBillAlt, FaMoneyCheckAlt, FaWallet } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function Menu({ children }) {
   const menuFunc = (icon, text, link) => {
      return { icon, text, link };
   };

   const menuArr = [
      menuFunc(<FaChartLine />, "Dashboard", "/user/dashboard"),
      menuFunc(<FaWallet />, "Balance", "/user/balance"),
      menuFunc(<FaMoneyCheckAlt />, "Deposit", "/user/deposit"),
      menuFunc(<FaArrowAltCircleUp />, "Withdraw", "/user/withdrawal"),
      menuFunc(<FaMoneyBillAlt />, "Invest", "/user/investment"),
   ];
   const [show, setShow] = useState(false);
   return (
      <div className="menu bg-grey">
         <div className="flex">
            <div
               className={`side-menu lg:w-[300px] h-[100vh] bg-white relative ${
                  !show && "d-none"
               }`}
            >
               <div className="wrap z-10  fixed top-0 bottom-0 w-[80%] lg:w-[250px] bg-gray-900">
                  <div className="logo-con text-2xl font-bold text-center py-4 bg-gray-950">
                     <span className="text-white font-bold text-2xl">
                        Block<span className="text-cyan-300">vest</span>
                     </span>
                  </div>
                  <div className="menu-con px-2">
                     <div className="label text-sm font-bold pt-2 text-gray-500">
                        <span>Main Menu</span>
                     </div>
                     <div className="menu-list mt-3">
                        <ul>
                           {menuArr.map((menu, index) => (
                              <li key={index} className="flex">
                                 <NavLink
                                    to={menu.link}
                                    className="flex mb-4 p-0 w-full"
                                    onClick={() => setShow(!show)}
                                 >
                                    <li
                                       className={` text-gray-400 px-2 hover:bg-gray-800 hover:rounded-lg hover:text-primary w-full`}
                                    >
                                       {" "}
                                       <a
                                          className={`d-flex gap-2 align-items-center  py-2 px-3 rounded-lg`}
                                          href="/home"
                                       >
                                          {menu.icon} {menu.text}
                                       </a>
                                    </li>
                                 </NavLink>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            {/* Content Section */}
            <div className="content w-100 min-h-[100vh] bg-gray-950">
               <div className="header bg-gray-900 py-2">
                  <div className="flex lg:flex-row-reverse container justify-between items-center">
                     {/* User Img */}
                     <div className="profile">
                        <div className="flex items-center">
                           <div className="img-wrap">
                              <img
                                 src="data:image/jpeg;base64,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"
                                 alt="Profile"
                                 className="w-[30px] h-[30px] rounded-full border-cyan-300 border-3"
                              />
                           </div>
                           <div className="text-wrap px-3">
                              <span className="font-bold text-gray-300">
                                 {window.sessionStorage.getItem("username")}
                              </span>{" "}
                              <br />
                              <span className="text-xs text-cyan-400">
                                 {window.sessionStorage.getItem("email")}
                              </span>
                           </div>
                        </div>
                     </div>

                     {/* search bar */}

                     <div
                        className="menu-bar bg-cyan-300 p-2 rounded-lg"
                        onClick={() => setShow(!show)}
                     >
                        <span className=" text-gray-900 ">
                           <FaBars />{" "}
                        </span>
                     </div>
                  </div>
               </div>

               {/* Page Content */}
               <div className="w-100">{children}</div>
            </div>
         </div>
      </div>
   );
}
