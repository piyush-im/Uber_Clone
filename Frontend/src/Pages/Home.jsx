import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

import LocationSearchPanel from '../Components/LocationSearchPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmedRide from '../Components/ConfirmedRide';
import LookingForDriver from '../Components/LookingForDriver';
import WaitingForDriver from '../Components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmPanel, setconfirmPanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmPanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Expand/Collapse Location Panel
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '70%', padding: '24', opacity: 1 });
      gsap.to(panelCloseRef.current, { opacity: 1 });
    } else {
      gsap.to(panelRef.current, { height: '0%' });
      gsap.to(panelCloseRef.current, { opacity: 0 });
    }
  }, [panelOpen]);

  // Expand/Collapse Vehicle Panel
  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(100%)' });
    }
  }, [vehiclePanelOpen]);

  // Expand/Collapse Confirm Panel
  useGSAP(() => {
    if (confirmPanel) {
      gsap.to(confirmPanelRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(confirmPanelRef.current, { transform: 'translateY(100%)' });
    }
  }, [confirmPanel]);

  // Expand/Collapse LookingForDriver Panel
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(vehicleFoundRef.current, { transform: 'translateY(100%)' });
    }
  }, [vehicleFound]);

  
  // Expand/Collapse LookingForDriver Panel
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(waitingForDriverRef.current, { transform: 'translateY(100%)' });
    }
  }, [waitingForDriver]);

  return (
    <div className='h-screen relative overflow-hidden'>
      {/* Logo */}
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt="Uber Logo"
      />

      {/* Background Map */}
      <div className='h-screen w-screen'>
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map Background"
        />
      </div>

      {/* Bottom Panel - Choose Location */}
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative rounded-t-3xl shadow-xl'>
          {/* Close Button */}
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute opacity-0 top-3 right-6 text-2xl cursor-pointer text-gray-500 hover:text-black transition'
          >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>

          <h3 className='text-2xl font-semibold text-gray-800'>Find a Trip</h3>

          <form onSubmit={submitHandler} className="relative mt-6 space-y-4">
            {/* Pickup input */}
            <div className="relative">
              <span className="absolute left-4 top-3 w-3 h-3 rounded-full bg-green-500"></span>
              <input
                onClick={() => setPanelOpen(true)}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="bg-gray-100 w-full px-12 py-3 text-base rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                type="text"
                placeholder="Add a Pick-up Location"
              />
            </div>

            {/* Connector line */}
            <div className="absolute left-[25px] top-[52px] h-6 w-[2px] bg-gray-400"></div>

            {/* Dropoff input */}
            <div className="relative">
              <span className="absolute left-4 top-3 w-3 h-3 rounded-full bg-red-500"></span>
              <input
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-gray-100 w-full px-12 py-3 text-base rounded-xl shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
                type="text"
                placeholder="Add a Drop-off Location"
              />
            </div>
          </form>
        </div>

        {/* Expanding Panel */}
        <div ref={panelRef} className='bg-white h-0 rounded-t-3xl shadow-xl overflow-hidden'>
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanelOpen}
            setconfirmPanel={setconfirmPanel}
          />
        </div>
      </div>

      {/* Floating Bottom Vehicle Section */}
      <div
        ref={vehiclePanelRef}
        className="fixed bottom-0 left-0 w-full z-20 p-5 pb-7 bg-white/95 backdrop-blur-lg shadow-inner rounded-t-2xl translate-y-full"
      >
        <VehiclePanel 
          setVehiclePanel={setVehiclePanelOpen} 
          setconfirmPanel={setconfirmPanel}  
        />
      </div>

      {/* Confirm Panel */}
      <div
        ref={confirmPanelRef}
        className="fixed bottom-0 left-0 w-full z-20 p-5 pb-7 bg-white/95 backdrop-blur-lg shadow-inner rounded-t-2xl translate-y-full"
      >
        <ConfirmedRide setconfirmPanel={setconfirmPanel} setVehicleFound={setVehicleFound} />
      </div>

      {/* Looking for Driver */}
      <div
        ref={vehicleFoundRef}
        className="fixed bottom-0 left-0 w-full z-30 p-5 pb-7 bg-white/95 backdrop-blur-lg shadow-inner rounded-t-2xl translate-y-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      {/* Waiting for Driver */}
      <div
        ref={waitingForDriverRef}
        className="fixed bottom-0 left-0 w-full z-30 p-5 pb-7 bg-white/95 backdrop-blur-lg shadow-inner rounded-t-2xl translate-y-full"
      >
        <WaitingForDriver WaitingForDriver={WaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
