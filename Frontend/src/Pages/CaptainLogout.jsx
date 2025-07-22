import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem('token');
            navigate("/captain-login");
          }
        })
        .catch((error) => {
          console.error("Logout error: ", error);
          // Optionally handle errors (e.g., show a message to the user)
        });
    } else {
      navigate("/captain-login"); // If no token is found, redirect to login
    }
  }, [navigate]); // The navigate function is a dependency, so it gets updated if it changes

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default CaptainLogout;
