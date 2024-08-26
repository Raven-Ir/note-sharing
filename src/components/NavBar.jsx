import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
         <div className='flex flex-wrap justify-between items-center w-full h-auto m-2 p-2'>
            <div className='flex justify-items-start'>
                 <p className='text-4xl font-bold'>Listed</p>
            </div>
          <div className='flex justify-items-end pr-3'>
              <h2 className='p-2 text-xl'>Create New</h2>
              <h2 className='text-xl text-slate-200 bg-sky-600 p-2 rounded-xl'>View Notes</h2>
            </div> 
        </div>
    </>
  )
}

export default NavBar