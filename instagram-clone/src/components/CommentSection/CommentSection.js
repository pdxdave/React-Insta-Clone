import React, {Component} from 'react'
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';


class CommentSection extends Component {
  
    constructor(props) {
       super();
       this.state = {
         comments: '',
         commentsArray: props.comments
       }
    }

  
   
  addNewComment = (e) => {
    // console.log('assaf')
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
    // const {comments} = this.props;

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
        </div>{/* end of dif for comments */}

          <p className="card--timestamp">{moment().startOf('hour').fromNow()}</p>

          <form onSubmit={this.addNewComment}>
            <input className="comment--input" 
                  type="text" 
                  name="changeme"
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


export default  CommentSection;