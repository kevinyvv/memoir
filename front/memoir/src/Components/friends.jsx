import React, {useState} from 'react'
import PostContainer from './PostContainer'
import { NavLink } from 'react-router-dom'

const Friends = () => { 

  return (
    <div className='h-full w-full flex flex-col items-center my-8'>
        <h1 className='animate-in fade-in slide-in-from-bottom duration-1000 text-5xl font-bold font-cursive text-[#9F91CC]'> Memoirs </h1>
        <div className='animate-in fade-in slide-in-from-bottom duration-1500 space-y-8 mt-8'>
            <PostContainer/>
        <div className='grid grid-cols-8 outline outline-2 w-[36rem] h-64 rounded-lg'>
        <NavLink to="/profile"> <img className='col-span-1 rounded-full mx-4 my-2' 
        src="https://imgur.com/AnGiADE.jpg"/> </NavLink>
        <div className='col-span-5 mt-4 mx-4'>
            <h1 className='font-bold my-2 mx-2 '> brought up by @kevin 3 hrs ago.</h1>
            <div className='mt-4 mx-2 border border-1 rounded-lg py-2 px-2 text-md'>
              <p>Remember when hide and seek at dusk was the highlight of our day?   </p>
            </div>

            <div className='flex space-x-2 mt-4 gap-2 flex-wrap'>
              <p className='text-sm'> Tags </p>
              <p className='bg-[#ccc5fc] text-sm rounded-full text-white pt-[1px] px-2 w-[215spx] h-6'> Simpler Times</p>
              <p className='bg-[#ccc5fc] text-sm rounded-full text-white pt-[1px] px-2 w-min h-6'> Nighttime </p>
              <p className='bg-[#ccc5fc] text-sm rounded-full text-white pt-[1px] px-2 w-[120px] h-6'> Playing Outside </p>
            </div>
        </div>
        
        
        <img className='col-span-3'/>
      </div>
      
      </div>
      
    </div>
  )
}

export default Friends