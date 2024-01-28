import React, { useState } from 'react'
import LogoutButton from '../Components/LogoutButton';
import PostContainer from '../Components/PostContainer';
import { NavLink } from 'react-router-dom';
import Myposts from '../Components/myposts';
import Mycloud from '../Components/mycloud';

const Profile = () => {

  const [cloud, setCloud] = useState('My Posts')
  const [bio, setBio] = useState('Rediscovering my inner child!')

  const handleChange=(e)=>{
    setCloud(e.target.value)
}

  return (
    <div className='w-full h-screen bg-white'> 
      <div className='flex flex-row gap-10 h-2/5 bg-nostalgia bg-cover mb-7'>
        <NavLink to="/home" className='mt-5 ml-5 btn rounded-full glass bg-[#E8E4FF] px-8 text-[#8975FF]'> BACK </NavLink>
        <div className='flex flex-col gap-5'>
          <NavLink to="/profile"> <img className="mt-5 size-48 rounded-full right-4 hover:scale-105" src="https://imgur.com/UxmKBRD.jpg"/></NavLink>
          <LogoutButton/>
        </div>
        <div>
          <h1 className='text-white font-bio font-bold mt-10 text-xl'>Kevin Wu</h1>
          <h1 className='text-gray-200 font-bio font-bold text-md'>@kevin</h1>
          <p className='mt-5 text-white font-bio'>
            {bio}
          </p>
        </div>
        <NavLink to="/profile"> <img className="absolute mt-5 size-12 rounded-full right-4 hover:scale-105" src="https://imgur.com/h74AiV3.jpg"/></NavLink> 
      </div>
      <div className='h-full bg-white grid justify-between align-center grid-cols-5 w-full'>
        
      <div className='col-span-1 mx-4 w-1/2'>
      <select value={cloud} onChange={(e)=>handleChange(e)} class="select w-full max-w-xs bg-slate-300">
        <option disabled selected>Display</option>
        <option> My Posts</option>
        <option> My Cloud</option>
      </select>
      </div>

        <div className='col-span-3 text-center'>
        {
          cloud == 'My Cloud' ? <Mycloud/> : <Myposts/>
        }
        </div>

        <div className='col-span-1 text-center'>
          <h1 className='text-xl font-bold'> Friends </h1>
          <p className='text-wrap mx-4 mt-4'> You currently have no friends. Go make some!</p>
        </div>
      </div>
    </div>
  )
}

export default Profile 