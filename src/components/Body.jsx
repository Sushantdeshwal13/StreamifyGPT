import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {useDispatch} from "react-redux";
import { adduser, removeuser } from '../utils/userslice'
import { auth } from '../utils/firebase'

const Body = () => {
   const dispatch = useDispatch();

  const approuter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browser",
      element:<Browse/>
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        // User is signed in, see docs for a list of availabe properties
        //https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName} = user;
        dispatch(adduser({ uid:uid, email:email, displayName:displayName}))
        
        //..
      }else{
        //user is signed out
        dispatch(removeuser());
       
      }
    });
  },[]);

  return (
    <div>
      <RouterProvider router={approuter}/>
     
    </div>
  )
}

export default Body
