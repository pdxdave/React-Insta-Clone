import React from 'react'
import './CommentSection.css';


const Comment = ({user, textPost}) => {
  return (
    <div className="comment">
       <p><span>{user}</span>  {textPost}</p>
    </div>
  )
}



export default  Comment;