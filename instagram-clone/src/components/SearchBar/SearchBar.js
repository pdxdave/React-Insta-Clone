import React, { Component } from 'react'
import './SearchBar.css'
import styled from 'styled-components';

class SearchBar extends Component {

   
  render() {
    
    return (
      <Search>
         <SearchIcons>
            <SearchIcon href="https://instagram.com"><i className="fab fa-instagram"></i></SearchIcon>
            <SearchBreak >|</SearchBreak>
            <SearchTitle>Instagram</SearchTitle>
         </SearchIcons>
         <div>
            <SearchInput onChange={this.props.handleSearch} type="text" placeholder="Search"/>
         </div>
         <SearchIcons>
            <SearchIcon href="http://google.com"><i className="far fa-dot-circle"></i></SearchIcon>
            <SearchIcon href="http://google.com"><i className="far fa-heart"></i></SearchIcon>
            <SearchIcon href="http://google.com"><i className="far fa-user"></i></SearchIcon>
         </SearchIcons>
      </Search>
    )
  }
}

const Search = styled.div `
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    z-index: 10;
    background: white;
    border-bottom: 1px solid lightgray;
    align-items: center;
`
const SearchIcons = styled.div `
    display: flex;
`
const SearchIcon = styled.a `
   font-size: 2.4rem;
   color: #333;
`
const SearchTitle = styled.h2 `
  font-family: 'Satisfy', cursive;
`
const SearchInput = styled.input `
   width: 300px;
   font-size: 2rem;
   border-radius: 5px;
   border: 1px solid lightgray;
   text-align: center;   
`
const SearchBreak = styled.p `
   font-size: 2rem;
   padding: 0 10px;
`

export default SearchBar;
