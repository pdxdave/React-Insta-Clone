import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = ({dummyData}) => {
  return (
    <div>
       {dummyData.map((ddata, index) => {
           console.log(ddata.imageUrl)
           return (
               <div key={index}> 
                   <p>{ddata.timestamp}</p>
                   <img src={ddata.imageUrl} alt="test"/>
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