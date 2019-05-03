import React from 'react'
import './CommentSection.css';
import styled from 'styled-components';


const Comment = ({user, textPost}) => {
  return (
    <Comments >
       <p><span>{user}</span>  {textPost}</p>
    </Comments>
  )
}

const Comments = styled.div `
    padding: 5px 0px;
`

export default  Comment;