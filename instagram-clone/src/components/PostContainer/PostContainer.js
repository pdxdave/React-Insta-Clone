import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = ({dummyData}) => {
  return (
    <div>
       {dummyData.map(ddata => {
           return (
               <div>
                   <CommentSection key={ddata} ddata={ddata} />
               </div>
           )
       })}
    </div>
  )
}

PostContainer.propTypes = {
    dummyData: PropTypes.array
}

export default PostContainer;