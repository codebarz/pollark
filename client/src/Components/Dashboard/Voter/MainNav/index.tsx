import React from 'react';

import './MainNav.css';

function MainNav() {
  return (
    <div className="vMainNav">
      <ul>
        <li>
          <a className="vHome active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/">Entertainment</a>
        </li>
        <li>
          <a href="/">Political</a>
        </li>
        <li>
          <a href="/">Religious</a>
        </li>
        <li>
          <a href="/">Nature</a>
        </li>
        <li>
          <a href="/">Fashion</a>
        </li>
        <li>
          <a href="/">Business & Work</a>
        </li>
        <li>
          <a href="/">Arts & Culture</a>
        </li>
        <li>
          <a href="/">Health</a>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
