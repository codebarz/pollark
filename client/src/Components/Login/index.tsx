import React, { useState, useRef } from 'react';
import './Login.css';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config/firebaseConfig';

interface ILoginForm {
  username: string;
  password: string;
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function Login(props: any) {
  const [loginFormState, setLoginFormState] = useState<ILoginForm>({
    username: '',
    password: ''
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLoginForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const { user, signOut, signInWithGoogle } = props;
  console.log(user);

  return (
    <div className="loginForm">
      <p>POLLARK</p>
      <p>LOGIN</p>
      <form>
        <input
          ref={usernameRef}
          type="text"
          defaultValue={loginFormState.username}
          placeholder="Username/Email"
        />
        <input
          ref={passwordRef}
          type="password"
          defaultValue={loginFormState.password}
          placeholder="Password"
        />
        <br />
        <button type="submit">LOGIN</button>
      </form>
      <ul>
        <li>
          {user ? (
            <i onClick={signOut} className="mdi mdi-power-standby" />
          ) : (
            <i onClick={signInWithGoogle} className="mdi mdi-google" />
          )}
        </li>
        <li>
          <i className="mdi mdi-linkedin" />
        </li>
      </ul>
      <p>
        Forgot your password? <a href="/">click here</a>
      </p>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
