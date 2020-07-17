import React, {Component} from 'react';
import Style from './styleGlobal.css'

import Header from './components/header/header'
import Body from './components/body/body'
import Sidebar from './components/sidebar/sidebar'
import profile from './components/body/profile/profile';

class App extends Component {
  state = {
    user: []
  }

  componentDidMount(){
    fetch('https://api.github.com/users/oWillianLira')
    .then(res => res.json())
    .then((data) => {
      this.setState({user: data})
    })
    .catch(console.log)
  }

  render(){
    return (
      <div id="app">
        <Header />
        <section id="content">
          <Body profile={this.state.user} />
          <Sidebar />
        </section>
      </div>
    )
  }
}

export default App;
