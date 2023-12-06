import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";

export default function Login() {
   const [accesCode, setaccesCode] = useState("");
   const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem("isAdmin"));

   useEffect(() => {
      setIsAdmin(sessionStorage.getItem("isAdmin"));
   }, [accesCode]);

   const verifyCode = () => {
      console.log("called veryify");
      sessionStorage.setItem(
         "isAdmin",
         accesCode === "admin" ? "true" : "false"
      );
      if (accesCode === "admin") setIsAdmin('true');
   };
   return (
      <>
         {isAdmin !== "true" && (
            <div className="login z-10 fixed top-0 bottom-0 right-0 left-0 bg-gray-950">
               <div className="container">
                  <div className="row justify-content-center items-center min-h-[100vh]">
                     <div className="col-lg-4 col-md-8 d-flex align-items-center  ">
                        <div className="wrap  p-5 mx-auto bg-white">
                           <div className="head">
                              <span className="fs-4 d-flex align-items-center gap-2">
                                 <FaLock /> Blockvest Admin Login
                              </span>
                           </div>
                           <div className="form-group mt-4">
                              <label>Access Code</label>
                              <input
                                 type="password"
                                 className="form-control"
                                 value={accesCode}
                                 onChange={(e) => setaccesCode(e.target.value)}
                                 onKeyUp={verifyCode}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
