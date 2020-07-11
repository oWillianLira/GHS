import React from 'react'
import './style.css'

import Logo from '../../logo.svg'
import Tools from './tools/headTools'

class Header extends React.Component {
  render(){
    return(
      <header>
        <div id="logo">
          <img src={Logo} alt="Our logo" />
          <h2>GitHub Social</h2>
        </div>
        
        <Tools current="" />
      </header>
    )
  }
}

export default Header;