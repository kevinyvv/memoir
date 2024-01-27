import React, { useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Clouds from '../Components/clouds';
import Friends from '../Components/friends';
import { NavLink } from 'react-router-dom';
import PostModal from '../Components/postModal';

const Dashboard = () => {

  const [showModal, setShowModal] = useState(false)
  const isAuthenticated = useAuth0();
  const [clouds, setClouds] = useState(false)

  const createPost = () => {
    console.log('hello')
    return(
      <div className='absolute bg-white top-1/2 right-1/2'>
        Hello
      </div>
    )
  }

  return (
    <div className='h-screen w-screen bg-cover bg-[#E8E4FF] overflow-y-hidden'>
      <div className='flex space-x-8 bg-nostalgia flex-row content-center bg-cover'>
        <button onClick={()=>setClouds(false)}> <h1 className='mt-3 ml-5 font-bold text-4xl mb-4 text-white font-title'> memoir </h1> </button>
        <button onClick={()=>setClouds(true)} className='text-white font-bold hover:scale-105'> Clouds </button>
        <NavLink to="/profile"> <img  className="absolute mt-3 size-12 rounded-full right-4 hover:scale-105" src="https://ih1.redbubble.net/image.4785986194.3997/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg"/></NavLink> 
      </div>
        
        {clouds ? <Clouds/> : <Friends/>}

      <button className='bg-white absolute bottom-24 right-36 btn btn-square btn-outline border border-white scale-150'
      onClick={()=>setShowModal(true)}>
        +
      </button>

    {showModal && (
      <PostModal setShowModal={setShowModal}/>
    )}

    </div>
  )
}

export default Dashboard