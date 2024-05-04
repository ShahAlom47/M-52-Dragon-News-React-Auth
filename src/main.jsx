import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import NewsDetails from './Pages/News Details/NewsDetails';
import Register from './Pages/Autentications/Register';
import LogIn from './Pages/Autentications/LogIn';
import AuthProvider from './AuthProbider/AuthProvider';
import PrivetRoute from './Routes/PrivetRoute';
import ErrorPage from './Pages/ErrorPage';
import axios from 'axios';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/news-details",
        element: <NewsDetails></NewsDetails>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
      },
    ]

  },
]);

axios.defaults.withCredentials = true
// aita use korar fole bar bar server a cookies pata te hobe na . akon jekane icca oikhane receive kora jave 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
