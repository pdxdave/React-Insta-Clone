import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {

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
      <SearchBar handleSearch={this.handleSearch}/>
      <div style={{paddingTop: "120px"}}>
         <PostContainer dummyData={this.state.dummyData.filter(post => post.username.includes(this.state.searchText))} />
      </div>
    </div>
  )
 }
}

export default App;
