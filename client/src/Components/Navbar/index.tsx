import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="mainNav">
      <div className="mainLogo">
        <a href="/">Pollark</a>
      </div>
      <div className="mainSmi">
        <ul>
          <li>
            <a href="/">
              <i className="mdi mdi-facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="mdi mdi-twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="mdi mdi-instagram" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="mdi mdi-google-plus" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mainLogin">
        <a href="/">Start Poll</a>
      </div>
    </nav>
  );
}

export default Navbar;
