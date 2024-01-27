import React from 'react'
import PostContainer from './PostContainer'

const Friends = () => {
  return (
    <div className='h-full w-full flex flex-col items-center my-8'>
        <div className='space-y-8'>
            <PostContainer/>
            <PostContainer/>
        </div>
    </div>
  )
}

export default Friends