import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection';

 class Post extends Component {

   state = {
       likes: this.props.ddata.likes
   }

  handleChange = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
        likes: prevState.likes + 1
    }))
 }

  render() {
    const {ddata, dummyData} = this.props;

    return (
      <div>
         <div className="card--container" > 
                  <div className="card--logo-container"><img className="card--logo" src={ddata.thumbnailUrl} alt="company logo"/><span>{ddata.username}</span></div>
                   <img className="card--image" src={ddata.imageUrl} alt=""/>
                   <div className="icons">
                       <div onClick={this.handleChange}><a href=""><i className="far fa-heart"></i></a></div>
                       <div><a href="#"><i className="far fa-comment"></i></a></div>
                   </div>
                   <div className="card--likes">
                        <p>{this.state.likes} likes</p>
                   </div>
                   {/* <PostLikes  postLike={ddata.likes} /> */}
                   <CommentSection comments={ddata.comments} dummyData={dummyData} />
            </div>
      </div>
    )
  }
}

export default Post;