import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/Routes.jsx'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <ToastContainer position="top-center" reverseOrder={false} />
    <RouterProvider router={router}/>
    </HelmetProvider>
  </StrictMode>,
)
