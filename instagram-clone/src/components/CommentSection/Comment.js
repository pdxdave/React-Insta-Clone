import React from 'react'

const Comment = ({user, textPost}) => {
  return (
    <div>
        <p>{user}</p>
        <p>{textPost}</p>
    </div>
  )
}


export default  Comment;