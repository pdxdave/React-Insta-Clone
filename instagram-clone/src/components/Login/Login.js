import React, {Component} from 'react';
import styled from 'styled-components';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("user", "david");
        window.location.reload();
    }

    render(){
        return (
           
            <Wrapper>
                <Header>Instagram</Header>
                <Form onSubmit={this.handleLogin}>
                    <Label>Username</Label>
                    <Input type="text" placeholder="username"/>
                    <Label>Password</Label>
                    <Input type="text" placeholder="password"/>
                    <Button type="submit">Login</Button>
                </Form>
            </Wrapper>
            
        )
    }
}


const Wrapper = styled.div `
    margin: 200px auto;
    
    width: 480px;
    border: 1px solid gray;
    padding: 40px 20px 20px 20px;
    border-radius: 5px;
    background: #fff;
    
    `
const Label = styled.label `
    display: block;
    font-size: 1.5rem;
    margin-bottom: 8px;
    margin-left: 6px;
`
const Form = styled.form `
    width: 480px;
`
const Input = styled.input `
    width: 470px;
    font-size: 1.5rem;
    margin-bottom: 20px;
    
    border-radius: 4px;
    border: 1px solid lightgray;
    padding: 8px 0;
    text-indent: 6px;
    `
const Button = styled.button `
    display: block;
    font-size: 1.5rem;
    width: 478px
    padding: 6px 0;
    border-radius: 4px;
    border: 1px solid lightgray;
    `
const Header = styled.h1 `
    text-align: center;
    padding-bottom: 30px;
    `


export default Login;