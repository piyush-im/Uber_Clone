import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../Context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const {captain,setCaptain}=useContext(CaptainDataContext)
    // console.log(token);
    const [isLoading,setisLoading]=useState(true);
    

    useEffect(() => {
        if (!token) {
            navigate('/captain-login'); // Redirect if no token
        }
    }, [token, navigate])
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }

    }).then(response=>{
        if(response.status===200){
            setCaptain(response.data.captain);
            setisLoading(false)
        }
    })
    .catch(err=>{
        console.log(err);
        localStorage.removeItem('token');
        navigate('/captain-login');
        
    })
    if (isLoading) {
        return(
            <div>Loading...</div>
        );
    }

    // If there's no token, navigate and don't render the children
    if (!token) {
        return null; // Prevent rendering children while navigating
    }

    return <>{children}</>;
};

export default CaptainProtectWrapper;
