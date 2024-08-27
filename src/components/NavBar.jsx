import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
         <div className='flex flex-wrap justify-between items-center w-full h-auto m-2 p-2'>
            <div className='flex justify-items-start'>

                 <Link to='/' className='text-4xl font-bold'>Listed</Link>
            </div>
          <div className='flex justify-items-end pr-3'>
              <Link to='/create-note' className='p-2 text-xl'>Create New</Link>
              <Link to= '/my-notes' className='text-xl text-slate-200 bg-sky-600 p-2 rounded-xl'>View Notes</Link>
            </div> 
        </div>
    </>
  )
}

export default NavBar