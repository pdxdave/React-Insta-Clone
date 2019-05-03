import React, { Component } from 'react'
import '../../App.css';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';

class PostsPage extends Component {

state = {
    dummyData: [],
    searchText: ''
}


handleSearch = (e) => {
    this.setState({
        searchText: e.target.value
    })
}

componentDidMount() {
    this.setState({
        dummyData: dummyData
    })
}

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} />
        <PostContainerWrapper >
            <PostContainer dummyData={this.state.dummyData.filter(post => post.username.includes(this.state.searchText))} />
        </PostContainerWrapper>
      </div>
    )
  }
}

const PostContainerWrapper = styled.div `
  padding-top: 120px;
`

export default PostsPage;