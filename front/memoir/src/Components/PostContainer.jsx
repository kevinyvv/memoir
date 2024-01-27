import React from 'react'

const PostContainer = () => {

  return (
    <div className='grid grid-cols-5 outline outline-1 w-[36rem] h-64'>
        <img className='col-span-1'/> {/* */}
        <div className='col-span-2'>
            <h1> name </h1>
            <p> Post Description </p>
        </div>
        <img className='col-span-2'/>
    </div>
  )
}

export default PostContainer