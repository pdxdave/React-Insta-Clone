import React, {Component} from 'react';
import './App.css';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
// import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

class App extends Component {

  // state = {
  //   dummyData: [],
  //   searchText: ''
  // }

  // handleSearch = (e) => {
  //   this.setState({
  //     searchText: e.target.value
  //   })
  // }
  // componentDidMount() {
  //   this.setState({
  //     dummyData: dummyData
  //   })
  // }

  constructor() {
    super() 
    this.state = {
      isLoggedIn: true
    }
  }

render() {
  return (
    <div>
      {/* <SearchBar handleSearch={this.handleSearch}/>
      <div style={{paddingTop: "120px"}}>
         <PostContainer dummyData={this.state.dummyData.filter(post => post.username.includes(this.state.searchText))} />
      </div> */}
      <ComponentFromWithAuthenticate />
    </div>
  )
 }
}

export default App;
