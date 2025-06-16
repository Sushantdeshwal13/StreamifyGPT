import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkvalidate } from '../utils/Validate';
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userslice';

const Login = () => {
  const [issigninform, setissigninform] = useState(true);
  const [errormsg, seterrormsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const togglesigninform = () => {
    setissigninform(!issigninform);
    seterrormsg(null); // reset error on toggle
  };

  const handlebuttonclick = () => {
  const emailVal = email.current?.value;
  const passwordVal = password.current?.value;
  const fullnameVal = issigninform ? null : fullname.current?.value;

  const msg = checkvalidate(emailVal, passwordVal, fullnameVal);
  seterrormsg(msg);
   
  if(!issigninform){
    //sign up logic
    createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value)
    .then((userCredential) =>{
      //signedin
      const user = userCredential.user;
      updateProfile(user,{ 
        displayName: fullname.current.value, photoURL:"https://lh3.googleusercontent.com/ogw/AF2bZygiuoJdeViaaFUUvgS39X5DWo1ziasf2VdwpksmULhuT7Q=s64-c-mo"
      }).then(()=>{
        //profile upadted
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
          adduser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          })
        )
      })
      .catch((error)=>{
        seterrormsg(error.message);
      })
      console.log(user);
      navigate("/browser")
      //...
    })
    .catch((error)=>{
      const errorcode = error.code;
      const errormessage = error.message;
      seterrormsg(errorcode + "-"+ errormessage); 
    })
  }else{
    // sign in logic
     signInWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value)
    .then((userCredential) =>{
      //signedin
      const user = userCredential.user;
      //...
    })
    .catch((error)=>{
      const errorcode = error.code;
      const errormessage = error.message;
      seterrormsg(errorcode + "-"+ errormessage); 
    })
  }
 
};


  return (
    <div className="relative w-full h-screen">
      <Header />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image2.png')", // image2.png should be inside /public folder
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-75 p-8 rounded-md w-11/12 max-w-md text-white"
        >
          <h2 className="text-3xl font-bold mb-6">
            {issigninform ? 'Log In' : 'Create Account'}
          </h2>

          {!issigninform && (
            <input
              ref={fullname}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email or Phone Number"
            className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <p className="text-red-500 font-bold text-lg py-2">{errormsg}</p>

          <button
            type="submit"
            onClick={handlebuttonclick}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded"
          >
            {issigninform ? 'Log In' : 'Sign Up'}
          </button>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            {issigninform ? 'New to Streamify? ' : 'Already a user? '}
            <span
              onClick={togglesigninform}
              className="text-white hover:underline cursor-pointer"
            >
              {issigninform ? 'Create Account' : 'Log In'}
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
