import React from 'react'

import './feed.css'
import Posts from '../../posts/posts.js'

const feed = (props) => {
  return (
    <section id="feed">
      <header>
        <h2>Feed</h2>
      </header>
      <Posts posts={props.user.repos_url} user={props.user} />
    </section>
  )
}

export default feed;