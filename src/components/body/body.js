import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './feed/feed'
import Profile from './profile/profile'
import Messages from './messages/messages'

import './body.css'

const Body = props => {
  let test = props.profile
  return(
    <main id="body_content">
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/feed" component={Feed} />
        <Route 
          path="/profile" 
          render={props => (
            <Profile user={test} />
          )}
          // component={Profile} 
        />
        <Route path="/messages" component={Messages} />
      </Switch>
    </main>
  )
}

export default Body;