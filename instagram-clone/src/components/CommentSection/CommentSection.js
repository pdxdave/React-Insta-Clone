import React from 'react'
import PropTypes from 'prop-types';

const CommentSection = ({ddata}) => {
  return (
    <div>
        <p>{ddata.username}</p>
    </div>
  )
}

CommentSection.propTypes = {
   
}

export default  CommentSection;