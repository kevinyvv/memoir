import React from 'react'
import PostContainer from './PostContainer'

const Friends = () => {
  return (
    <div className='h-full w-full flex flex-col items-center my-8'>
        <div className='overflow-y-auto space-y-4'>
            <PostContainer/>
        </div>
    </div>
  )
}

export default Friends