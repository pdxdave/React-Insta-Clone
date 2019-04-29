import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = ({dummyData}) => {
  return (
    <div>
       {dummyData.map((ddata) => {
           return (
               <div key={ddata.id}> 
                   <CommentSection comments={ddata.comments} />
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