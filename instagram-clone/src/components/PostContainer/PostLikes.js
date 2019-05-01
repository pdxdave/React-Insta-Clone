import React, { Component } from 'react'

 class PostLikes extends Component {

     state = {
        likes: this.props.postLike
     }
  render() {
      const {postLike} = this.props;
    return (
      <div>
          <div className="card--likes">
                 <p>{postLike} likes</p>
            </div>
      </div>
    )
  }
}

export default PostLikes;