import React, { useState } from 'react';

import PollerForm from '../PollerForm';
import VoterForm from '../VoterForm';

import SignOptions from '../SignUp/SignOptions';

import './SignUp.css';

function SignUp() {
  const [pollerFormState, setPollerFormState] = useState(false);

  const pollerFormHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setPollerFormState(!pollerFormState);
  };

  

  return (
    <section className="signUpContainer">
      <main className="asideArea" />
      <main className="formArea">
        {!pollerFormState ? (
          <PollerForm clickHandler={pollerFormHandler} />
        ) : (
          <VoterForm clickHandler={pollerFormHandler} />
        )}
        <SignOptions />
        <div>
          <button onClick={pollerFormHandler}>Register as voter</button>
          <button onClick={pollerFormHandler}>Register as a poller</button>
        </div>
      </main>
    </section>
  );
}
export default SignUp;
