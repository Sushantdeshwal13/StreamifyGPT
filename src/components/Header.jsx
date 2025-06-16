import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/userslice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handlesignout = () =>{

   signOut(auth)
   .then(()=>{ })
   .catch((error)=>{
    navigate("/error");
   });
  };

  useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (user)=>{
      if(user){
        // User is signed in, see docs for a list of availabe properties
        //https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL} = user;
        dispatch(adduser({ uid:uid, email:email,
           displayName:displayName, photoURL:photoURL}))
           navigate("/browser");
        //..
      }else{
        //user is signed out
        dispatch(removeuser());
        navigate("/");
       
      }
    });
    // unsubscribe when components unmounts
         return () => unsubscribe();
  },[]);

  return (
    <div className='absolute z-20 px-6 py-4 bg-gradient-to-b from-black w-full flex justify-between items-center'>
      {/* Left: Logo */}
      <img
        className='w-32 md:w-44 lg:w-48 -mt-6'
        src="/image.png"
        alt="VibeFlix Logo"
      />

      {/* Right: User Avatar */}
      {user && (
      <div className="w-10 h-10 -mt-6 ">
        <img 
          alt="user icon"
          src={user?.photoURL || '/planing.png'}
          className="w-full h-full object-cover rounded-md cursor-pointer"
        />
        <button onClick={handlesignout} className='text-[11px] font-normal text-white hover:underline px-1 py-0.5 -mx-2 mt-4'>
        (SignOut)
        </button>

      </div>
      )}
    </div>
  );
};

export default Header;
