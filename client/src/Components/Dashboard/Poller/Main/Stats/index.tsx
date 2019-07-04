import React from 'react';

import FollowChart from './Followers/Chart.js';

import './Stats.css';

function Stats() {
  return (
    <section className="stats">
      <div className="statCol">
        <div className="statRow" />
        <div className="statRow" />
      </div>
      <div className="statCol">
        <FollowChart />
      </div>
    </section>
  );
}

export default Stats;
