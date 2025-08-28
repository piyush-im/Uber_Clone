import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../Context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // No token → redirect immediately
        if (!token) {
            navigate('/captain-login');
            return;
        }

        // Validate token & fetch profile only once
        const fetchProfile = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/profile`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        withCredentials: true, // if you're using cookies
                    }
                );

                if (response.status === 200) {
                    setCaptain(response.data.captain);
                    setIsLoading(false);
                }
            } catch (err) {
                console.error(err);
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        };

        fetchProfile();
    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Prevent children from rendering while redirecting
    if (!token) {
        return null;
    }

    return <>{children}</>;
};

export default CaptainProtectWrapper;
