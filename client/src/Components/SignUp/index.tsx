import React from 'react';

import PollerForm from '../PollerForm';
import SignOptions from '../SignUp/SignOptions';

import './SignUp.css';

function SignUp() {
  return (
    <section className="signUpContainer">
      <main className="asideArea" />
      <main className="formArea">
        <PollerForm />
        <SignOptions />
      </main>
    </section>
  );
}
export default SignUp;
