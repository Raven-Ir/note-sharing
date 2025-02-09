import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-200 to-blue-500 min-h-screen min-w-screen'>
        <NavBar />
        <div className='flex items-center justify-center m-9 animate-pulse'>
          <p className='text-4xl'>For your daily quick notes that you might want to share...</p>
        </div>
        {/* <a className='' href="https://icons8.com/icon/67582/list">List</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
      </div>
    </>
    

  )
}

// https://coolors.co/31afd4-0b4f6c-208aeb-4a2545-e0e0e2

export default Home