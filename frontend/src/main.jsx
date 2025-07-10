import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AdminAuthProvider } from './components/provider/AdminAuth.jsx';
import { router } from './components/router/Routes.jsx';
import './index.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminAuthProvider>
       <HelmetProvider>
        <ToastContainer position="top-center" reverseOrder={false} />
          <RouterProvider router={router}/>
       </HelmetProvider>
    </AdminAuthProvider>
  </StrictMode>,
)
