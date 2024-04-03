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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)