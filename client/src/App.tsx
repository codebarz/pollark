import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

/** Components */
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/SignUp';
import Voter from './Components/Dashboard/Voter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/voter" exact component={Voter} />
      </Router>
    </div>
  );
};

export default App;
