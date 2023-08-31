import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import ErrorPage from './Pages/ErrorPage.jsx';
 
import { ContactForm } from './Pages/ContactForm.jsx';
import { About1 } from './Pages/About.jsx';
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "contacts/1",
        element: <ContactForm/>,
      },
      {
        path: "contacts/2",
        element: <About1/>,
      },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    
    
    </React.StrictMode>

)