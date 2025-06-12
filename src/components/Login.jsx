import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {

   const [issigninform, setissigninform] = useState(true);

   const togglesigninform = () =>{
    setissigninform(!issigninform);
   };

  return (
    <div className="relative w-full h-screen">
      <Header /> 

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg')"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form className="bg-black bg-opacity-75 p-8 rounded-md w-11/12 max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">{issigninform?"Sign In" : "Sign Up"}</h2>

          {!issigninform && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
          />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded">
            {issigninform?"Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">Need help?</a>
          </div>

          <p  className="mt-8 text-gray-400 text-sm cursor-pointer">
            {issigninform?"New to Netflix? ":"Already a User? "} <span onClick={togglesigninform}
             className="text-white hover:underline cursor-pointer">{issigninform?"Sign Up Now":"Sign In Now"}</span>.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
