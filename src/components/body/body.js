import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './feed/feed'
import Profile from './profile/profile'
import Messages from './messages/messages'

import './body.css'

class Body extends Component {
  render() {
    return(
      <main id="body_content">
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
        </Switch>
      </main>
    )
  }
}

export default Body;