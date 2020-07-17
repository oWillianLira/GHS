import React from 'react';
import './profile.css'

import Header from './header/header.jsx'
import Repositories from './myPosts/posts'

const profile = (props) => {
  return (
    <div className="profile">
      <Header profile={props.user} />
      <Repositories profile={props.user} />
    </div>
  )
}

export default profile;