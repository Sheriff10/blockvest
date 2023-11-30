import React from "react";
import Card from "./Card";

export default function Offers() {
   const investmentsData = [
      {
         imgurl: "https://interbl.com/wp-content/uploads/2023/05/agric-3.jpg",
         title: "AGRICULTURE",
         text: "Investing in agriculture means putting your money behind food and crop production, processing, and distribution. As the world needs to feed a growing population and with less land, interest in agriculture production increases.",
      },
      {
         imgurl: "https://interbl.com/wp-content/uploads/2023/05/gold-2.jpg",
         title: "GOLD",
         text: "Gold is commonly seen as a great store of wealth, this precious metal is also known as a reliable safe-haven asset. With a rich history amongst almost all global cultures, gold remains a highly popular investment with multiple uses.",
      },
      {
         imgurl: "https://interbl.com/wp-content/uploads/2023/05/estate-2.jpg",
         title: "REAL ESTATE",
         text: "This involves the purchase, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing.",
      },
   ];

   return (
      <div className="container py-16">
        <div className="heading text-center  mb-5">
            <span className="text-4xl font-bold">Service we Offer</span>
        </div>
         <div className="row">
            {investmentsData.map((i, index) => (
               <div className="col-lg-4 mb-5">
                  <Card
                     imageUrl={i.imgurl}
                     title={i.title}
                     text={i.text}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
