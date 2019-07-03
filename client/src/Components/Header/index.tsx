import React from 'react';

function Header() {
  return (
    <header>
      <div className="headerLogo">
        <a href="/" className="mockLogo">
          POLLARK
        </a>
        <div className="mockVote" />
      </div>
      <div className="headerBtn">
        <ul>
          <li>
            <a href="/">LOGIN</a>
          </li>
          <li>
            <a href="/">START A POLL</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
