import React from 'react';

function ConfirmedRide({ setconfirmPanel, setVehicleFound }) {
  return (
    <div className="relative bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg mx-auto">
      {/* Close Button */}
      <button
        onClick={() => setconfirmPanel(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl transition"
      >
        <i className="ri-close-line"></i>
      </button>

      <h3 className="text-2xl font-semibold mb-5 text-center">Confirm your ride</h3>

      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <img
            className="w-52 object-contain"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
            alt="Car"
          />
        </div>

        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-map-pin-2-fill text-lg text-green-600"></i>
          <div>
            <h4 className="text-lg font-medium">56/12</h4>
            <p className="text-sm text-gray-600">Pickup Location Example</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-map-pin-2-fill text-lg text-red-600"></i>
          <div>
            <h4 className="text-lg font-medium">78/45</h4>
            <p className="text-sm text-gray-600">Drop Location Example</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-currency-line text-lg text-blue-600"></i>
          <div>
            <h4 className="text-lg font-medium">₹250</h4>
            <p className="text-sm text-gray-600">Estimated Fare</p>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => {
            setconfirmPanel(false);   // close confirm panel
            setVehicleFound(true);    // show looking for driver
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
}

export default ConfirmedRide;
