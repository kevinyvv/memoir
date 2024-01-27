import React from 'react'
import LogoutButton from '../Components/LogoutButton';
import PostContainer from '../Components/PostContainer';

const Profile = () => {
  return (
    <div className='w-full h-screen bg-black'> 
      <div className='h-1/3 bg-white mb-7'>
        
        <LogoutButton/>
      </div>
      <div className='h-full bg-slate-600'>
        <div className='flex flex-col items-center space-y-8'>
          <PostContainer/>
          <div className='grid grid-cols-8 outline outline-2 w-[36rem] h-64 rounded-lg'>
            <img className='col-span-1 rounded-full mx-4 my-2' 
            src="https://ih1.redbubble.net/image.4785986194.3997/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg"/>
            <div className='col-span-5 mt-4 mx-4'>
              <h1 className='font-bold my-2 mx-2 '> brought up by @kevin 3 hrs ago.</h1>
            <div className='mt-4 mx-2 border border-1 rounded-lg py-2 px-2'>
              <p> Nap time in kindergarten was the real MVP. Who else misses those cozy mats and soft blankets? </p>
            </div>
          </div>
          <img className='col-span-3'/>
         </div>
          <hr className='w-full my-4' />
          No more posted memories!
        </div>
      </div>
    </div>
  )
}

export default Profile 