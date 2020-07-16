import React from 'react';
import Style from './styleGlobal.css'

import Header from './components/header/header'
import Body from './components/body/body'
import Sidebar from './components/sidebar/sidebar'

function App() {
  return (
    <div id="app">
      <Header />
      <section id="content">
        <Body />
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
