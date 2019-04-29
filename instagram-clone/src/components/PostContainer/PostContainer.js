import React from 'react'
import CommentSection from '../CommentSection/CommentSection';

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

export default PostContainer;