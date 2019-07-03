import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <section className="signUpContainer">
      <main>
        <h1>Kindly register as a voter or polling agent</h1>
        <ul>
          <li>
            <i className="mdi mdi-vote-outline" />
            Voter
          </li>
          <li>Poller</li>
        </ul>
      </main>
    </section>
  );
}
export default SignUp;
