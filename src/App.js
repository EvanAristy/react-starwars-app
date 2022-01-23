//imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import SwApi from './services/sw-api';
//css
import './App.css'

const App = (prop) => {
  return (
    <div>
      <h1>STAR WARS</h1>
      <SwApi />
    </div>
  );
}

export default App;
