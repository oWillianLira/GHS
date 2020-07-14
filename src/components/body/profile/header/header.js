import React from 'react';
import './header.css'

function header() {
  return (
    <div className="profileHeader">
      <img id="userPicture" src='https://images.unsplash.com/photo-1530653870565-465a2b1d3f8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' alt="User picture" title="User picture" />

      <div className="userInfos">
        <h1>Lucian Novosel</h1>
        <h3>@luciannovo</h3>
        <div className="userInfo">
          <span>Winnipeg, Canada</span>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
        <div className="userInfo">
          <span>Working remotely on campus</span>
          <i class="fa fa-briefcase" aria-hidden="true"></i>
        </div>
        <div className="userInfo">
          <span><strong>78</strong> followers ⚭ <strong>25</strong> following</span>
          <i class="fa fa-users" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default header;