import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
         <div className="search--icons">
            <a className="search--icon" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <p style={{fontSize: "2rem", padding:"0 10px"}}>|</p>
            <h2 className="search--title">Instagram</h2>
         </div>
         <div className="search--input">
            <input type="text" placeholder="Search"/>
         </div>
         <div className="search--icons">
            <a className="search--icon" href="http://google.com"><i className="far fa-dot-circle"></i></a>
            <a className="search--icon" href="http://google.com"><i className="far fa-heart"></i></a>
            <a className="search--icon" href="http://google.com"><i className="far fa-user"></i></a>
         </div>
      </div>
    )
  }
}

export default SearchBar;
