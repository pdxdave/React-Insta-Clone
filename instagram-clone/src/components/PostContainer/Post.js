import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

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
         <CardContainer > 
              <CardLogoContainer><CardLogo src={ddata.thumbnailUrl} alt="company logo"/><span>{ddata.username}</span></CardLogoContainer>
                <CardImage src={ddata.imageUrl} alt=""/>
                   <CardIcons>
                       <div onClick={this.handleChange}><a href="#"><i className="far fa-heart"></i></a></div>
                       <div><a href="#"><i className="far fa-comment"></i></a></div>
                   </CardIcons>
                   <CardLikes >
                        <p>{this.state.likes} likes</p>
                   </CardLikes>
                   <CommentSection comments={ddata.comments} dummyData={dummyData} />
            </CardContainer>
      </div>
    )
  }
}


const CardContainer = styled.div `
      span {
        font-size: .9rem;
        font-weight: bold;
        margin-left: 16px;
      }
`

const CardLogoContainer = styled.div `
    display: flex;
    align-items: center;
    padding: 16px 20px
`

const CardLogo = styled.img `
    height: 30px;
    width: 30px;
    border-radius: 90%;
`

const CardImage = styled.img `
    width: 600px;
`

const CardIcons = styled.div `
    display: flex;
    font-weight: lighter;
    font-size: 1.8rem;

      .far {
        margin: 20px 7px;
      }
      .fa-heart{
        margin-left: 16px;
      }
`

const CardLikes = styled.div `
    margin-top: -10px;
    margin-left: 16px;
    padding-bottom: 12px;
`
export default Post;