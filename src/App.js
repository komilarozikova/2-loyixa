import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import Appearance from './components/Appearance/Appearance';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Home />
       <Information />
       <Appearance />
    </div>
  );
}

export default App;
