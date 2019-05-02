import React from 'react'

const withAuthenticate = PostsPage => LoginPage =>

 class extends React.Component {

    constructor() {
        super()

         this.state = {
             isLoggedin: false
         }
    }

    componentDidMount(){
        if(localStorage.getItem("user")){
            this.setState({isLoggedin: true})
        }else{
            this.setState({isLoggedin: false})
        }
    }

  render() {
      if (localStorage.getItem("user")) {
          return <PostsPage />
      }else{
          return <LoginPage />
     }
  }
}



export default withAuthenticate;