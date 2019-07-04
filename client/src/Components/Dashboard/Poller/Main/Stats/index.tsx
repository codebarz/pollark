import React from 'react';

import FollowChart from './Followers/Chart.js';

import './Stats.css';

function Stats() {
  return (
    <section className="stats">
      <div className="statCol-lg">
        <p>Followers growth</p>
        <FollowChart />
      </div>
    </section>
  );
}

export default Stats;
