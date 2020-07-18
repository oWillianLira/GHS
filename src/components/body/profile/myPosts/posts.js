import React from 'react'

import './posts.css'


class myPosts extends React.Component {
  render(){
    const posts = this.state.reposList
    console.log(posts)
    return(
      <section id="myPosts">
        {posts.map((post) => (
          <div className="card">
            <div className="reposPost">
              <h2>{post.name}</h2>
              <h4>{post.description}</h4>
            </div>
          </div>
        ))}
      </section>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      reposURL: props.posts,
      reposList: []
    }
  }

  componentDidMount() {
    fetch(this.state.reposURL)
    .then(res => res.json())
    .then((list) => {
      this.setState({ reposList: list })
    })
    .catch(console.log)
  }
}

export default myPosts