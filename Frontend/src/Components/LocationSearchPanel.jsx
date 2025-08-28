import React from 'react'

function LocationSearchPanel(props) {
    // console.log(props);
    

    // sample array location
    const location=[
        "Anand Agricultural University, Anand",
        "Gujarat Technological University, Ahmedabad",
        "Sardar Vallabhbhai Patel International Airport, Ahmedabad",
        "Nirma University, Ahmedabad",
        "Indian Institute of Management, Ahmedabad"
    ]


  return (
    <div>
 {/* <div>thisJust Sample data</div> */}

    {
        location.map(function(item,idx){
            return <div key={idx} onClick={()=>{
                props.setVehiclePanel(true);
                props.setPanelOpen(false);
            }}
            
            className='flex items-center  border-2 p-3 active:border-black rounded-xl  gap-4 justify-satrt my-4'> 
                <h2 className='bg-[#eee] h-7 flex items-center justify-center w-12  rounded-full'> 
                    <i className='ri-map-pin-fill'></i>
                </h2>
                <h4 className='font-medium'>{item}</h4>
            </div>
        })
    }


    <div className='flex items-center  border-2 p-3 active:border-black rounded-xl  gap-4 justify-satrt my-4'> 
        <h2 className='bg-[#eee] h-7 flex items-center justify-center w-12  rounded-full'> 
            <i className='ri-map-pin-fill'></i>
        </h2>
        <h4 className='font-medium'>anand agricuture university,anand</h4>
    </div>

     <div className='flex items-center  border-2  active:border-black rounded-xl p-3  gap-4 justify-satrt my-4'> 
        <h2 className='bg-[#eee] h-7 flex items-center justify-center w-12  rounded-full'> 
            <i className='ri-map-pin-fill'></i>
        </h2>
        <h4 className='font-medium'>anand agricuture university,anand</h4>
    </div>

     <div className='flex items-center border-2 p-3  active:border-black rounded-xl gap-4 justify-satrt my-4'> 
        <h2 className='bg-[#eee] h-7 flex items-center justify-center w-12  rounded-full'> 
            <i className='ri-map-pin-fill'></i>
        </h2>
        <h4 className='font-medium'>anand agricuture university,anand</h4>
    </div>

     <div className='flex items-center  border-2 p-3  active:border-black rounded-xl gap-4 justify-satrt my-4'> 
        <h2 className='bg-[#eee] h-7 flex items-center justify-center w-12  rounded-full'> 
            <i className='ri-map-pin-fill'></i>
        </h2>
        <h4 className='font-medium'>anand agricuture university,anand</h4>
    </div>

    
       </div>
  )
}

export default LocationSearchPanel