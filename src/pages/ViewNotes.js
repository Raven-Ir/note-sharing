import React from 'react'
import NavBar from '../components/NavBar'
import Note from '../components/Note'

const ViewNotes = ( { userNotes } ) => {
  return (
    <>
      <NavBar />
      <div>Your Notes</div>
      {userNotes.map(note => <Note value={note}/>)}
    </>
  )
}

export default ViewNotes