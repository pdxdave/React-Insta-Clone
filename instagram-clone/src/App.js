import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {

  state = {
    dummyData: dummyData
  }

render() {
  return (
    <div>
      <SearchBar />
      <div style={{paddingTop: "120px"}}>
         <PostContainer dummyData={this.state.dummyData} />
      </div>
    </div>
  )
 }
}

export default App;
