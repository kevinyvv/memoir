import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    //change bg later
    <div className="h-screen w-screen bg-nostalgia bg-cover">
      <button className='absolute top-5 right-5 btn rounded-full glass bg-[#E8E4FF] px-8 text-[#8975FF]'
      onClick={()=>loginWithRedirect()}> LOG IN </button>

      <div className='relative top-1/3 text-center'>
        <h1 className='font-bold text-8xl mb-4 text-white font-title'>memoir </h1>

        <p className='my-4 text-white font-slogan text-3xl tracking-widest'> Memories Live Here </p>

        <button className="my-8 btn glass rounded-full px-10 bg-gradient-to-r from-yellow-200 to-purple-300 text-[#8975FF] py-1 text-white"
        onClick={()=>loginWithRedirect()}> SIGN UP </button>
      </div>

    </div>
  )
}

export default Main