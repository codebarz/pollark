import React from 'react';
import Navbar from './Navbar';
import MainNav from './MainNav';

import Header from './Header';

import './Voter.css';

function Voter() {
  return (
    <React.Fragment>
      <Navbar />
      <MainNav />
      <Header />
    </React.Fragment>
  );
}

export default Voter;
