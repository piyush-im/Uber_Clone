import React from "react";

function LookingForDriver({ props }) {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-xl rounded-2xl p-6 w-full max-w-lg mx-auto animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={() => props.setVehicleFound(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-3xl transition"
      >
        <i className="ri-close-circle-line"></i>
      </button>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2 text-center text-gray-800">
        Looking for a Driver...
      </h3>
      <p className="text-sm text-center text-gray-500 mb-6">
        Sit tight while we connect you with the nearest captain 🚗
      </p>

      {/* Searching Animation */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex justify-center items-center">
          {/* Pulsing circle */}
          <div className="absolute w-40 h-40 rounded-full bg-green-100 animate-ping"></div>
          <div className="absolute w-28 h-28 rounded-full bg-green-200 animate-pulse"></div>
          {/* Car image */}
          <img
            className="w-32 relative z-10 drop-shadow-lg animate-bounce"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
            alt="Searching Car"
          />
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-green-500 h-2.5 rounded-full animate-progress"></div>
        </div>
      </div>

      {/* Ride Details */}
      <div className="flex flex-col gap-5 mt-8">
        {/* Pickup */}
        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-map-pin-user-fill text-xl text-green-600"></i>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">56/12</h4>
            <p className="text-sm text-gray-500">Pickup Location Example</p>
          </div>
        </div>

        {/* Drop */}
        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-map-pin-2-fill text-xl text-red-600"></i>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">78/45</h4>
            <p className="text-sm text-gray-500">Drop Location Example</p>
          </div>
        </div>

        {/* Fare */}
        <div className="flex items-center gap-4">
          <i className="ri-money-rupee-circle-fill text-2xl text-blue-600"></i>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">₹250</h4>
            <p className="text-sm text-gray-500">Estimated Fare</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingForDriver;
