import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../Components/LogoutButton';


const Dashboard = () => {


  return (
    <div>
      <LogoutButton/>
    </div>
  )
}

export default Dashboard