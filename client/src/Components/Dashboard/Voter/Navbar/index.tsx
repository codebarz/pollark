import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <section className="voterNavbar">
      <nav className="searchNav">
        <div className="vNavLogo">
          <p>Pollark</p>
        </div>
        <div className="searchBar">
          <i className="mdi mdi-magnify" />
          <input type="text" placeholder="Search event" />
        </div>
        <div className="vExplore">
          <a href="/#">Explore</a>
          <i className="mdi mdi-menu" />
        </div>
        <div className="contactSupport">
          <button>
            <i className="mdi mdi-headset" /> Contact Support
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
