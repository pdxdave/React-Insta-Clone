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



    // <div>
      
    //     {comments.map((com) => {
    //         console.log(com)
    //        return (
               
    //            <div key={com.id}>
    //                <p>{com.id}</p>
    //                <p>{com.username}</p>
    //                <p>{com.text}</p>
    //                <br/>
    //            </div>
    //        )
    //     })}
    // </div>
  )
}

CommentSection.propTypes = {
   
}

export default  CommentSection;