import React from 'react';
import './header.css'

const Header = (props) => {
  return (
    <div className="profileHeader">
      <img id="userPicture" src={props.profile.avatar_url} alt="User picture" title="User picture" />

      <div className="userInfos">
        <h1>{props.profile.name}</h1>
        <h3>@{props.profile.login}</h3>
        <div className="userInfo">
          <span>{props.profile.location}</span>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
        </div>
        <div className="userInfo">
          {props.profile.company != null ?
            <>
            <span>{props.profile.company}</span>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            </>
            :
            <>
            <span>{props.profile.bio}</span>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            </>
          }
        </div>
        <div className="userInfo">
          <span><strong>{props.profile.followers}</strong> followers ⚭ <strong>{props.profile.following}</strong> following</span>
          <i className="fa fa-users" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Header;