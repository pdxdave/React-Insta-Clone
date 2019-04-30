import React from 'react'
import Comment from './Comment';

// import PropTypes from 'prop-types';

const CommentSection = ({comments}) => {
  return (

        <div>
            {comments.map((userCom, index) => {
                return (
                    <div key={index}>
                      <Comment user={userCom.username} textPost={userCom.text}/>
                    </div>   
                )
            })}
           
        </div>
  )
}

CommentSection.propTypes = {
   
}

export default  CommentSection;