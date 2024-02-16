import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    //change bg later
    <div className="h-screen w-screen bg-nostalgia bg-cover">
      <div id="blob" className='absolute top-0 -left-4 w-56 h-56 bg-transparent rounded-full filter blur-xl
            opacity-50 animate-blob pointer-events-none'>""</div>
            <div className='absolute top-20 -right-20 w-56 h-56 bg-transparent rounded-full filter blur-xl
            opacity-50 animate-blob pointer-events-none'>""</div>
            <div className='absolute -bottom-4 -left-40 w-56 h-56 bg-transparent rounded-full filter blur-xl
            opacity-50 animate-blobpointer-events-none'>""</div> 
            <div className='absolute bottom-36 -right-40 w-56 h-56 bg-transparent rounded-full filter blur-xl
            opacity-50 animate-blob pointer-events-none'>""</div> 
            <div className='absolute center w-56 h-56 bg-transparent rounded-full filter blur-xl
            opacity-50 animate-blob pointer-events-none'>""</div>
            <div className='absolute center w-56 h-56 bg-transparent rounded-full filter blur-xl
            opacity-50 animate-blob pointer-events-none'>""</div>
            

      <button className='absolute top-5 right-5 btn rounded-full glass bg-[#E8E4FF] px-8 text-[#8975FF]'
      onClick={()=>loginWithRedirect()}> LOG IN </button>

      <div className='relative top-1/3 text-center'>
        <h1 className='font-bold text-8xl mb-4 text-white font-title'>memoir </h1>

        <p className='my-4 text-white font-slogan text-3xl tracking-widest'> Memories Live Here </p>

        <button className="mb-8 mt-5 btn glass rounded-full px-10 text-[#8975FF] py-1 [&:not(:hover)]:bg-gradient-to-r from-yellow-200 to-purple-300"
        onClick={()=>loginWithRedirect()}> SIGN UP </button>
      </div>

    </div>
  )
}


export default Main
