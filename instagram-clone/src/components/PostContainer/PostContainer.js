import React, {Component} from 'react'
//import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
// import PostLikes from './PostLikes';
import Post from './Post';

// const PostContainer = ({dummyData}) => {
class PostContainer extends Component {



    render() {
        const {dummyData} = this.props;
  return (
    <div className="card">
       {dummyData.map((ddata, index) => {
           return (
            //    <div className="card--container" key={index}> 
            //       <div className="card--logo-container"><img className="card--logo" src={ddata.thumbnailUrl} alt="company logo"/><span>{ddata.username}</span></div>
            //        <img className="card--image" src={ddata.imageUrl} alt=""/>
            //        <div className="icons">
            //            <div onClick={this.handleChange}><a href=""><i className="far fa-heart"></i></a></div>
            //            <div><a href="#"><i className="far fa-comment"></i></a></div>
            //        </div>
            //        <PostLikes  postLike={ddata.likes} />
            //        <CommentSection comments={ddata.comments} dummyData={dummyData} />
            //    </div>
            <div>
                    <Post  ddata={ddata} dummyData={dummyData} key={index}/>
            </div>
           )
       })}
    </div>
  )
 }
}

PostContainer.propTypes = {
    dummyData: PropTypes.array
}

export default PostContainer;