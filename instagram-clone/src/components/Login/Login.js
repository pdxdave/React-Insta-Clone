import React, {Component} from 'react';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("user", "david");
        window.location.reload();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <label>Username</label>
                    <input type="text" placeholder="username"/>
                    <label>password</label>
                    <input type="text" placeholder="password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;