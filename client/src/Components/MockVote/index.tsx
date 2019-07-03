import React, { useState } from 'react';

import './MockVote.css';

function MockVote() {
  const [voteState, setVoteState] = useState(0);

  const incrementVoteStateHandler = () => {
    setVoteState(voteState + 1);
  };

  const decrementVoteStateHandler = () => {
    if (!voteState) {
      return;
    }
    setVoteState(voteState - 1);
  };

  return (
    <div className="mockVote">
      <button onClick={incrementVoteStateHandler}>
        <i className="mdi mdi-menu-up" />
      </button>
      <p>{voteState}</p>
      <button onClick={decrementVoteStateHandler}>
        <i className="mdi mdi-menu-down" />
      </button>
    </div>
  );
}

export default MockVote;
