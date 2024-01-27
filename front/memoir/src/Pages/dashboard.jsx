import React, { useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Clouds from '../Components/clouds';
import Friends from '../Components/friends';

const Dashboard = () => {

  const isAuthenticated = useAuth0();
  const [clouds, setClouds] = useState(false)

  return (
    <div className='h-screen w-screen bg-cover'>
      <div className='flex space-x-8 justify-center mt-4'>
        <button onClick={()=>setClouds(false)}> Friends </button>
        <button onClick={()=>setClouds(true)}> Clouds </button>
      </div>
      {clouds ? <Clouds/> : <Friends/>}
    </div>
  )
}

export default Dashboard