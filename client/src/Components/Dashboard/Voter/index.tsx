import React from 'react';

/** Components */
import Navbar from './Navbar';
import MainNav from './MainNav';
import Header from './Header';
import Events from './Events';

/**Styles */
import './Voter.css';

function Voter() {
  return (
    <React.Fragment>
      <Navbar />
      <MainNav />
      <Header />
      <Events />
    </React.Fragment>
  );
}

export default Voter;
