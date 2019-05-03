import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './PostContainer.css';
import Post from './Post';
import styled from 'styled-components';

class PostContainer extends Component {

render() {
  const {dummyData} = this.props;
  return (
    <Card>
       {dummyData.map((ddata, index) => {
           return (
            <div key={index}>
                 <Post  ddata={ddata} dummyData={dummyData} key={index}/>
            </div>
           )
       })}
    </Card>
  )
 }
}

PostContainer.propTypes = {
    dummyData: PropTypes.array
}

const Card = styled.div `
  border: 1px solid lightgray;
  width: 600px;
  border-radius: 3px;
  margin: 0 auto;
`

export default PostContainer;