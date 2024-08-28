import React from 'react'

const Note = ( { note } ) => {
  return (
    <>
        <div>
            <p>{ note.title }</p>
            <p>{ note.context }</p>
        </div>
    </>
  )
}

export default Note