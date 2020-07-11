import React, { Component } from 'react';

import './styles.css'

class headTools extends Component {
  render(){
    return(
      <div className="tools">
        <a href="#">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>Profile</span>
        </a>
        <a href="#">
          <i className="fa fa-comments-o" aria-hidden="true"></i>
          <span>Messages</span>
        </a>
      </div>
    )
  }
}

export default headTools;