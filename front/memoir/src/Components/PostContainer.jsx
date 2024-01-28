import React from 'react'
import { NavLink } from 'react-router-dom'

const PostContainer = () => {

  return (
    <div className='grid grid-cols-8 outline outline-2 w-[36rem] h-64 rounded-lg'>
        <NavLink to="/profile"> <img className='col-span-1 rounded-full mx-4 my-2' 
        src="https://ih1.redbubble.net/image.4785986194.3997/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg"/> </NavLink>
        <div className='col-span-5 mt-4 mx-4'>
            <h1 className='font-bold my-2 mx-2 '> brought up by @kevin 2 hrs ago.</h1>
            <div className='mt-4 mx-2 border border-1 rounded-lg py-2 px-2 text-md'>
              <p> Pokémon card trades were the legit business deals of our childhood. Which one was your favorite?  </p>
            </div>

            <div className='flex space-x-2 mt-4'>
              <p className='text-sm'> Tags </p>
              <p className='bg-[#ccc5fc] text-sm rounded-full text-white pt-[1px] px-2 w-min h-6'> Pokemon </p>
              <p className='bg-[#ccc5fc] text-sm rounded-full text-white pt-[1px] px-2 w-32 h-6'> Cards </p>
              <p className='bg-[#ccc5fc] text-sm rounded-full text-white pt-[1px] px-2 w-min h-6'> Trading </p>
              <p className='bg-[#ccc5fc] text-sm rounded-full text-white pt-[1px] px-2 w-min h-6'> Collecting </p>
            </div>
        </div>
        <img className='col-span-3'/>
    </div>
  )
}

export default PostContainer