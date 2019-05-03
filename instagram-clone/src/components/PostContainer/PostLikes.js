import React, { Component } from 'react'
import styled from 'styled-components';

 class PostLikes extends Component {

    state = {
        likes: this.props.postLike
     }

    render() {
       const {postLike} = this.props;
      return (
        <div>
          <CardLikes>
             <p>{postLike} likes</p>
          </CardLikes>
      </div>
    )
  }
}

const CardLikes = styled.div `
    margin-top: -10px;
    margin-left: 16px;
    padding-bottom: 12px;
`

export default PostLikes;