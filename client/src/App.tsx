import React from 'react';
import './App.css';

/** Components */
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
