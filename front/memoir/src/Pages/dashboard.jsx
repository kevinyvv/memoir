import React, { useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Clouds from '../Components/clouds';
import Friends from '../Components/friends';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {

  const isAuthenticated = useAuth0();
  const [clouds, setClouds] = useState(false)

  return (
    <div className='h-screen w-screen bg-cover bg-[#E8E4FF]'>
      <div className='flex space-x-8 mt-4 bg-nostalgia flex-row content-center'>
        <h1 className='mt-3 ml-5 font-bold text-4xl mb-4 text-white font-title'>memoir </h1>
        <button onClick={()=>setClouds(false)}> Friends </button>
        <button onClick={()=>setClouds(true)}> Clouds </button>
      </div>
      <NavLink to="/profile" className="absolute mt-3 size-12 bg-stone-300 rounded-full top-4 right-5"></NavLink> 
      {clouds ? <Clouds/> : <Friends/>}
    </div>
  )
}

export default Dashboard