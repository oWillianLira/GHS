import React from 'react';
import './profile.css'

import Header from './header/header.jsx'
import Repositories from './myPosts/posts.jsx'

const profile = (props) => {
  return (
    <div className="profile">
      <Header profile={props.user} />
      <Repositories posts={props.posts} />
    </div>
  )
}

export default profile;