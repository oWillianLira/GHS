import React, {Component} from 'react'

import './posts.css'


class myPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reposURL: 'https://api.github.com/users/oWillianLira/repos',
      reposList: ""
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
  
  render(){
    return(
      <section id="myPosts">
        <br />
        <br />
        <br />
        <h2>Soon...</h2>
        <br />
        <br />
        <br />
      </section>
    )
  }
}

export default myPosts