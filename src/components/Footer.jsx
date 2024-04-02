import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
   const footerData = [
      {
         header: "COMPANY",
         body: [
            { text: "About Us" },
            { text: "What we do" },
            { text: "support@wealthifyasset.com" },
         ],
      },
      {
         header: "LEGAL",
         body: [{ text: "Terms and Conditions" }, { text: "Privacy Policy" }],
      },
      {
         header: "QUICK LINKS",
         body: [
            { text: "Bitcoin trends" },
            { text: "New to crypto?" },
            { text: "Investment plans" },
         ],
      },
   ];

   return (
      <div className="footer bg-gray-50 text-gray-900 py-16">
         <div className="container">
            <div className="row border-bottom border-slate-600 py-4">
               <div className="col-md-4 mb-5">
                  <div className="logo-com mb-4">
                     <span className="text-2xl text-black font-bold">Block<span className="text-pri">vest</span></span>
                  </div>
                  <div className="text-wrap mb-3">
                     <span>
                     Embarking on a Journey of Empowerment, Guiding Futures through Thoughtful Investments and Unleashing Opportunities for Lasting Success.
                     </span>
                  </div>
                  <div className="social-con text-pri flex gap-3 text-lg">
                     <FaFacebook /> <FaTwitter /> <FaInstagram />
                  </div>
               </div>
               <div className="col-md-8">
                  <div className="row">
                     {footerData.map((i, index) => (
                        <div className="col-lg-4 col-6 mb-4" key={index}>
                           <div className="heading mb-3">
                              <span className="text-black font-medium">{i.header}</span>
                           </div>
                           <div className="body leading-9">
                              <ul>
                                 {i.body.map((text, index) => (
                                    <li key={index}>{text.text}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="caption">

            </div>
         </div>
      </div>
   );
}
