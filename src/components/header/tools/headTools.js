import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

class headTools extends Component {
  render(){
    return(
      <div className="tools">
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span>Home</span>
        </Link>
        <Link to="/profile">
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>Profile</span>
        </Link>
        <Link to="/messages">
          <i className="fa fa-comments-o" aria-hidden="true"></i>
          <span>Messages</span>
        </Link>
      </div>
    )
  }
}

export default headTools;