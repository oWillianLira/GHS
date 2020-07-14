import React from 'react';
import Style from './styleGlobal.css'

import Header from './components/header/header'
import Body from './components/body/body'

function App() {
  return (
    <div id="app">
      <Header />
      <section>
        <Body />
      </section>
    </div>
  );
}

export default App;
