import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
            <li><Link className="nav-link" to="/employee">Employee</Link></li>
            <li><Link className="nav-link" to="/location">Location</Link></li>
            <li><Link className="nav-link" to="/owner">Owner</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;