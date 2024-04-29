import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Addcraft from './Components/Addcraft.jsx';
import Root from './Roots/Root.jsx';
import Login from './Components/User/Login.jsx';
import AuthProvider from './Components/Firebase/AuthProvider.jsx';
import Register from './Components/User/Register.jsx';
import Home from './Components/Home/Home.jsx';
import AllArtCraft from './Components/CardIteams/AllArtCraft.jsx';
import MyCart from './Components/CardIteams/MyCart.jsx';
import CardDetails from './Components/CardIteams/CardDetails.jsx';
import About from './Components/User/About.jsx';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<div>OPPS....!</div>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addcraft",
        element:<PrivetRoute><Addcraft></Addcraft></PrivetRoute>
      },
      {
        path:"/mycart",
        element:<PrivetRoute><MyCart></MyCart></PrivetRoute>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"/allArt&craft",
        element:<AllArtCraft></AllArtCraft>
      },
      {
        path:"carddetails/:_id",
        element:<PrivetRoute><CardDetails></CardDetails></PrivetRoute>
      },
      {
        path:"/about",
        element:<PrivetRoute><About></About></PrivetRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </AuthProvider>
  </React.StrictMode>
)
