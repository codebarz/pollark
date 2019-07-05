import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="pollarkNavbar">
      <i className="mdi mdi-menu toggler" />
      <p>MAIN NAVIGATION</p>
      <ul>
        <a href="/">
          <li>
            <i className="mdi mdi-view-dashboard-outline" /> Dashboard
          </li>
        </a>
        <a href="/">
          <li>
            <i className="mdi mdi-creation" />
            Create Event
          </li>
        </a>
        <a href="/">
          <li>
            <i className="mdi mdi-monitor-dashboard" />
            View Events
          </li>
        </a>
      </ul>
      <p>STATS</p>
      <ul>
        <a href="/">
          <li>
            <i className="mdi mdi-calendar-today" /> Today
          </li>
        </a>
        <a href="/">
          <li>
            <i className="mdi mdi-calendar-week" />
            This Week
          </li>
        </a>
        <a href="/">
          <li>
            <i className="mdi mdi-calendar-month" />
            This Month
          </li>
        </a>
        <a href="/">
          <li>
            <i className="mdi mdi-calendar-check" />
            This Year
          </li>
        </a>
      </ul>
      <button type="submit" className="logOutPollark">
        <i className="mdi mdi-power-standby" />
      </button>
    </nav>
  );
}

export default Navbar;
