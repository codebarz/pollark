import React from 'react';
import './App.css';

/** Components */
import Navbar from './Components/Navbar';
import Header from './Components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
