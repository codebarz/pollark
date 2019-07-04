import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';

import './Poller.css';

function Poller() {
  return (
    <React.Fragment>
      <Header />
      <main className="mainPollark">
        <Navbar />
        <Main />
      </main>
    </React.Fragment>
  );
}

export default Poller;
