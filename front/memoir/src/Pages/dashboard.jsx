import React, { useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Clouds from '../Components/clouds';
import Friends from '../Components/friends';

const Dashboard = () => {

  const isAuthenticated = useAuth0();
  const [clouds, setClouds] = useState(false)

  return (
    <div>
      
    </div>
  )
}

export default Dashboard