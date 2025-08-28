import React from 'react'

function WaitingForDriver(props) {
  return (
  <div className="relative bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg mx-auto">
      {/* Close Button */}
      <button
        onClick={() => props.setWaitingForDriver(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl transition"
      >
        <i className="ri-close-line"></i>
      </button>

      <h3 className="text-2xl font-semibold mb-5 text-center">Looking for A Driver</h3>

      {/* Vehicle & Details */}
      <div className="flex flex-col gap-6">
   

        {/* Pickup */}
        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-map-pin-2-fill text-lg text-green-600"></i>
          <div>
            <h4 className="text-lg font-medium">56/12</h4>
            <p className="text-sm text-gray-600">Pickup Location Example</p>
          </div>
        </div>

        {/* Drop */}
        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-map-pin-2-fill text-lg text-red-600"></i>
          <div>
            <h4 className="text-lg font-medium">78/45</h4>
            <p className="text-sm text-gray-600">Drop Location Example</p>
          </div>
        </div>

        {/* Fare */}
        <div className="flex items-center gap-4 border-b pb-3">
          <i className="ri-currency-line text-lg text-blue-600"></i>
          <div>
            <h4 className="text-lg font-medium">₹250</h4>
            <p className="text-sm text-gray-600">Estimated Fare</p>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition">
          Confirm Ride
        </button>
      </div>
    </div>
  )
}

export default WaitingForDriver