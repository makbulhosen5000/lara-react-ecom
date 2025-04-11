import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    {/* <Toaster position="top-center" reverseOrder={false} /> */}
    <RouterProvider router={router}/>
    </HelmetProvider>
  </StrictMode>,
)
