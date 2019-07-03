import React, { useState } from 'react';

import MockVote from '../MockVote';
import Login from '../Login';

import './Header.css';

function Header() {
  const [loginState, setLoginState] = useState(false);

  const loginStateHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoginState(!loginState);
  };

  return (
    <header className="mainHeader">
      {!loginState ? '' : <Login />}
      <MockVote />
      <div className="headerLogo">
        <a href="/" className="mockLogo">
          POLLARK
        </a>
        <p>
          Our platform is devoted to all events seeking a polling system to
          manage votes
        </p>
      </div>
      <div className="headerBtn">
        <ul>
          <li>
            <a onClick={loginStateHandler} className="headerLogin" href="/">
              LOGIN NOW
            </a>
          </li>
          <li>
            <a className="headerSignUp" href="/">
              START A POLL
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
