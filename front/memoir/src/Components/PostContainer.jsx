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
              <p> Lacing up light-up sneakers for a night game of hide and seek. Let's bring back that glow-in-the-dark fun! </p>
            </div>
            
            <div>
            <p className='mt-4 text-sm'> Tags </p>
            </div>
        </div>
        <img className='col-span-3'/>
    </div>
  )
}

export default PostContainer