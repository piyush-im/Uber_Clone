import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login'); // Redirect if no token
        }
    }, [token, navigate]);

    // If there's no token, navigate and don't render the children
    if (!token) {
        return null; // Prevent rendering children while navigating
    }

    return <>{children}</>;
};

export default UserProtectedWrapper;
