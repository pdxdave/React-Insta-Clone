import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css'

const PostContainer = ({dummyData}) => {
  return (
    <div className="card" >
       {dummyData.map((ddata, index) => {
           console.log(ddata.imageUrl)
           return (
               <div className="card--container" key={index}> 
                  <div className="card--logo-container"><img className="card--logo" src={ddata.thumbnailUrl} alt="company logo"/><span>{ddata.username}</span></div>
                   <img className="card--image" src={ddata.imageUrl} alt=""/>
                   <div className="icons">
                       <div><i className="far fa-heart"></i></div>
                       <div><i className="far fa-comment"></i></div>
                   </div>
                   <div className="card--likes">
                       <p>{ddata.likes} likes</p>
                   </div>
                   <CommentSection comments={ddata.comments} />
                   <p className="card--timestamp">{ddata.timestamp}</p>
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