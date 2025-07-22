// In ./Pages/Home.jsx or ./Pages/Home.js
import React from "react";
import {Link} from "react-router-dom"

const Start = () => {
  return (
    <div className="bg-center bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/028/747/604/small/a-traffic-light-at-a-street-crossroads-with-a-beautiful-bokeh-city-and-cars-in-the-background-generative-ai-free-photo.jpg)] h-screen pt-8  w-fill flex justify-between flex-col w-full bg-red-400">
      <img className='w-16 ml-9' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""  />
      <div className="bg-white pb-7 py-5 px-5">
        <h2 className="text-3xl font-bold">Get started with Uber</h2>
        <Link  to="/login"className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
      </div>
    </div>
  );
};

export default Start;
