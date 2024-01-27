import React from 'react'

const Main = () => {

  const handleClick = () => {

  }


  return (
    //change bg later
    <div className='h-screen w-screen'>
      <button className='absolute top-5 right-5 btn glass px-8'
      onClick={handleClick}> Login. </button>

      <div className='relative top-1/3 text-center'>
        <h1 className='font-bold text-7xl mb-4'>Memoir </h1>
        <p className='my-4'> Slogan </p>
        <button className='my-8 btn glass px-10 py-1'
        onClick={handleClick}> Sign Up. </button>
      </div>
      

    </div>
  )
}

export default Main