import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const PostModal = ({setShowModal}) => {

  const [content, setContent] = useState(null)
  const [error, setError] = useState(null)
  
  let navigate = useNavigate()

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post(`http://localhost:8000/create/post}`, {content})
        console.log(response.data)
        //const success = response.status == 201

        window.location.reload()
        console.log('created a post to our database')
        setShowModal(false)
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <div className='absolute w-[60svw] h-[60svh] mt-4 bg-white px-10 py-4 rounded-md 
    translate -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 space-y-4'>
        <button onClick={handleClick} className="float-right hover:font-bold"> ⓧ </button>
        <h2 className='italic text-2xl font-bold'> Create Post </h2>
        <hr/>
        <p className='font-bold text-lg italic'> What are you reminiscing about? </p>
        <form onSubmit={handleSubmit} className=' flex flex-col items-center
        space-y-2 mt-8'>
            <input className='px-2 rounded-lg text-lg h-[240px] w-[40svw] bg-white outline outline-2'
                type='content'
                id="content"
                name="content"
                placeholder="write here..."
                required={true}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className=' bg-white text-gray-500 font-semibold text-md rounded-xl border border-gray-500 px-4 py-2 mx-4 my-4
            hover:text-gray-700 hover:border-gray-700 max-w-[25svw]
            '> <input type='submit'/> Post </button>
            <p> {error} </p>
        </form>
    </div>
  )
}

export default PostModal