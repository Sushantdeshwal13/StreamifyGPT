import React from 'react'
import Browse from './Browse'
import Login from './Login'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const Body = () => {
const useonlinestatus = Onlinestatus()
  return (
    <div>
      
  {
    <li>{useonlinestatus ? "yes":"false"}</li>
  }

       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
