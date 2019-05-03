import React, {Component} from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoggedIn: true
    }
  }

render() {
  return (
    <div>
      <ComponentFromWithAuthenticate />
    </div>
  )
 }
}

export default App;
