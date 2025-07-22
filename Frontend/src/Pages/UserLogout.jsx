import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem('token');
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Logout error: ", error);
          // Optionally handle errors (e.g., show a message to the user)
        });
    } else {
      navigate("/login"); // If no token is found, redirect to login
    }
  }, [navigate]); // The navigate function is a dependency, so it gets updated if it changes

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default UserLogout;
