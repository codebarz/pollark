import React, { useState, useRef } from 'react';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config/firebaseConfig';

import Login from '../Login';

import './PollerForm.css';

interface IFormState {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
  checked: boolean;
  isVoter: boolean;
}

function PollerForm(props: any) {
  const [loginState, setLoginState] = useState(false);

  const [formState, setFormState] = useState<IFormState>({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    checked: false,
    isVoter: false
  });

  const firstNameRef: any = useRef<HTMLInputElement>(null);
  const lastNameRef: any = useRef<HTMLInputElement>(null);
  const emailRef: any = useRef<HTMLInputElement>(null);
  const companyNameRef: any = useRef<HTMLInputElement>(null);
  const passwordRef: any = useRef<HTMLInputElement>(null);
  const checkedRef: any = useRef<HTMLInputElement>(null);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firebaseAppAuth = firebaseApp.auth();

  const doCreateUserWithEmailAndPassword = (
    email: string,
    password: string
  ) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const doSignInWithEmailAndPassword = (email: string, password: string) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };


  const loginStateHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoginState(!loginState);
  };

  const pollerFormSubmitHandler = async (
    event: React.FormEvent<HTMLElement>
  ) => {
    event.preventDefault();

    const headers = { 'Content-Type': 'application/json' };

    const val: IFormState = {
      checked: checkedRef.current.value,
      companyName: companyNameRef.current.value,
      email: emailRef.current.value,
      lastName: lastNameRef.current.value,
      password: passwordRef.current.value,
      firstName: firstNameRef.current.value,
      isVoter: false
    };
    //@ts-ignore
    setFormState(val);

    fetch('https://pollark-245713.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(val),
      headers
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  };

  

  function submitFormHandler() {}

  return (
    <div className="pollerForm">
      {loginState ? <Login /> : ''}
      <p>Become a Poller. Sign up now</p>
      <span>
        or{' '}
        <a onClick={props.clickHandler} href="/">
          click here
        </a>{' '}
        to register as a voter
      </span>
      <form onSubmit={pollerFormSubmitHandler}>
        <div className="half">
          <input
            ref={firstNameRef}
            defaultValue={formState.firstName}
            type="text"
            placeholder="First name"
          />

          <input
            ref={lastNameRef}
            defaultValue={formState.lastName}
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          ref={companyNameRef}
          defaultValue={formState.companyName}
          type="text"
          placeholder="Company name"
        />
        <input
          ref={emailRef}
          defaultValue={formState.email}
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          defaultValue={formState.password}
          type="password"
          placeholder="Password"
        />
        <p>
          <input
            ref={checkedRef}
            defaultChecked={formState.checked}
            type="checkbox"
          />{' '}
          I agree to <a href="/#">Pollark terms</a>
        </p>
        <button type="submit">Sign up</button>{' '}
        <a onClick={loginStateHandler} href="/">
          or Login
        </a>
      </form>
    </div>
  );
}

export default PollerForm;
