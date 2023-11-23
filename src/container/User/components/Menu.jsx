import React, { useState } from "react";
import { FaBars, FaHome, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Menu({ children }) {
   const dum = [1, 2, 3, 4, 5, 3, 3];
   const menuFunc = (icon, text, link) => {
      return { icon, text, link };
   };

   const menuArr = [
      menuFunc(<FaHome />, "Dashboard", "/user/dashboard"),
      menuFunc(<FaHome />, "Student", "/admin/student"),
      menuFunc(<FaHome />, "Create Student", "/admin/create/student"),
      menuFunc(<FaHome />, "Classes", "/admin/classes"),
      menuFunc(<FaHome />, "Create Classes", "/admin/classes/create"),
      menuFunc(<FaHome />, "Announcement", "/admin/announcement"),
   ];
   const [show, setShow] = useState(true);
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
                  <span className="text-white font-bold text-2xl">Block<span className="text-cyan-300">vest</span></span>

                  </div>
                  <div className="menu-con px-2">
                     <div className="label text-sm font-bold pt-2 text-gray-500">
                        <span>Main Menu</span>
                     </div>
                     <div className="menu-list mt-3">
                        <ul>
                           {menuArr.map((menu, index) => (
                              <li key={index} className="flex">
                                 <NavLink to={menu.link} className="flex mb-4 p-0 w-full">
                                    <li
                                       className={` text-gray-400 px-2 hover:bg-gray-800 hover:rounded-lg hover:text-primary w-full`}
                                    >
                                       {" "}
                                       <a
                                          className={`d-flex gap-2 align-items-center  py-2 px-3 rounded-lg`}
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
                                 src="/avatar.jpeg"
                                 alt="Profile"
                                 className="w-[30px] h-[30px] rounded-full border-cyan-300 border-3"
                              />
                           </div>
                           <div className="text-wrap px-3">
                              <span className="font-bold text-gray-300">Raynold Taylor</span>{" "}
                              <br />
                              <span className="text-xs text-cyan-400">ibrahimsheriff999@gmail.com</span>
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
