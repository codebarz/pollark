import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="loginForm">
      <p>POLLARK</p>
      <p>LOGIN</p>
      <form>
        <input type="text" placeholder="Username/Email" />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">LOGIN</button>
      </form>
      <ul>
        <li>
          <i className="mdi mdi-google" />
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

export default Login;
