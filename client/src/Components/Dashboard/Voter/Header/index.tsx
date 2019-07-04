import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className="vHeader">
      <div className="vCarousel">
        <div className="vHeaderSearch">
          <h1>Credible Polls happen here</h1>
          <p>The Best Online Polling System you would ever need.</p>
          <p>Built in Decagon</p>
          <div className="vHeadSearchBar">
            <button>
              <i className="mdi mdi-magnify" />
            </button>
            <input type="text" placeholder="Search for an event" />
          </div>
        </div>
        <div className="dim" />
      </div>
    </header>
  );
}

export default Header;
