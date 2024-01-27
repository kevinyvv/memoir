import React from 'react'
import NodeGraph from '../Pages/graph'

const Clouds = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-3xl font-title text-[#9F91CC] mt-8'> CLOUDS </h1>
      <NodeGraph className="scale-200"/>
    </div>
  )
}

export default Clouds