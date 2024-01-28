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
    <div className=' h-screen w-screen bg-cover bg-slate-100 overflow-y-scroll'>
      <div className=' flex space-x-8 flex-row content-center bg-gradient-to-r from-pink-300 to-purple-400'>
        <button onClick={()=>setClouds(false)}> <h1 className='mt-3 ml-5 font-bold text-4xl mb-4 text-white font-title'> memoir </h1> </button>
        <button onClick={()=>setClouds(true)} className='hover:scale-105 mb-[2px]'><img className="h-8 w-12" src="https://imgur.com/XwTW8k4.jpeg" alt="Cloud Icon" /></button>
        <NavLink to="/profile"> <img  className="ml-[75svw] mt-[10px] size-12 rounded-full right-4 hover:scale-105" src="https://imgur.com/UxmKBRD.jpg"/></NavLink> 
      </div>
        <div className='w-screen grid-cols-5 grid'>
          <div className='col-span-1 flex flex-col text-center'> 
            <h1 className='animate-in fade-in slide-in-from-bottom duration-1000 mt-10 font-bold font-bio text-xl text-[#9F91CC]'>Trending</h1>
            <div className="flex flex-col content-evenly">
              <div className="animate-in fade-in slide-in-from-bottom duration-1300 flex-row flex justify-center">
                <h1 className='pt-[2px] mt-5 text-white font-bio rounded-full w-36 bg-[#ccc5fc]'>2010's Pop</h1>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom duration-1600 flex-row flex justify-center">
                <h1 className='pt-[2px] mt-5 text-white font-bio rounded-full w-36 bg-[#ccc5fc]'>Simpler Times</h1>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom duration-1900 flex-row flex justify-center">
                <h1 className='pt-[2px] mt-5 text-white font-bio rounded-full w-36 bg-[#ccc5fc]'>Learning to...</h1>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom duration-2200 flex-row flex justify-center">
                <h1 className='pt-[2px] mt-5 text-white font-bio rounded-full w-36 bg-[#ccc5fc]'>Bug Hunting</h1>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom duration-2500 flex-row flex justify-center">
                <h1 className='pt-[2px] mt-5 text-white font-bio rounded-full w-36 bg-[#ccc5fc]'>OG Fortnite</h1>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom duration-2800 flex-row flex justify-center">
                <h1 className='pt-[2px] mt-5 text-white font-bio rounded-full w-36 bg-[#ccc5fc]'>Playing Outside</h1>
              </div>
            </div>
          </div>

          <div className='col-span-3'>
            {clouds ? <Clouds /> : <Friends />}
          </div>

          <div className='col-span-1 flex flex-col text-center'> 
            <h1 className='animate-in fade-in slide-in-from-bottom duration-1000 mt-10 font-bold font-bio text-xl text-[#9F91CC]'>Online</h1>
            <p className='animate-in fade-in slide-in-from-bottom duration-1200 text-wrap mx-4 mt-4'> It's quiet right now... </p>
          </div>
        </div>

      <button className='absolute h-4 bottom-10 right-10 btn btn-square btn-outline border border-white bg-[#5C4B99]'
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