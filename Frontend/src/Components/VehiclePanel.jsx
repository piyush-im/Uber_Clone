import React from 'react'


function VehiclePanel(props) {
  return (
    <div><h5 
     onClick={()=>{
     props.setVehiclePanel(false);
     }}
     className=' text-center absolute top-0  w-[93]'> <i className='text-3xl ri-arrow-down-wide-line'></i></h5>
        <h3 className='p-2 text-2xl font-semibold mb-3'>Choose Vehicles</h3>

        {/* Vertical stacked cards */}
        <div className="space-y-3">
          {/* Vehicle Card 1 */}
          <div 
          onClick={()=>{
            props.setconfirmPanel(true);
          }}
          className="flex items-center justify-between bg-gray-50 shadow-md border border-gray-200 rounded-xl p-4">
            <img
              className="h-14"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png"
              alt="Uber Vehicle"
            />
            <div className="flex-1 px-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                UberGo <span className="flex items-center text-gray-600 text-sm"><i className='ri-user-3-fill mr-1'></i>4</span>
              </h4>
              <h5 className="font-medium text-sm text-gray-500">2 mins away</h5>
              <p className="font-normal text-xs text-gray-400">Affordable, compact rides</p>
            </div>
            <h2 className="text-lg font-bold text-gray-800">₹193.20</h2>
          </div>

          {/* Vehicle Card 2 */}
          <div 
           onClick={()=>{
            props.setconfirmPanel(true);
          }}
          className="flex items-center justify-between bg-gray-50 shadow-md border border-gray-200 rounded-xl p-4">
            <img
              className="h-14"
              src="https://images.cnbctv18.com/uploads/2023/10/uber-auto.jpg?impolicy=website&width=400&height=225"
              alt="Uber Vehicle"
            />
            <div className="flex-1 px-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                UberGo <span className="flex items-center text-gray-600 text-sm"><i className='ri-user-3-fill mr-1'></i>4</span>
              </h4>
              <h5 className="font-medium text-sm text-gray-500">2 mins away</h5>
              <p className="font-normal text-xs text-gray-400">Affordable, compact rides</p>
            </div>
            <h2 className="text-lg font-bold text-gray-800">₹193.20</h2>
          </div>

            {/* Vehicle Card 2 */}
          <div
           onClick={()=>{
            props.setconfirmPanel(true);
          }}
          className="flex items-center justify-between bg-gray-50 shadow-md border border-gray-200 rounded-xl p-4">
            <img
              className="h-14 w-14"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6jKFXTJ6t76HFFxBhP3VIfFiIKKDk1uuITq2utbVbw4BqGLzm_pNjQhCHJq1h-7fQf8&usqp=CAU"
              alt="Uber Vehicle"
            />
            <div className="flex-1 px-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                UberGo <span className="flex items-center text-gray-600 text-sm"><i className='ri-user-3-fill mr-1'></i>4</span>
              </h4>
              <h5 className="font-medium text-sm text-gray-500">2 mins away</h5>
              <p className="font-normal text-xs text-gray-400">Affordable, compact rides</p>
            </div>
            <h2 className="text-lg font-bold text-gray-800">₹193.20</h2>
          </div>

        </div>
        </div>
  )
}

export default VehiclePanel