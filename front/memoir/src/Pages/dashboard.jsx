import React, { useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Clouds from '../Components/clouds';
import Friends from '../Components/friends';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {

  const isAuthenticated = useAuth0();
  const [clouds, setClouds] = useState(false)

  return (
    <div className='h-screen w-screen bg-cover bg-[#E8E4FF] overflow-y-auto'>
      <div className='flex space-x-8 mt-4 bg-nostalgia flex-row content-center'>
        <button onClick={()=>setClouds(false)}> <h1 className='mt-3 ml-5 font-bold text-4xl mb-4 text-white font-title hover:scale-105'> memoir </h1> </button>
        <button onClick={()=>setClouds(false)} className='text-white font-bold'> Friends </button>
        <button onClick={()=>setClouds(true)} className='text-white font-bold'> Clouds </button>
        <NavLink to="/profile"> <img  className="absolute mt-3 size-12 bg-stone-300 rounded-full top-4 right-5"/></NavLink> 
      </div>
        
        {clouds ? <Clouds/> : <Friends/>}

      <button className='absolute bottom-16 right-16 btn btn-square border border-white glass scale-105'>
        +
      </button>
    </div>
  )
}

export default Dashboard