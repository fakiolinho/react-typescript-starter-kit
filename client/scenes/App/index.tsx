import * as React from 'react';

import Header from 'scenes/App/components/Header';
import Main from 'scenes/App/components/Main';
import Footer from 'scenes/App/components/Footer';

import './style.scss';

// tslint:disable-next-line variable-name
const App = () => (
  <div className="app">
    <Header/>
    <Main>
      <p>This is main</p>
    </Main>
    <Footer/>
  </div>
);

export default App;
