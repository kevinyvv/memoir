import React from 'react'
import NodeGraph from '../Pages/graph'

const Clouds = () => {
  return (
    <div className='animate-in fade-in slide-in-from-bottom duration-1000 flex flex-col items-center justify-center text-center'>
      <h1 className='text-5xl font-bold font-cursive text-[#9F91CC] mt-8'> Clouds </h1>
      <NodeGraph/>
    </div>
  )
}

export default Clouds