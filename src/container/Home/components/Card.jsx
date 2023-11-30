import React from 'react';

const Card = ({ imageUrl, title, subtitle, text }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <div className="">
        <div className="">
          <img className="h-48 w-full object-cover md:h-full" src={imageUrl} alt="Card Image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
          <p className="mt-2 text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
