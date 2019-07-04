import React from 'react';
import './PollerForm.css';

function PollerForm(props: any) {
  return (
    <div className="pollerForm">
      <p>Become a voter on Poller. Sign up now</p>
      <span>or click her to register as a voter</span>
      <form>
        <div className="half">
          <input type="text" placeholder="First name" />

          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Company name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign up</button> or Login
        <p>
          <input type="checkbox" /> I agree to <a href="/#">Pollark terms</a>
        </p>
      </form>
    </div>
  );
}

export default PollerForm;
