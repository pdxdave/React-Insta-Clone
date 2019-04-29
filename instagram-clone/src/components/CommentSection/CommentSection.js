import React from 'react'
import Comment from './Comment';

// import PropTypes from 'prop-types';

const CommentSection = ({comments}) => {
  return (
    <div>
        {comments.map((com) => {
            console.log(com)
           return (
               
               <div key={com.id}>
                   <p>{com.text}</p>
               </div>
           )
        })}
    </div>
  )
}

CommentSection.propTypes = {
   
}

export default  CommentSection;