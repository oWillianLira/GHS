import React from 'react';
import './profile.css'

import Header from './header/header'

const profile = (props) => {
  return (
    <div className="profile">
      <Header profile={props.user} />
    </div>
  )
}

export default profile;