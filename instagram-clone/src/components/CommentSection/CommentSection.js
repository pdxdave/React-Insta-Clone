import React, {Component} from 'react'
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

/*   
  Notes for me:
     The constructor props is brining in comments from PostContainer.  In state, comments is set to nothing, while props.comments is populating
     commentsArray with the dummyData that was passed down from App.js

    The form takes the input data, passes to handleChange, then handleChange populates comments in the state.

    addNewComment then creates a copy of commentsArray and attaches text and username.  
    test then takes the new comment, while username takes a hard name.  these are added
    to the copy of the array.  setState then populates commentsArray with the update.

*/

class CommentSection extends Component {
  
    constructor(props) {
       super();
       this.state = {
         comments: '',
         commentsArray: props.comments
       }
    }

   
  addNewComment = (e) => {
    e.preventDefault();
    const newArr = [...this.state.commentsArray, {text: this.state.comments, username: 'frank'}]
    this.setState({
        commentsArray: newArr,
        comments: ''
    })
  }


  handleChange = (e) => {
     this.setState({
       comments: e.target.value
     })
  }

  render() {

  return (
      <div>
        <div>
            {this.state.commentsArray.map((userCom, index) => {
                return (
                  <div key={index}>
                    <Comment user={userCom.username} textPost={userCom.text}/>
                  </div>  
                )
            })}
        </div>{/* end of div for comments */}

          <CardTimeStamp>{moment().startOf('hour').fromNow()}</CardTimeStamp>

          <form onSubmit={this.addNewComment}>
            <CommentInput 
                  type="text" 
                  placeholder="Add a comment..."
                  onChange={this.handleChange} value={this.state.comments}
                  />
          </form>
      </div>
  )
}
}

CommentSection.propTypes = {
    user: PropTypes.string,
    textPost: PropTypes.string
}


const CardTimeStamp = styled.p `
    margin-left: 16px;
    margin-top: 12px;
    color: #808080;
`

const CommentInput = styled.input `
    margin-left: 16px;
    width: 90%;
    font-size: 1.4rem;
    border-top: 1px solid #808080;
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-top: 12px;
    padding: 5px;
`

export default  CommentSection;