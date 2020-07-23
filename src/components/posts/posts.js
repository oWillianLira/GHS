import React from 'react'

import './posts.css'


class myPosts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reposURL: props.posts,
      reposURL2: 'https://api.github.com/users/khigashi/repos',
      reposList: [],
      reposList2: []
    }
  }

  
  componentDidMount() {
    // Promise.all([
    //   fetch(this.state.reposURL),
    //   fetch(this.state.reposURL2)
    // ]).then(([res1, res2]) => {
    //   this.setState({ reposList: res1 })
    // })

    fetch(this.state.reposURL)
    .then(res => res.json())
    .then((list) => {
      this.setState({ reposList: list })
    })
    .catch(console.log)
  }

  render(){
    const posts = this.state.reposList

    return(
      <section id="myPosts">
        {posts.map((post) => (
          <div key={post.html_url} className="reposCard">
            <div className="reposInfo">
              <span>by: <a target="_blank" href={post.owner.html_url}>{post.owner.login}</a></span>
              <span>{post.created_at}</span>
            </div>
            <div className="reposData">
              <h2>{post.name}</h2>
              <h4>{post.description}</h4>
              <span>size: {post.size}</span> <br/>
              <span>language: {post.language}</span>
              <a target="_blank" href={post.html_url}>See repository</a>
            </div>
          </div>
        ))}
      </section>
    )
  }
  
}

export default myPosts