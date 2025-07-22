import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContetxt.jsx';
import CaptainContext from './Context/CaptainContext.jsx';

createRoot(document.getElementById('root')).render(
  <CaptainContext>
  <StrictMode>
    <UserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserContext>
  </StrictMode>
  </CaptainContext>,
)
