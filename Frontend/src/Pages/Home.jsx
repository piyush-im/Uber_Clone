import React, { useState } from 'react';
import {useGSAP} from '@gsap/react';

// In src/Pages/Home.jsx
const Home = () => {
   // useStateSnipp
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpne,setPanelOpen]=useState(false);
    const panelRef=useRef(null);

    const submitHandler=()=>{
        e.PreventDefault();
    };
    useGSAP(function(){
        gsap.to(panelRef.current,{
            height:'70%'
        })
            
    })


    return (
        <div className='h-sccreen relative' >
            <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" />
            <div className='h-screen w-screen'>
                {/* image for temporary */}
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
            </div>
            <div className='  flex flex-col justify-end h-screen absolute top-0 w-full '>

                <div className='h-[30%] p-5 bg-white relative'>
                <h3 className='text-2xl font-semibold'> Find A Trip</h3>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                 <div className="line absolute h-20 w-1 top-0 bg-black-"></div>
                <input
                onClick={()=>{
                    setPanelOpen(true);
                }}
                value={pickup}
                onChange={(e)=>{
                    setPickup(e.target.value)
                }}
                 className='bg-[#eee] w-full px-12 py-2 text-base rounded-large mt-5'
                  type='text' 
                  placeholder='Add A Pic-up Location'
                  />

                <input
                onClick={()=>{
                    setPanelOpen(true);
                }} 
                value={destination}
                onChange={(e)=>{
                    setDestination(e.target.value)
                }}
                className='bg-[#eee] w-full px-12 py-2 text-base rounded-large mt-3' 
                type='text'
                 placeholder='Add A Drop-off Location'
                 />

                </form>

                </div>
                <div ref={panelRef} className=' bg-red-500 p-5 h-0 '>
                </div>
            </div>
        </div>
    );
};

export default Home;
