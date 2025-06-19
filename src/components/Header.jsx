import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/userslice';
import { togglegptsearchview } from '../utils/gptslice';
import { SupportedLanguages } from '../utils/Constants';
import { changelanguage } from '../utils/configslice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgptsearch  = useSelector((store)=> store.gpt.showgptsearch)
  const handlesignout = () =>{

   signOut(auth)
   .then(()=>{ })
   .catch((error)=>{
    navigate("/error");
   });
  };
      

  useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, async(user)=>{

      if(user){
        await user.reload();
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

  const handlegptsearch = () =>{
    //toggle gptsearch
    dispatch(togglegptsearchview());
    
   }
   const handlelanguagechange=(e)=>{
     dispatch(changelanguage(e.target.value));
   }

  return (
    <div className='absolute z-20 px-6 py-4 bg-gradient-to-b from-black w-full flex justify-between items-center '>
      {/* Left: Logo */}
      <img
        className='w-32 md:w-44 lg:w-48 -mt-6'
        src="/image.png"
        alt="VibeFlix Logo"
      />

      {/* Right: User Avatar */}
     {user && (
  <div className="flex items-center gap-3 -mt-6">
    {showgptsearch && (
    <select className="p-2 bg-gray-900 text-white rounded" 
      onChange={handlelanguagechange}>
      {SupportedLanguages.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
        </option>
      ))}
    </select>
    )}
    {/* GPT Search Button */}
    <button className='py-2 px-4 text-white bg-green-600 rounded'
    onClick={handlegptsearch}
    >
      {showgptsearch ? "Homepage" : "GPT Search"}
    </button>

    {/* User Image */}
    <div className="w-10 h-10">
      <img 
        alt="user icon"
        src={user?.photoURL || '/planing.png'}
        className="w-full h-full object-cover rounded-md cursor-pointer"
      />
    </div>

    {/* Sign Out */}
    <button
      onClick={handlesignout}
      className='text-[11px] font-normal text-white hover:underline px-1 py-0.5 mt-4 mr-4'
    >
      (SignOut)
    </button>
  </div>
)}

    </div>
  );
};

export default Header;
