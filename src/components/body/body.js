import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './feed/feed'
import Profile from './profile/profile'

import './body.css'

class Body extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    )
  }
}

export default Body;