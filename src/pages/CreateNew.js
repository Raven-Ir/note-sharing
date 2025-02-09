import React from 'react'
import NavBar from '../components/NavBar'

const CreateNew = () => {
  return (
    <div className='bg-gradient-to-b from-blue-200 to-blue-500 min-h-screen min-w-screen'>
      <NavBar />
      <div className='grid place place-items-center text-2xl font-bold m-4' >Create New Note</div>
      <div className='flex items-center justify-center'>
          <form className='p-3 bg-white/0 ring-1 ring-black/5 shadow-lg rounded-xl backdrop-blur-3xl w-1/2 grid place-items-center'>
              <label>Title</label>
              <input className='w-full rounded-md' name='ntitle' id='ntitle' type='text'/>
              <br/>
              <textarea className='p-3 h-[360px] w-full rounded-xl ' name='nbody' id='ndoby' type='text'/>
          </form>
      </div>
      
    </div>
  )
}

export default CreateNew